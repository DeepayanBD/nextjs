import fs from 'fs';
import path from 'path';

type MenuSubItem = {
    title: string;
    path: string;
    children?: MenuSubItem[];
};

type MenuItem = {
    subheader: string;
    items: MenuSubItem[];
};

type JsonStructure = MenuItem[];

/**
 * Recursively retrieves all Markdown (.md and .mdx) files in the specified directory and its subdirectories.
 *
 * @param dir - The directory to search for Markdown files.
 * @returns An array of file paths for all found Markdown files.
 */
export function getAllMarkdownFiles(dir: string): string[] {
    return fs.readdirSync(dir, { withFileTypes: true }).flatMap(file => {
        const filePath = path.join(dir, file.name);
        return file.isDirectory()
            ? getAllMarkdownFiles(filePath)
            : file.name.endsWith('.md') || file.name.endsWith('.mdx')
                ? [filePath]
                : [];
    });
}

/**
 * Create a structured JSON representation from an array of markdown files.
 *
 * @param markdownFiles - Array of markdown file paths.
 * @param baseDir - The base directory to derive relative paths.
 * @returns The structured JSON representation.
 */
export function createJsonStructure(markdownFiles: string[], baseDir: string): JsonStructure {
    const structure: JsonStructure = [];
    const gettingStartedItems: MenuSubItem[] = [];
    const sectionMap: Record<string, MenuItem> = {};

    markdownFiles.forEach(file => {
        const { title, filePath, segments } = processFile(file, baseDir);

        if (segments.length === 1) {
            gettingStartedItems.push({ title, path: filePath });
        } else {
            buildHierarchy(segments, title, filePath, sectionMap, structure);
        }
    });

    if (gettingStartedItems.length > 0) {
        structure.unshift({
            subheader: 'Getting Started',
            items: gettingStartedItems,
        });
    }

    return structure;
}

/**
 * Process a file to extract its title, file path, and path segments.
 *
 * @param file - The markdown file path.
 * @param baseDir - The base directory to derive relative paths.
 * @returns An object containing the title, file path, and segments.
 */
function processFile(file: string, baseDir: string) {
    const relativePath = path.relative(baseDir, file);
    const segments = relativePath.split(path.sep);
    const title = formatTitle(path.basename(file));
    const filePath = `/docs/${relativePath.replace(/\\/g, '/').toLowerCase().replace(/\.mdx?$/, '')}`.replace(/\/+$/, '');

    return { title, filePath, segments };
}

/**
 * Format the title from the file name.
 *
 * @param fileName - The file name to format.
 * @returns The formatted title.
 */
function formatTitle(fileName: string): string {
    return fileName.replace('.md', '')
        .replace(/-/g, ' ')
        .replace(/\b\w/g, char => char.toUpperCase());
}

/**
 * Build the hierarchy of sections and items based on the path segments.
 *
 * @param segments - The path segments.
 * @param title - The title of the markdown file.
 * @param filePath - The file path of the markdown file.
 * @param sectionMap - The map of sections to maintain.
 * @param structure - The final JSON structure being built.
 */
function buildHierarchy(
    segments: string[],
    title: string,
    filePath: string,
    sectionMap: Record<string, MenuItem>,
    structure: JsonStructure
) {
    let currentLevel: MenuItem | MenuSubItem;

    segments.forEach((segment, index) => {
        const formattedSegment = formatTitle(segment);

        if (index === 0) {
            currentLevel = manageMenuItem(formattedSegment, sectionMap, structure);
        } else {
            currentLevel = manageSubItem(currentLevel, formattedSegment, title, filePath, index, segments);
        }
    });
}

/**
 * Manage the creation or retrieval of a MenuItem.
 *
 * @param segment - The segment to create or retrieve.
 * @param sectionMap - The map of sections.
 * @param structure - The final JSON structure being built.
 * @returns The current MenuItem.
 */
function manageMenuItem(segment: string, sectionMap: Record<string, MenuItem>, structure: JsonStructure): MenuItem {
    if (!sectionMap[segment]) {
        sectionMap[segment] = { subheader: segment, items: [] };
        structure.push(sectionMap[segment]);
    }
    return sectionMap[segment];
}

/**
 * Manage the creation or retrieval of a MenuSubItem.
 *
 * @param currentLevel - The current level in the hierarchy.
 * @param segment - The segment to create or retrieve.
 * @param title - The title of the markdown file.
 * @param filePath - The file path of the markdown file.
 * @param index - The current index in the segments array.
 * @param segments - The array of path segments.
 * @returns The current MenuItem or MenuSubItem.
 */
function manageSubItem(
    currentLevel: MenuItem | MenuSubItem,
    segment: string,
    title: string,
    filePath: string,
    index: number,
    segments: string[]
): MenuItem | MenuSubItem {
    if ('items' in currentLevel) {
        if (index === segments.length - 1) {
            currentLevel.items.push({ title, path: filePath });
            return currentLevel;
        }
        return findOrCreateSection(currentLevel.items, segment, filePath);
    }

    if (!currentLevel.children) {
        currentLevel.children = [];
        currentLevel.path = filePath.substring(0, filePath.lastIndexOf('/'));
    }

    if (index === segments.length - 1) {
        currentLevel.children.push({ title, path: filePath });
        return currentLevel;
    }

    return findOrCreateSection(currentLevel.children, segment, currentLevel.path);
}

/**
 * Find or create a section in the items array.
 *
 * @param items - The array of MenuSubItems.
 * @param segment - The segment to find or create.
 * @param parentPath - The path of the parent MenuSubItem.
 * @returns The existing or new MenuSubItem.
 */
function findOrCreateSection(items: MenuSubItem[], segment: string, basePath: string): MenuSubItem {
    const existingItem = items.find(item => item.title === segment);
    if (existingItem) {
        return existingItem;
    }

    const newPath = path.join(basePath, segment);
    const newItem: MenuSubItem = {
        title: segment,
        path: newPath,
        children: []
    };

    items.push(newItem);
    return newItem;
}

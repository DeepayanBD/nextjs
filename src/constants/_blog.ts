export const POST_PUBLISH_OPTIONS = [
    {
        value: 'published',
        label: 'Published',
    },
    {
        value: 'draft',
        label: 'Draft',
    },
];

export const POST_SORT_OPTIONS = [
    { value: 'created_at', label: 'Latest' },
    { value: '-created_at', label: 'Oldest' },
];


export const POST_FILTER_OPTIONS = [
    { value: '', label: 'All' },
    { value: 'published', label: 'Published' },
    { value: 'draft', label: 'Draft' },
];
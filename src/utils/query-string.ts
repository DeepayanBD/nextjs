interface UrlQueryParams {
    params: string;
    key: string;
    value: string;
}

interface StringifyUrlParams {
    url: string;
    query: Record<string, string>;
    skipNull?: boolean;
}

interface RemoveUrlQueryParams {
    params: string;
    keysToRemove: string[];
}

/**
 * Constructs a full URL by combining a base URL and query parameters.
 * @param params - An object containing the base URL and query parameters.
 * @param options - Options for stringifying the URL.
 * @returns The constructed URL as a string.
 */
export const stringifyUrl = ({ url, query, skipNull }: StringifyUrlParams): string => {
    const parsedParams = new URLSearchParams(query);

    Object.entries(query).forEach(([key, value]) => {
        if (value !== null || !skipNull) {
            parsedParams.set(key, value);
        }
    });

    const queryString = parsedParams.toString();
    return queryString ? `${url}?${queryString}` : url;
};

/**
 * Parses a query parameter string into an object.
 * @param params - The query parameter string to parse.
 * @returns An object representing the parsed query parameters.
 */
export const parseQueryParams = (params: string): Record<string, string> => {
    const parsedParams = new URLSearchParams(params);
    const result: Record<string, string> = {};

    parsedParams.forEach((value, key) => {
        result[key] = value;
    });

    return result;
};

/**
 * Adds or updates a query parameter in the provided parameters.
 * @param params - The current URL parameters.
 * @param key - The query parameter key.
 * @param value - The new query parameter value or null to delete.
 * @returns The updated query string.
 */
export const addKeysToQuery = ({ params, key, value }: UrlQueryParams): string => {
    const currentUrl = parseQueryParams(params);

    currentUrl[key] = value;

    return stringifyUrl({
        url: window.location.pathname,
        query: currentUrl,
        skipNull: true,
    });
};

/**
 * Deletes specified query parameters from the provided parameters.
 * @param params - The current URL parameters.
 * @param keysToRemove - An array of query parameter keys to remove.
 * @returns The updated query string.
 */
export const removeKeysFromQuery = ({ params, keysToRemove }: RemoveUrlQueryParams): string => {
    const currentUrl = parseQueryParams(params);

    keysToRemove.forEach((key) => {
        delete currentUrl[key];
    });

    return stringifyUrl({
        url: window.location.pathname,
        query: currentUrl,
        skipNull: true,
    });
};

/**
 * Updates a query parameter in the provided parameters.
 * @param params - The current URL parameters.
 * @param key - The query parameter key.
 * @param value - The new query parameter value.
 * @returns The updated query string.
 */
export const updateQueryKeys = ({ params, key, value }: UrlQueryParams): string => {
    const parsedParams = new URLSearchParams(params);
    parsedParams.set(key, value);

    return parsedParams.toString();
};

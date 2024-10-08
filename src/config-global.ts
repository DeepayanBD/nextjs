
import packageJson from '../package.json';

// ----------------------------------------------------------------------

export type ConfigValue = {
    isStaticExport: boolean;
    site: {
        name: string;
        // hostApi: string;
        backendUrl: string;
        serverUrl: string;
        assetURL: string;
        basePath: string;
        version: string;
    };
    auth: {
        skip: boolean;
        redirectPath: string;
        token: string;
    };
    mapbox: {
        apiKey: string;
    };
    googleMapApiKey: string;
};

// ----------------------------------------------------------------------

export const CONFIG: ConfigValue = {
    site: {
        name: 'Durrbar',
        serverUrl: process.env.NEXT_PUBLIC_SERVER_URL ?? '',
        assetURL: process.env.NEXT_PUBLIC_ASSET_URL ?? '',
        basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? '',
        // hostApi: process.env.NEXT_PUBLIC_HOST_API ?? '',
        backendUrl: process.env.NEXT_PUBLIC_BACKEND_URL ?? '',
        version: packageJson.version,
    },
    isStaticExport: false,
    /**
     * Auth
     * @method jwt | amplify | firebase | supabase | auth0
     */
    auth: {
        skip: false,
        redirectPath: 'paths.dashboard.root',
        token: process.env.NEXT_AUTH_TOKEN ?? '',
    },
    /**
     * Mapbox
     */
    mapbox: {
        apiKey: process.env.NEXT_PUBLIC_MAPBOX_API_KEY ?? '',
    },
    /**
     * Google Map
     */
    googleMapApiKey: process.env.NEXT_PUBLIC_MAPBOX_API_KEY ?? '',
};

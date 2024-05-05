import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Deepayan Foundation',
        short_name: 'Deepayan',
        description: 'Deepayan Foundation is a Nonprofit NGO',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
            {
                src: '/assets/logo/android-chrome-512x512.png',
                sizes: 'any',
                type: 'image/png',
            },
            {
                src: '/assets/logo/android-chrome-512x512.png',
                sizes: '512x512',
                type: 'image/png',
                "purpose": "maskable"
            },
            {
                "src": "/assets/logo/android-chrome-192x192.png",
                "sizes": "192x192",
                "type": "image/png"
            },
            {
                "src": "/assets/logo/android-chrome-512x512.png",
                "sizes": "512x512",
                "type": "image/png"
            }
        ],
    }
}
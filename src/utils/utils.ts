/**
 * Check if an standalone application is used
 */
export function isStandalone(): boolean {
    // @ts-ignore
    const isInStandalone = window.navigator.standalone;

    return !!isInStandalone;
}

/**
 * Creates the dynamic manifest, setting the start_url at current window location. (Used for STH)
 *
 * @returns {void}
 */
export function generateDynamicManifest(): void {
    const dynamicManifest = {
        name: 'ONE React App',
        short_name: 'one.app',
        scope: window.location.origin,
        start_url:
            window.location.origin +
            window.location.pathname +
            window.location.search +
            window.location.hash,
        display: 'standalone',
        theme_color: '#000000',
        background_color: '#ffffff',
        icons: [
            {
                src: 'favicon.ico',
                sizes: '64x64 32x32 24x24 16x16',
                type: 'image/x-icon'
            },
            {
                src: 'one.svg',
                type: 'image/png',
                sizes: '192x192'
            },
            {
                src: 'one.svg',
                type: 'image/png',
                sizes: '512x512'
            }
        ]
    };
    const stringManifest = JSON.stringify(dynamicManifest);
    const blob = new Blob([stringManifest], {type: 'application/json'});
    const manifestURL = URL.createObjectURL(blob);
    const htmlTag = document.querySelector('#dynamic-manifest');

    if (htmlTag) {
        htmlTag.setAttribute('href', manifestURL);
    }
}

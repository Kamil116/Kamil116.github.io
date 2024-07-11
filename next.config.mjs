/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // Error: Image Optimization using the default loader is not compatible with `{ output: 'export' }`.
        unoptimized: true,
    },
}


export default nextConfig

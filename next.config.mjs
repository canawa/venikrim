/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        qualities: [25, 50, 75],
        remotePatterns: [
            { hostname: "venikrim.ru" },
            { hostname: "www.venikrim.ru" },
            { hostname: "api.venikrim.ru" },
            { hostname: "localhost" }
        ]
    }
}

export default nextConfig
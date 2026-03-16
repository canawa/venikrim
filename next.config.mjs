/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            { hostname: "venikrim.ru" },
            { hostname: "www.venikrim.ru" },
            { hostname: "api.venikrim.ru" },
            { hostname: "localhost" }
        ]
    }
}

export default nextConfig
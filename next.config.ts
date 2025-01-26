import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'media0.giphy.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'media1.giphy.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'media2.giphy.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'media3.giphy.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'media4.giphy.com',
                pathname: '/**',
            },
        ],
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.(mp3|wav|ogg)$/,
            type: 'asset/resource',
        });

        return config;
    },
};

export default nextConfig;

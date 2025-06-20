import nextra from "nextra";

const withNextra = nextra({
    search: true,
    defaultShowCopyCode: true,
});

const nextConfig = {
    // Other Next.js config options
    basePath: '/prosa-mit-frontend-api',
    output: 'export',
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
};

export default withNextra(nextConfig);

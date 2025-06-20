import nextra from "nextra";

const withNextra = nextra({
    search: true,
    defaultShowCopyCode: true,
});

const isProduction = process.env.NODE_ENV === 'production';
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

const nextConfig = {
    // Other Next.js config options
    basePath: isGitHubPages ? '/prosa-mit-frontend-api' : '',
    assetPrefix: isGitHubPages ? '/prosa-mit-frontend-api' : '',
    output: 'export',
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
};

export default withNextra(nextConfig);

import nextra from "nextra";

const withNextra = nextra({
    search: true,
    defaultShowCopyCode: true,
});

export default withNextra({
    // ... Other Next.js config options
    basePath: '/prosa-mit-frontend-api',
    output: 'export',
    images: {
        unoptimized: true,
    },
});

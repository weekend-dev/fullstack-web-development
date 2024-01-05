/** @type {import('next').NextConfig} */
module.exports = {
    async rewrites() {
        console.log("Rewrites called");
        return [
            {
                source: '/api/:path*',
                destination: 'http://host.docker.internal:8000/api/:path*/',
            },
        ]
    },
};
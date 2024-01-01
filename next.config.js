/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:['utfs.iso'],
        remotePatterns:[
            {
                protocol:'https',
                hostname:'utfs.io',
                port:''
            }
        ]
    }
}

module.exports = nextConfig

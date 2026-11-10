/** @type {import('next').NextConfig} */
// On évite TypeScript ici car le serveur Hostinger ne dispose pas de GLIBC_2.29 ;
// le chargement de la configuration TypeScript échoue avec le compilateur SWC WebAssembly.
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async rewrites() {
    return [
      {
        source: "/",
        has: [{ type: "host", value: "web.mikhmoai.com" }],
        destination: "/mikhmonv8",
      },
    ];
  },
};

export default nextConfig;

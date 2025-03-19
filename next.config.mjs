/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Active l'export statique
  basePath: process.env.NODE_ENV === "production" ? "/villakribean" : "", // Ajoutez le nom de votre dépôt GitHub
  images: {
    unoptimized: true, // Nécessaire pour GitHub Pages
  },
};

export default nextConfig;

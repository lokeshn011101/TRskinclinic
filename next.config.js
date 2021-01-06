const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

module.exports = withPWA({
  pwa: {
    dest: "public",
    runtimeCaching,
  },
  images: {
    domains: [
      "www.flaticon.com",
      "www.tr-skin-clinic-git-performance-fix.udaya2899.vercel.app",
    ],
  },
});

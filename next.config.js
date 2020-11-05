const withImages = require("next-images");
module.exports = withImages();

module.exports = withImages({
  // redirect default '/' route to '/login'
  async redirects() {
    return [
      {
        source: "/",
        destination: "/login",
        permanent: true,
      },
    ];
  },
});

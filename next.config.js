module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [{ source: "/", destination: "/anasayfa",permanent:false }];
  },
};

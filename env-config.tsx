export const prod = process.env.NODE_ENV === "production";
module.exports = {
  "process.env.BACKEND_URL": prod ? "/Next-gh-page-example" : "",
};

const debug = process.env.NODE_ENV !== "production";
module.exports = {
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/ap-grid-layout": { page: "/ap-grid-layout" },
    };
  },
  assetPrefix: !debug
    ? "https://mantinedev.github.io/mantine-next-http-status-code"
    : "",
};

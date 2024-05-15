const path = require("path");
const pkg = require("../package.json");

const file = (type) => `${pkg.name}.${type}.js`;

module.exports = {
  output: {
    filename: file("umd"),
    libraryTarget: "umd",
  },
  devtool: "source-map",
};

"use strict";

const config = require("@js-cli/config");

module.exports = cli;

console.log(config());
console.log("cli");

function cli() {
  return "Hello from cli";
}

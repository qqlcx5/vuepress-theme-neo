#!/usr/bin/env node

const program = require("commander");

program
  .version(require("../package").version)
  .usage("<command> [options]")
  .command("init", "generate tree markdown from a specified directory");

program.parse(process.argv);

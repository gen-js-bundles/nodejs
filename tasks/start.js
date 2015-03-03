var
  inquirer = require("inquirer"),
  fs = require('fs'),
  path = require('path'),
  exec = require('child_process').exec;

module.exports = {
  do: function(data, callback) {
    // Install
    console.log('npm install');

    var outPath = path.join(process.cwd(),data.Genjsfile.config.outDir);
    var command = 'npm install';
    console.log('=>',command,' in ',outPath);
    var child = exec(command, {cwd: outPath});
    child.stdout.pipe(process.stdout);
    child.stderr.pipe(process.stderr);
  }
};

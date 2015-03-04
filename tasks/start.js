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
    data.cli.exec(command, {cwd: outPath})
      .then(function() {
        if(callback) {
          callback();
        }
      });
  }
};

var
  inquirer = require("inquirer"),
  fs = require('fs'),
  path = require('path'),
  exec = require('child_process').exec;

module.exports = {
  do: function(data, callback) {
    
    var outPath = path.join(process.cwd(),data.Genjsfile.config.outDir);
    
    data.cli.exec('npm install', {cwd: outPath})
      .then(function() {
        return data.cli.exec('npm test', {cwd: outPath})
      })
       .then(function() {
        return data.cli.exec('npm start', {cwd: outPath})
      })
      .then(function() {
        if(callback) {
          callback();
        }
      });
  }
};

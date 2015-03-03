var
  inquirer = require("inquirer"),
  fs = require('fs'),
  path = require('path'),
  gfile = require('gfilesync'),
  yaml = require('js-yaml');

module.exports = {
  do: function(data, callback) {

    var dependenciesChoices = [
      {
        name: "Test - Jasmine - jasmine-node - http://junit.org/",
        value: {
          name: "jasmine-node",
          version: "*",
          scope: "test"
        },
        checked: true
      },{
        name: "Data - MongoDB - mongodb - https://github.com/mongodb/node-mongodb-native",
        value: {
          name: "mongodb",
          version: "*"
        }
      }
    ];

    var questions = [
      {
        type: 'checkbox',
        name: 'dependenciesSelected',
        message: 'Which dependencies ?',
        choices: dependenciesChoices
      }
    ];
    inquirer.prompt(questions, function( answers ) {

      var data = gfile.loadYaml(path.join(process.cwd(),'Genjsfile.yml'));

      if(data.global == null) {
        data.global = {};
      }
      if(data.global.project == null) {
        data.global.project = {};
      }
      if(data.global.project.name == null) {
        data.global.project.name = 'myapp';
      }
      if(data.global.project.version == null) {
        data.global.project.version = '0.1';
      }
      if(data.global.project.description == null) {
        data.global.project.description = '';
      }

      if(data.global.directories == null) {
        data.global.directories = {};
      }
      data.global.directories.src = 'lib';
      data.global.directories.test = 'spec';

      gfile.writeYaml(path.join(process.cwd(),'Genjsfile.yml'), data);

      var data = {
        dependencies: answers.dependenciesSelected
      };

      gfile.writeYaml(path.join(process.cwd(),'model','config.@build.yml'), data);

      if(callback) {
        callback();
      }
    });
  }
};

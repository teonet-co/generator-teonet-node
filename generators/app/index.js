/* 
 * The MIT License
 *
 * Copyright 2016-2018 Kirill Scherba <kirill@scherba.ru>.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

'use strict';

var generators = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');

module.exports = generators.Base.extend({

  prompting: function () {
  
    // Have Yeoman greet the user.
    this.log(yosay(
        'This is the awesome and amazing ' + chalk.red('TEONET-NODE') + ' generator!'
    ));

    // Get array of inputs from the user
    var prompts = [
    {
        type: 'input',
        name: 'name',
        message: 'What would you love to name this project?',
        default: 'teonode' //this.appname
    },
    {
        type: 'input',
        name: 'peer',
        message: 'This application Teonet peer name',
        default: 'teo-node' 
    },
    {
        type: 'input',
        name: 'version',
        message: 'This project version',
        default: "0.0.1",
        store: true
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe the project',
        default: "Teonet node application"
    },
    {
        type: 'input',
        name: 'repository',
        message: 'What is the project\'s repository?',
        default: "No repository yet"
    },
    {
        type: 'input',
        name: 'author',
        message: 'Author name',
        default: "Application Author",
        store: true
    },
    {
        type: 'input',
        name: 'email',
        message: 'Author email',
        default: "email@example.com",
        store: true
    },
    {
        type: 'input',
        name: 'license',
        message: 'How would you love to license the project?',
        default: "MIT",
        store: true
    }];

    return this.prompt(prompts).then(function (props) {
        
        function capitalize(string) {
          return string.charAt(0).toUpperCase() + string.slice(1);
        };

        this.props = props;
        this.props.name_capitalize = capitalize(this.props.name);

        // To access props later use this.props.name;

    }.bind(this));
    
  },
  
  writing: {  
  
    // Copy the confuguration files
    config: function () {

      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'), {
            name: this.props.name,
            version: this.props.version,
            description: this.props.description,
            repository: this.props.repository,
            author: this.props.author,
            email: this.props.email,
            license: this.props.license
        }
      ); 
      this.fs.copyTpl(
        this.templatePath('_bower.json'),
        this.destinationPath('bower.json'), {
            name: this.props.name,
            version: this.props.version,
            description: this.props.description,
            author: this.props.author,
            email: this.props.email,
            license: this.props.license
        }
      ); 
      this.fs.copyTpl(
          this.templatePath('_LICENSE'),
          this.destinationPath('LICENSE'), {
            author: this.props.author,
            email: this.props.email
          }
      );
      this.fs.copyTpl(
          this.templatePath('_README.md'),
          this.destinationPath('README.md'), {
              name: this.props.name,
              author: this.props.author,
              license: this.props.license,
              name_capitalize: this.props.name_capitalize,
              description: this.props.description
          }
      );
    },

    // Copy the application files
    app: function () {
      this.fs.copyTpl(
          this.templatePath('_app/_index.js'),
          this.destinationPath('app/index.js'), {
              name: this.props.name,
              version: this.props.version,
              author: this.props.author,
              email: this.props.email,
              name_capitalize: this.props.name_capitalize
          }
      );
    },

    // Copy the application files
    app: function () {
      this.fs.copyTpl(
          this.templatePath('_docker/_Dockerfile.js'),
          this.destinationPath('docker/Dockerfile'), {
              name: this.props.name,
              version: this.props.version,
              author: this.props.author,
              email: this.props.email,
              name_capitalize: this.props.name_capitalize
          }
      );
    }
  },

  // Install dependencies
  install: function () {
  
    //this.installDependencies();
    this.npmInstall();

    console.log("Use " + chalk.yellow("node app teo-node") + " to run this application\n\n");
  }

});

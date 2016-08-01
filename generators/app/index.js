/* 
 * The MIT License
 *
 * Copyright 2016 Kirill Scherba <kirill@scherba.ru>.
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

module.exports = generators.Base.extend({

  method1: function () {
    console.log('Method 1 just ran');
  },
  method2: function () {
    console.log('Method 2 just ran');
  },

  // Copy the confuguration files
  config: function () {
  	console.log('Copy the confuguration files');     
    this.fs.copyTpl(
		this.templatePath('package.json'),
		this.destinationPath('package.json'), {
//		    name: this.props.name,
//		    description: this.props.description,
//		    repository: this.props.repository,
//			    license: this.props.license,
		}
    ); 
    this.fs.copyTpl(
		this.templatePath('bower.json'),
		this.destinationPath('bower.json')
    ); 
    this.fs.copy(
        this.templatePath('LICENSE'),
        this.destinationPath('LICENSE')
    );
    this.fs.copy(
        this.templatePath('README.md'),
        this.destinationPath('README.md')
    );
  },

  // Copy the application files
  app: function () {
    console.log('Copy the application files');
    this.fs.copy(
        this.templatePath('app/index.js'),
        this.destinationPath('app/index.js')
    );
  },

  // Install dependencies
  install: function () {
	console.log('Install dependencies');
    this.installDependencies();
  }

});

# Teonet node server Yeoman generator [![NPM version][npm-image]][npm-url]

Yeoman generator to create new Teonet server Node application. The Teonet Server 
application can execute under Linux or Mac OS only. This readme file shows 
commands for the Debian, Ubuntu or Linux Mint.


## Dependences

### Install NodeJS and Build Essential

Set packages which are considered essential for building Debian packages:

    sudo apt-get install -y build-essential

The is node based project so you should have node installed. Upgrade node to latest version:

    sudo apt-get install -y npm curl

    sudo npm cache clean -f
    sudo npm install -g n
    sudo n stable

To install global npm components without sudo change node modules folders ownership:

    sudo chown -R $USER /usr/local/lib/node_modules


### Install the Yeoman and bower:

    npm install -g yo bower


### Install teonet library

https://www.npmjs.com/package/generator-teonet#install-teonet-library



## Install this generator

    npm install -g generator-teonet-node

## Generate new teonet-node application

    yo teonet-node
  
## Run generated application

    node . teo-node-app

<hr>

## Developer Notes

### Some Teonet documentation
  
Teonet developer documentation:  
http://repo.ksproject.org/docs/teonet/
  
Teonet events:  
http://repo.ksproject.org/docs/teonet/ev__mgr_8h.html#ad7b9bff24cb809ad64c305b3ec3a21fe


#### Publish project to NPM

If you haven't already set your NPM author info, now you should:

    npm set init.author.name "Your Name"
    npm set init.author.email "you@example.com"
    npm set init.author.url "http://yourblog.com"
    
    npm adduser

Publish project to NPM:

    npm publish ./


## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

Apache-2.0 © [Kirill Scherba](https://gitlab.ksproject.org)


[npm-image]: https://badge.fury.io/js/generator-teonet-node.svg
[npm-url]: https://npmjs.org/package/generator-teonet-node
[travis-image]: https://travis-ci.org//generator-teonet-node.svg?branch=master
[travis-url]: https://travis-ci.org//generator-teonet-node
[daviddm-image]: https://david-dm.org//generator-teonet-node.svg?theme=shields.io
[daviddm-url]: https://david-dm.org//generator-teonet-node
[coveralls-image]: https://coveralls.io/repos//generator-teonet-node/badge.svg
[coveralls-url]: https://coveralls.io/r//generator-teonet-node

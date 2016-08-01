# Teonet node server Yeoman generator

Yeoman generator to create new Teonet server Node application. The Teonet Server 
application can execute under Linux or Mac OS only. This readme file shows 
commands for the Debian, Ubuntu or Linux Mint.


## Dependences

Set packages which are considered essential for building Debian packages:

    sudo apt-get install build-essential

The is node based project so you should have node installed. Upgrade node to latest version:

    sudo apt-get install -y npm

    sudo npm cache clean -f
    sudo npm install -g n
    sudo n stable

To install global npm components without sudo change node modules folders ownership:

    sudo chown -R $USER /usr/local/lib/node_modules

Install the Yeoman and bower:

    npm install -g yo bower

### Install teonet library

### Ubuntu

    http://repo.ksproject.org/ubuntu/

#### Add repository

Add repository key:  

    sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 8CC88F3BE7D6113C
    
Add repository:    

    sudo apt-get install -y software-properties-common
    sudo add-apt-repository "deb http://repo.ksproject.org/ubuntu/ teonet main"
    
or add the following line to your /etc/apt/sources.list:  

    deb http://repo.ksproject.org/ubuntu/ teonet main
    
Update repositories database:    
    
    sudo apt-get update

#### Install library

    sudo apt-get install -y libteonet-dev

#### Check installation

    teovpn -?

## Install this generator

    npm install -g generator-teonet-node

## Generate new teonet-node application

    yo teonet-node
  

<hr>

## *Developer Notes

### Some teonet documentation

#### Install teonet library under Linux

Some additional info to install [Teonet library from repository](https://gitlab.ksproject.org/teonet/teonet/blob/master/README.md#install-from-repositories-notes) readme file


#### Teonet developer documentation:  
http://repo.ksproject.org/docs/teonet/


#### Teonet events:  
http://repo.ksproject.org/docs/teonet/ev__mgr_8h.html#ad7b9bff24cb809ad64c305b3ec3a21fe


### Publish project to NPM

If you haven't already set your NPM author info, now you should:

    npm set init.author.name "Your Name"
    npm set init.author.email "you@example.com"
    npm set init.author.url "http://yourblog.com"
    
    npm adduser

Publish project to NPM:

    npm publish ./


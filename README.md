# Genuine init - Genuine Interactive's Front End Starting Point
## What is this?
Genuine init is a department maintained starting point for front end projects. The Goals for this project are as follows:

1. To be quick and easy to setup
2. To not require a lot of modification to get running
3. To maintain consistency with department standards
4. To include code for the lowest common denominator of use cases
5. To be non-opinionated about specific use cases or backend technologies

It's important to note that Genuine init should be a very basic starting point that should be added on to. It will be important to understand the type of project that needs to be built and to plan for adding a more opinionated structure to it with more specific configuration.

## Why do we need it?
A trend that has been happening for a while is to start every project by copying the contents of a previous project and striping out all the contents until there's nothing left but boilerplate code. This causes problems:

1. There is no consistency or agreement on standards from the beginning
2. Bad code and bad practices could be perpetuated from one project to the next.
3. This doesn't allow our starting code to stay current and evolve with the industries ecosystem.
4. This process can take a long time

## Dependencies
* [node](http://nodejs.org/)
* [ruby](https://www.ruby-lang.org/en/) - used for sass, compass, and singularity grid system
* [bundler for ruby](http://bundler.io/) - used for singularity grid system
* [bower](http://bower.io/) - manages front end libraries
* [grunt](http://gruntjs.com/) - node task runner for building project

## Installation

Currently the process for installing this project is manual. The goal is to automate this process for a later release.

1. clone this repository into your development folder
2. copy all files except for the .git directory into a new project folder
3. in the new project folder root run `bower install` from the command line
4. run `npm install` from the command line
5. run `bundle install`
5. run `grunt s` in the command line to start a static development server and open a new tab with the project loaded


##PC Quirks
If you're using sass-globbing on PC - manually save your screen.scss prior to building.

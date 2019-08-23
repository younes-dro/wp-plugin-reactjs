# Starter WordPress Plugin ReactJS
A ready-to-use WordPress Plugin makes it easy to integrate React JS into the development of a WordPress Plugin.
you can create your JSX components and turn them into Javascript which will be enqueue by WordPress.

## Requirements

Install the  module bundler Webpack v4+ , webpack-cli  ***globally***.
```
npm install -g webpack
npm install -g webpack-cli
```

## Installation
1. Clone the repository to the Plugins directory of your WordPress installation: ` / wp-content / plugins / ` .

2.  Install the dependencies : 
```
  $ npm install
```
3. run webpack  : 
```
  $ webpack
```
**and that's all!** :+1:  you will have a new directory at the root of your plugin: `dist` which contains the compiled javascript file.
now you can create your JSX components, and when you're ready, rerun ``` $ webpack```. 

## View

the Plugin create a menu entry in `  Settings->WP  ` Plugin React, visit this page to see the result.

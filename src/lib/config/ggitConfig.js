const express = require('express');
const consolidate = require('consolidate');
const { resolve } = require('path');

const viewsFoldPath = resolve(process.cwd(), './src', 'views');
const staticFoldPath = resolve(process.cwd(), './src', 'public');

class Config{
    setTemplateEngine(app){
        app.set('view engine', 'html');
        app.set('views', viewsFoldPath);
        app.set('html', consolidate.pug);
    }
    setStaticFlodPath(app){
        app.use(express.static(staticFoldPath));
    }
    setHandlePost(app){
        const encodedOptions = {
            limit: Infinity,
            extended: false,
        }
        app.use(express.json());
        app.use(express.urlencoded(encodedOptions));
    }
    setIndexRouter(app, indexRouter){
        app.use(indexRouter);
    }
}
   
module.exports = new Config()
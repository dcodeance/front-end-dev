import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

const port = 3000;
const app = express();
const compiler = webpack(config);

/* eslint-disable no-console */

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/js/test.js', function(req, res) {
    res.sendFile(path.join(__dirname, '../src/js/test.js'));
});

app.get('/images/IMG-20180220-WA0002.jpg', function(req, res) {
    res.sendFile(path.join(__dirname, '../src/images/IMG-20180220-WA0002.jpg'));
});
app.get('/images/IMG_20180113_204135913.jpg', function(req, res) {
    res.sendFile(path.join(__dirname, '../src/images/IMG_20180113_204135913.jpg'));
});

app.listen(port, function(err){
    if(err) {
        console.log(err);
    } else {
        open('http://localhost:' + port);
    }
});
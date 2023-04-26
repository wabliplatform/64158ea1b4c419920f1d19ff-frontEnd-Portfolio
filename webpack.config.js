const path = require('path');

module.exports = {
  entry: {
	'Home' : './javascript/Home.js',
	'Blog' : './javascript/Blog.js',
	'Works' : './javascript/Works.js',
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    
  },
};
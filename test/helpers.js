const chai = require('chai');
const sinon = require('sinon');
global.expect = chai.expect;  // Set up the global `expect` for Mocha
const fs = require('fs');
const jsdom = require('jsdom-global');  // Using jsdom-global for simplicity
const path = require('path');
const babel = require('@babel/core');  // Use @babel/core instead of babel-core

// Read in the HTML file to inject into the DOM
const html = fs.readFileSync(path.resolve(__dirname, '..', 'index.html'), 'utf-8');

// Transform the JavaScript file with Babel
const babelResult = babel.transformFileSync(
  path.resolve(__dirname, '..', 'index.js'), 
  {
    presets: ['@babel/preset-env']  // Use @babel/preset-env for modern JavaScript
  }
);

// Get the transformed JavaScript code
const src = babelResult.code;

// Set up jsdom with the HTML content and transformed JavaScript
jsdom(html);  // Initialize jsdom with the HTML
eval(src);     // Inject the transformed JS into the environment

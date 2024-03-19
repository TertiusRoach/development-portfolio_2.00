I seem to have trouble with Gulp on my new laptop.
Here's notes on how I think it could be fixed.

I think the problem lies with the .src folder not being set to the correct output.
On my laptop it's in...

development-portfolio_2.00/node_modules/.bin/dist/
development-portfolio_2.00/node_modules/.bin/src/

...respectively.
https://github.com/isaacs/node-glob#options

# Notes

    npm gulp -version

This doesn't make a difference...
To view the gulp features inside the terminal install the following...

    npm -g install gulp-cli

Try installing gulp globally?

    npm install gulp
    npm install sass
    npm install jquery
    npm install bootstrap
    npm install typescript

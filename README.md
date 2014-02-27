# Ajax Flags Homework

## Given

In your `db/seeds.rb` file you'll find a dataset of the countries of the world and their abbreviations.

In `assets/images` you'll find `flags32.png` which is a [PNG sprite](http://css-tricks.com/css-sprites/) file of the flags of the world. The `assets/stylesheets/flags32.css.scss` file will allow you to use CSS to display these sprites properly. You will not need to modify this file.

I have given you boilerplate for the majority of the files you will need. You may still need to modify or create additional files, but the majority of what is needed is already here.

## Assignment

You will make a single page using Rails, AJAX, JavaScript and Infinite Scroll to dynamically load 20 new countries at a time to the page when you get to the end of the page.

You should also have buttons to load all of the countries on the page, clear all the countries, and manually load the next 20 countries. Each country should display its name, abbreviation, and flag. If a country has the `north_america` boolean set, it should be visually offset somehow using CSS.

Try to figure out how to do infinite scroll on your own &ndash; do *not* use a plugin. If you get really stuck, I have [some logic here](https://gist.github.com/tibbon/5205bdc863f79bee5822) that will assist.

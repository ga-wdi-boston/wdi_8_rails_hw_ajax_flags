# Ajax Flags Homework

## Given

In your `db/seeds.rb` file you'll find a dataset of the countries of the world and their abbreviations. 

In `assets/images` you'll find `flags32.png` which is a [png sprite](http://css-tricks.com/css-sprites/) file of the flags of the world. The `assets/stylesheets/flags32.css` file will allow you to use CSS to display these sprites properly. You should not need to modify the `flags32.css` file. 

I have given you boilerplate for the majority of the files you will need. You may still need to modify or create additional files, but the majority of what is needed is already here. 

## Assignment

You will make a single page using Rails, AJAX, JavaScript and Infinite Scroll to dynamically load 20 new countries at a time to the page when you get to the end of the page. 

You should also have buttons to load all of the countries on the page, clear all the countries, and manually load the next 20 countries. Each country should display its name, abbreviation and flag. 

You will have to find how to do infinite scroll on your own. Do *not* use a plugin to make infinite scroll happen. If you should still be stuck on this part on Sunday, I have some logic [here on Github](https://gist.github.com/tibbon/5205bdc863f79bee5822) that will assist, but don't use that until Sunday. 

## Challenges

- Using the png sprites
- AJAX
- Infinite Scroll
- [Rails Partials](http://guides.rubyonrails.org/layouts_and_rendering.html)
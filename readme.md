# mg-scroll-animation | Marcin Grądzik Scroll Animation

--

## Table of contents

- [About project](#about-project)
- [The advantages of this library](#the-advantages-of-this-library)
- [Documentation](#documentation)
- [Technologies](#technologies)

## About project

Welcome! Scroll-animation is a mini library consisting of JS(mainly [Intersectionobserver API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)) and CSS that adds animations when the target is visible.

**Attention: I am sorry, I use an interpreter for the English version of the text, so don't be afraid if you don't understand something** 

## The advantages of this library 

1. Ability to modify properties using CSS 
2. No need to use JavaScript 
3. Easy to use

## Documentation

**NOTE: Remember that the target is invisible before the animation, which is, opacity: 0.**

### Launch

Add a class to the target **scroll-animation**

### Set the direction of the animation

**The default direction** is the left animation, or **left**. If you want to leave the default value, you do not need to add anything more.

If you want to change the default direction, you must add the **top** or top animation, **right** or bottom animation** to the bottom of the animation.

### Changing class properties
1. Open the scroll.css file. 
2. Depending on the direction of the animation, the class you will change is:
**Top | top-scroll-class** <br> 
**Right | right-scroll-class** <br> 
**Bottom | bottom-scroll-class** <br> 
**Left | left-scroll-class** <br> 

3. Find the appropriate class in css file
4. Edit and enjoy the properties!

### What if my browser does not support the features contained in this repository?
Simply, the function will not be performed. No classes with properties will add, so the included styles in CSS classes (I am talking about top-scroll-class, etc., not all classes in general) don't style the target.

## Technologies
- JS
- CSS

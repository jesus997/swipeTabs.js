# swipeTabs.js
Simple plugin to create responsive tabs using slick.js

## Demo
https://jesus997.github.io/swipeTabs.js/

# How to use
* Download or copy the contents of [swipeTabs.js](https://raw.githubusercontent.com/jesus997/swipeTabs.js/master/swipeTabs.js) or [swipeTabs.min.js](https://raw.githubusercontent.com/jesus997/swipeTabs.js/master/swipeTabs.min.js) in some js file of your project.
* Add the swipeTabs.js link in your project: `<script src="path/to/swipeTabs.js"></script>`
* Ready!

# HTML structure
```html
<div class="my-tabs-header">
  <div class="swipe-tabs" data-for=".swipe-tabs-container">
    <div class="swipe-tab">One</div>
    <div class="swipe-tab">Two</div>
    <div class="swipe-tab">Three</div>
    <div class="swipe-tab">Four</div>
    <div class="swipe-tab">Five</div>
  </div>
</div>
<div class="my-tabs-content">
  <div class="swipe-tabs-container">
    <div class="swipe-tab-content">Tab 1</div>
    <div class="swipe-tab-content">Tab 2</div>
    <div class="swipe-tab-content">Tab 3</div>
    <div class="swipe-tab-content">Tab 4</div>
    <div class="swipe-tab-content">Tab 5</div>
  </div>
</div>
  
```
> The `swipe-tab` class is required

# Javascript code
```javascript
$('.swipe-tabs').swipeTabs();
```

or

```javascript
$('.swipe-tabs').swipeTabs({
  slick: {
    tabs: {
      centerMode: true
    },
    content: {
      draggable: true,
      fade: true,
      cssEase: 'linear'
    }
  }
});
```

# Options
Option | Default value | Description
-------|---------------|------------
swipeTabsContainer | ``$(this)`` | Container of the navigation elements of the tabs. By default, the element to which the ``$.swipeTabs()`` function was applied is taken.
swipeTabs | ``$($(this).find('.swipe-tab'))`` | Selector that will be taken as element of the navigation of the tab. By default is ``.swipe-tab``
swipeTabsContentContainer | ``$($(this).data('for'))`` | Container of the contents of the tab. By default it is the ``data-for`` content.
activeTabClassName | ``active-tab`` | Class of the active element.
slick | ``{tabs:{},content:{}}`` | Configuration object for the two slick-carousel. [See possible configurations](https://github.com/kenwheeler/slick#settings).

# TODO
- [x] Create the first version of the plugin
- [ ] Receive positive reviews and suggestions
- [ ] Improve the plugin as much as possible
- [ ] Make this fly.

# Credits and mentions
This plugin was completely based on the [codepen created by Galeel Bhasha](https://codepen.io/gbhasha/pen/gaggRR).

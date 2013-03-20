

# SimpleUI
By Peter Koraca

## Description
A lightweight html, css and javascript framework that makes creating mobile web-apps easier. SimpleUI provides you with two things: standard slide and flip transitions between different screens and a css frame for a screen and its header bar, content box and footer bar.

The core idea of Simple UI is to provide you with a completely blank slate on top of which you can build your application. Rather than enhancing your markup with extra html bloat it leaves it untouched. Rather than having a complex stylesheet that you have to override to customise the look of your app it provides you with only the bare essential - header, content, footer. SimpleUI is easy to use and has a very lightweight footprint.

Usage, Demo



## Usage
To use the SimpleUI you will need to include some files in the head of your document and conform to a simple page structure and linking syntax.

### Including
Include the following files in the head of your document: 
- simpleUI.css
- jquery.js (the latest version of jQuery can be downloaded from here)
- simpleUI.js. 

Since SimpleUI uses jquery, the jquery.js needs to be included in the document before simpleUI.js! Any stylesheets that you create need to be included after the simpleUI.css.
Example:
---

### Page Structure
Each page/screen that you create needs to have a div with the class of "screen". Additionally you can add extra divs inside this div. Which divs you create is completely up to you, but it is recommended to separate your page into three divs with classes "header", "content" and "footer" and then add more divs inside them. The header and footer use fixed positioning so that the content div can scroll under them.
Example:
---

### Transitions
To transition between pages simply create a link on the page. Add a "transition" attribute to it like such: transition="slide". The supported transitions are:
- "slide"
- "slide reverse"
- "flip"
- "flip reverse"
- "fade"
- "fade reverse"
Example:
---

### No Ajax
The default behaviour of the SimpleUI.js library is to use ajax to load the new pages. If you would like to link without using ajax add a "noajax" attribute to your link (this is useful for linking to files or external sites). Keep in mind that the transitions only work with ajax.
Example:
---

### ScreenLoaded Event
asfasdf

Have Fun
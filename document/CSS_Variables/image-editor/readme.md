[Preview on JS Fiddle](https://jsfiddle.net/helaa/q0ds963t/1/show)

# Goal
On the page we can see an image and 3 controls: one to change the blur of the image,
one to change the color of the background of the frame the image is in, and one
to change how big the frame around the image is.
And apparently, we should do this with CSS variables.

1. The controls - HTML and basic style<br>
The controls we are using are HTML5 `input` tags. Each `input` has a `<label for="">` and the for corresponds to the `id` attribute of the `input` tag. The controls for blur and frame are of type `range` and the one for color is of type `color`. This brings out a pop-up window with selecting the color. <br>

The plain HTML does not have the controls and the labels aligned well.
To fix this, I tried to make the `div` with class `.controls` into a row flex-container, items aligned (y axis) on the center. Then I added spacing between the flex items with
`margin: 0 -5px;` on the flex-container and `margin: 0 5px;` on the flex-item.
Initially I tried to select the labels and inputs as `.controls label input`, but that had no effect, so I slapped a class `.flex-item` on each one.

2. CSS variables.<br>
Remember that in JS, variables have scope. Whatever is declared at the beginning of the script, outside of function has global scope, inside a function or a block (for loop etc) has local scope. How do we scope CSS variables?<br>
```
:root {
  /* Two hyphens (--) followed by the variable name */
  --main-color: red;
}
```

The `:root` (pseudo class) selector selects the highest-level element in the DOM (this would be the html element). So CSS variables declared here have the global scope.

```
.my-class {
  --main-color: red;
  /* local scope inside the element with class .my-class */
}
```

Since we will be doing some action with the image, we need to add the properties we will be changing to it and assign it the css variables.
`frame-color` will be changing background, `frame-size` is padding and `blur(3px)` is a value of the `filter` property. The `filter` property on images can have other values, such as opacity(), sepia(), etc..


3. JavaScript<br>
So, we want something to happen, whenever the user changes something on the input. This means, we need to add event listeners to those.
- select the input elements
- define an event handler function
- `addEventListener` to each input element. the event here is `change`. This event is fired for `<input>`, `<textarea>` and `<select>` elements.

**Event handler**<br>
This function gets called when the input element changes. It is passed to the `addEventListener` method attached to each input element.
 So, the `this` inside the handler will be the active input element - an object representation of it. We are using the `dataset` attribute which
 provides read/write access to the `data-*` attributes we defined on the html elements (except for color, so there it will be undefined; remember that `undefined` is a falsey object in JS). We need this to
 pass the correct suffix to the css style defined by the variable. Next we're using `document.documentElement.style` to access the style of the html element,
 which is the `:root` selector, where we defined the CSS variables. As I understood it, the `setProperty` method is something that basically allows
 you to write into the square brackets of `:root {}` css selector and thus change the style. This is the meat of the whole project right here.

 At this point, the frame color, the blur effect and the frame sizing was working.
The blur effect and the frame size were not "smooth" - they changed only after you
 stopped sliding on the control.

How we can make this appear more "dynamic"? Continuously update the style with `mousemove`.

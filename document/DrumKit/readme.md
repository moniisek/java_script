JavaScript 30

# Drumkit
[Preview on JS Fiddle](https://jsfiddle.net/helaa/go58b10a/show)

**Goal**:
	You can see some squares on the page, labeled with a letter. When you press the key with that letter on your keyboard,
	a sound is played.

1. *Layout*<br>
	 To have the buttons with the key names neatly displayed, I used flexbox. Inside the ``<body>`` tag, there is a ``<div>`` tag with a flex-container class.
	 The flex-container has width and height in %, so for this to work, the ``<body>`` needs to have width set to 100%.

	 Each button then is a div which has an id corresponding to the letter.
	 I'm not sure what use is the ``<kbd>`` tag exactly, but I'm using it to just write the text of the letter. I chose
	 to use the rem units to set the font size. Rem units are relative to the root (html) element. This one doesn't need to
	 have an explicitly defined font size, the browser assigns one by default.

	 Last but not least, we have to add the HTML5 ``<audio>`` element. Its a bit like ``<img>`` in the sense that it
	 also has a src attribute. I'm using some sounds I found online on sampleswap.org. Unlike the ``<img>`` tag, ``<audio>``
	 is NOT self-closing.


2. *Script*<br>
	This was the most challenging part for me since I knew basically nothing about manipulating the DOM
	with JavaScript.

	DOM stands for Document Object Model. When a webpage is loaded, the document global variable is constructed.
	This is an object. We can access HTML elements on the page with methods like
	document.getElementById("someid") or document.querySelector("someCSSselector") etc
	these methods accept strings, even literal strings as I am using in the project.

	Event is something like click of the mouse, web page has loaded, CSS transition finished, or
	a key was hit on the keyboard.
	Browser allows us to "handle" these events - ie execute some JavaScript code (in the HTML page this goes
	in the ``<script>`` tag at the bottom of ``<body>``.
	This can be done via the DOM method addEventListener("event", myScript), which does not overwrite
	any other event handlers on the element.

	For pressing a key on the keyboard, there are 3 events we can react to:
	1. keydown (immediately after the key is pressed)
	2. keypress (continuously while the key is pressed)
	3. keyup (immediately after the key is released)

	For this project, I chose to use the keydown, to play the sound and add the CSS transition, and then
	keyup to remove the CSS transition.

	I wasn't sure where to add the event listener. When there is an event with mouse clicking on some element on the page,
	like a button or a div, we would add the listener to that element.
	But when a key is pressed... where to add it? After some googling, I saw people adding it do either document
	or window. So I chose document.

	The actual handler functions onKeyDown and onKeyRelease are fairly straightforward.
	They both take an argument abbreviated "e". This e is event information object and it's generated automatically
	by the browser everytime the event listener is called. For different events, it is a different object.
	For the keyup/down/press events, it had the properties .key(str) and .keyCode (int) that tell you which key was pressed.

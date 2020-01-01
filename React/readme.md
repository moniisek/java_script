**Getting React to work**

Option 1: sripts in HTML file<br>
```
<div id="root"></div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.4.2/react.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.4.2/react-dom.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.21.1/babel.min.js"></script>
<script type="text/babel">
  function App(props) {
    return(
      <div>Hello World</div>
      )
  }
  ReactDOM.render(<App />, document.getElementById("root"))
</script>
```

Option 2: runtime<br>
Install node that comes with the package manager npm. Without the need to do configuration by hand, we can install create-react-app like so `npm i -g create-react-app` (i for install, g for global). This is a library with everything pre-configured to build a react app.

<br>
Make a directory where you want to keep your react apps, cd into it and run `create-react-app app-name`. This will create a directory app-name, install react and some 3rd party libraries need to create the app. Like a development server, webpack for bundling files, Babel for compiling the React code to vanilla JS.
To start up the development server, run `npm start` in this directory. Any 3rd party libraries you want to install and use in the app, do it in this directory. This is sort of like a python virtual environment. <br>

The `node_modules` directory will be git ignored. So when pulling the code from remote, first do `npm install` what should be installed is written in package.json. <br>

<br>
In the app-name/public/index.html you can see a `div` with a id `root` This is where the react application will live.<br>

<br>

**React notes**

Got to babeljs.io/repl to see what the plain JS code looks like (under the React syntax).

```
const el = <h1>Hello</h1>;
```

notice that this is not html as we are not using " !
So Babel converts JSX code into the vanilla JS code.
To show this on the page, do
ReactDOM.render(el, document.getElementById("root"));

If you want to render more HTML at once, wrap all of it in a `div`.

Usually we would have our own components in the finall `app.js` where the ReactDOM.render is.

```
class App extends React.Component {
  render() {
    return (
      <div>
        <MyAwesomeHeader />
        <MyAwesomeMain />
        <MyAwesomeFooter />
      </div>
      )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))
```

<br>

JSX:
- `className` is used instead of `class`
- properties and methods are camel case `onclick` is `onClick`
- self-closing tags must end in a slash `<img/>`
- embed JS into JSX like so `<h1>Hello {name}</h1>`


<br>

<br>
Styling - add `className` only to JSX elements not your own components.

If a passed property in JS is `null` or `undefined` React will not display it.

<br>
Multiple props on a component  - space delimiter

```
<MyAwesomeComponent name="name" type="type" />
```



**State**
<br>
Functional components have an argument props (= properties). Class based components do not have props passed in as an argument, they are available as `this.props`. In addition, class based components can have state. State is an object and it can be set inside the class constructor after referencing the parent class with super.

```
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      // add state here
    }
  }
}
```


**Events**

In vanilla JS, events can be handled by either adding some event attribute directly to the element `<button onClick="myFunction()">Click me </button>` or by adding an `eventListener` to it `buttonEl.addEventListener("click", myFunction)`. Notice how we only pass the name of the function to the eventListener. Similar is done with JSX elements. `<AwesomeButton onClick={myFunction} />`. if AwesomeButton is a functional component. If it's a class based component, the event handlers are usually methods of the class. Then they need to be referenced with `this` and they need to be bind to the class inside the constructor: `this.myFunction = this.myFunction.bind(this)`.

When events fire they implicitly receive an argument - an object with information about that event. So if we want them to receive something from props `<input onChange={() => props.handleChange(arg)}` the arrow function receives the event information object and calls the handler method.

**Lifecycle methods**

Every component goes through a "lifecycle" of events.
Just like a living organism does - birth, some life stuff, death. <br>

*render()*<br>
Handles what is on the screen. Only required method for a class component.
<br>

*componentDidMount()*<br>
Only run once - exactly when the component is first rendered and when it is ready. This is where API calls are to get data we are going to display for example.
<br>

*shouldComponentUpdate(nextProps, nextState)*<br>
This method should always return a boolean value to the question "Should I re-render my component?" (by default react tries to always re-render them, but this can be expensive/slow). Method exists for performance optimization, sparingly used. Anytime `setState()` is called, the component re-renders by default.

*componentWillUnmount()*<br>
This is a place to teardown or cleanup your code before your component disappears. You cannot setState here.

*static getDerivedStateFromProps(props, state)*<br>
Use case for this are apparently rare
[official link](https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html)

*getSnapshotBeforeUpdate()*<br>
Create a backup of the current way things are, not super common.

**Getting data from API**

`fetch` is a promise-based way to get data from an API.<br>

**Forms**

In vanilla JS, the data from the form is collected after the user hits the submit button, but in react, you keep track of what is in the input elements while the user is filling it out.

Some notes:<br>
In HTML,
```
<textarea>placeholer text goes here</textarea>
```
Meanwhile in React, this input is self-closing `<textarea value="placeholder text"/>`
(for input type text, placeholder text is just placeholder attribute and not value).
<br>
Another element thats different is the `select`.
```
<select>
  <option value="blue">Blue</option>
  <option selected value="red">Red</option>
</select>
```

The red option is initially selected because of the `selected` attribute.
In React, the initially selected option is kept in a `value` property of the `select` element.

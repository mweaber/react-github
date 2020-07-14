// Notes:

// You can destructure the React. into the import statement to save code.

// Functions above the render on a class-based component will become methods of the class and will not be callable by name alone in the JSX, you must attach a this. to the method being called.

// Using props for a class-based component:
// "Props are properties you can pass to a component from outside."
// <Navbar title='Github Finder'/> ... title is the prop being sent to the Navbar.js file where {this.props.title} is added to where we want the title of this app to be.

// Ex 2: For the icon in the navbar we would remove the text inside the classname and replace with {}, whatever we called the prop would be added instead so (this.props.icon) and on the component we pass the props from would get the removed text we took out of the className originally.

// PropTypes:
// Setting the property types that must be imported into the component.
// Makes the application more robust.







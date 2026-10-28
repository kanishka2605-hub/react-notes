// 1. What are Events in React?
// Events are actions that happen when a user interacts with a website.
// For example:
// * Clicking a button.
// * Typing in a text box.
// * Moving the mouse over an element.
// * Submitting a form.
// * Selecting an option from a dropdown.
// React allows us to respond to these actions using event handlers.

// Real-life example
// Imagine a website with a button:
// ┌──────────────────────┐
// │                      │
// │    Welcome!          │
// │                      │
// │    [ Click Me ]      │
// │                      │
// └──────────────────────┘
// When the user clicks the button, we want to display a message.
// The click is the event.
// The function that responds to the click is the event handler.

// 2. Your First React Event: onClick
// Let’s create a button that displays an alert when clicked.
// function App() {
//   function sayHello() {
//     alert("Hello! Welcome to React.");
//   }

//   return (
//     <button onClick={sayHello}>
//       Click Me
//     </button>
//   );
// }

// export default App;

// Here:
// * button creates a button.
// * onClick is the event handler prop for click events.
// * sayHello is the function that should run when the button is clicked.
// When the user clicks the button, React calls sayHello().
// Remember: In JSX, event names use camelCase, such as onClick, rather than lowercase onclick.

// 3. Important: sayHello vs. sayHello()
// This is one of the most important things to understand about React events.

// Example A: Correct
// <button onClick={sayHello}>
//   Click Me
// </button>
// React receives the function and calls it when the button is clicked.

// Example B: Incorrect for this purpose
// <button onClick={sayHello()}>
//   Click Me
// </button>
// Here, sayHello() calls the function immediately during rendering.
// React receives the function’s return value rather than the function itself.

// Therefore, if you want a function to run when a user clicks a button, generally write:
// onClick={sayHello}

// Easy trick:
// * sayHello → pass the function.
// * sayHello() → call the function.

// 4. Events with Arrow Functions
// Suppose you want to increase a counter every time a button is clicked.
// We can combine events with the React state you just learned.

// Example: Counter
// import { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h1>Count: {count}</h1>

//       <button onClick={() => setCount(count + 1)}>
//         Increase
//       </button>
//     </div>
//   );
// }

// export default App;

// Why use an arrow function here?
// We want to run this expression when the user clicks:
// setCount(count + 1)

// So we wrap it in a function:
// () => setCount(count + 1)
// This delays the update until the click occurs.

// 5. Common Events in React
// React supports many event handler props.

// Here are some important ones:
// onClick: it runs When an element is clicked and example use of buttons.
// onChange: it runs When an input’s value changes and example use of text boxes.
// onSubmit: it runs When a form is submitted and example use of login forms.
// onMouseEnter: it runs When the pointer enters an element and example use of hover interactions
// onKeyDown: it runs When a key is pressed down and example use of keyboard shortcuts.
// onFocus: it runs When an element receives focus and example use of input fields.
// onBlur: it runs When an element loses focus and example use of input validation. 

// Example 1: onChange
// Suppose a user types their name into an input field, and you want to display it immediately.
// import { useState } from "react";

// function App() {
//   const [name, setName] = useState("");

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Enter your name"
//         onChange={(event) => setName(event.target.value)}
//       />

//       <h2>Hello, {name}!</h2>
//     </div>
//   );
// }

// export default App;

// Understand this line
// onChange={(event) => setName(event.target.value)}
// There are three important parts:
// 1. event
// React passes information about the interaction to the event handler.
// 2. event.target
// Refers to the element that triggered the event. Here, it is the input box.
// 3. event.target.value
// Contains the current value of the input box.

// For example, if the user types Rahul, then:
// event.target.value
// will be: Rahul
// The setName() function updates the state, and React displays the updated greeting.

// Note: The variable name event is not compulsory. You could call it e instead:
// onChange={(e) => setName(e.target.value)}
// Both versions work.


// Example 2: onSubmit
// Imagine you’re building a login or registration form.
// When the user submits the form, you want to handle that action.
// function App() {
//   function handleSubmit(event) {
//     event.preventDefault();

//     alert("Form submitted!");
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" placeholder="Enter your name" />

//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default App;

// Let’s understand the important parts.
// onSubmit
// <form onSubmit={handleSubmit}>
// This connects the form submission event to the handleSubmit function.
// event.preventDefault()
// Normally, submitting an HTML form can trigger the browser’s default form-submission behavior, which may reload or navigate the page.
// preventDefault() prevents that default behavior.
// This is useful when React should handle the submission itself.
// type="submit"
// <button type="submit">Submit</button>
// This button submits the form when clicked.
// In a real application, the handler might validate the form or send the data to a server.

// 6. Can We Pass Arguments to Event Handlers?
// Yes! Sometimes you want to pass additional information to a function.
// For example, suppose you have three buttons for different students.
// You want each button to display that student’s name.
// function App() {
//   function greet(name) {
//     alert("Hello, " + name);
//   }

//   return (
//     <div>
//       <button onClick={() => greet("Rahul")}>
//         Rahul
//       </button>

//       <button onClick={() => greet("Priya")}>
//         Priya
//       </button>

//       <button onClick={() => greet("Aman")}>
//         Aman
//       </button>
//     </div>
//   );
// }

// export default App;

// How does it work?
// Look at this:
// onClick={() => greet("Rahul")}
// The arrow function waits for the click.
// When the user clicks the button, it calls:
// greet("Rahul");
// If the user clicks Priya’s button, it displays:
// Hello, Priya
// Remember: When you need to pass arguments to a function through an event handler, an arrow function is a common solution.

// 7. What Is the Event Object?
// In React, event handlers can receive an event object containing information about the interaction.
// For example:
// function App() {
//   function handleClick(event) {
//     console.log(event.type);
//   }

//   return (
//     <button onClick={handleClick}>
//       Click Me
//     </button>
//   );
// }

// export default App;

// When you click the button, the console displays: click
// Here: function handleClick(event)
// receives the event object.
// And: event.type
// tells you which type of event occurred.

// Other useful properties include:
// * event.target — the element that triggered the event.
// * event.currentTarget — the element whose handler is currently running.
// * event.type — the event type, such as "click".
// You don’t need to memorise every property immediately. Learn them as you use them.
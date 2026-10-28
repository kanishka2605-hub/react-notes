// In React, props are used to pass data from one component to another component.
// Think of props like arguments in a function. You give a component some information, and it uses that information to display something.
// Props allow you to pass information from a parent component to a child component.
// Step 1: Create a component
// EXAMPLE-1
// function Student(props) {
//     return <h1>Hello, {props.name}!</h1>;
// }
// Let’s understand each part:
// function Student(props)
// Creates a component named Student that receives props.

// props.name
// Gets the value of the name property.

// return
// Returns the JSX that React displays.

// {props.name}
// Displays the value inside the JSX.

// Step 2: Pass props to the component
// function App() {
//     return (
//         <div>
//             <Student name="Rahul" />
//             <Student name="Priya" />
//             <Student name="Aman" />
//         </div>
//     );
// }

// EXAMPLE-2
// function Student(props) {
//     return (
//         <div>
//             <h2>Name: {props.name}</h2>
//             <p>Age: {props.age}</p>
//         </div>
//     );
// }
// function App() {
//     return (
//         <div>
//             <Student name="Rahul" age={19} />
//             <Student name="Priya" age={18} />
//         </div>
//     );
// }

// // Output:
// // Name: Rahul
// // Age: 19

// // Name: Priya
// // Age: 18

// In JSX, use curly braces to pass JavaScript values, such as numbers, variables, booleans, objects, or expressions.
// 1. What is React?
// React is a JavaScript library used to build user interfaces (UIs).
// For example:
// <Student age={19} />
// <Student isStudent={true} />
// <Student name={studentName} />

// EXAMPLE-3
// function Student({ name, age }) {
//     return (
//         <div>
//             <h2>{name}</h2>
//             <p>{age}</p>
//         </div>
//     );
// }
// function Student(props) {
//     return (
//         <div>
//             <h2>{props.name}</h2>
//             <p>{props.age}</p>
//         </div>
//     );
// }
// So, what’s the difference?

// Without destructuring:
// props.name
// props.age

// With destructuring:
// name
// age
// Destructuring lets you extract the properties you need directly from the props object.

// EXAMPLE-4
// function Greeting(props) {
//     return (
//         <button onClick={props.sayHello}>
//             Click Me
//         </button>
//     );
// * Instagram’s feed
// * YouTube’s video cards
// * Amazon’s product listings
// * A login page
// * Your ClassCache website

// eact helps us build these interfaces using reusable components.
// Without React vs. With React
// Imagine you’re building a website with 100 product cards.
// Without React: You might write similar HTML repeatedly.
// With React: You can create one product component and reuse it 100 times with different data.

//  2. What are Components?
//  A component is a reusable piece of a user interface.
//  For example, imagine a website with these parts:
// * Navbar
// * Sidebar
// * Profile card
// * Footer
// We can create a separate component for each part.
// Example
// function Welcome() {
//   return <h1>Welcome to React!</h1>;
// }
// export default Welcome;

// How do we use it?
// function App() {
//     function sayHello() {
//         alert("Hello!");
//     }

//     return <Greeting sayHello={sayHello} />;
//   return (
//     <div>
//       <Welcome />
//       <Welcome />
//       <Welcome />
//     </div>
//   );
// }
// export default App;

// Output:
// Welcome to React!
// Welcome to React!
// Welcome to React!
// Notice that we wrote the Welcome component only once but reused it three times.

// Important rules:
// * React component names should start with a capital letter.
// * A component usually returns JSX.
// * Components can be reused wherever needed.

//  3. What is JSX?
//  JSX stands for JavaScript XML.
//  It lets us write HTML-like syntax inside JavaScript code.

//  For example:
//  function App() {
//   const name = "Kanishka";
//   return <h1>Hello, {name}!</h1>;
// }
// export default App;

// How does it work?
// Output:Hello, Kanishka!

// 1. The App component creates a function called sayHello.
// 2. App passes that function to Greeting through props.
// 3. Greeting uses the function when the button is clicked.
// 4. An alert displaying Hello! appears.
// Here, we have:
// const name = "Kanishka";
// This creates a JavaScript variable.
// Then:
// <h1>Hello, {name}!</h1>
// The curly braces {} allow us to use a JavaScript expression inside JSX.

// Remember:
// Why do we use curly braces?
// Consider these two examples.

// * sayHello passes the function.
// * sayHello() calls the function.
// Example 1: Without curly braces
// const age = 19;
// return <h1>age</h1>;
// Output:age
// React treats age as ordinary text.

// This is useful when a child component needs to trigger an action defined by its parent.
// Example 2: With curly braces
// const age = 19;
// return <h1>{age}</h1>;
// Output:19
// React evaluates the JavaScript expression inside the curly braces.

// Important Rules About Props
// Rule 1: Props are read-only.
// A child component should not directly modify the props it receives.
// For example, don’t do this:
// function Student(props) {
//     props.name = "Aman"; // Don't modify props!
//     return <h1>{props.name}</h1>;
// You can also perform calculations:
// function App() {
//   return <h1>{10 + 20}</h1>;
// }

// Rule 2: Props flow from parent to child.
// For example:
//         App (Parent)
//             |
//             | name="Rahul"
//             ↓
//       Student (Child)
//             |
//             ↓
//        Hello, Rahul!

// Rule 3: Props can contain different types of data.
// You can pass:

// * Strings: name="Rahul"
// * Numbers: age={19}
// * Booleans: isStudent={true}
// * Arrays: subjects={["Math", "Science"]}
// * Objects: student={{ name: "Rahul", age: 19 }}
// * Functions: onClick={handleClick}
// Output: 30
// Remember: Use {} when you want JSX to evaluate a JavaScript expression instead of displaying plain text.

// A few JSX rules
// Rule 1: Use className instead of class.
// React uses className to specify CSS classes in JSX.

// Rule 2: Close your tags.
// <img src="photo.jpg" alt="Profile" />

// Rule 3: Return one parent element.
// Correct:
// return (
//   <div>
//     <h1>Hello</h1>
//     <p>Welcome!</p>
//   </div>
// );
// The <div> wraps both elements.
// You can also use a React Fragment, <>...</>, instead of a <div> when you don’t need an extra HTML element.
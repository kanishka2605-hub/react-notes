// 1. What is State in React?
// State is data that a React component remembers and that can change over time.
// For example, imagine you’re building a website with:
// * A counter that increases when you click a button.
// * A like button that switches between liked and unliked.
// * A form that stores the name entered by a user.
// * A dark mode button that changes the website’s theme.

// All these features can use state.

// Real-life example: A counter
// Imagine a counter on your website.
// Initially:
// count: 0
// You click the button once:
// count: 1
// You click it again:
// count: 2
// The counter’s value changes every time you click the button.
// React state allows the component to remember the current value and update the screen when that value changes.

// 2. What is useState()?
// React provides a special function called useState() to manage state inside a functional component.
// First, we import it:

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

// count: The current state value
// setCount: The function used to update the state
// useState(0): Creates state with an initial value of 0

// Think of it this way:
// * count tells you the current value.
// * setCount() lets you request a change to that value.
// * 0 is the initial value.

// Why do we write square brackets []?
// Look at this line:
// const [count, setCount] = useState(0);
// useState() returns an array containing two values:
// 1. The current state value.
// 2. A function that updates that state.

// We use array destructuring to store those values in separate variables.
// For example, conceptually:
// const result = useState(0);
// const count = result[0];
// const setCount = result[1];
// React lets us write the shorter version:
// const [count, setCount] = useState(0);

// Step 3: Display the state
// <h1>Count: {count}</h1>
// Remember that curly braces {} let you use JavaScript expressions inside JSX.
// If count is 0, React displays:
// count: 0
// If count becomes 5, React displays:
// count: 5

// Step 4: Update the state
// <button onClick={() => setCount(count + 1)}>
//   Increase
// </button>
// Let’s break this down.
// onClick
// Runs the event handler when the user clicks the button.
// () =>
//   Creates an arrow function.
// setCount(count + 1)
// Requests that React update the counter to its current value plus one.
// For example, if count is 4:
// setCount(4 + 1);

// The complete process
// The process is:
// 1. The component starts with count = 0.
// 2. The user clicks the button.
// 3. setCount(count + 1) requests an update.
// 4. React renders the component with the new state.
// 5. The screen displays the updated count.

// Important: You should not change state directly. Use its setter function instead.
// Incorrect:
// count = count + 1;
// Correct:
// setCount(count + 1);
// Changing a normal variable does not tell React to update the UI.


// 3. Example 2: Like and Unlike Button
// Now let’s use state for something other than numbers.
// Imagine you have a button that lets users like a post.
// Initially, the post is not liked.
// When the user clicks the button, it becomes liked. Clicking again removes the like.
// import { useState } from "react";

// function App() {
//   const [liked, setLiked] = useState(false);

//   return (
//     <div>
//       <h1>{liked ? "❤️ Liked" : "🤍 Not Liked"}</h1>

//       <button onClick={() => setLiked(!liked)}>
//         Like
//       </button>
//     </div>
//   );
// }

// export default App;


// 4. Example 3: Store a Name Using State
// State can also store text entered by a user.
// Let’s create a small app that accepts a name and displays it.
// import { useState } from "react";

// function App() {
//   const [name, setName] = useState("");

//   return (
//     <div>
//       <input
//         type="text"
//         value={name}
//         onChange={(event) => setName(event.target.value)}
//         placeholder="Enter your name"
//       />

//       <h2>Hello, {name}!</h2>
//     </div>
//   );
// }

// export default App;


// 5. What happens if we use a normal variable instead of state?
// This is an important question.
// Consider the following code:
// function App() {
//   let count = 0;

//   return (
//     <div>
//       <h1>{count}</h1>

//       <button onClick={() => count++}>
//         Increase
//       </button>
//     </div>
//   );
// }

// export default App;
// You might expect the number to increase when you click the button.
// But the screen will not update just because count changes.
// Why?
// Because count is a normal JavaScript variable. Updating it does not tell React that the UI needs to change.
// Now compare it with:
// const [count, setCount] = useState(0);
// When you call:
// setCount(count + 1);
// React knows that the state needs to be updated and renders the component again.
// That’s why we use state for data that affects the UI.


// Easy trick to remember:
// * Props = data passed to a component.
// * State = data managed by a component that can change over time.

// 7. Three Important Rules of State
// Rule 1: Never modify state directly
// ❌ Incorrect:
// count++;
// ✅ Correct:
// setCount(count + 1);

// Rule 2: State updates trigger a re-render
// When you update state using its setter, React renders the component again so the UI can reflect the new value.
// Rule 3: State belongs to a component
// Each instance of a component can have its own state.
// For example, if you render two separate counter components, each can maintain its own count.
// One counter can display 3, while the other displays 7.
// Changing one doesn’t automatically change the other.

// 8. A Small Note About Updating State
// Sometimes, you may see this syntax:
// setCount((previousCount) => previousCount + 1);
// You might wonder why we use this instead of:
// setCount(count + 1);
// Both work for a simple counter click.
// However, when the next value depends on the previous state, using an updater function is a reliable approach.
// For example:
// setCount((previousCount) => previousCount + 1);
// Here, previousCount represents the previous state value React provides to the updater.
// This becomes especially useful when you need to perform multiple updates based on the previous value.

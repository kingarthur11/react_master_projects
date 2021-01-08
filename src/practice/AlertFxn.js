// import React from 'react'

// const AlertFxn = () => {
//     const alertName = () => {
//         alert('john Doe')
//     }
//     return (
//         <div>
//             <h3>this is a functional component</h3>
//             <button onClick={alertName}> alert</button>
//         </div>
//     )
// }

// export default AlertFxn

// import React, { Component } from 'react';

// class App extends Component {
//   state = {
//     name: ''
//   }

//   alertName = () => {
//     alert(this.state.name);
//   };

//   handleNameInput = e => {
//     this.setState({ name: e.target.value });
//   };

//   render() {
//     return (
//       <div>
//         <h3>This is a Class Component</h3>
//         <input
//           type="text"
//           onChange={this.handleNameInput}
//           value={this.state.name}
//           placeholder="Your Name"
//         />
//         <button onClick={this.alertName}>
//           Alert
//         </button>
//       </div>
//     );
//   }
// }

// export default App;

// import React, { useState } from 'react';
 
// const App = () => {
//   return <Headline />;
// };
 
// const Headline = () => {
//   const [greeting, setGreeting] = useState(
//     'Hello Function Component!'
//   );
 
//   return (
//     <div>
//       <h1>{greeting}</h1>
 
//       <input
//         type="text"
//         value={greeting}
//         onChange={event => setGreeting(event.target.value)}
//       />
//     </div>
//   );
// };
 
// export default App;

// import React, { useState } from 'react';
 
// const App = () => {
//   const [greeting, setGreeting] = useState(
//     'Hello Function Component!'
//   );
 
//   const handleChange = event => setGreeting(event.target.value);
 
//   return (
//     <Headline headline={greeting} onChangeHeadline={handleChange} />
//   );
// };
 
// const Headline = ({ headline, onChangeHeadline }) => (
//   <div>
//     <h1>{headline}</h1>
 
//     <input type="text" value={headline} onChange={onChangeHeadline} />
//   </div>
// );
 
// export default App;

// import React, { useState } from 'react';
 
// const App = () => {
//   const [count, setCount] = useState(0);
 
//   const handleIncrement = () =>
//     setCount(currentCount => currentCount + 1);
 
//   const handleDecrement = () =>
//     setCount(currentCount => currentCount - 1);
 
//   return (
//     <div>
//       <h1>{count}</h1>
 
//       <button type="button" onClick={handleIncrement}>
//         Increment
//       </button>
//       <button type="button" onClick={handleDecrement}>
//         Decrement
//       </button>
//     </div>
//   );
// };
 
// export default App;
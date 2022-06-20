import * as React from "react";
import "./styles.css";

const { useState, useEffect } = React;

// FETCHING DATA FROM A URL (USING AXIOS PACKAGE)

export default function App() {
  return (
    <div className="App">
      <h1>Contador</h1>
    </div>
  );
}

// COUNTER (USESTATE)

// export default function App() {

// const [counter, setCounter] = useState(0);

//   return (
//     <div className="App">
//       <h1></h1>
//       <button onClick={() => setCounter(counter + 1)} >Incrementar contador</button>
//       <p>{counter}</p>
//       <button onClick={() => setCounter(counter - 1)} >decrementar contador</button>
//     </div>
//   );
// }

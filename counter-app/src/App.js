import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <section className="counter-container">
      <h1>Counter App</h1>
      <p className="count-display">Count: {count}</p>
      <div>
        <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
        <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
      </div>
    </section>
  );
}

export default App;

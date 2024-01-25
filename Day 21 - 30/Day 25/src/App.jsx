import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <span data-testid="span">{count}</span>
      <input type="text" />
      <button onClick={() => setCount((prev) => prev + 1)}>submit</button>
    </>
  );
}

export default App;

import React, { useState } from "react";
import Employee from "./components/Employee";

function App() {
  // use states
  const [role, setRole] = useState("");

  function handleInput(e) {
    // console.log(e.target.value);
    setRole(e.target.value);
  }
  return (
    <>
      {/* <input type="text" className="border-2 p-3" onChange={handleInput} /> */}
      <div className="flex flex-wrap items-center justify-center">
        <Employee
          name={"emmanuel"}
          role="intern"
          img="https://images.unsplash.com/photo-1701084412727-1f3e01088a5f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8"
        />
        <Employee
          name="John"
          role={role}
          img="https://images.unsplash.com/photo-1701084412727-1f3e01088a5f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8"
        />
        <Employee
          name="Joyce"
          role="dev"
          img="https://images.unsplash.com/photo-1701084412727-1f3e01088a5f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8"
        />
      </div>
    </>
  );
}

export default App;

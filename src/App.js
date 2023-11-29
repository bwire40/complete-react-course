import React, { useState } from "react";
import Employee from "./components/Employee";

function App() {
  // use state
  const [role, setRole] = useState("");
  let name = "bwie";
  let img =
    "https://images.unsplash.com/photo-1682686581030-7fa4ea2b96c3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8";
  return (
    <>
      <input
        type="text"
        className="border-2 p-3 m-4"
        placeholder="role"
        onChange={(e) => setRole(e.target.value)}
      />
      <div className="flex flex-wrap">
        <Employee name={name} img={img} role={role} />
        <Employee name={name} img={img} />
        <Employee name={name} img={img} />
      </div>
    </>
  );
}

export default App;

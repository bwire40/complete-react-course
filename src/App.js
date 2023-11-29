import React, { useState } from "react";
import Employee from "./components/Employee";
import employeesData from "./data";
import { v4 as uuidv4 } from "uuid";
function App() {
  // use state
  const [role, setRole] = useState("");
  const [employee, setEmployee] = useState(employeesData);
  return (
    <>
      <input
        type="text"
        className="border-2 p-3 m-4"
        placeholder="role"
        onChange={(e) => setRole(e.target.value)}
      />
      <div className="container border-2 mx-auto w-full flex flex-wrap">
        {employee.map((employee) => {
          return (
            <Employee
              key={uuidv4()}
              name={employee.name}
              img={employee.img}
              role={employee.role}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;

import React, { useState } from "react";
import Employee from "./components/Employee";
import employeesData from "./data";
import { v4 as uuidv4 } from "uuid";
function App() {
  const [employee, setEmployee] = useState(employeesData);
  return (
    <>
      <div
        className="container py-10 mt-10 mx-auto w-full flex 
      flex-wrap justify-center items-center"
      >
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

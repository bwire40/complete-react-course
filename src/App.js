import React, { useState } from "react";
import Employee from "./components/Employee";
import { v4 as uuidv4 } from "uuid";
function App() {
  // use states
  const [role, setRole] = useState("");
  const [employees, setEmployees] = useState([
    {
      name: "Faith",
      role: "intern",
      img: "https://images.unsplash.com/photo-1701084412727-1f3e01088a5f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8",
    },
    {
      name: "Caleb",
      role: "Manager",
      img: "https://images.unsplash.com/photo-1701077137611-9be394bf62f0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Juma",
      role: "intern",
      img: "https://images.unsplash.com/photo-1700451761309-656bd9439443?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Cate",
      role: "Developer",
      img: "https://images.unsplash.com/photo-1701083266435-a56ea052fb60?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D",
    },
  ]);

  function handleInput(e) {
    // console.log(e.target.value);
    setRole(e.target.value);
  }
  return (
    <>
      {/* <input type="text" className="border-2 p-3" onChange={handleInput} /> */}
      <div className="flex flex-wrap items-center justify-center">
        {employees.map((employee) => {
          return (
            <>
              <Employee
                key={uuidv4()}
                name={employee.name}
                role={employee.role}
                img={employee.img}
              />
            </>
          );
        })}
      </div>
    </>
  );
}

export default App;

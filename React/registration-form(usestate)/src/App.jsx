import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';

function App() {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    dob: '',
    age: '',
    email: '',
    password: '',
  });
  
  
  const [submittedData, setSubmittedData] = useState([]); // Here is the missing state

  // Handle input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  useEffect(() => {
    console.log("submittedData", submittedData);  
  }, [submittedData]);

  // Handle form submission
  const handleSubmit = (e) => {
    console.log("item");
    e.preventDefault(); // Prevent page reload
      let test = submittedData.find((item) => item.email === formData.email);
      if(test){
        alert("Email already exists");
        return;
      }  
      setSubmittedData((prev) => ([...prev, formData])); // Save the form data to submittedData state
      // Save the form data to submittedData state
    // Optionally, clear the form after submit
    setFormData({
      fname: '',
      lname: '',
      dob: '',
      age: '',
      email: '',
      password: '',
    });
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h1>REGISTRATION FORM</h1>
          
          <input
            type="text"
            id="fname"
            value={formData.fname}
            onChange={handleInputChange}
            placeholder="Enter your first Name"
          />
          <input
            type="text"
            id="lname"
            value={formData.lname}
            onChange={handleInputChange}
            placeholder="Enter your last Name"
          />
          <input
            type="date"
            id="dob"
            value={formData.dob}
            onChange={handleInputChange}
          />
          <input
            type="number"
            id="age"
            value={formData.age}
            onChange={handleInputChange}
            placeholder="Enter your age"
            min="0"
            max="120"
          />
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
          />
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Enter your password"
          />
          <button type="submit">Submit</button>
        </form>

        {/* Show the submitted information if it exists */}
        <h2>Submitted Information</h2>
        
        {submittedData.map((item)=>(
            <div className="submitted-info">
            <p><strong>First Name:</strong> {item.fname}</p>
            <p><strong>Last Name:</strong> {item.lname}</p>
            <p><strong>Date of Birth:</strong> {item.dob}</p>
            <p><strong>Age:</strong> {item.age}</p>
            <p><strong>Email:</strong> {item.email}</p>
            <p><strong>Password:</strong> {item.password}</p>
            <br/>
          </div>
          ) )}
        
      </div>
    </>
  );
}

export default App;
 
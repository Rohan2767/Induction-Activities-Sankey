import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';





function App(){
  const[data,setData]=useState([]);
  const[apiFetch,setapiFetch]=useState('')
  useEffect(()=>{
    if(!apiFetch)return;//dont do anything if apiFetch is empty,So, it checks if apiFetch is falsy (empty string, null, etc.) and if so, it skips the rest of the logic. If it's not empty, it proceeds to fetch data from the API.

    const fetchData=async()=>{
      try{ //The code inside the try block is the code that you want to attempt
        const response=await axios.get(apiFetch)
        setData(response.data)
      }catch(error){
        console.error('Error fetching data:',error)
      }


      // const result= await response.json()
      // setData(result)
    };
    fetchData();

  },[apiFetch]
);

  const butttons=[
    {name:'Fetch TODO',url:'https://jsonplaceholder.typicode.com/todos'},
    {name:'Fetch POSTS',url:'https://jsonplaceholder.typicode.com/posts'},
    {name:'Fetch USERS',url:'https://jsonplaceholder.typicode.com/users'}
  ];

  
  return(
    <>

<div className="buttons">
        {butttons.map((item) => (
          <button 
            key={item.url}  // Use URL as key
            onClick={() => setapiFetch(item.url)}  // Update API fetch URL on button click
          >
            {item.name}  
          </button>
        ))}
      </div>
    {/* <div className='buttons'>
      <button onClick={()=>setapiFetch('https://jsonplaceholder.typicode.com/todos')}>Fetch TODO</button>
      
      <button onClick={()=>setapiFetch('https://jsonplaceholder.typicode.com/posts')}>Fetch POSTS</button>
      
      <button on onClick={()=>setapiFetch('https://jsonplaceholder.typicode.com/users')}>Fetch POSTS</button>
      
    </div> */}
    

    
      {data && data.length > 0 ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title || item.name}</li>
          ))}
        </ul>
      ) : (
        <p>No data available or waiting for selection</p>
      )}
    
    </>
  );
}


 

// function App() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [selectedAPI, setSelectedAPI] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (!selectedAPI) return; 

//     const fetchData = async () => {
//       setLoading(true);
//       setError(null); 
//       try {
//         const response = await fetch(selectedAPI);
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const result = await response.json();
//         setData(result);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [selectedAPI]); 

//   return (
//     <div className="container">
//       <h1>API fetcher</h1>

//       {/* Buttons to choose API */}
//       <div className="button-group">
//         <button onClick={() => setSelectedAPI('https://jsonplaceholder.typicode.com/todos')}>
//           Fetch TODOS
//         </button>
//         <button onClick={() => setSelectedAPI('https://jsonplaceholder.typicode.com/posts')}>
//           Fetch POSTS
//         </button>
//         <button onClick={() => setSelectedAPI('https://jsonplaceholder.typicode.com/users')}>
//           Fetch USERS
//         </button>
//       </div>

//       {/* Show Loading Indicator */}
//       {loading && <p>Loading...</p>}

//       {/* Show Error Message */}
//       {error && <p className="error-message">Error: {error}</p>}

//       {/* Display API Data */}
//       {!loading && data.length > 0 && (
//         <div className="data-container">
//           <h2>Data from API</h2>
//           <table>
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Title / Name</th>
//               </tr>
//             </thead>
//             <tbody>
//               {data.map((item) => (
//                 <tr key={item.id}>
//                   <td>{item.id}</td>
//                   <td>{item.title || item.name}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// }

export default App;

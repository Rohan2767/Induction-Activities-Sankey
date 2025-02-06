import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[articles,setArticles]=useState(null)
  const[loading,setLoading]=useState(true)
  useEffect(()=>{

    // const fetchData=async()=>{
    //   try{
    //     const response=await fetch(`https://jsonplaceholder.typicode.com/todos`)
    //     const result=await response.json()
    //     console.log(result)
    //     setArticles(result)
    //     setLoading(false)
    //   }catch(error){
    //     console.log('unable to fetch data',error)
    //   };
      
    //   // const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    //   // const result=await response.json();
    //   // console.log(result);
    //   // setData(result);
    //   // setLoading(false);
    // }

    const fetchData=()=>{
      const result = [
        { id: 1, title: 'News Article 1', isVisible: true },
        { id: 2, title: 'News Article 2', isVisible: false },
        { id: 3, title: 'News Article 3', isVisible: true },
        { id: 4, title: 'News Article 4', isVisible: false },
        { id: 5, title: 'News Article 5', isVisible: true },
      ];
      // const visibleArticles = result.filter(article => article.isVisible === true);
      // setArticles(visibleArticles); 
      setArticles(result);
      setLoading(false); 
    };
    fetchData();
  },[])
    
    
  // const [count, setCount] = useState(0)
  // const handlecount=()=>{
  //   setCount(count+1)
  // }


  // useEffect(()=>{
  //   alert("Count is updated")
  //     return()=>{
  //       alert("count is unmounted from UI")
  //     }
  // },[count])
  


  return (
    <>

<div>
  <h1>Today's News</h1>
  {loading ? <p>Loading...</p> : (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        {articles.map((article, index) => (
          // Render the article only if it's visible
          article.isVisible ? (
            <tr key={index}>
              <td>{article.id}</td>
              <td>{article.title}</td>
            </tr>
          ) : null // Return null if it's not visible
        ))}
      </tbody>
    </table>
  )}
</div>


    {/* <button onClick={handlecount}>Click Me</button>
    <h1>This is {count}</h1> */}



    </>
  )

}

export default App

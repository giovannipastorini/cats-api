import { useEffect, useState } from 'react'



function App() {
  /* const [count, setCount] = useState(0) */
  const [cats, setCats] = useState([])
  const api_url="https://api.thecatapi.com/v1/breeds?limit=10&page=0"

  useEffect(()=>{
    console.log("component mounted");

    fetch (api_url)
     .then(response => response.json())
     .then( data =>{
        console.log(data);
        setCats(data);
    })

    
  }, [])

  return (
    <>
     <h1>Cat api</h1> 
     <div>
          {
            cats.map( cat =>(
              <div>
                <ul>
                  <li>{cat.name}</li>
                </ul>
              </div>
            ))
          }
     </div>
    </>
  )
}

export default App

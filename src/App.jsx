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
    <main> 
     <section>
      <div className="container">
        <div className="row g-4">
          <h1>Cat API</h1> 
            {
              cats.map( cat =>(
                <div className="col-sm-12 col-md-6 col-lg-3" key={cat.id}>
                  <div className="card">
                    <div className="card-body">
                      <h2>{cat.name}</h2>
                      <p>
                        {cat.description}
                      </p>
                    </div>
                      <div className="card-footer">
                        <a href={cat.wikipedia_url}>find out more</a>
                      </div>
                  </div>
                </div>
              ))
            }
        </div>
      </div>
     </section>
    </main>
  )
}

export default App

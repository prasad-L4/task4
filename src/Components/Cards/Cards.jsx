import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Cards.css'
const Header = () => {
    const [Products, setProducts] = useState([])

    useEffect(() => {
  const fetchData=async()=>{
    try{
        const response=await axios.get('https://fakestoreapi.com/products')
        setProducts(response.data)
    }
    catch{
        console.error('error fetching data');
    }
  }
  

  fetchData()
    }, [])
    console.log(Products);
    
  return (
    <>
    <main>
        <div>
            <img src="https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
        <section className='cards'>
            {
                Products.map((data,index)=>((
                    <div className="card">
                    <img
                      src={data.image}
                      alt=""
                      className="card-image"
                    />
                    <div className="card-content">
                      <h3 className="card-title">{data.title}</h3>
                      <p className='card-price'>${data.price}</p>
                      <p className="card-text">
                      {data.category}
                      </p>
                    </div>
                  </div>
                )))
            }
    
        </section>
    </main>
      
    </>
  )
}

export default Header

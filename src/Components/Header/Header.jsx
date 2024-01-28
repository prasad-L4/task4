import React, { useEffect, useState } from 'react'
import './Header.css'
const Header = () => {
    const [Products, setProducts] = useState([])

    useEffect(() => {
  

    }, [])
    
  return (
    <>
    <main>
        <div>
            <img src="https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
        <section className='cards'>
        <div className="card">
      <img
        src="https://placekitten.com/300/200" // Example image (replace with your image URL)
        alt=""
        className="card-image"
      />
      <div className="card-content">
        <h3 className="card-title">Card Title</h3>
        <p className="card-text">
          This is a sample card content. You can replace it with your own text.
        </p>
      </div>
    </div>
        </section>
    </main>
      
    </>
  )
}

export default Header

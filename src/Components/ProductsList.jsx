import React from 'react'
import { useState, useEffect } from "react"
import ProductsNav from './productsList/ProductsNav'
import client from "../client"
import { Link } from "react-router-dom"
import Css from './productsList/Products.css'


function ProductsList() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post" && 'Glutten' in categories[]->title || 'Glutten free' in categories[]->title ]  {
        title,
        slug,
        body,
        "categories": categories[]->title,title,
        mainImage {
          asset -> {
            _id,
            url
          },
          alt
        }
      }`
      )
      .then((data) => setPosts(data))
      .catch(console.error)
  }, [])
  return (
    <div id='productMain' >
        <ProductsNav />
        <section 
          >
        <h1 class='topic'>
          Othello Products
        </h1>
          <h4 style={{color: 'black'}}>There are {posts.length}  Products</h4>
          
        <div class='lists' >
          {posts.map((post) => (
            <article key={post.slug.current} class='pr'>
              <img src={post.mainImage.asset.url} alt={post.title} class='img'/>
              <p >{post.categories}</p>
              <h4 style={{color: 'black'}}>{post.title}</h4>

              
            
            {/*  <button className='productbox-button' >
                <Link
                  to={`/blog/${post.slug.current}`}
                  
                >
                  Read More
                </Link>
          </button>*/}
            </article>
          ))}
        </div>
      </section>
        
    </div>
  )
}

export default ProductsList
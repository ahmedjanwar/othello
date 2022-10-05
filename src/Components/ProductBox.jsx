import React from 'react'
import { Link } from "react-router-dom"
import client from "../client"
import { useState, useEffect } from "react"


export default function 
(props) {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post" && 'News' in categories[]->title] {
        title,
        slug,
        body,
        catagories{
          title,
          body
        },
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
    <div className='a-box'>
      
        <div className='a-b-img'>
            <img src={props.image} alt='' id='newsimage'/>
        </div>

        {posts.map((post) => (
          
        <div className='a-b-text'>
            <h2>{props.title}</h2>
            
            <article key={post.slug.current}>
               <button className='productbox-button'>
            <Link
                  to={`/News/${props.slug}`}
                  className="py-2 px-6 rounded shadow text-white bg-black hover:bg-transparent border-2 border-black transition-all duration-500 hover:text-black font-bold"
                >
                  Read More
                </Link></button>
            </article>
          

        </div>))}
    </div>
  )
}

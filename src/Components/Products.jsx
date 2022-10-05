import React from 'react'
import { useState, useEffect } from "react"
import client from "../client"
import ProductBox from './ProductBox';
import pimage1 from '../images/s1.png';
import pimage2 from '../images/s2.png';


export default function 
() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post" && 'News' in categories[]->title]  {
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
  console.log(posts)
  return (
    <div id='products'>
        <h1>News</h1>
        {/*<h3>We simply love to focus our attention on the details.</h3>*/}
        <div className='a-container'>
        {posts.map((post) => (
            <article key={post.slug.current}>
                <ProductBox image={post.mainImage.asset.url} title ={post.title} slug={post.slug.current}/>
                
            </article>
          ))}
            
            
        </div>
    </div>
  )
}

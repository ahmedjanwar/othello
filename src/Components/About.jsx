import React from 'react'
import aboutimage from '../images/about.png';
import client from "../client"
import { useState, useEffect } from "react"

export default function 
() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post" && 'About_Page' in categories[]->title ]  {
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
    <div id='about'>
        <div className='about-text'>
            <h1>About</h1>
            <p>Since 1956, Othello has provided locally produced breads and pastries in Palosaari
                and is a trusted brand for many generations of customers in and around Vaasa. <br/>
                Throughout different ownerships, Othello has built a reputation of quality for its products,
                some of which have become iconic in the region. <br/>
                In 2021, with a new owner, Othello starts a new chapter in its life and aims to fulfill
                the expectations of both its regular and future customers. <br/>
                In addition of our classic Finnish café products, we also offer lunch options and develop an afternoon tearoom where you can enjoy special coffees, milkshakes, crêpes, waffles and many other delicacies. <br/>
                We are looking forward to welcoming you in our Palosaari café and also to being a part of your special events, such as weddings, anniversaries, business meetings, fairs and celebrations.
                </p>
            
        </div>
        <div className='about-image'>
            {/*<img src={aboutimage} alt=''/>*/}
            {posts.map((post) => (
            <article key={post.slug.current}>
                
                <img src={post.mainImage.asset.url} alt=''/>
            </article>
          ))}
        </div>
        


    </div>
    
  )
}

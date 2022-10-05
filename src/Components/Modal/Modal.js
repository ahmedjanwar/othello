import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import client from "../../client"
import BlockContent from "@sanity/block-content-to-react"
import ProductsNav from '../productsList/ProductsNav'
import Css from "../Modal/Modal.css"

export default function Modal() {
  const [singlePost, setSinglePost] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { slug } = useParams()

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == "${slug}"] {
        title,
        body,
        mainImage {
          asset -> {
            _id,
            url
          },
          alt
        }
      }`
      )
      .then((data) => setSinglePost(data[0]))
    setIsLoading(false)
  }, [slug])

  return (
    <>
      <ProductsNav />
      {isLoading ? (
        <h1 className="uppercase font-bold text-4xl tracking-wide mb-5 md:text-6xl lg:text-8xl flex items-center justify-center h-screen">
          Loading...
        </h1>
      ) : (
        
        <section className="mainnews">
          <h1 style={{paddingTop: "80px"}}>
            {singlePost.title}
          </h1>
          {singlePost.mainImage && singlePost.mainImage.asset && (
            <img 
              src={singlePost.mainImage.asset.url}
              alt={singlePost.title}
              title={singlePost.title}
              
              class='image'
            />
          )}
          <p>Othello Vaasa</p>

          <div className='details'>
            <BlockContent
              blocks={singlePost.body}
              projectId="5aaq72ao"
              dataset="production"
            />
          </div>

        </section>
      )}
    </>
  )
}

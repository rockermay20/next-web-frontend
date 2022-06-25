import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Productos.module.css'
import { fromImageToUrl, API_URL } from '../utils/urls'
import { twoDecimals } from '../utils/format'

import Header from '../components/Header'
import { useRouter } from 'next/router'
import { useRef } from 'react'

export default function Productos({ products }) {
  const router = useRouter();
  const consul = router.query['q'];
  const keywords = useRef([]);
  const busq = useRef();
  function handleB(){
    keywords.current = busq.current.value.split(" ")
    router.push('/productos?q='+busq.current.value) 
    busq.current.value = "";
  }
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <Head>
          <title>Transcripnet - Tienda</title>
          <meta name="description" content="Tienda de Transcripnet" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.busqueda}>
          <input type="text" ref={busq} placeholder="Buscar..." />
          <button onClick={handleB}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128c0-70.7 57.2-128 128-128c70.7 0 128 57.2 128 128c0 70.7-57.2 128-128 128z"/></svg></button>
          <button onClick={()=>{router.push('/productos?q=all') }} style={{marginLeft: "auto"}}>X</button>
        </div>
        {
          consul === "all" ? products.data.map(product => (
            <div key={product.attributes.name} className={styles.product}>
              <Link href={`/products/${product.attributes.slug}`}>
                <a>
                  <div className={styles.product__Row}>
                    <div className={styles.product__ColImg}><img src={fromImageToUrl(product.attributes.image.data[0].attributes)} /></div>
                    <div className={styles.product__Col}><h1>{product.attributes.name}</h1><h2>{product.attributes.meta_title}</h2><p>{product.attributes.content}</p><h4>${twoDecimals(product.attributes.price)}</h4></div>
                  </div>
                </a>
              </Link>
            </div>
          )) :
            products.data.map(product => (keywords.current.some(palabra => product.attributes.meta_description.includes(palabra))) && (
              <div key={product.attributes.name} className={styles.product}>
                <Link href={`/products/${product.attributes.slug}`}>
                  <a>
                    <div className={styles.product__Row}>
                      <div className={styles.product__ColImg}><img src={fromImageToUrl(product.attributes.image.data[0].attributes)} /></div>
                      <div className={styles.product__Col}><h1>{product.attributes.name}</h1><h2>{product.attributes.meta_title}</h2><p>{product.attributes.content}</p><h4>${twoDecimals(product.attributes.price)}</h4></div>
                    </div>
                  </a>
                </Link>
              </div>
            ))
        }
      </div>
    </div>
  )
}

export async function getStaticProps() {
  //Fetch the products
  const product_res = await fetch(`${API_URL}/api/products?populate=*`)
  const products = await product_res.json()
  //Return the products as props
  return {
    props: {
      products
    }
  }
}
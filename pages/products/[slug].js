import Head from 'next/head'
import { fromImageToUrl, API_URL } from '../../utils/urls'
import { twoDecimals } from '../../utils/format'
import Header from '../../components/Header'
import styles from '../../styles/Slug.module.css'
import { useEffect, useRef } from 'react'

const Product = ({ product, order }) => {
    const imgrefs = useRef([])
    const radrefs = useRef([])
    const last = useRef(0)
    useEffect(() => {
        imgrefs.current[0].style.display = "block";
        radrefs.current[0].checked = true;
    }, []);
    const handlerR = (radio) => {
        if (last.current != radio) {
            imgrefs.current[last.current].style.display = "none";
            imgrefs.current[radio].style.display = "block";
            last.current = radio
        }
    }
    return (
        <div>
            <Head>
                {product.attributes.meta_title &&
                    <title>{product.attributes.meta_title}</title>
                }
                {product.attributes.meta_description &&
                    <meta name='description' content={product.attributes.meta_description} />
                }
            </Head>
            <Header />
            <div className={styles.container}>
                <div className={styles.images}>
                    {product.attributes.image.data.map((pro, index) => (
                        <img key={pro.id} src={fromImageToUrl(pro.attributes)} ref={(element) => { imgrefs.current[index] = element; }} />
                    ))}
                    <div className={styles.radios}>
                        {product.attributes.image.data.map((pro, index) => (
                            <input key={pro.id} name="slider" type="radio" id={`rb${index}`} ref={(element) => { radrefs.current[index] = element; }} onClick={() => { handlerR(index) }} />
                        ))}
                    </div>
                </div>
                <div className={styles.contenido}>                    
                    <h1>{product.attributes.name}</h1>
                    <h3>{product.attributes.meta_title}</h3>
                    <p>{product.attributes.content}</p>
                    <h2>Precio: ${twoDecimals(product.attributes.price)}</h2>
                </div>
            </div>
        </div>
    )
}

export async function getStaticProps({ params: { slug } }) {
    const products_res = await fetch(`${API_URL}/api/products?filters[slug][$eq]=${slug}&populate=*`)
    const found = await products_res.json()
    const orders_res = await fetch(`${API_URL}/api/orders?populate=*`)
    const ff = await orders_res.json()
    return {
        props: {
            product: found.data[0],  //Because the API response for filters is an array
            order: ff.data[0]
        }
    }
}

export async function getStaticPaths() {
    //Retrieve all the possible paths
    const products_res = await fetch(`${API_URL}/api/products?populate=*`)
    const products = await products_res.json()
    //Return them to NextJS context
    return {
        paths: products.data.map(product => ({
            params: { slug: String(product.attributes.slug) }
        })),
        fallback: false //Tells NextJS to show a 404 if the param is not matched
    }
}

export default Product
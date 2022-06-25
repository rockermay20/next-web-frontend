import Head from 'next/head'
import styles from '../styles/Servicios.module.css'
import Header from '../components/Header'
import { useRouter } from 'next/router'

export default function Servicios() {
    const router = useRouter()
    const serv = router.query['s']
    return (
        <div>
            <Header />
            <div className={styles.container}>
                <Head>
                    <title>Transcripnet - Tienda</title>
                    <meta name="description" content="Tienda de Transcripnet" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                {
                    (serv === 'crip') ? (<img src='imgs/red.png'/>) : 
                        (serv === 'audios') ? (<img src='imgs/audio.png'/>) :
                            (serv === 'grab') ? (<img src='imgs/cddvd.png'/>) :
                                (<img src='imgs/impresiones.png'/>)
                }
            </div>
        </div>
    )
}
/* eslint-disable react/display-name */
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Header.module.css'
import { useEffect, useRef } from 'react'

export default () => {
  const router = useRouter()
  const isHome = router.pathname === "/"
  const isAcc = router.pathname === "/account"
  const anterior = !isHome && !isAcc ? { pathname: '/login', query: { page: '/products/' + router.query.slug } } : { pathname: '/login', query: { page: router.pathname } }
  const goBack = (event) => {
    event.preventDefault()
    router.back()
  }
  const count = useRef(0);
  const menuref = useRef();
  useEffect(() => {
      count.current = count.current + 1;
      console.log("header renderizado: ",count.current);
      menuref.current.checked=false;
  });
  return (
    <div>
      <input type="checkbox" id={styles["menu"]} ref={menuref}></input>
      <nav className={styles.topmenu}>
        <h1 className={styles.logo}>
          <Link href="/"><a href="#">Transcrip <span>NET</span></a></Link>
        </h1>
        <label htmlFor={styles["menu"]} className={styles.menubar}>
          <svg xmlns="http://www.w3.org/2000/svg" width="0.88em" height="1em" viewBox="0 0 448 512"><path fill="currentColor" d="M0 96c0-17.67 14.33-32 32-32h384c17.7 0 32 14.33 32 32c0 17.7-14.3 32-32 32H32c-17.67 0-32-14.3-32-32zm0 160c0-17.7 14.33-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.67 0-32-14.3-32-32zm416 192H32c-17.67 0-32-14.3-32-32s14.33-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32z" /></svg>
        </label>
      </nav>
      <div className={styles.mainnav}>
        <div className={styles.list2}>
          <span><svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1em" viewBox="0 0 640 512"><path fill="currentColor" d="M400 32c26.5 0 48 21.49 48 48v256c0 26.5-21.5 48-48 48H266.7l10.6 32H352c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.67 0-32-14.3-32-32s14.33-32 32-32h74.7l10.6-32H48c-26.51 0-48-21.5-48-48V80c0-26.51 21.49-48 48-48h352zM64 96v224h320V96H64zm528-64c26.5 0 48 21.49 48 48v352c0 26.5-21.5 48-48 48h-64c-26.5 0-48-21.5-48-48V80c0-26.51 21.5-48 48-48h64zm-48 64c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32zm0 96h32c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16s7.2 16 16 16zm16 208c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32z"/></svg></span>
          <span>SERVICIOS</span>
        </div>
        <ul className={styles.unstyled + " " + styles.listhoverslide}>
          <li><Link href="/servicios?s=crip"><a>Transcripciones</a></Link></li>
          <li><Link href="/servicios?s=audios"><a>Audios a Texto</a></Link></li>
          <li><Link href="/servicios?s=grab"><a>Grabacion / serigrafiado CD/DVD</a></Link></li>
          <li><Link href="/servicios?s=impre"><a>Impresiones / Escaner</a></Link></li>
        </ul>
        <div className={styles.list2}>
          <span><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1.21em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 616 512"><path fill="currentColor" d="M602 118.6L537.1 15C531.3 5.7 521 0 510 0H106C95 0 84.7 5.7 78.9 15L14 118.6c-33.5 53.5-3.8 127.9 58.8 136.4c4.5.6 9.1.9 13.7.9c29.6 0 55.8-13 73.8-33.1c18 20.1 44.3 33.1 73.8 33.1c29.6 0 55.8-13 73.8-33.1c18 20.1 44.3 33.1 73.8 33.1c29.6 0 55.8-13 73.8-33.1c18.1 20.1 44.3 33.1 73.8 33.1c4.7 0 9.2-.3 13.7-.9c62.8-8.4 92.6-82.8 59-136.4zM529.5 288c-10 0-19.9-1.5-29.5-3.8V384H116v-99.8c-9.6 2.2-19.5 3.8-29.5 3.8c-6 0-12.1-.4-18-1.2c-5.6-.8-11.1-2.1-16.4-3.6V480c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32V283.2c-5.4 1.6-10.8 2.9-16.4 3.6c-6.1.8-12.1 1.2-18.2 1.2z"/></svg></span>
          <span>PRODUCTOS</span>
        </div>
        <ul className={styles.unstyled + " " + styles.listhoverslide}>
          <li><Link href="/productos?q=all"><a>Articulos a la venta</a></Link></li>
        </ul>
        <div className={styles.social}>
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer"  className={styles.goo}><span><svg xmlns="http://www.w3.org/2000/svg" width="0.67em" height="1em" viewBox="0 0 1024 1536"><path fill="currentColor" d="M768 512q0-106-75-181t-181-75t-181 75t-75 181t75 181t181 75t181-75t75-181zm256 0q0 109-33 179l-364 774q-16 33-47.5 52t-67.5 19t-67.5-19t-46.5-52L33 691Q0 621 0 512q0-212 150-362T512 0t362 150t150 362z"/></svg></span></a>  
          <a href="mailto:puntoentelaym@gmail.com" className={styles.gma}><span><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1536 1536"><path fill="currentColor" d="M768 658h725q12 67 12 128q0 217-91 387.5T1154.5 1440T768 1536q-157 0-299-60.5T224 1312T60.5 1067T0 768t60.5-299T224 224T469 60.5T768 0q300 0 515 201l-209 201Q951 283 768 283q-129 0-238.5 65T356 524.5T292 768t64 243.5T529.5 1188t238.5 65q87 0 160-24t120-60t82-82t51.5-87t22.5-78H768V658z"/></svg></span></a>
          <a href="mailto:puntoentel@outlook.com"className={styles.hma}><span><svg xmlns="http://www.w3.org/2000/svg" width="0.88em" height="1em" viewBox="0 0 448 512"><path fill="currentColor" d="M0 32h214.6v214.6H0V32zm233.4 0H448v214.6H233.4V32zM0 265.4h214.6V480H0V265.4zm233.4 0H448V480H233.4V265.4z"/></svg></span></a>
          <a className={styles.tel}><span><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1792 1792"><path fill="currentColor" d="m1189 1307l147-693q9-44-10.5-63t-51.5-7L410 877q-29 11-39.5 25t-2.5 26.5t32 19.5l221 69l513-323q21-14 32-6q7 5-4 15l-415 375l-16 228q23 0 45-22l108-104l224 165q64 36 81-38zm603-411q0 182-71 348t-191 286t-286 191t-348 71t-348-71t-286-191t-191-286T0 896t71-348t191-286T548 71T896 0t348 71t286 191t191 286t71 348z"/></svg></span></a>
          <a className={styles.was}><span><svg xmlns="http://www.w3.org/2000/svg" width="0.96em" height="1em" viewBox="0 0 1536 1600"><path fill="currentColor" d="M985 878q13 0 97.5 44t89.5 53q2 5 2 15q0 33-17 76q-16 39-71 65.5T984 1158q-57 0-190-62q-98-45-170-118T476 793q-72-107-71-194v-8q3-91 74-158q24-22 52-22q6 0 18 1.5t19 1.5q19 0 26.5 6.5T610 448q8 20 33 88t25 75q0 21-34.5 57.5T599 715q0 7 5 15q34 73 102 137q56 53 151 101q12 7 22 7q15 0 54-48.5t52-48.5zm-203 530q127 0 243.5-50t200.5-134t134-200.5t50-243.5t-50-243.5T1226 336t-200.5-134T782 152t-243.5 50T338 336T204 536.5T154 780q0 203 120 368l-79 233l242-77q158 104 345 104zm0-1382q153 0 292.5 60T1315 247t161 240.5t60 292.5t-60 292.5t-161 240.5t-240.5 161t-292.5 60q-195 0-365-94L0 1574l136-405Q28 991 28 780q0-153 60-292.5T249 247T489.5 86T782 26z"/></svg></span></a>
        </div>
      </div>
    </div>
  )
}
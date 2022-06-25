/* eslint-disable react/display-name */
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react'
import Modal from './Modal';
export default () => {
    const router = useRouter()
    const isSlug = router.pathname === "/products/[slug]"
    const [sm, setSm] = useState(false);
    const count = useRef(0);
    useEffect(() => {
        count.current = count.current + 1;
        console.log("footer renderizado: ",count.current);
    });
    return (
        <footer>
            <div style={{ display: "flex", justifyContent: "space-between", flexDirection: "row", alignItems: "center" }}>
                <div style={{ textAlign: "left" }}><img src={isSlug ? "../imgs/logoT.png" : "imgs/logoT.png"} height={30} style={{ padding: "5px" }} /></div>
                <div>JML - © 2022</div>
                <div style={{ textAlign: "right" }}>
                    <ul>
                        <li><a href="#" onClick={() => setSm(true)}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="currentColor" d="M20 16a5 5 0 0 0 10 0a1 1 0 0 0-.105-.447l-3.999-7.997a.891.891 0 0 0-.045-.081A1 1 0 0 0 25 7h-6.178A3.015 3.015 0 0 0 17 5.184V2h-2v3.184A3.015 3.015 0 0 0 13.178 7H7a1 1 0 0 0-.894.553l-4 8A1 1 0 0 0 2 16a5 5 0 0 0 10 0a1 1 0 0 0-.105-.447L8.617 9h4.56A3.015 3.015 0 0 0 15 10.815V28H6v2h20v-2h-9V10.816A3.015 3.015 0 0 0 18.822 9h4.56l-3.277 6.553A1 1 0 0 0 20 16ZM7 19a2.996 2.996 0 0 1-2.815-2h5.63A2.996 2.996 0 0 1 7 19Zm2.382-4H4.618L7 10.236ZM16 9a1 1 0 1 1 1-1a1 1 0 0 1-1 1Zm9 10a2.996 2.996 0 0 1-2.815-2h5.63A2.996 2.996 0 0 1 25 19Zm0-8.764L27.382 15h-4.764Z" /></svg><span>   Aviso Legal</span></a></li>
                    </ul>
                </div>
            </div>
            <Modal show={sm} onClose={() => setSm(false)}>   
                <h2>Condiciones de Uso</h2>
                <p>La utilizaci&oacute;n del sitio Web le otorga la condici&oacute;n de Usuario, e implica la aceptaci&oacute;n completa de todas las cl&aacute;usulas y condiciones de uso incluidas:</p>
                <ul>
                    <li>Aviso Legal</li>
                    <li>Pol&iacute;tica de Privacidad</li>
                    <li>Pol&iacute;tica de Cookies</li>
                </ul>
                <p>Si no estuviera conforme con todas y cada una de estas cl&aacute;usulas y condiciones abst&eacute;ngase de utilizar este sitio Web.</p>
                <p>El acceso a este sitio Web no supone, en modo alguno, el inicio de una relaci&oacute;n comercial con el Titular.</p>
                <p>A trav&eacute;s de este sitio Web, el Titular le facilita el acceso y la utilizaci&oacute;n de diversos contenidos que el Titular o sus colaboradores han publicadon por medio de Internet.</p>
                <p>A tal efecto, usted est&aacute; obligado y comprometido a NO utilizar cualquiera de los contenidos del sitio Web con fines o efectos il&iacute;citos, prohibidos en este Aviso Legal o por la legislaci&oacute;n vigente, lesivos de los derechos e intereses de terceros, o que de cualquier forma puedan da&ntilde;ar, inutilizar, sobrecargar, deteriorar o impedir la normal utilizaci&oacute;n de los contenidos, los equipos inform&aacute;ticos o los documentos, archivos y toda clase de contenidos almacenados en cualquier equipo inform&aacute;tico propios o contratados por el Titular, de otros usuarios o de cualquier usuario de Internet.</p>
                <h2>Mayor&iacute;a de edad</h2>
                <p>Usted debe tener al menos 18 a&ntilde;os de edad para usar los servicios ofrecidos por el Titular o la mayor&iacute;a de edad que se requiera su pa&iacute;s para utilizar el sitio Web. Debe tener al menos 13 a&ntilde;os de edad para usar el sitio Web o la mayor&iacute;a de edad que se requiera su pa&iacute;s.</p>
                <p>Adem&aacute;s de tener la edad m&iacute;nima requerida para usar el sitio Web en virtud de la ley aplicable, si no tiene la edad suficiente para poder aceptar nuestras condiciones en su pa&iacute;s, su padre, madre, o tutor deben aceptar nuestras condiciones en su nombre.</p>
                <h2>Medidas de seguridad</h2>
                <p>Debe ser consciente de que las medidas de seguridad de los sistemas inform&aacute;ticos en Internet no son enteramente fiables y que, por tanto el Titular no puede garantizar la inexistencia de virus u otros elementos que puedan producir alteraciones en los sistemas inform&aacute;ticos (software y hardware) del Usuario o en sus documentos electr&oacute;nicos y ficheros contenidos en los mismos aunque el Titular pone todos los medios necesarios y toma las medidas de seguridad oportunas para evitar la presencia de estos elementos da&ntilde;inos.</p>
                <h2>Contenidos</h2>
                <p>El Titular ha obtenido la informaci&oacute;n, el contenido multimedia y los materiales incluidos en el sitio Web de fuentes que considera fiables, pero, si bien ha tomado todas las medidas razonables para asegurar que la informaci&oacute;n contenida es correcta, el Titular no garantiza que sea exacta, completa o actualizada. El Titular declina expresamente cualquier responsabilidad por error u omisi&oacute;n en la informaci&oacute;n contenida en las p&aacute;ginas de este sitio Web.</p>
                <p>Queda prohibido transmitir o enviar a trav&eacute;s del sitio Web cualquier contenido ilegal o il&iacute;cito, virus inform&aacute;ticos, o mensajes que, en general, afecten o violen derechos de&nbsp;el Titular o de terceros.</p>
                <p>Los contenidos del Sitio Web tienen &uacute;nicamente una finalidad informativa y bajo ninguna circunstancia deben usarse ni considerarse como oferta de venta, solicitud de una oferta de compra ni recomendaci&oacute;n para realizar cualquier otra operaci&oacute;n, salvo que as&iacute; se indique expresamente.</p>
                <p>El Titular se reserva el derecho a modificar, suspender, cancelar o restringir el contenido del Sitio Web, los v&iacute;nculos o la informaci&oacute;n obtenida a trav&eacute;s del sitio Web, sin necesidad de previo aviso.</p>
                <p>El Titular no es responsable de los da&ntilde;os y perjuicios que pudieran derivarse de la utilizaci&oacute;n de la informaci&oacute;n del sitio Web o de la contenida en las redes sociales del Titular.</p>
                <h2>Pol&iacute;tica de cookies</h2>
                <p>El Titular s&oacute;lo obtiene y conserva la siguiente informaci&oacute;n acerca de los visitantes del Sitio Web:</p>
                <ul>
                    <li>El nombre de dominio del proveedor (PSI) y/o direcci&oacute;n IP que les da acceso a la red.</li>
                    <li>La fecha y hora de acceso al sitio Web.</li>
                    <li>La direcci&oacute;n de Internet origen del enlace que dirige al sitio Web.</li>
                    <li>El n&uacute;mero de visitantes diarios de cada secci&oacute;n.</li>
                    <li>La informaci&oacute;n obtenida es totalmente an&oacute;nima, y en ning&uacute;n caso puede ser asociada a un Usuario concreto e identificado.</li>
                </ul>
                <h2>Enlaces de inter&eacute;s a otros sitios Web</h2>
                <p>El Titular puede proporcionarle acceso a sitios Web de terceros mediante enlaces con la finalidad de informar sobre la existencia de otras fuentes de informaci&oacute;n en Internet en las que podr&aacute; ampliar los datos ofrecidos en el sitio Web.</p>
                <p>Estos enlaces a otros sitios Web no suponen en ning&uacute;n caso una sugerencia o recomendaci&oacute;n para que usted visite las p&aacute;ginas web de destino, que est&aacute;n fuera del control del Titular, por lo que Titular no es responsable del contenido de los sitios web vinculados ni del resultado que obtenga al seguir los enlaces.</p>
                <p>Asimismo, el Titular no responde de los links o enlaces ubicados en los sitios web vinculados a los que le proporciona acceso.</p>
                <p>El establecimiento del enlace no implica en ning&uacute;n caso la existencia de relaciones entre Titular y el propietario del sitio en el que se establezca el enlace, ni la aceptaci&oacute;n o aprobaci&oacute;n por parte del Titular de sus contenidos o servicios.</p>
                <p>Si accede a un sitio Web externo desde un enlace que encuentre en el Sitio Web usted deber&aacute; leer la propia pol&iacute;tica de privacidad del otro sitio web que puede ser diferente de la de este sitio Web.</p>
                <p>Propiedad intelectual e industrial</p>
                <p>Todos los derechos est&aacute;n reservados.</p>
                <p>Todo acceso a este sitio Web est&aacute; sujeto a las siguientes condiciones: la reproducci&oacute;n, almacenaje permanente y la difusi&oacute;n de los contenidos o cualquier otro uso que tenga finalidad p&uacute;blica o comercial queda expresamente prohibida sin el consentimiento previo expreso y por escrito de Titular.</p>
                <h2>Limitaci&oacute;n de responsabilidad</h2>
                <p>La informaci&oacute;n y servicios incluidos o disponibles a trav&eacute;s de este sitio Web pueden incluir incorrecciones o errores tipogr&aacute;ficos. De forma peri&oacute;dica el Titular incorpora mejoras y/o cambios a la informaci&oacute;n contenida y/o los Servicios que puede introducir en cualquier momento.</p>
                <p>El Titular no declara ni garantiza que los servicios o contenidos sean interrumpidos o que est&eacute;n libres de errores, que los defectos sean corregidos, o que el servicio o el servidor que lo pone a disposici&oacute;n est&eacute;n libres de virus u otros componentes nocivos sin perjuicio de que el Titular realiza todos los esfuerzos en evitar este tipo de incidentes.</p>
                <p>El Titular declina cualquier responsabilidad en caso de que existan interrupciones o un mal funcionamiento de los Servicios o contenidos ofrecidos en Internet, cualquiera que sea su causa. Asimismo, el Titular no se hace responsable por ca&iacute;das de la red, p&eacute;rdidas de negocio a consecuencia de dichas ca&iacute;das, suspensiones temporales de flujo el&eacute;ctrico o cualquier otro tipo de da&ntilde;o indirecto que pueda ser por causas ajenas al Titular.</p>
                <p>Antes de tomar decisiones y/o acciones con base a la informaci&oacute;n incluida en el sitio Web, el Titular le recomienda comprobar y contrastar la informaci&oacute;n recibida con otras fuentes.</p>
                <h2>Derecho de exclusi&oacute;n</h2>
                <p>Titular se reserva el derecho a denegar o retirar el acceso al sitio Web y los servicios ofrecidos sin necesidad de preaviso, a instancia propia o de un tercero, a aquellos usuarios que incumplan cualquiera de las condiciones de este Aviso Legal.</p>
                <h2>Jurisdicci&oacute;n</h2>
                <p>Este Aviso Legal se rige &iacute;ntegramente por la legislaci&oacute;n Boliviana.</p>
                <p>Siempre que no haya una norma que obligue a otra cosa, para cuantas cuestiones se susciten sobre la interpretaci&oacute;n, aplicaci&oacute;n y cumplimiento de este Aviso Legal, as&iacute; como de las reclamaciones que puedan derivarse de su uso, las partes acuerdan someterse a los Jueces y Tribunales del sistema juridico Boliviano, con renuncia expresa de cualquier otra jurisdicci&oacute;n que pudiera corresponderles.</p>
            </Modal>
        </footer>
    )
}
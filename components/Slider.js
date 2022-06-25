/* eslint-disable react/display-name */
import { useEffect, useRef } from 'react'
import styles from '../styles/Slider.module.css'

export default () => {
    const count = useRef(0);
    const tm = useRef(null);
    const isActive = useRef(false);
    const arr = [1, 2, 3, 4];
    const refs = useRef([]);
    const play = useRef();
    const stop = useRef();
    //let i = 0;
    const i = useRef(0);

    useEffect(() => {
        count.current = count.current + 1;
        console.log("slider renderizado: ",count.current);
    });
    useEffect(() => {
        refs.current[0].style.display = "block";
        to_play();
        return () => {clearInterval(tm.current);isActive.current=false;}
    }, []);

    const to_play = () => {
        if (!isActive.current) {
            stop.current.style.display="block";
            play.current.style.display="none";
            tm.current = setInterval(() => {
                if (i.current === 0) {
                    i.current++;
                } else {
                    refs.current[i.current - 1].style.display = "none";
                    if (i.current === arr.length) {
                        refs.current[0].style.display = "block";
                        i.current = 1;
                    } else {
                        refs.current[i.current].style.display = "block";
                        i.current++;
                    }
                }
            }, 10000);
            isActive.current = true;
        }
    };
    const to_stop = () => {
        if (isActive.current) {
            stop.current.style.display="none";
            play.current.style.display="block";
            clearInterval(tm.current);
            isActive.current = false;
        }
    };
    const handleN = (n) => {
        if (i.current !== 0) {
            if (n === -1) {
                if (i.current === 1) {
                    refs.current[0].style.display = "none";
                    refs.current[arr.length - 1].style.display = "block";
                    i.current = arr.length;
                } else {
                    refs.current[i.current - 1].style.display = "none";
                    refs.current[i.current - 2].style.display = "block";
                    i.current--;
                }
            } else {
                if (i.current === arr.length) {
                    refs.current[arr.length - 1].style.display = "none";
                    refs.current[0].style.display = "block";
                    i.current = 1;
                } else {
                    refs.current[i.current - 1].style.display = "none";
                    refs.current[i.current].style.display = "block";
                    i.current++;
                }
            }
        } else {
            i.current = 2;
            refs.current[0].style.display = "none";
            refs.current[1].style.display = "block";
        }
    };

    return (
        <div className={styles.container}>
            {arr.map((item, index) => {
                return (
                    <img
                        alt=""
                        key={index}
                        className={styles.imgs}
                        src={`../imgs/s${item}.png`}
                        ref={(element) => {refs.current[index] = element;}}
                    />
                );
            })}
            <div className={styles.btn_prev} onClick={() => {handleN(-1);}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="5em" height="5em" viewBox="0 0 48 48"><path fill="currentColor" d="m30.9 43l3.1-3.1L18.1 24L34 8.1L30.9 5L12 24z" /></svg>
            </div>
            <div className={styles.btn_next} onClick={() => {handleN(1);}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="5em" height="5em" viewBox="0 0 48 48"><path fill="currentColor" d="M17.1 5L14 8.1L29.9 24L14 39.9l3.1 3.1L36 24z" /></svg>
            </div>
            <div className={styles.play} id="btn_inicia" ref={play} onClick={to_play}>
                <svg xmlns="http://www.w3.org/2000/svg" width="5em" height="5em" viewBox="0 0 32 32"><path fill="currentColor" d="M11 23a1 1 0 0 1-1-1V10a1 1 0 0 1 1.447-.894l12 6a1 1 0 0 1 0 1.788l-12 6A1.001 1.001 0 0 1 11 23Zm1-11.382v8.764L20.764 16Z" /><path fill="currentColor" d="M16 4A12 12 0 1 1 4 16A12 12 0 0 1 16 4m0-2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Z" /></svg>
            </div>
            <div className={styles.stop} id="btn_pausa" ref={stop} onClick={to_stop}>
                <svg xmlns="http://www.w3.org/2000/svg" width="5em" height="5em" viewBox="0 0 32 32"><path fill="currentColor" d="M14 10h-2v12h2V10zm6 0h-2v12h2V10z" /><path fill="currentColor" d="M16 4A12 12 0 1 1 4 16A12 12 0 0 1 16 4m0-2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Z" /></svg>
            </div>
        </div>
    )
}
import React, { useEffect, useRef } from 'react'
import hoverEffect from 'hover-effect'
import gsap from 'gsap'
import { IonIcon } from '@ionic/react'

import logo from '../assets/img/sponsor-logo.png'
import img1 from '../assets/img/01.png'
import img2 from '../assets/img/02.png'
import diss from '../assets/img/diss.png'

import { 
    hOne,
    hTwo,
    hThree,
    txt,
    sponsorImg,
    sponsorTxt,
    distortion,
    overlayOne,
    overlayTwo,
    overlayThree,
} from '../Animation'

let tl = gsap.timeline()

const Header = () => {
    const tOne = useRef(null)
    const tTwo = useRef(null)
    const tThree = useRef(null)
    const text = useRef(null)
    const sImg = useRef(null)
    const sTxt = useRef(null)
    const distort = useRef(null)
    
    const one = useRef(null)
    const two = useRef(null)
    const three = useRef(null)

    useEffect(() => {        
        let distortEffect = new hoverEffect({
            parent: document.querySelector('.distortion'),
            intensity: 0.2,
            image1: img1,
            image2: img2,
            displacementImage: diss,
            imagesRatio: 380 / 300
        })

        // NAVBAR
        tl.staggerFrom(".navbar div", 1.5, {
            delay: 1.5,
            opacity: 0,
            y: "20",
            ease: "power3.inOut"
        }, 0.08)

        tl.staggerFrom(".media ul li", 1.5, {
            delay: 1.5,
            opacity: 0,
            x: "-20",
            ease: "power3.inOut"
        }, 0.08)
       
        hOne(tOne.current)
        hTwo(tTwo.current)
        hThree(tThree.current)
        txt(text.current)
        sponsorImg(sImg.current)
        sponsorTxt(sTxt.current)
        distortion(distort.current)

        overlayOne(one.current)
        overlayTwo(two.current)
        overlayThree(three.current)
    }, [])

    return (
        <>
            <div className="overlay first" ref={one}></div>
            <div className="overlay second" ref={two}></div>
            <div className="overlay third" ref={three}></div>

            <nav className="navbar">
                <div className="menu">
                    <IonIcon name="menu-outline"></IonIcon>
                </div>
                <div className="lang">eng</div>
                <div className="search">
                    <IonIcon name="search-outline"></IonIcon>
                </div>
            </nav>

            <div className="media">
                <ul>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Twitter</li>
                </ul>           
            </div>

            <div className="text">
                <h1>
                    <span className="hidetext" ref={tOne}>toni&guy</span>
                </h1>
                <h2 ref={tTwo}>duality</h2>
                <h3>
                    <span className="hidetext" ref={tThree}>collection 2017 <br/> duality</span>
                </h3>
                <p>
                    <span className="hidetext" ref={text}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde quis, delectus facere
                    neque sunt commodi quae
                    culpa dolores doloribus magnam?
                    </span>
                </p>
            </div>

            <div className="sponsor">
                <img src={logo} alt="" ref={sponsorImg}/>
                <p ref={sponsorTxt}>official sponsor</p>
            </div>

            <div className="distortion" ref={distort}></div>

        </>
    )
}

export default Header
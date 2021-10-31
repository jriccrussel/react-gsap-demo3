import gsap from "gsap"
import hoverEffect from 'hover-effect'

import img1 from './assets/img/01.png'
import img2 from './assets/img/02.png'
import diss from './assets/img/diss.png'

let tl = gsap.timeline()

// TEXT
export const hOne = (node) => {
    gsap.from(node, 1.5, {
        delay: 1,
        y: "100%",
        ease: "power3.inOut"
    })
}

export const hTwo = (node) => {
    gsap.from(node, 1.5, {
        delay: 1.5,
        opacity: 0,
        x: "-10000",
        ease: "power3.inOut"
    })
}

export const hThree = (node) => {
    gsap.from(node, 1.5, {
        delay: 1.2,
        y: "100%",
        ease: "power3.inOut"
    })
}

export const txt = (node) => {
    gsap.from(node, 1.5, {
        delay: 1.3,
        y: "100%",
        ease: "power3.inOut"
    })
}

// SPONSOR
export const sponsorImg = (node) => {
    gsap.from(node, 1.5, {
        delay: 1.5,
        opacity: 0,
        y: "20",
        ease: "power3.inOut"
    })
}

export const sponsorTxt = (node) => {
    gsap.from(node, 1.5, {
        delay: 1.6,
        opacity: 0,
        y: "20",
        ease: "power3.inOut"
    })
}

// DISTORTION
export const distortion = (node) => {
    gsap.from(node, 1.5, {
        delay: 2,
        opacity: 0,
        y: "20",
        ease: "power3.inOut"
    })
}

// OVERLAY
export const overlayOne = (node) => {
    gsap.to(node, 1.5, {
        delay: 0.5,
        top: "-100%",
        ease: "power3.inOut",
    })
}

export const overlayTwo = (node) => {
    gsap.to(node, 1.5, {
        delay: 0.7,
        top: "-100%",
        ease: "power3.inOut",
    })
}

export const overlayThree = (node) => {
    gsap.to(node, 1.5, {
        delay: 0.9,
        top: "-100%",
        ease: "power3.inOut",
    })
}
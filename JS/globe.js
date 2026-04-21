

import createGlobe from 'https://cdn.skypack.dev/cobe';

const canvas = document.getElementById("globeCanvas");
const container = document.querySelector('#gridSection4GlobeHolder');

const globe = createGlobe(canvas, {
    devicePixelRatio: 2,
    width: container.clientWidth * 2,
    height: container.clientWidth * 2,
    phi: 0,
    theta: 0.2,
    dark: 1.1,
    diffuse: 1.4,
    mapSamples: 34000,
    mapBrightness: 6,
    baseColor: [0.6, 0.4, 0.8],
    glowColor: [0.6, 0.6, 0.6],
})

// Animate the globe
let phi = 0
function animate() {
    phi += 0.005
    globe.update({ phi })
    requestAnimationFrame(animate)
}
animate();


///////////////////////// black hole /////////////////////////////////

let blackHoleVid = document.querySelector('#blackHoleVid');

if((window.innerWidth < 800) && (window.innerHeight < 900)){
    blackHoleVid.pause();
}
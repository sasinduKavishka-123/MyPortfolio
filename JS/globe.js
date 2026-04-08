

import createGlobe from 'https://cdn.skypack.dev/cobe';

const canvas = document.getElementById("globeCanvas");
const container = document.querySelector('#gridSection4GlobeHolder');
let phi = 0;


// noinspection JSUnusedGlobalSymbols
const globe = createGlobe(canvas,
    {
        devicePixelRatio: 2,
        width: 1000,
        height: 1000,
        phi: 0,
        theta: 0,
        dark: 1,
        diffuse: 1.2,
        mapSamples: 16000,
        mapBrightness: 18,
        baseColor: [0.1, 0.1, 0.1],
        markerColor: [1, 0, 0],
        glowColor: [1, 1, 1],
        onRender: (state) => {
            state.phi = phi;
            phi += 0.01;
        }
    });

// globe.toggle();


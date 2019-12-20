particlesJS("particles-js", {
    "particles": {
        "number": {
            "value":38, "density": {
                "enable": true, "value_area": 800
            }
        }
        , "color": {
            "value": "#000000"
        }
        , "shape": {
            "type":"circle", "stroke": {
                "width": 0, "color": "#000000"
            }
            , "polygon": {
                "nb_sides": 5
            }
            , "image": {
                "src": "img/github.svg", "width": 100, "height": 100
            }
        }
        , "opacity": {
            "value":0.5, "random":false, "anim": {
                "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false
            }
        }
        , "size": {
            "value":4.00851810096455, "random":true, "anim": {
                "enable": false, "speed": 41.41606395127522, "size_min": 0.1, "sync": false
            }
        }
        , "line_linked": {
            "enable": true, "distance": 96.2044344231492, "color": "#000000", "opacity": 0.4, "width": 1
        }
        , "move": {
            "enable":true, "speed":4.810221721157459, "direction":"top-right", "random":true, "straight":false, "out_mode":"out", "bounce":false, "attract": {
                "enable": true, "rotateX": 7856.695477890517, "rotateY": 7776.525115871227
            }
        }
    }
    , "interactivity": {
        "detect_on":"canvas", "events": {
            "onhover": {
                "enable": true, "mode": "grab"
            }
            , "onclick": {
                "enable": false, "mode": "push"
            }
            , "resize":true
        }
        , "modes": {
            "grab": {
                "distance":161.86813186813188, "line_linked": {
                    "opacity": 1
                }
            }
            , "bubble": {
                "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3
            }
            , "repulse": {
                "distance": 64.96637482552975, "duration": 0.4
            }
            , "push": {
                "particles_nb": 4
            }
            , "remove": {
                "particles_nb": 2
            }
        }
    }
    , "retina_detect":false
}

);


/*
var count_particles, stats, update;

stats=new Stats;
stats.setMode(0);
stats.domElement.style.position='absolute';
stats.domElement.style.left='0px';
stats.domElement.style.top='0px';
document.body.appendChild(stats.domElement);
count_particles=document.querySelector('.js-count-particles');
update=function() {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
        count_particles.innerText=window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
}

;
requestAnimationFrame(update);
;
*/
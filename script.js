document.querySelectorAll('.navbar-nav .nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
        var navbarToggler = document.querySelector('.navbar-toggler');
        var navbarCollapse = document.querySelector('.navbar-collapse');

        if (navbarToggler && navbarCollapse.classList.contains('show')) {
            navbarToggler.click(); 
        }
    });
});




document.addEventListener("DOMContentLoaded", function() {
    const logos = document.querySelectorAll(".dvd-logo");
    const container = document.getElementById("screensaver-container");

    logos.forEach(logo => {

        let speed = 1.25;

        let dx = speed * (Math.random() < 0.5 ? 1 : -1); 
        let dy = speed * (Math.random() < 0.5 ? 1 : -1); 
        let x = Math.floor(Math.random() * (container.clientWidth - logo.clientWidth));
        let y = Math.floor(Math.random() * (container.clientHeight - logo.clientHeight));

        function moveLogo() {

            x += dx;
            y += dy;

            if (x + logo.clientWidth > container.clientWidth) 
            {
                x = container.clientWidth - logo.clientWidth;
                dx = -dx; 
            } 
            else if (x < 0) 
            {
                x = 0;
                dx = -dx;
            }
            if (y + logo.clientHeight > container.clientHeight) 
            {
                y = container.clientHeight - logo.clientHeight;
                dy = -dy; 
            } 
            else if (y < 0) 
            {
                y = 0;
                dy = -dy; 
            }

            logo.style.left = x + "px";
            logo.style.top = y + "px";

            requestAnimationFrame(moveLogo);
        }

        moveLogo();
    });
});


particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff" /* White particles */
        },
        "shape": {
            "type": "polygon",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

const text = "Hello, this is a typewriter effect!";
const typingSpeed = 100; // Adjust speed (ms)

let i = 0;
function typeWriter() {
    if (i < text.length) {
        document.getElementById("typewriter-text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, typingSpeed);
    }
}

// Initialize the typing effect when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    typeWriter();
});
window.addEventListener('load', function() {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var headerImg = new Image();
    headerImg.onload = function () {

        var originalWidth = headerImg.width;
        headerImg.width = Math.round((50 * document.body.clientWidth) / 100);
        headerImg.height = Math.round((headerImg.width * headerImg.height) / originalWidth);

        var logo = {
            img: headerImg,
            x: (canvas.width / 2) - (headerImg.width / 2),
            y: (canvas.height / 2) - (headerImg.height / 2)
        }
        ctx.drawImage(logo.img, logo.x, logo.y, logo.img.width, logo.img.height);
    }
    headerImg.src = "./heading.png";

    class Particle {
        constructor() {
            this.x = 0;
            this.y = 0;
            this.size = 30;
        }
        draw() {
            ctx.fillRect(this.x, this.y, this.size, this.size)
        }
    }

    class Effect {
        constructor(width, height){
            this.width = width;
            this.height = height;
            this.particlesArray = [];
        }
        init(){
            this.particlesArray.push(new Particle());
        }
        draw(){
            this.particlesArray.forEach(particle => particle.draw())

        }
    }

    const effect = new Effect(canvas.width, canvas.height);
    effect.init();
    effect.draw();

    function animate() {

    }

    image1.onload = function() {
        
    };
    
});
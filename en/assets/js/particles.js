/* particles.js v2.0.0 */
var pJS = function(tag_id, params){

    var canvas_el = document.querySelector('#'+tag_id+' > .particles-js-canvas-el');
  
    /* particles.js variables with default values */
    this.pJS = {
      canvas: {
        el: canvas_el,
        w: canvas_el.offsetWidth,
        h: canvas_el.offsetHeight
      },
      particles: {
        number: {
          value: 400,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: '#fff'
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#ff0000'
          },
          polygon: {
            nb_sides: 5
          },
          image: {
            src: '',
            width: 100,
            height: 100
          }
        },
        opacity: {
          value: 1,
          random: false,
          anim: {
            enable: false,
            speed: 2,
            opacity_min: 0,
            sync: false
          }
        },
        size: {
          value: 20,
          random: false,
          anim: {
            enable: false,
            speed: 20,
            size_min: 0,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 100,
          color: '#fff',
          opacity: 1,
          width: 1
        },
        move: {
          enable: true,
          speed: 2,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: false,
            rotateX: 3000,
            rotateY: 3000
          }
        },
        array: []
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'grab'
          },
          onclick: {
            enable: true,
            mode: 'push'
          },
          resize: true
        },
        modes: {
          grab:{
            distance: 100,
            line_linked:{
              opacity: 1
            }
          },
          bubble:{
            distance: 200,
            size: 80,
            duration: 0.4
          },
          repulse:{
            distance: 200,
            duration: 0.4
          },
          push:{
            particles_nb: 4
          },
          remove:{
            particles_nb: 2
          }
        },
        mouse:{}
      },
      retina_detect: false,
      fn: {
        interact: {},
        modes: {},
        vendors:{}
      },
      tmp: {}
    };
  
    var canvas_class = 'particles-js-canvas-el';
    var exist_canvas = document.querySelector('#'+tag_id+' .'+canvas_class);
  
    /* remove canvas if exists into the tag_id element */
    if(exist_canvas){
      exist_canvas.remove();
    }
  
    /* create canvas element */
    var canvas_el = document.createElement('canvas');
    canvas_el.className = canvas_class;
  
    /* append canvas */
    var canvas = document.querySelector('#'+tag_id).appendChild(canvas_el);
  
    /* set size canvas */
    this.pJS.canvas.w = canvas_el.offsetWidth;
    this.pJS.canvas.h = canvas_el.offsetHeight;
  
    /* launch particles */
    this.fn.particlesCreate();
    this.fn.vendors.eventsListeners();
  
    return this.pJS;
  
  };
  
  pJS.prototype.fn = {
    particlesCreate: function(){
      /* code to create particles */
      var nb_particles = this.pJS.particles.number.value;
      for(var i = 0; i < nb_particles; i++){
        this.pJS.particles.array.push(this.fn.particle());
      }
    },
  
    particle: function(){
      /* code to create a single particle */
      var particle = {
        position: { x: Math.random() * this.pJS.canvas.w, y: Math.random() * this.pJS.canvas.h }
      };
      return particle;
    },
  
    vendors: {
      eventsListeners: function(){
        /* event listeners code */
        var canvas_el = this.pJS.canvas.el;
        canvas_el.addEventListener('mousemove', function(event){
          /* interaction code */
        });
      }
    }
  };
  
  /* to launch the particles */
  var particlesJS = function(tag_id, params){
    return new pJS(tag_id, params);
  };
  

const intro = document.querySelector('.intro');
const form = document.querySelector('.container');
const titulo = document.querySelector('.texto-principal');
const containerform = document.querySelector('.container-form');
const textform = document.querySelector('.texto-form');
/*mostrar preguntas al comenzar*/
const btnComenzar = document.querySelector('.btnComenzar');
btnComenzar.addEventListener('click', ()=>{
    

    intro.style.display = 'none';
    form.style.display = 'flex';
    titulo.style.display = 'none';
    containerform.classList.add('margin-top');
    textform.style.display = 'block';

})
/*volver al inicio*/
const btnInicio = document.querySelector('.inicio');
btnInicio.addEventListener('click', ()=>{

    intro.style.display = 'flex';
    form.style.display = 'none';
    titulo.style.display = 'block';
    containerform.classList.remove('margin-top');
    textform.style.display = 'none';
})




document.addEventListener('DOMContentLoaded', function() {
    const nextBtns = document.querySelectorAll('.next-btn');
    const prevBtns = document.querySelectorAll('.prev-btn');
    const slides = document.querySelectorAll('.slide');
    const progressCircles = document.querySelectorAll('.progress-circle');
    const progresslines = document.querySelectorAll('.progress-line');
    let currentSlide = 0;

    nextBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            changeSlide(1);
        });
    });

    prevBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            changeSlide(-1);
        });
    });

    function changeSlide(direction) {
        slides[currentSlide].classList.remove('active');
        currentSlide += direction;

        if (currentSlide < 0) {
            currentSlide = 0;
        } else if (currentSlide >= slides.length) {
            currentSlide = slides.length - 1;
        }

        slides[currentSlide].classList.add('active');

        updateProgress(currentSlide);
    }

    function updateProgress(step) {
        progressCircles.forEach((circle, index) => {
            if (index <= step) {
                circle.classList.add('active');
            } else {
                circle.classList.remove('active');
            }
        })
        progresslines.forEach((line, index) => {
            if (index <= step) {
                line.classList.add('active');
            } else {
                line.classList.remove('active');
            }
        }
    );
    }

    // Mostrar popup si existe
const popup = document.getElementById('no-results-popup');
    if (popup) {
        popup.style.display = 'block';
        document.querySelector('.close-btn').addEventListener('click', function() {
            popup.style.display = 'none';
        });
    }
});


//popup consultas canchas
const cerrarpop = document.querySelector('.consulta button.cerrar');
const abrirpop = document.querySelector('button.canchas');

abrirpop.addEventListener('click', ()=>{
    document.querySelector('.consulta').style.display = 'block';
} )

cerrarpop.addEventListener('click', ()=>{
    document.querySelector('.consulta').style.display = 'none';
} )

document.querySelector('.form-canchas').addEventListener('submit', (e) => {
    e.preventDefault();

    
    const nombre = document.querySelector('.form-canchas input[placeholder="Nombre"]').value;
    const localidad = document.querySelector('.form-canchas input[placeholder="Localidad"]').value;
    const cancha = document.querySelector('.form-canchas input[placeholder="Nombre de Cancha"]').value;
    const link = `https://wa.me/5491157202809?text=Hola PaddleShow! Quiero consultar por el servicio de canchas, mi nombre es ${nombre}, vivo en ${localidad} y mi club es ${cancha}`;
    window.location.href = link;
    setTimeout(() =>{
        document.querySelector('.consulta').style.display = 'none';
    }, 2000);

     
});

const cerrarpopMedico = document.querySelector('.consulta-medica button.cerrar-medico');
const abrirpopMedico = document.querySelector('.call-to-action2 button');

abrirpopMedico.addEventListener('click', ()=>{
    document.querySelector('.consulta-medica').style.display = 'block';
} )

cerrarpopMedico.addEventListener('click', ()=>{
    document.querySelector('.consulta-medica').style.display = 'none';
} )

document.querySelector('.form-salud').addEventListener('submit', (e) => {
    e.preventDefault();

    
    const nombre = document.querySelector('.form-salud input[placeholder="Nombre"]').value;
    const localidad = document.querySelector('.form-salud input[placeholder="Localidad"]').value;
  
    const link = `https://wa.me/5491157202809?text=Hola PaddleShow! Mi nombre e ${nombre}, vivo en ${localidad} y quiero potenciar mi salud.`;
    window.location.href = link;
    setTimeout(() =>{
        document.querySelector('.consulta-medica').style.display = 'none';
    }, 2000);

     
});

const slider = document.getElementById('myRange');
const value1 = document.getElementById('value1');
const value2 = document.getElementById('value2');

const thresholds = [40000, 70000, 100000, 300000, 400000];

// Establecer el valor inicial del slider y actualizar los valores mostrados
slider.value = thresholds[0];
value1.textContent = 0;
value2.textContent = thresholds[0];

slider.addEventListener('input', () => {
    const sliderValue = parseInt(slider.value, 10);

    // Encontrar el índice del umbral más cercano
    let index = thresholds.findIndex(t => sliderValue <= t);
    if (index === -1) index = thresholds.length - 1;

    // Ajustar el valor del slider al umbral más cercano
    slider.value = thresholds[index];
  
    // Actualizar los valores en pantalla
    if (index === thresholds.length - 1) {
        value1.style.display = 'none';
        value2.textContent = `Más de $${thresholds[thresholds.length - 2] + 1}`;
        value2.style.width = '150px';
    } else {
        value1.style.display = 'block';
        value2.style.width = '80px';
        value1.textContent = thresholds[index - 1] || 0;
        value2.textContent = thresholds[index];
    }
});



//logica de resultado

const paletas = [
    gama1={
        titulo1:'Redonda',
        descripcion1:'Mayor control, ideal si sos principiante.',
        imagen1:'https://res.cloudinary.com/dj3akdhb9/image/upload/v1723174160/paddleshow/gama1/redonda-removebg-preview_guityw.png',
        titulo2:'Gota',
        descripcion2:'Ideal si buscás buen equilibrio entre potencia y control.',
        imagen2:'https://res.cloudinary.com/dj3akdhb9/image/upload/v1723173661/paddleshow/gama1/gota-removebg-preview_gzt4kh.png',
        titulo3:'Diamante',
        descripcion3:'Mayor potencia, ideal si no sos principiante, ya que posee menos control.',
        imagen3:'https://res.cloudinary.com/dj3akdhb9/image/upload/v1723173664/paddleshow/gama1/diamante-removebg-preview_f0zisb.png',
        presentacionSin_Ploteo:`Paletas sin ploteo, de una marca líder mundial en fabricación.
        Con más de 30 años de trayectoria, siempre mejorando e innovando, y exportando a todo el mundo, principalmente a España.Sponsor oficial de jugadores de primera categoría internacional.
        `,
        marca1:'Sin_Ploteo',
        titulo4:'Fg Black Equilibrium',
        descripcion4:`
        <ul>
        <li>Formato gota: buen equilibrio entre potencia y control.</li>
        <li>Marco reforzado con carbono, para mayor durabilidad.</li>
        <li>Puente horizontal para anti vibración y más control. Hace una pala más sólida y te protege el brazo de la vibración de los golpes.</li>
        <li>Ideal para un juego equilibrado, por su excelente relación entre potencia y control.Para jugadores principiantes por su facilidad de uso.</li>
        </ul>

        `,
        imagen4:'https://res.cloudinary.com/dj3akdhb9/image/upload/v1723948865/paddleshow/gama1/Fg_Black_Equilibrium_marco_carbono-removebg-preview_xifoqr.png',
        presentacionFg:`Paletas sin ploteo, de una marca líder mundial en fabricación.
        Con más de 30 años de trayectoria, siempre mejorando e innovando, y exportando a todo el mundo, principalmente a España.Sponsor oficial de jugadores de primera categoría internacional.
        `,
        marca2:'Fg',
        gama:'gama1'
    },
    gama2={
        titulo1:'Cigio Nepal',
        descripcion1:`<ul>
            <li>De forma redonda, para mayor control.</li>

            <li>Superficie rugosa con textura 3D y relieve, para darle más efecto y tener más control.</li>

            <li>Marco reforzado con carbono, para mayor durabilidad.</li>

            <li>Doble puente vertical para anti vibración y más control. Hace una pala más sólida y te protege el brazo de la vibración de los golpes.</li>

            <li>Ideal si sos principiante o buscás más control.</li>

        </ul>`,
        imagen1:'https://res.cloudinary.com/dj3akdhb9/image/upload/v1723173782/paddleshow/gama2/Redonda_nuigwy.jpg',
        titulo2:'Cigio Baku',
        descripcion2:`<ul>
        <li>Formato gota: buen equilibrio entre potencia y control.

        <li>Superficie rugosa con textura 3D y relieve, para darle más efecto y tener más control.</li>

        <li>Marco reforzado con carbono, para mayor durabilidad.</li>

        <li>Puente vertical para anti vibración y más control. Hace una pala más sólida y te protege el brazo de la vibración de los golpes.</li>

        <li>Ideal si buscás equilibrio entre potencia y control.</li>

        
        </ul>`,
        imagen2:'https://res.cloudinary.com/dj3akdhb9/image/upload/v1723173781/paddleshow/gama2/Gota_1_wnhpp9.jpg',
        titulo3:'Cigio Ankara',
        descripcion3:`<ul>
        <li>Con formato diamante, para mayor potencia.</li>

        <li>Superficie rugosa con textura 3D y relieve, para darle más efecto y tener más control.</li>

        <li>Marco reforzado con carbono, para mayor durabilidad.</li>

        <li>Doble puente vertical para anti vibración y más control. Hace una pala más sólida y te protege el brazo de la vibración de los golpes.</li>

        <li>Ideal para potencia, si sos un jugador no principiante, ya que posee menos control.</li>

        </ul>`,
        imagen3:'https://res.cloudinary.com/dj3akdhb9/image/upload/v1723173780/paddleshow/gama2/Diamante_1_hvaptz.jpg',
        presentacion:`Cigio es el último lanzamiento de una de las fábricas más importantes de Argentina, con más de 15 años de trayectoria. 
    Lo mejor en diseño, calidad y precio para su gama.
    `,
    marca1:'Cigio',
    gama:'gama2'
    },
    gama3={
        titulo1:'Bullpadel',
        descripcion1:`<ul>
        <li>Marca líder mundial utilizada por jugadores top como Paquito Navarro, Fede Chingotto y Bea González, entre muchos.</li>

        <li>Modelo: Universe Control</li>

        <li>De forma redonda, para mayor control.</li>

        <li>Marco reforzado con carbono, para mayor durabilidad.</li>

        <li>Material interno: foam importado de alta calidad, para mayor control, sin perder potencia al rematar.</li>

        <li>Ideal si sos principiante o buscás más control.
        </li>
        </ul>`,
        imagen1:'https://res.cloudinary.com/dj3akdhb9/image/upload/v1723173908/paddleshow/gama3/Bullpadel_Universe_Control-removebg-preview_ubgnwv.png',
        titulo2:'Head Challenge',
        descripcion2:`<ul>
        <li>Marca líder mundial utilizada por jugadores top como Arturo Coello y Sanyo Gutiérrez, entre otros.</li>

        <li>Modelo: Challenge </li>

        <li>Formato gota: buen equilibrio entre potencia y control.</li>

        <li>Marco reforzado con carbono, para mayor durabilidad.</li>

        <li>El material interno es foam importado de alta calidad, lo que le da buen control y se sienten muy bien los golpes.</li>

        <li>Ideal si buscás un buen equilibrio entre potencia y control.</li>

        
        </ul>`,
        imagen2:'https://res.cloudinary.com/dj3akdhb9/image/upload/v1723173910/paddleshow/gama3/Head_Challenge_-removebg-preview_dtjq4q.png',
        titulo3:'Magnus Hans Diamente',
        descripcion3:`<ul>
            <li>Marca líder mundial, que fué utilizada por jugadores top como Federico Chiostri y Gonzalo Alfonso.</li>

            <li>Modelo: Hans</li>

           <li> Con formato diamante, para mayor potencia.</li>

            <li>Marco reforzado con carbono, para mayor durabilidad.</li>

            <li>Material interno: foam inglés de alta calidad, para mayor control, y se sienten muy bien los golpes.</li>

            <li>La pintura es acabado brillante, lo que la hace más resistente al desgaste.</li>

            <li>Ideal para potencia, si sos un jugador no principiante, ya que posee menos control.</li>

            
        </ul>`,
        imagen3:'https://res.cloudinary.com/dj3akdhb9/image/upload/v1723173911/paddleshow/gama3/Magnus_Hans_Diamante-removebg-preview_w0eova.png',
        presentacionBullpadel:'En ésta gama, tenemos las versiones nacionales de las marcas más importantes del mundo, las que usan los jugadores estrella de World Pádel Tour.',
        presentacionHead:'En ésta gama, tenemos las versiones nacionales de las marcas más importantes del mundo, las que usan los jugadores estrella de World Pádel Tour.',
        presentacionMagnus:'En ésta gama, tenemos las versiones nacionales de las marcas más importantes del mundo, las que usan los jugadores estrella de World Pádel Tour.',
        marca1:'Bullpadel',
        marca2:'Head',
        marca3:'Magnus',
        gama:'gama3'
    },
    gama4={
        titulo1:'Fg Black Control 12k',
        descripcion1:`<ul>
        <li>De forma redonda, para mayor control.</li>

        <li>Fullcarbon 12k, para mayor durabilidad, mejor calidad de golpe y protección del brazo contra la vibración.</li>

        <li>Material interno: Eva soft de alta calidad, excelente balance entre potencia y control.</li>

        <li>Ideal si buscás un excelente control de juego, y una muy buena potencia al rematar.</li>

        </ul>`,
        imagen1:'https://res.cloudinary.com/dj3akdhb9/image/upload/v1723174033/paddleshow/gama4/Fg_Black_Control_12k-removebg-preview_dsbqp2.png',
        titulo2:'Fg Atos',
        descripcion2:`<ul>
        <li>Formato gota: buen equilibrio entre potencia y control.</li>

       <li> Fullcarbon 12k, para mayor durabilidad, mejor calidad de golpe y protección del brazo contra la vibración.</li>

        <li>Material interno Eva soft, excelente relación entre potencia y control.</li>

        <li>Doble puente vertical para anti vibración y más control. Hace una pala más sólida y te protege el brazo de la vibración de los golpes.</li>

        <li>Ideal para un juego equilibrado, por su excelente relación entre potencia y control.</li>
        <li>Para jugadores principiantes por su facilidad de uso, pero también para avanzados, por la potencia y calidad excelente de sus materiales.</li>
  </ul>`,
        imagen2:'https://res.cloudinary.com/dj3akdhb9/image/upload/v1723174036/paddleshow/gama4/Fg_Atos_12k-removebg-preview_zaikwl.png',
        titulo3:'Fg Black Power 12k',
        descripcion3:`<ul>
       
         <li>Con formato diamante, para mayor potencia.</li>

         <li>Fullcarbon 12k, para mayor durabilidad, mejor calidad de golpe y protección del brazo contra la vibración.</li>

         <li>Material interno: foam importado de alta calidad, para mayor control, y se sienten muy bien los golpes.</li>

         <li>Ideal para potencia, si sos un jugador no principiante, ya que posee menos control.</li>

        
        </ul>`,
        imagen3:'https://res.cloudinary.com/dj3akdhb9/image/upload/v1723174034/paddleshow/gama4/Fg_Black_Power_12k-removebg-preview_tledwi.png',
        presentacionFg:'Fg es la marca propia de la fábrica más importante de Argentina, con más de 30 años de trayectoria. Exporta paletas a todo el mundo, principalmente a España, débito a sus altos estándares de calidad. Es lo mejor en relación precio calidad en esta gama a tal punto que los creadores de PaddleShow, teniendo acceso a todas las marcas, preferimos usar Fg. Es una marca que está creciendo muy rápido, porque además de su calidad y excelente precio, invierte constantemente en sponsorear y apoyar jugadores de primera categoría.',
        presentacionVairo:'Es reconocida por sus paletas de alta durabilidad y rendimiento, utilizando materiales premium y fabricando con estándares internacionales, exportando a todo el mundo, incluído España.Con más de 30 años en el mercado, Vairo es una marca argentina de confianza, respaldada por su historia y patrocinio de jugadores de élite.',
        titulo4:'Vairo Grapheno Confort 9.1',
        descripcion4:`<ul>
            <li>Formato: Redondo. Ofrece un punto dulce más amplio, facilitando el control y la manejabilidad.</li>

           <li>Material interno: Goma EVA. Proporciona una excelente amortiguación y absorción de impactos, lo que contribuye a la comodidad durante el juego y mejora la sensación en el golpeo.</li>

            <li>Material externo: Fibra de carbono y grafeno. Proporciona una mayor resistencia y rigidez a la paleta, mejorando su durabilidad y potencia.</li>

            <li>Ideal si priorizás el confort en cada golpe y deseás una paleta equilibrada en potencia y control, con una excelente respuesta en el juego.</li>

        </ul>`,
        imagen4:'https://res.cloudinary.com/dj3akdhb9/image/upload/v1723605459/paddleshow/gama4/Vairo__grapheno_confort_9-removebg-preview_hqcni1.png',
        titulo5:' Vairo Grapheno Speed 9.1',
        descripcion5:`<ul>
            <li>
            Formato:Lágrima. Combina potencia y control, ofreciendo un buen equilibrio entre ambos. </li>

             <li>Material interno: Goma EVA. Proporciona potencia y confort en el golpeo. </li>

             <li>Material externo: Carbono. Refuerza la estructura de la paleta, aportando rigidez y durabilidad, lo que mejora la potencia y la respuesta en el golpeo. Además, la inclusión de grafeno contribuye a una mayor resistencia y optimización del rendimiento. </li>

            <li>Ideal si deseás una paleta que te permita atacar con eficacia, sin sacrificar el control y la precisión. </li>

        </ul>`,
        imagen5:'https://res.cloudinary.com/dj3akdhb9/image/upload/v1723605466/paddleshow/gama4/Grapheno_Speed_9__1_-removebg-preview_zzllgk.png',
        marca1:'Fg',
        marca2:'Vairo',
        gama:'gama4'
    },
    gama5={
        titulo1:'ML10 Pro Cup 3k Luxury 2024',
        descripcion1:`<ul>
        <li>Formato: Redondo, balance bajo y punto dulce amplio, gran control. </li>

        <li>Material interno: Goma EVA HR3*</li>

        <li>Material externo: Fibra de carbono 3K. 
Le da una gran resistencia y durabilidad, sin sacrificar ligereza.
Excelente equilibrio entre control y potencia. Además, tiene un acabado rugoso, lo que ayuda a imprimir efectos en la pelota.
</li>

        <li>Ideal si buscás un equilibrio entre control y potencia, pero con una ligera inclinación hacia el control. Es una pala cómoda y manejable, que te permite defender con eficacia y atacar con control.
</li>

        </ul>`,
        imagen1:'https://res.cloudinary.com/dj3akdhb9/image/upload/v1723605813/paddleshow/gama5/Nox_ML10_Pro_Cup_3k_Luxury_2024-removebg-preview_xzags6.png',
        titulo2:'Agustín Tapia AT10 Genius 18k 2024',
        descripcion2:`<ul>
        <li>Formato: Gota. Diseñada para ofrecer un equilibrio perfecto entre potencia y control.</li>

       <li> Material interno: Goma Eva HR3*</li>

        <li>Material externo: Carbono 18K, lo que le da resistencia y durabilidad, además de proporcionar una excelente respuesta en el golpeo, combinando potencia y control.</li>
  </ul>`,
        imagen2:'https://res.cloudinary.com/dj3akdhb9/image/upload/v1723605805/paddleshow/gama5/Agust%C3%ADn_Tapia_AT10_Genius_18k_2024-removebg-preview_mqzk1b.png',
        titulo3:'Agustín Tapia AT Genius Attack 18k 2024',
        descripcion3:`<ul>
       
         <li>Formato: Diamante. Diseñada para maximizar la potencia en tus golpes.
</li>

         <li>Material interno: Goma EVA HR3*</li>

         <li>
Material externo: Carbono 18K. Proporciona una gran resistencia y durabilidad, además de una excelente respuesta en el golpeo, permitiendo generar una gran potencia en los golpes.
</li>

         <li>Es ideal si tenés un estilo de juego ofensivo y buscás realizar golpes contundentes desde cualquier posición en la cancha.</li>

        
        </ul>`,
        imagen3:'https://res.cloudinary.com/dj3akdhb9/image/upload/v1723605809/paddleshow/gama5/Agust%C3%ADn_Tapia_AT_Genius_Attack_18k_2024-removebg-preview_ekfmq9.png',
        titulo4:'Bullpadel Hack 03 Comfort 24',
        descripcion4:`<ul>
            <li>Formato: Diamante, para potenciar el ataque. </li>

           <li>Material interno: Goma Multieva*</li>

            <li>Material externo: fibra de vidrio Fibrix. Proporciona una mayor flexibilidad y confort en los golpes, mejorando el control y la sensación al impactar la bola.</li>

            <li>Es ideal si buscás una combinación equilibrada de potencia y control. Te da precisión y comodidad en tu juego.</li>

        </ul>`,
        imagen4:'https://res.cloudinary.com/dj3akdhb9/image/upload/v1723606263/paddleshow/gama5/Hack_03_Comfort_24-removebg-preview_cau25l.png',
        titulo5:'Bullpadel Vertex 04 Hybrid 24',
        descripcion5:`<ul>
            <li>
            Formato: Híbrido. Combina la forma redonda diamante, ofreciendo un balance entre control y potencia.  </li>

             <li>Material interno: Goma MultiEva* </li>

             <li>Material externo: Carbono 12k de alta calidad. Proporciona durabilidad, rigidez y una excelente respuesta en los golpes.
También tiene un acabado rugoso, que ayuda a mejorar el efecto en los golpes, permitiendo un mayor control sobre la dirección y el giro de la pelota.
 </li>

            <li>Es ideal si tenés un estilo de juego ofensivo, sin sacrificar el control en situaciones defensivas. Además, es ideal si te gusta jugar con efecto. </li>

        </ul>`,
        imagen5:'https://res.cloudinary.com/dj3akdhb9/image/upload/v1723606259/paddleshow/gama5/Bullpadel_Vertex_04_Hybrid_24-removebg-preview_zzkqic.png',
        titulo6:'Bullpadel Vertex 03 2023',
        descripcion6:`<ul>
            <li>
            Formato: Diamante. Diseñada específicamente para maximizar la potencia en los golpes.  </li>

             <li>Material interno: Goma Multieva* </li>

             <li>Material externo: carbono Xtend Carbon 12K, da mayor resistencia y durabilidad, además de ofrecer una excelente respuesta.

 </li>

            <li>Es ideal si buscas dominar tu juego de potencia, sin perder control. </li>

        </ul>`,
        imagen6:'https://res.cloudinary.com/dj3akdhb9/image/upload/v1723606271/paddleshow/gama5/Vertex_03_2023-removebg-preview_ceijyx.png', 
        marca1:'Nox',
        marca2:'Bullpadel',
        gama:'gama5',
        presentacionNox: 'Marca líder mundial utilizada por jugadores top como Agustín Tapia, Miguel Lamperti y Tino Libaak, entre muchos.*Goma EVA HR3. De alta densidad y recuperación rápida. Combinación de control y potencia.Tiene una alta memoria, porque recupera rápidamente su forma original después del impacto con la pelota, ofreciendo una sensación de golpeo más firme y preciso, ideal para jugadores que buscan un toque sólido en cada golpe.',
        presentacionBullpadel:'Marca líder mundial utilizada por jugadores top como Paquito Navarro, Fede Chingotto, Martín Di Nenno y Bea González, entre muchos.*Goma MultiEva: Compuesto por dos capas de goma de diferentes densidades: Capa exterior de mayor densidad, que proporciona una respuesta rápida y mayor potencia en los golpes más fuertes.Capa interior: De menor densidad, ofrece mayor absorción y control en los golpes más suaves.Esta combinación potencia situaciones de juego que requieren precisión y aquellas que demandan potencia.'
    }
]

console.log(paletas[1])

const submit = document.querySelector('button[type=submit]');


submit.addEventListener('click', (event) => {
    event.preventDefault();
    // Datos del formulario
    const altura = document.querySelector('#slider-form input[placeholder="Ingresa aqui tu altura"]').value;
    const peso = document.querySelector('#slider-form input[placeholder="Ingresa aqui tu peso"]').value;
    const potencia = document.querySelector('#slider-form #potencia').value;
    const ataque = document.querySelector('#slider-form #ataque').value;
    const categoria = document.querySelector('#slider-form #categoria').value;
    const lado = document.querySelector('#slider-form #lado').value;

    const valor = parseInt(value2.textContent.replace(/\D/g, ''), 10); // Obtén el valor como número
    console.log(valor);
    let gamaSeleccionada;

    // Determina la gama en función del valor del rango
    if (valor <= 40000) {
        console.log('1')
        gamaSeleccionada = paletas[0];
    } else if (valor <= 70000) {
        console.log('2')
        gamaSeleccionada = paletas[1];
    } else if (valor <= 100000) {
        console.log('3')
        gamaSeleccionada = paletas[2];
    } else if (valor <= 300000) {
        console.log('4')
        gamaSeleccionada = paletas[3];
    } else if (valor <= 350000) {
        console.log('5')
        gamaSeleccionada = paletas[4];
    }
    console.log(gamaSeleccionada);

    if (!altura || !peso || !valor) {
        return alert('Complete todos los datos para continuar la consulta');
    }

    // Crea la URL para la página de resultados pasando los datos necesarios como parámetros
    let url = `result.html?titulo1=${encodeURIComponent(gamaSeleccionada.titulo1)}&descripcion1=${encodeURIComponent(gamaSeleccionada.descripcion1)}&imagen1=${encodeURIComponent(gamaSeleccionada.imagen1)}&titulo2=${encodeURIComponent(gamaSeleccionada.titulo2)}&descripcion2=${encodeURIComponent(gamaSeleccionada.descripcion2)}&imagen2=${encodeURIComponent(gamaSeleccionada.imagen2)}&titulo3=${encodeURIComponent(gamaSeleccionada.titulo3)}&descripcion3=${encodeURIComponent(gamaSeleccionada.descripcion3)}&imagen3=${encodeURIComponent(gamaSeleccionada.imagen3)}&altura=${encodeURIComponent(altura)}&peso=${encodeURIComponent(peso)}&potencia=${encodeURIComponent(potencia)}&ataque=${encodeURIComponent(ataque)}&categoria=${encodeURIComponent(categoria)}&lado=${encodeURIComponent(lado)}&marca1=${encodeURIComponent(gamaSeleccionada.marca1)}&presentacion${gamaSeleccionada.marca1}=${encodeURIComponent(gamaSeleccionada['presentacion' + gamaSeleccionada.marca1])}&gama=${encodeURIComponent(gamaSeleccionada.gama)}`;

    if (gamaSeleccionada === paletas[0]){
        url += `&titulo4=${encodeURIComponent(gamaSeleccionada.titulo4)}&descripcion4=${encodeURIComponent(gamaSeleccionada.descripcion4)}&imagen4=${encodeURIComponent(gamaSeleccionada.imagen4)}&marca2=${encodeURIComponent(gamaSeleccionada.marca2)}&presentacion${gamaSeleccionada.marca2}=${encodeURIComponent(gamaSeleccionada['presentacion' + gamaSeleccionada.marca2])}`;
    }
    if (gamaSeleccionada === paletas[3] || gamaSeleccionada === paletas[4] ) {
        url += `&titulo4=${encodeURIComponent(gamaSeleccionada.titulo4)}&descripcion4=${encodeURIComponent(gamaSeleccionada.descripcion4)}&imagen4=${encodeURIComponent(gamaSeleccionada.imagen4)}&titulo5=${encodeURIComponent(gamaSeleccionada.titulo5)}&descripcion5=${encodeURIComponent(gamaSeleccionada.descripcion5)}&imagen5=${encodeURIComponent(gamaSeleccionada.imagen5)}&marca2=${encodeURIComponent(gamaSeleccionada.marca2)}&presentacion${gamaSeleccionada.marca2}=${encodeURIComponent(gamaSeleccionada['presentacion' + gamaSeleccionada.marca2])}`;
    }
    
    if (gamaSeleccionada === paletas[4]) {
        url += `&titulo6=${encodeURIComponent(gamaSeleccionada.titulo6)}&descripcion6=${encodeURIComponent(gamaSeleccionada.descripcion6)}&imagen6=${encodeURIComponent(gamaSeleccionada.imagen6)}`;
    }

    if (gamaSeleccionada === paletas[2]) {
        url += `&marca2=${encodeURIComponent(gamaSeleccionada.marca2)}&marca3=${encodeURIComponent(gamaSeleccionada.marca3)}&presentacion${gamaSeleccionada.marca3}=${encodeURIComponent(gamaSeleccionada['presentacion' + gamaSeleccionada.marca3])}&presentacion${gamaSeleccionada.marca2}=${encodeURIComponent(gamaSeleccionada['presentacion' + gamaSeleccionada.marca2])}`;;
    }

    // Redirecciona a la URL creada
    window.location.href = url; // Redirige a la página de resultados
});



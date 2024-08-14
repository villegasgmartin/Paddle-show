console.log(window.location)
window.addEventListener('DOMContentLoaded', (event) => {
    const params = new URLSearchParams(window.location.search);
    const container = document.querySelector('.paletas'); // Contenedor donde se agregarán los elementos dinámicos

    let index = 1;
    let marcaIndex = 1; // Índice para las marcas

    while (params.has(`titulo${index}`) && params.has(`descripcion${index}`) && params.has(`imagen${index}`)) {
        const titulo = params.get(`titulo${index}`);
        const descripcion = params.get(`descripcion${index}`);
        const imagen = params.get(`imagen${index}`);
        
        // Inserta h3 para marca1 antes del primer conjunto de 3 elementos
        if (index === 1 || index === 4) {
            const marca = params.get(`marca${marcaIndex}`);
            const h3 = document.createElement('h3');
            h3.textContent = marca;
            container.appendChild(h3);
            marcaIndex++; // Incrementa el índice de marca para la próxima iteración
        }

        // Crear el elemento div .paleta
        const paletaDiv = document.createElement('div');
        paletaDiv.classList.add('paleta');

        // Crear y agregar la imagen
        const img = document.createElement('img');
        img.src = imagen;
        paletaDiv.appendChild(img);

        // Crear y agregar el título (h2)
        const h2 = document.createElement('h2');
        h2.textContent = titulo;
        paletaDiv.appendChild(h2);

        // Crear y agregar la descripción (p)
        const p = document.createElement('p');
        p.innerHTML = descripcion;
        paletaDiv.appendChild(p);

        // Crear y agregar el botón de consulta
        const button = document.createElement('button');
        button.classList.add('button');
        const a = document.createElement('a');
        a.href = '#'; // Inicialmente vacío, se completará en el popup
        a.textContent = 'Consultar';
        a.target = '_blank';

        button.appendChild(a);
        paletaDiv.appendChild(button);

        // Agregar el div .paleta al contenedor
        container.appendChild(paletaDiv);

        // Agregar evento para abrir el popup
        button.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector('.consulta').style.display = 'block'; // Mostrar el popup
            const h3 = document.querySelector('.consulta-form h3.paleta-seleccionada');
            h3.textContent = titulo;
            
            document.querySelector('.consulta-form').addEventListener('submit', (e) => {
                e.preventDefault();
                const nombre = document.querySelector('.consulta-form input[placeholder="Nombre"]').value;
                const localidad = document.querySelector('.consulta-form input[placeholder="Localidad"]').value;
                const link = `https://wa.me/5491157202809?text=Hola PaddleShow! Quisiera consultar por la paleta ${titulo}, mi nombre es ${nombre} y vivo en ${localidad}, juego en la categoria ${categoria}, prefiero jugar del lado ${lado}, me gusta mas el/la ${ataque}, busco mejorar mi ${potencia}, mido ${altura} cm y peso ${peso} Kg`;
                window.location.href = link;
                setTimeout(() => {
                    document.querySelector('.consulta').style.display = 'none';
                }, 3000);
            });
        });

        index++;
    }

    // Si no hay ningún grupo de parámetros en la URL, redirige al index
    if (index === 1) {
        window.location.href = 'index.html';
    }
});



const cerrarpop = document.querySelector('.consulta-form button.cerrar');

cerrarpop.addEventListener('click', ()=>{
    document.querySelector('.consulta').style.display = 'none';
} )

const cerrarpopOtra = document.querySelector('.consulta-otra button.cerrar');

cerrarpopOtra.addEventListener('click', ()=>{
    document.querySelector('.consulta-otra').style.display = 'none';
} )


const abrirOtraConsulta = document.querySelector('.call-to-action1 button')
abrirOtraConsulta.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.consulta-otra').style.display = 'block'; // Mostrar el popup  

    // Evento para completar el enlace de WhatsApp
    document.querySelector('.consulta-otra').addEventListener('submit', (e) => {
        e.preventDefault();
        const nombre = document.querySelector('.consulta-form-otra input[placeholder="Nombre"]').value;
        const localidad = document.querySelector('.consulta-form-otra input[placeholder="Localidad"]').value;
        const marca = document.querySelector('.consulta-form-otra input[placeholder="Marca"]').value;
        const modelo = document.querySelector('.consulta-form-otra input[placeholder="Modelo"]').value;
    
        const link = `https://wa.me/5491157202809?text=Quisiera consultar por la paleta marca ${marca} y modelo ${modelo} mi nombre es ${nombre} y vivo en ${localidad}`;
        window.location.href = link;
        setTimeout(() =>{
            document.querySelector('.consulta-otra').style.display = 'none';
        }, 3000);

         
    });
})
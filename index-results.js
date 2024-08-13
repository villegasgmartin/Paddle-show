console.log(window.location)
window.addEventListener('DOMContentLoaded', (event) => {
    const params = new URLSearchParams(window.location.search);
    const container = document.querySelector('.paletas'); // Contenedor donde se agregarán los elementos dinámicos

    let index = 1;
    while (params.has(`titulo${index}`) && params.has(`descripcion${index}`) && params.has(`imagen${index}`)) {
        const titulo = params.get(`titulo${index}`);
        const descripcion = params.get(`descripcion${index}`);
        const imagen = params.get(`imagen${index}`);

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
            

            // Evento para completar el enlace de WhatsApp
            document.querySelector('.consulta-form').addEventListener('submit', (e) => {
                e.preventDefault();
                const nombre = document.querySelector('.consulta-form input[placeholder="Nombre"]').value;
                const localidad = document.querySelector('.consulta-form input[placeholder="Localidad"]').value;
                const link = `https://wa.me/5491157202809?text=Quisiera consultar por la paleta ${titulo}, mi nombre es ${nombre} y vivo en ${localidad}`;
                window.location.href = link;
                setTimeout(() =>{
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
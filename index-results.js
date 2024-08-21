//copyright Copyright (c)

const year = document.querySelector('#year');

const fecha = new Date;

year.textContent = fecha.getFullYear();



window.addEventListener('DOMContentLoaded', (event) => {
    const params = new URLSearchParams(window.location.search);
    const container = document.querySelector('.paletas');
    const pPresentacion = document.querySelector('.presentacion');
    const btnmarcas = document.querySelector('.botones');

     //query del form
     const altura = params.get('altura');
     const peso = params.get('peso');
     const potencia = params.get('potencia');
     const ataque = params.get('ataque');
     const categoria = params.get('categoria');
     const lado = params.get('lado');

    let index = 1;
    let marcaIndex = 1;

    while (params.has(`titulo${index}`) && params.has(`descripcion${index}`) && params.has(`imagen${index}`)) {
        const titulo = params.get(`titulo${index}`);
        const descripcion = params.get(`descripcion${index}`);
        const imagen = params.get(`imagen${index}`);
        const gama = params.get(`gama`);

        // Manejar las presentaciones de las marcas
        if ((gama == 'gama3' || gama == 'gama5') && (index === 1 || index === 2 || index === 3)) {
            const marca = params.get(`marca${marcaIndex}`);
            if (marca) {
                const divbtn = document.createElement('div');
                divbtn.classList.add('button-container');
                
                const button = document.createElement('button');
                button.textContent = marca;
                button.classList.add('button');
                button.dataset.marca = marca;
                button.dataset.presentacion = params.get(`presentacion${marca}`); // Almacenar la presentación en el botón
                
                divbtn.appendChild(button);
                btnmarcas.appendChild(divbtn);
            }
            marcaIndex++;
        }

        if (index === 1 || (index === 4 && gama != 'gama3' && gama != 'gama5')) {
            const marca = params.get(`marca${marcaIndex}`);
            if (marca) {
                const divbtn = document.createElement('div');
                divbtn.classList.add('button-container');
                
                const button = document.createElement('button');
                button.textContent = marca;
                button.classList.add('button');
                button.dataset.marca = marca;
                button.dataset.presentacion = params.get(`presentacion${marca}`); // Almacenar la presentación en el botón
                
                divbtn.appendChild(button);
                btnmarcas.appendChild(divbtn);
            }
            marcaIndex++;
        }
        
        // Crear el elemento div .paleta
        const paletaDiv = document.createElement('div');
        paletaDiv.classList.add('paleta');
        paletaDiv.dataset.marca = gama === 'gama3' ? params.get(`marca${Math.ceil(index)}`) : params.get(`marca${Math.ceil(index / 3)}`);

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
        const buttonConsulta = document.createElement('button');
        buttonConsulta.classList.add('button');
        const a = document.createElement('a');
        a.href = '#';
        a.textContent = 'Consultar';
        a.target = '_blank';

        buttonConsulta.appendChild(a);
        paletaDiv.appendChild(buttonConsulta);

        // Agregar el div .paleta al contenedor y ocultarlo inicialmente
        paletaDiv.style.display = 'none';
        container.appendChild(paletaDiv);

        // Agregar evento para abrir el popup
        buttonConsulta.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector('.consulta').style.display = 'block';
            const h3 = document.querySelector('.consulta-form h3.paleta-seleccionada');
            h3.textContent = titulo;

            document.querySelector('.consulta-form').addEventListener('submit', (e) => {
                e.preventDefault();
                const nombre = document.querySelector('.consulta-form input[placeholder="Nombre"]').value;
                const localidad = document.querySelector('.consulta-form input[placeholder="Localidad"]').value;
                const link = `https://wa.me/5491157202809?text=Hola PaddleShow! Quisiera consultar por la paleta ${titulo}, mi nombre es ${nombre} y vivo en ${localidad}, juego en la categoria ${categoria}, prefiero jugar del lado ${lado}, me gusta mas el/la ${ataque}, busco mejorar mi ${potencia}, mido ${altura} cm y peso ${peso} Kg`;
                window.open(link, '_blank');
                setTimeout(() => {
                    document.querySelector('.consulta').style.display = 'none';
                }, 3000);
            });
        });

        index++;
    }

    // Event listeners para los botones de marcas
    const marcaButtons = document.querySelectorAll('.button');

    marcaButtons.forEach(button => {
        button.addEventListener('click', () => {
            const marca = button.dataset.marca;
            const presentacion = button.dataset.presentacion;
            const paletas = document.querySelectorAll(`.paleta[data-marca="${marca}"]`);
            const sponsor = document.querySelector('.sponsor')
    
            // Restablecer la opacidad de todos los botones
            marcaButtons.forEach(btn => {
                btn.style.opacity = '1';
            });
    
            // Reducir la opacidad de los botones no seleccionados
            button.style.opacity = '1';
            marcaButtons.forEach(btn => {
                if (btn !== button) {
                    btn.style.opacity = '0.3';
                }
                if(btn.textContent == 'Consultar' || btn.textContent == '¡Quiero asesoramiento!') {
                    btn.style.opacity = '1';
                }
            
            });
            if(marca == 'Fg'){
                sponsor.style.display = 'flex';
            }else{
                sponsor.style.display = 'none';
            }
            // Ocultar todas las paletas primero
            document.querySelectorAll('.paleta.visible').forEach(paleta => {
                paleta.classList.remove('visible');
                setTimeout(() => {
                    paleta.style.display = 'none';
                }, 1500); // Espera hasta que termine la transición para ocultarlo
            });
    
            // Esperar a que las paletas se oculten antes de mostrar las nuevas
            setTimeout(() => {
                // Actualizar la presentación con animación
                pPresentacion.classList.remove('visible'); 
                setTimeout(() => {
                    pPresentacion.innerHTML = presentacion;
                    pPresentacion.classList.add('visible'); 
                }, 500); 
    
                // Mostrar solo las paletas correspondientes a la marca seleccionada
                paletas.forEach(paleta => {
                    paleta.style.display = 'block';
                    setTimeout(() => {
                        paleta.classList.add('visible');
                    }, 10); // Añade la clase visible después de hacer visible el elemento
                });
            }, 1500); // Espera hasta que todas las paletas se hayan ocultado
        });
    });
    

    
    if (index === 1) {
        window.location.href = 'index.html';
    }
});


//cerrar sponsor
const cerrarSponsor = document.querySelector('#cerrarSponsor');
const sponsor = document.querySelector('.sponsor')

cerrarSponsor.addEventListener('click', ()=>{
    sponsor.style.display = 'none';

})


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


    //query del form
    const params = new URLSearchParams(window.location.search);
    const altura = params.get('altura');
    const peso = params.get('peso');
    const potencia = params.get('potencia');
    const ataque = params.get('ataque');
    const categoria = params.get('categoria');
    const lado = params.get('lado');
    // Evento para completar el enlace de WhatsApp
    document.querySelector('.consulta-otra').addEventListener('submit', (e) => {
        e.preventDefault();
        const nombre = document.querySelector('.consulta-form-otra input[placeholder="Nombre"]').value;
        const localidad = document.querySelector('.consulta-form-otra input[placeholder="Localidad"]').value;
        const marca = document.querySelector('.consulta-form-otra input[placeholder="Marca"]').value;
        const modelo = document.querySelector('.consulta-form-otra input[placeholder="Modelo"]').value;
    
        const link = `https://wa.me/5491157202809?text=Quisiera consultar por la paleta marca ${marca} y modelo ${modelo} mi nombre es ${nombre} y vivo en ${localidad}, juego en la categoria ${categoria}, prefiero jugar del lado ${lado}, me gusta mas el/la ${ataque}, busco mejorar mi ${potencia}, mido ${altura} cm y peso ${peso} Kg`;
        window.location.href = link;
        setTimeout(() =>{
            document.querySelector('.consulta-otra').style.display = 'none';
        }, 3000);

         
    });
})





console.log(window.location)
window.addEventListener('DOMContentLoaded', (event) => {
    // Verifica si estás en la página de resultados
    
        console.log('esto en results')
        const params = new URLSearchParams(window.location.search);

           // Si no hay parámetros en la URL, redirige al index
           if (!params.has('titulo1') || !params.has('descripcion1') || !params.has('imagen1')) {
            window.location.href = 'index.html';
            return; // Detén la ejecución del código para evitar posibles errores
        }

        const titulo1 = params.get('titulo1');
        const descripcion1 = params.get('descripcion1');
        const imagen1 = params.get('imagen1');

        const titulo2 = params.get('titulo2');
        const descripcion2 = params.get('descripcion2');
        const imagen2 = params.get('imagen2');

        const titulo3 = params.get('titulo3');
        const descripcion3 = params.get('descripcion3');
        const imagen3 = params.get('imagen3');

        console.log(titulo1, titulo2)

        // Asigna los valores a los elementos correspondientes en tu HTML
        document.querySelector('.paleta:nth-child(1) h2').textContent = titulo1;
        document.querySelector('.paleta:nth-child(1) p').innerHTML = descripcion1;
        document.querySelector('.paleta:nth-child(1) img').src = imagen1;
        document.querySelector('.paleta:nth-child(1) a').href = `https://wa.me/5491157202809?text=Quisiera consultar por la paleta ${titulo1}`;

        document.querySelector('.paleta:nth-child(2) h2').textContent = titulo2;
        document.querySelector('.paleta:nth-child(2) p').innerHTML = descripcion2;
        document.querySelector('.paleta:nth-child(2) img').src = imagen2;
        document.querySelector('.paleta:nth-child(2) a').href = `https://wa.me/5491157202809?text=Quisiera consultar por la paleta ${titulo2} `;

        document.querySelector('.paleta:nth-child(3) h2').textContent = titulo3;
        document.querySelector('.paleta:nth-child(3) p').innerHTML = descripcion3;
        document.querySelector('.paleta:nth-child(3) img').src = imagen3;
        document.querySelector('.paleta:nth-child(3) a').href = `https://wa.me/5491157202809?text=Quisiera consultar por la paleta ${titulo3}`;
});
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
});

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
});


document.addEventListener('DOMContentLoaded', function() {
    const grande = document.querySelector('.grande');
    const puntos = document.querySelectorAll('.punto');

    puntos.forEach((punto, index) => {
        punto.addEventListener('click', () => {
            // Calcular el desplazamiento para mostrar la imagen correspondiente
            const desplazamiento = index * -33;
            grande.style.transform = `translateX(${desplazamiento}%)`;

            // Eliminar la clase 'activo' de todos los puntos
            puntos.forEach(punto => punto.classList.remove('activo'));
            // Agregar la clase 'activo' al punto actual
            punto.classList.add('activo');
        });
    });
});
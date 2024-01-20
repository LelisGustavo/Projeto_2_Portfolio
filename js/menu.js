const hamburguer = document.querySelector(".hamburguer");
const menuOne = document.querySelector(".menuOne");

hamburguer.addEventListener("click", () => {

    hamburguer.classList.toggle('active');
    menuOne.classList.toggle('active');

});

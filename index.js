const selectBreed = document.querySelector("#select-breed");
const gallery = document.querySelector(".gallery");

async function getBreeds() {
  const response = await fetch("https://dog.ceo/api/breeds/list/all");
  const data = await response.json();
  //convirtiendo a Array considerando de importante la keys
  const breeds = Object.keys(data.message);
  breeds.forEach(function (breed) {
    selectBreed.innerHTML += `
        <option value="${breed}">${breed}</option>
        `;
  });
}
getBreeds();

//change solo capta cada vez que cambian de opcion y es especifico para el select
selectBreed.addEventListener("change", async function () {
  const currentBreed = this.value;
  const response = await fetch(
    `https://dog.ceo/api/breed/${currentBreed}/images`
  );
  const data = await response.json();
  const images = data.message;
  //como images es un array se tien que hacer una iteración con forEach
  gallery.innerHTML = "";
  images.forEach((image) => {
    gallery.innerHTML += `
        <img src="${image}" loading="lazy"/>    
    `;
  });
});

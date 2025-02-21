const pocemonForm = document.querySelector("#form");
const poceInput = document.querySelector("#input");
const poceSort = document.querySelector("#select");
const pocebox = document.querySelector("#pokewrapper");

console.log(pocemonForm, poceInput, poceSort, pocebox);

function renderPokemon(poke) {
  pocebox.innerHTML = "";
  poke.forEach(Obyektlar => {
    pocebox.innerHTML += `
        <li>
          <span>${Obyektlar.num}</span>
          <h2>${Obyektlar.name}</h2>
          <img src="${Obyektlar.img}" alt="${Obyektlar.name}">
          <span>${Obyektlar.type.join(" || ")}</span>
        </li>
    `;
  });
}

if (typeof pokemons !== "undefined") {
  renderPokemon(pokemons);
}

poceInput.addEventListener("input", (e) => {
  e.preventDefault();
  
  const inputQiymati = poceInput.value.toLowerCase();

  const filterLanganlar = pokemons.filter(item => 
    item.name.toLowerCase().includes(inputQiymati)
  );

  renderPokemon(filterLanganlar);
});

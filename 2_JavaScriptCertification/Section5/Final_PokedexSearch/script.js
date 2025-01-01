// Page Elements
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const pName = document.getElementById("pokemon-name");
const pId = document.getElementById("pokemon-id");
const pWeight = document.getElementById("weight");
const pHeight = document.getElementById("height");
const pSprite = document.getElementById("show-case-image");
const pTypes = document.getElementById("types");
const pHp = document.getElementById("hp");
const pAttack = document.getElementById("attack");
const pDefense = document.getElementById("defense");
const pSpAttack = document.getElementById("special-attack");
const pSpDefense = document.getElementById("special-defense");
const pSpeed = document.getElementById("speed");

//Variables for data
let pokeData = [];

const fetchMon=async ()=>{
  //Clean and check input
  let inputCheck = searchInput.value.toLowerCase();
  console.log(inputCheck);
  // fetch pokemon using searchInput, catch errors
  try{
    const res = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${inputCheck}`);
    const data = await res.json();
    console.log(data.types);

    // Input data into each slot as needed
  pName.textContent = `${data.name.toUpperCase()}`;
  pId.textContent = `#${data.id}`;
  pWeight.textContent = `Weight: ${data.weight}`;
  pHeight.textContent = `Height: ${data.height}`;
  pHp.textContent = data.stats[0].base_stat;
  pAttack.textContent = data.stats[1].base_stat;
  pDefense.textContent = data.stats[2].base_stat;
  pSpAttack.textContent = data.stats[3].base_stat;
  pSpDefense.textContent = data.stats[4].base_stat;
  pSpeed.textContent =data.stats[5].base_stat;
  // set image
  pSprite.innerHTML = `<img id="sprite" src="${data.sprites.front_default}" alt="${data.name} default front sprite" />`;
  // set types
  pTypes.innerHTML = data.types.map(ind => `<p>${ind.type.name.toUpperCase()}</p>`).join("");
  }
  catch{
    alert("Pokémon not found");
  }
}

searchBtn.addEventListener("click",fetchMon);

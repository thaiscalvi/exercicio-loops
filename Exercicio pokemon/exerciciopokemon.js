const pokemons = require("./dadospokemon.js")

// 1. Exibir abaixo com o mesmo resultado
/*
Num [1] Bulbasaur Tipo Grass
Num [2] Ivysaur Tipo Grass
...
*/

/*
for (const element of pokemons) {
  console.log(`Num [${element.number}] ${element.name} Tipo ${element.type1}`)
}


pokemons.forEach(element => {
  console.log(`Num [${element.number}] ${element.name} Tipo ${element.type1}`)
});



// 2. Filtrar os pokemons pelo tipo 1 por grass, fire, water (Não entendi direito como ele entendeu no console log cada filtro)
const grass = pokemons.filter(element => element.type1 === "Grass")
const fire = pokemons.filter(element => element.type1 === "Fire")
const water = pokemons.filter(element => element.type1 === "Water")

console.log("Pokémons tipo Grass:");
grass.forEach(element => {
  console.log(`${element.name}`);
});

console.log("\nPokémons tipo Fire:");
fire.forEach(element => {
  console.log(`${element.name}`);
});

console.log("\nPokémons tipo Water:");
water.forEach(element => {
  console.log(`${element.name}`);
});



// 3. Filtrar/Encontrar os pokemons que nao tem 2 tipos. 
// Filter (opcional)
// For (opicional)

const semTipo2 = pokemons.filter(element => !element.type2);

console.log("Pokemons que não tem segundo tipo:")
semTipo2.forEach(element => {
  console.log(element.name)
})


// 4. Filtrar/Econtrar todos os pokemons do tipo 1 ou 2, que nao seja poison (Esse foi mais dificil)
// Filter (opcional)
// For (opicional)

const semPoison = pokemons.filter(element =>
  element.type1 !== "Poison" && element.type2 !== "Poison"
);

console.log("Pokémons que NÃO têm Poison nem em type1 nem em type2:");
semPoison.forEach(element => {
  let tipos = element.type1;
  if (element.type2) {
    tipos += `/${element.type2}`;
  }
  console.log(`Num [${element.number}] ${element.name} Tipo ${tipos}`);
});

*/

// 5. Fazer a exibição igual o primeiro exercicio, porem de tras para frente. 
// apenas com for.

for (let i = pokemons.length - 1; i >= 0; i--) {
  const element = pokemons[i];
  console.log(`Num [${element.number}] ${element.name} Tipo ${element.type1}`);
}



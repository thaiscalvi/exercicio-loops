const movies = [
    { id: 1, title: "The Matrix", year: 1999, genre: "Sci-Fi" },
    { id: 2, title: "Titanic", year: 1997, genre: "Romance" },
    { id: 3, title: "Avengers: Endgame", year: 2019, genre: "Action" },
    { id: 4, title: "Parasite", year: 2019, genre: "Thriller" },
    { id: 5, title: "Gladiator", year: 2000, genre: "Action" }
];
/*
//Ex1 - Use um for tradicional para exibir no console os títulos de todos os filmes.


for (let index = 0; index < movies.length; index++) {
  const element = movies[index];
  console.log(element.title);
}

// Ex2 - Use for...of para mostrar o gênero (genre) de cada filme da lista.

for (const element of movies) {
  console.log(element.genre)
}





//Exercício 3: Usando forEach - Use forEach para exibir a seguinte frase para cada filme: "O filme [título] foi lançado em [ano]."

movies.forEach(element => {
  console.log(`O filme ${element.title} foi lançado em ${element.year}.`);
});




//ex4- Usando for, crie um novo array chamado recentes apenas com filmes lançados depois de 2010.

const recentes = [];

for (let index = 0; index < movies.length; index++) {
  const element = movies[index];
  
  if (element.year > 2010){
    recentes.push(element);
  }
}
console.log(recentes);



// ex5- Use forEach para contar quantos filmes são do gênero "Action".

let contagem = 0;

movies.forEach(element => {
  if (element.genre === "Action"){
    contagem ++;
  }
});

console.log(`Filmes de ação: ${contagem}`);

*/

// Ex.6 - Use forEach com o índice (index) para imprimir:
//"[1] The Matrix"
//"[2] Titanic" E assim por diante.

movies.forEach((element , index) => {
    console.log(`[${index + 1}] ${element.title}`);
});
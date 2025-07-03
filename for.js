const movies = [
    { id: 1, title: "The Matrix", year: 1999, genre: "Sci-Fi" },
    { id: 2, title: "Titanic", year: 1997, genre: "Romance" },
    { id: 3, title: "Avengers: Endgame", year: 2019, genre: "Action" },
    { id: 4, title: "Parasite", year: 2019, genre: "Thriller" },
    { id: 5, title: "Gladiator", year: 2000, genre: "Action" }
];

/*
//Exercício 1 – Exibir os títulos dos filmes com a posição na lista

for (let index = 0; index < movies.length; index++) {
  console.log(`[${index + 1}] ${movies[index].title}`)
}


//Exercício 2 – Exibir apenas os filmes do gênero "Action" com o número na lista
let contador = 1;

for (let index = 0; index < movies.length; index++) {
  if (movies[index].genre === "Action") {
   console.log(`[${contador}] ${movies[index].title}`);
    contador++;
  }
}

// Exercício 3 – Mostrar só os filmes lançados antes do ano 2000
for (let index = 0; index < movies.length; index++) {
  if (movies[index].year < 2000 ){
    console.log(`${movies[index].title} foi lançado em ${movies[index].year}`)
  }
}


//Exercício 4 – Contar quantos filmes são do gênero "Action"
let quantidadeAction = 0
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].genre === "Action") {
      quantidadeAction++;
  }  
}
console.log(`Temos ${quantidadeAction} filmes de ação.`)

*/

//Exercício 5 – Somar os anos de lançamento de todos os filmes
let somaAnos = 0;
for (let i = 0; i < movies.length; i++) {
    somaAnos += movies[i].year;
}
    console.log(`A soma dos anos de lançamento são ${somaAnos}`)  

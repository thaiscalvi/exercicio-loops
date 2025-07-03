const movies = [
    { id: 1, title: "The Matrix", year: 1999, genre: "Sci-Fi" },
    { id: 2, title: "Titanic", year: 1997, genre: "Romance" },
    { id: 3, title: "Avengers: Endgame", year: 2019, genre: "Action" },
    { id: 4, title: "Parasite", year: 2019, genre: "Thriller" },
    { id: 5, title: "Gladiator", year: 2000, genre: "Action" }
];

/*

//Exercício 1 – Mostrar o título de todos os filmes com forEach - Objetivo: Percorrer o array movies e exibir apenas os títulos de cada filme.

movies.forEach(function(element){
  console.log(element.title)
}) 

movies.forEach((element) => {
  console.log(element.title)
})



//Exercício 2: Exibir títulos de filmes lançados após o ano 2000
//bjetivo: Utilize forEach para percorrer o array movies e exibir no console uma frase para cada filme lançado após o ano 2000, no formato:

movies.forEach(function(element){
  if (element.year >= 2000){
    console.log (element.title)
  }
})


//Exercício 3: Exibir mensagens personalizadas para cada filme, dizendo o gênero
//Objetivo: Usar forEach para percorrer o array movies e exibir a seguinte frase no console:
//O filme [título] é do gênero [gênero].

movies.forEach((element) => {
  console.log(`O filme ${element.title} é do genero ${element.genre}`)
})


//Exercício 4 – Exibir apenas os filmes do gênero “Action” com uma frase personalizada
//Objetivo: Usar forEach para percorrer o array movies e exibir no console uma frase somente para os filmes de ação (genre === "Action").
//"O filme Avengers: Endgame é um filme de ação imperdível!"

movies.forEach((element) => {
  if(element.genre === "Action") {
    console.log(`O filme ${element.title} é um filme de ação imperdível`)
  } else {
    console.log(`O filme ${element.title} não é um filme de ação, mas é um filme ótimo`)
  }
})

*/
//Exercício 5 – Exibir os títulos dos filmes que têm mais de 7 letras no título
//Objetivo: Utilizar forEach para percorrer o array movies e exibir uma mensagem apenas para os filmes cujo título tem mais de 7 caracteres.
//"O filme The Matrix tem um título longo."

movies.forEach((element) => {
  if (element.title.length > 7) {
    console.log(`O filme ${element.title} tem um título longo`)
  } 
})
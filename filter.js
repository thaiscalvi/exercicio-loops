const movies = [
    { id: 1, title: "The Matrix", year: 1999, genre: "Sci-Fi" },
    { id: 2, title: "Titanic", year: 1997, genre: "Romance" },
    { id: 3, title: "Avengers: Endgame", year: 2019, genre: "Action" },
    { id: 4, title: "Parasite", year: 2019, genre: "Thriller" },
    { id: 5, title: "Gladiator", year: 2000, genre: "Action" }
];

/*
//Exercício 1 com filter – Filtrar os filmes lançados depois de 2010

const filmesRecentes = movies.filter( filme => filme.year >2010)
console.log (filmesRecentes);


//🧪 Exercício 2 – Filtrar apenas os filmes do gênero "Action"

const filmeAction = movies.filter(element => element.genre === "Action" )
console.log (filmeAction)

//🧪 Exercício 3 – Filtrar filmes que NÃO são do gênero "Action"
const filmeAction = movies.filter(element => element.genre !== "Action" )
console.log (filmeAction)


//Exercício 4 – Filtrar filmes lançados entre os anos 2000 e 2010
const filmeEntre = movies.filter(element => element.year >=2000 && element.year <=2010 )
console.log (filmeEntre)


// Exercício 5 – Filtrar filmes cujo título contenha a letra "a"
const filmesComA = movies.filter(filme => filme.title.toLowerCase().includes("a"))
console.log (filmesComA)



//Exercício 6 – Filtrar filmes com título maior que 10 caracteres
const filmesLongos = movies.filter(element => element.title.length > 10)
console.log(filmesLongos)

*/
//Exercício 7 – Filtrar os filmes lançados em 2019
const filmes2019 = movies.filter(element => element.year === 2019)
console.log(filmes2019)
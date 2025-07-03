const movies = [
    { id: 1, title: "The Matrix", year: 1999, genre: "Sci-Fi" },
    { id: 2, title: "Titanic", year: 1997, genre: "Romance" },
    { id: 3, title: "Avengers: Endgame", year: 2019, genre: "Action" },
    { id: 4, title: "Parasite", year: 2019, genre: "Thriller" },
    { id: 5, title: "Gladiator", year: 2000, genre: "Action" }
];
/*
//1- Você quer percorrer o array movies e exibir frases como:
//"O filme The Matrix foi lançado em 1999.""
movies.forEach((element)=> {
  console.log(`O filme ${element.title} foi lançado em ${element.year}`)
})


//2- Você quer listar apenas os nomes (título) dos filmes, junto com o número da posição deles na lista (começando do 1), assim:1. The Matrix  - 2. Titanic (...)  

for(let i = 0; i < movies.length; i++){
console.log(`${i+1}. ${movies[i].title}`)
}


//3 Você quer acessar todas as propriedades (chaves e valores) do primeiro filme da lista movies e exibir no console assim:
//id: 1  
//title: The Matrix  
//year: 1999  
//genre: Sci-Fi

const primeiroFilme = movies[0];
for(const key in primeiroFilme){
  console.log(`${key}: ${primeiroFilme[key]}`)
}


//4 - Você quer percorrer o array movies e verificar quantos filmes são do ano de 2019.
//No final, você quer exibir no console:

let contador = 0;

movies.forEach((element)=>{
  if (element.year === 2019){
    contador ++
  }
})
console.log(`Há ${contador} filmes lançados em 2019`)
*/

//5 - Você quer criar uma lista com todos os títulos dos filmes que são do gênero "Action" e, ao final, exibir a lista. "Filmes de ação: Avengers: Endgame, Gladiator"

const filmesDeAcao = [];

movies.forEach((Element)=>{
  if(Element.genre === "Action"){
    filmesDeAcao.push(Element.title);
  }
})
console.log(`Filmes de ação: ${filmesDeAcao.join(",")}`)
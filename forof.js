const movies = [
    { id: 1, title: "The Matrix", year: 1999, genre: "Sci-Fi" },
    { id: 2, title: "Titanic", year: 1997, genre: "Romance" },
    { id: 3, title: "Avengers: Endgame", year: 2019, genre: "Action" },
    { id: 4, title: "Parasite", year: 2019, genre: "Thriller" },
    { id: 5, title: "Gladiator", year: 2000, genre: "Action" }
];

/*
//Exibir todos os títulos com o ano de lançamento

for (const element of movies) {
  console.log(`${element.title} ${element.year}`);
}



//Exibir apenas os filmes do gênero "Action"

for (const element of movies) {
  if (element.genre === "Action") {
    console.log(element.title)
  }
}

const filmesDeAcao =[]

for (const element of movies) {
  if(element.genre === "Action")
    filmesDeAcao.push(element.title);
  }

console.log(`Os filmes de ação são: ${filmesDeAcao.join(", ")}`);



//Exercício 3 – Contar quantos filmes foram lançados depois de 2000

let contador = 0

for (const element of movies) {
  if (element.year > 2000){
    contador++
  }
}

console.log(`Filmes lançados após 2000: ${contador}`)



//Exercício 4 – Criar um novo array com os títulos dos filmes
//Percorrer o array movies e adicionar apenas os títulos dos filmes em um novo array chamado titulos.

const titulos=[];
for (const element of movies) {
  titulos.push(element.title);
}

console.log(titulos)



//Exercício 5 – Exibir apenas os filmes que NÃO são do gênero "Action"

for (const element of movies) {
  if(element.genre !== "Action"){
    console.log(element.title , element.genre)
  }
}



// Exercício 6 – Exibir os filmes com numeração (estilo lista numerada)
let numero = 1;
for (const element of movies) {
  console.log(numero, element.title);
  numero ++
}


//Exercício 7 – Somar todos os anos de lançamento dos filmes

let somaAnos = 0
for (const element of movies) {
  somaAnos += element.year
}
console.log("A soma dos lançamentos é:" + somaAnos)


//Exercício 6 – Criar uma frase para cada filme com título e ano
for (const element of movies) {
  console.log(`O filme "${element.title}" foi lançado em ${element.year}.`);
}


//Exercício 7 – Exibir mensagens diferentes para filmes de ação e não ação
for (const element of movies) {
  if(element.genre === "Action"){
    console.log (`O filme ${element.title} é um filme de ação imperdível`) 
  } else {
      console.log(`O filme ${element.title} não é um filme de ação, mas vale a pena!`)
    }
}


//Exercício 8 – Contar quantos filmes existem por gênero

const contagemGeneros = {};

for (const filme of movies) {
  const genero = filme.genre;

  if (contagemGeneros[genero]) {
    contagemGeneros[genero]++;
  } else {
    contagemGeneros[genero] = 1;
  }
}

console.log(contagemGeneros);


//Exercício 9 – Criar um array só com os títulos dos filmes
const titulosFilmes = [];
for (const element of movies){
  titulosFilmes.push(element.title);
}
console.log(titulosFilmes)

*/
//Exercício 10 – Exibir os títulos dos filmes em letras maiúsculas
for (const element of movies) {
  console.log(element.title.toUpperCase());
}
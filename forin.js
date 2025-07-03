const movies = [
    { id: 1, title: "The Matrix", year: 1999, genre: "Sci-Fi" },
    { id: 2, title: "Titanic", year: 1997, genre: "Romance" },
    { id: 3, title: "Avengers: Endgame", year: 2019, genre: "Action" },
    { id: 4, title: "Parasite", year: 2019, genre: "Thriller" },
    { id: 5, title: "Gladiator", year: 2000, genre: "Action" }
];
/*

//Exercício 1 – Mostrar todas as propriedades (chaves) de um dos filmes
const primeiroFilme = movies [0]

for (const element in primeiroFilme) {
      console.log(element);
}


//Ex 2 - Mostrar todas as chaves e valores do primeiro filme

const primeiroFilme = movies [0];

for (const key in primeiroFilme) {
  console.log(key + ":", primeiroFilme[key]);
  }


//Exercício 3 – Exibir os nomes das propriedades de TODOS os filmes
for (const filme of movies) {
  console.log("-----");
  for (const chave in filme) {
    console.log(chave);
  }
}



//Exercício 4 – Exibir chaves e valores de TODOS os filmes
for (const filme of movies) {
  console.log("----- Filme -----");
  for (const chave in filme) {
    console.log(chave + ":", filme[chave]);
  }
}

// Exercício 5 – Criar um array com os nomes das propriedades do objeto "filme"
//Pegar o primeiro filme (movies[0]) e criar um novo array chamado propriedades, contendo apenas os nomes das propriedades dele (ou seja, as chaves).

const primeiroFilme = movies[0];
const propriedades = [];

for (const chave in primeiroFilme) {
  propriedades.push(chave);
}

console.log(propriedades);



// Exercício 6 – Exibir os nomes das propriedades e seus valores de TODOS os filmes
for (const element of movies) {
  console.log("---- Filme ----")

for (const key in element) {
  console.log(key + ":" +  element[key])
    
  }
}
  

*/

//Verificar se o objeto do filme possui a propriedade "genre"

for (const element of movies) {
  let temGenre = false;

  for (const key in element) {
    if (key === "genre") {
      temGenre = true;
    }
  }

  if (temGenre) {
    console.log(`O filme "${element.title}" possui a propriedade "genre".`);
  } else {
    console.log(`O filme "${element.title}" NÃO possui a propriedade "genre".`);
  }
}
/* 
    - Buscando e Contando dados em Arrays -

    Baseado no Array de Livros por categoria abaixo, faça os seguintes desafios

        * Contar o numero de categorias e numero livro em cada categoria
        * Contar o numero de autores
        * Monstrar livros do autor Augusto Cury 
        * Transformar a funcao acima em uma funcao que ira receber o nome do autor  e devolver os livros desse autor.
*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O Homem mais rico da babilonia",
                author: "George S. Clason", 
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter", 
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Voce e insubstituivel",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do seculo",
                author: "Augusto Cury", 
            },
            {
                title: "Os 7 habitos de pessoas altamente eficazes",
                author: "Stephen R. Covey", 
            },
        ],
    },
];

const totalCategories = booksByCategory.length

console.log(totalCategories);
for(let category of booksByCategory) {
    console.log('Total de livros da categoria: ', category.category)
    console.log(category.books.length)
}

function countAuthors() {
     let authors = [];

     for(let category of booksByCategory) {
        for(let book  of category.books) {
            if(authors.indexOf(book.author) == -1) {
                authors.push(book.author)
            }
        }
     }

     console.log("Total de autores: ", authors.length)
}

countAuthors();

function booksOf(author) {
    let books = [];

    for(let category of booksByCategory) {
       for(let book  of category.books) {
           if(book.author === author) {
               books.push(book.title)
           }
       }
    }

    console.log(`Livros do autor: ${author}: ${books.join(", ")}`)
}

booksOf('George S. Clason');

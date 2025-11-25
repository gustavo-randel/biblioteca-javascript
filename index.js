const Aplicativo = require('./Aplicativo')

const app = new Aplicativo()

app.criarAutor('J. R. R. Tolkien', 'British', '...')
app.criarAutor('Rick Riordan', 'American', '...')

const autores = app.getAutores()

app.criarLivro('O Hobbit', '...', 'fantasy', 300, autores[0], '...', 19.99, 100)
app.criarLivro('A Sociedade do Anel', '...', 'fantasy', 400, autores[0], '...', 24.99, 100)
app.criarLivro('O Ladrão de Raios', '...', 'fantasy', 500, autores[1], '...', 24.99, 100)
app.criarLivro('A Pirâmide Vermelha', '...', 'fantasy', 600, autores[1], '...', 24.99, 100)

const livros = app.getLivros()

app.criarUsuario('Isaac', 'isaac@email.com', '123456')

const usuarios = app.getUsuarios()

app.mostrarArmazem()

const items = [
  {
    produto: livros[0],
    quantidade: 2
  },
  {
    produto: livros[1],
    quantidade: 1
  },
  {
    produto: livros[3],
    quantidade: 1
  }
]

app.criarPedido(items, usuarios[0])

app.mostrarArmazem()
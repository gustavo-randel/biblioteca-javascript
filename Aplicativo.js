const Armazem = require('./Armazem')
const Autor = require('./entities/Autor')
const Livro = require('./entities/Livro')
const Pedido = require('./entities/Pedido')
const Posters = require('./entities/Posters')
const Usuario = require('./entities/Usuario')

module.exports =  class Aplicativo {
    static #armazem = new Armazem() 

    criarUsuario(nome, email, senha) {
        const usuario = new Usuario(nome, email, senha)
        Aplicativo.#armazem.salvarUsuario(usuario)
    }

    getUsuarios() {
        return Aplicativo.#armazem.find('usuarios')
    }

    criarAutor(nome, nacionalidade, bio) {
        const autor = new Autor(nome, nacionalidade, bio)
        Aplicativo.#armazem.salvarAutor(autor)
    }

    getAutores() {
        return Aplicativo.#armazem.find('autores')
    }

    criarLivro(titulo, sinopse, genero, paginas, autor, descricao, preco, emEstoque){
        const livro = new Livro(titulo, sinopse, genero, paginas, autor, descricao, preco, emEstoque)
        Aplicativo.#armazem.salvarLivro(livro)
    }

    adicionarLivro(nomeLivro, quantidade) {
        Aplicativo.#armazem.adicionarLivroEstoque(nomeLivro, quantidade)
    }

    getLivros() {
        return Aplicativo.#armazem.find('livros')
    }

    criarPoster(nome, descricao, altura, largura, preco, emEstoque){
        const poster = new Posters(nome, descricao, altura, largura, preco, emEstoque)
        Aplicativo.#armazem.salvarPoster(poster)
    }

    adicionarPoster(nomePoster, quantidade) {
        Aplicativo.#armazem.adicionarPostersEstoque(nomePoster, quantidade)
    }

    getPosters() {
        return Aplicativo.#armazem.find('posters')
    }

    criarPedido(items, usuario) {
        const pedido = new Pedido(items, usuario)
        Aplicativo.#armazem.salvarPedido(pedido)
        pedido.data.items.forEach(({ produto, quantidade}) => {
            if(produto instanceof Livro) {
                Aplicativo.#armazem.removerLivroEstoque(produto.nome, quantidade)
            } else if (produto instanceof Posters) {
                Aplicativo.#armazem.removerPostersEstoque(produto.nome, quantidade)
            }
        })
    }

    getPedidos() {
         return Aplicativo.#armazem.find('pedidos')
    }

    mostrarArmazem() {
        Aplicativo.#armazem.mostrarArmazem()
    }
}
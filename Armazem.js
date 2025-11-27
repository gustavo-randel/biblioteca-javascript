module.exports = class Armazem {
    #storage = {
        autores: [],
        livros: [],
        posters: [],
        pedidos: [],
        usuarios: []
    }

    find(key) {
        return this.#storage[key]
    }

    salvarAutor(autor) {
        this.#storage.autores.push(autor)
    }

    encontrarLivro(nomeLivro) {
        return this.#storage.livros.find(b => b.nome === nomeLivro)
    }

    salvarLivro(livro) {
       const livroExiste = this.encontrarLivro(livro.nome)
       if (!livroExiste) {
        this.#storage.livros.push(livro)
       }
    }

    adicionarLivroEstoque(nomeLivro, quantidade){
        const livro = this.encontrarLivro(nomeLivro)
        livro?.addEstoque(quantidade)
    }

    removerLivroEstoque(nomeLivro, quantidade){
        const livro = this.encontrarLivro(nomeLivro)
        livro?.removerEstoque(quantidade)
    }

     encontrarPosters(nomePoster) {
        return this.#storage.posters.find(b => b.nome === nomePoster)
    }

     salvarPoster(poster) {
        const posterExiste = this.encontrarPosters(poster.nome)
        if (!posterExiste) {
        this.#storage.posters.push(poster)
        }
     }

    adicionarPostersEstoque(nomePoster, quantidade){
        const poster = this.encontrarPosters(nomePoster)
        poster?.addEstoque(quantidade)
    }

    removerPostersEstoque(nomePoster, quantidade){
        const poster = this.encontrarPosters(nomePoster)
        poster?.removerEstoque(quantidade)
    }

    salvarUsuario(usuario) {
        const usuarioExiste = this.#storage.usuarios.find(u => u.email === usuario.email)
        if(!usuarioExiste) {
            this.#storage.usuarios.push(usuario)
        }
    }
    salvarPedido(pedido) {
        this.#storage.pedidos.push(pedido)
    }

    mostrarArmazem(){
        console.table(this.#storage.autores)
        console.table(this.#storage.livros)
        console.table(this.#storage.posters)
        console.table(this.#storage.usuarios)
        console.table(this.#storage.pedidos.map(pedido => pedido.data))
    }
}
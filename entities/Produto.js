module.exports = class Produto {
    constructor(nome, descricao, preco, emEstoque = 0) {
        this.nome = nome
        this.descricao = descricao
        this.preco = preco
        this.emEstoque = emEstoque
    }
    addEstoque (quantidade) {
        this.emEstoque += quantidade
    }
    removerEstoque (quantidade) {
        this.emEstoque -= quantidade
    }
}
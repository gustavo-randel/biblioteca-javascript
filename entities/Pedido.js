module.exports = class Pedido {
    #total
    #items
    #usuario
    constructor(items, usuario) {
        items.forEach(({produto, quantidade}) => {
            if (quantidade > produto.emEstoque) {
                throw new Error(`Quantidade insuficiente em estoque!`)
            }
        }) 
        this.#items = items
        this.#usuario = usuario
        this.#total = items.reduce((sum, {produto, quantidade}) => sum + (produto.preco * quantidade), 0)
    }
    get data() {
        return {
            items: this.#items,
            usuario: this.#usuario,
            total: this.#total
        }
    }
}
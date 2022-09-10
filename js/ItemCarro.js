class ItemCarro extends Producto {

    quantity = 0;
    _total = 0;

    constructor(producto, quantity) {
        super(producto);
        this.quantity = quantity;
    }

    get total () {
        return this.quantity * this.price;
    }

    set total(valor) {
        this._total = valor || this.total;
    }
}
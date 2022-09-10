// typescript
class ItemCarro extends Producto {

    // public / private / protected

    readonly IVA = 0.21;
    private _total = 0;
    public quantity = 0;

    constructor(producto, quantity) {
        super(producto);
        this.quantity = quantity;
        this.update();
    }

    private update() {
        this._total = (this.quantity * this.price) * (1 + this.IVA);
    }

    // getter
    get total () {
        return this._total;
    }
}
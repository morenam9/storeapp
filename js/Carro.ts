let Handlebars, $;
class Carro {

    items: Array<ItemCarro> = [];
    total = 0;
    quantity = 0;
    
    plantilla = Handlebars.compile(`
    {{#each items}}
        <li class="list-group-item d-flex justify-content-between lh-sm carro-item">
            <div class="d-flex">
                <i class="bi bi-trash me-2 btn-remover"></i>
                <h6 class="my-0"><span>{{this.quantity}}x - </span>{{this.name}}</h6>
            </div>
            <span class="text-muted">\${{this.total}}</span>
        </li>
    {{/each}}
    `);
    
    constructor() {
        console.log('Se instanció Carro');
    }

    add(producto) {
        const index = this.items.findIndex(function (p) {
            if (p.name === producto.name) {
                return true;
            }
        });
        
        if (index == -1) {
            const itemCarro = new ItemCarro(producto, 1);
            this.items.push(itemCarro);
        } else {
            const itemExistente = this.items[index];
            itemExistente.quantity++;
        }

        this.total += producto.price;
        this.quantity++;

        this.updateCart();
    }
    
    remove(indexCarro) {
        const itemCarro = this.items[indexCarro];
        this.total -= itemCarro.total;
        this.quantity -= itemCarro.quantity;
        this.items.splice(indexCarro, 1);

        this.updateCart();
    }

    static reset() {
        console.log('se ejecutó el método reset');
        /* Removemos del DOM los items previamente anidados en el carro */
        $('.carro-item').remove();
        /* Reseteamos el total */
        $('#total').html(`$0`);
        /* Actualizamos el contador */
        $('#contador').html(0);
    }

    updateCart() {
        const carritoHtml = this.plantilla({ items: this.items });
        const total = this.total;
        const quantity = this.quantity;

        Carro.reset();

        /* Agregamos al contenedor con el id "carrito" lo que obtuvimos de la plantilla del carro */
        $('#carrito').prepend(carritoHtml);
        /* Actualizamos el total */
        $('#total').html(`$${total}`);
        /* Actualizamos el contador */
        $('#contador').html(quantity);

        const self = this;
        $('.btn-remover').each(function (indexCarro) {
            $(this).click(function () {
                self.remove(indexCarro);
            });
        });
    }
}
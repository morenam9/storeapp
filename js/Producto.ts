class Producto {
     
    name: string = '';
    price: number = 0;
    img: string = '';
    features: Array<string> = [];

    plantilla = Handlebars.compile(`
    <div class="col mb-4">
        <div class="card">
            <img src="images/{{img}}" class="card-img-top" alt="{{name}}" height="300">
            <div class="card-header">
                \${{price}}
            </div>
            <div class="card-body">
                <h5>{{name}}</h5>
                {{#each features}}
                <p class="card-text mb-1">{{this}}</p>
                {{/each}}
                <a href="#" class="btn btn-primary btn-agregar">Agregar</a>
            </div>
        </div>
    </div>
    `);

    constructor(producto) {
        this.name = producto.name;
        this.price = producto.price;
        this.img = producto.img;
        this.features = producto.features;
    }

    render() {
        return this.plantilla({ 
            name: this.name, 
            price: this.price, 
            img: this.img, 
            features: this.features 
        });
    }
}


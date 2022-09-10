const productos = [
    {
        name: 'MacBook Air',
        price: 3500, 
        img: '01.jpg', 
        features: [
            'Memoria: 2 TB',
            'RAM: 8 núcleos'
        ] 
    }, 
    { name: 'iPad Pro', price: 500, img: '02.jpg', features: ['Memoria: 128 GB', 'RAM: 12GB'] },

    { name: 'Apple Pencil', price: 70, img: '03.jpg', features: ['Generacion: 1', 'Info: Magnético'] },

    { name: 'AirPods', price: 70, img: '04.jpg', features: ['Batería: 24 hs', 'Info: Inalámbricos'] },

    { name: 'Apple Watch', price: 2000, img: '05.jpg', features: ['Con conexión celular', 'Pantalla siempre activa'] },

    { name: 'Iphone 14 pro', price: 5000, img: '06.jpg', features: ['Memoria: 256 GB', 'RAM: 16GB'] }, 
];

const carrito = new Carro();

productos.forEach(function (prod) {
    const celular = new Producto(prod);
    const celularHtml = celular.render();
    $('#productos').append(celularHtml);
});

const botones = $('.btn-agregar');
botones.each(function (indexProducto) {
    const producto = productos[indexProducto];
    $(this).click(function () {
        carrito.add(producto);
    })
});

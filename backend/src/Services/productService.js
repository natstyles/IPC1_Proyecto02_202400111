//Lista de productos
let products = [];


//FUNCION PARA CREAR PRODUCTOS
exports.createProduct = (req, res) => {
    const{id_producto, nombre_producto, precio_producto, stock_producto} = req.body;

    const newProduct = {
        id_producto,
        nombre_producto,
        precio_producto,
        stock_producto
    }


    const val1 = products.find(product => product.id_producto === newProduct.id_producto || product.nombre_producto === newProduct.nombre_producto);
    console.log("val1",val1);

    //COMPROBAMOS SI EL PRODUCTO AGREGADO YA EXISTE MEDIANTE EL ID DEL PRODUCTO Y EL NOMBRE
    if(val1){
        return res.status(400).json({ message: 'El producto ya existe' });
        
    //COMPROBAMOS SI EL PRECIO DEL PRODUCTO ES MAYOR A 0    
    }else if(newProduct.precio_producto <= 0){
        return res.status(400).json({ message: 'El precio del producto no puede ser menor o igual a 0' });

    //COMPROBAMOS QUE EL STOCK SEA MAYOR O IGUAL A CERO    
    }else if(newProduct.stock_producto < 0){
        return res.status(400).json({ message: 'El stock del producto no puede ser menor a 0' });

    //CREAMOS EL PRODUCTO
    }else{
        products.push(newProduct);
        console.log(newProduct);
        res.status(200).json({ message: 'Producto creado' });
    }

}

exports.getProducts = (req, res) => {
    res.status(200).json(products);
}

//FUNCION PARA BORRAR PRODUCTOS
//ID DE PRODUCTO A BORRAR
exports.deleteProduct = (req, res) => {
    const{id_producto} = req.body;

    //BORRAMOS EL PRODUCTO CON EL ID ESPECIFICO
    products = products.filter(product => product.id_producto !== id_producto);

    res.status(200).json({ message: 'Producto eliminado' });
    console.log(products);
}



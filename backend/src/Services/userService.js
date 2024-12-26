//Lista de users
let users = [];

exports.login = (req, res) => {

    const {user, pass} = req.body;
    console.log(user, pass)

    if(user === 'skibidi' && pass === 'toilet'){
        res.status(200).json({ message: 'Acceso correcto' });
    }else{
        res.status(401).json({ message: 'Acceso incorrecto' });
    }

};


exports.createClient = (req, res) => {

    const {id_cliente, nombre, apellido, nit, edad} = req.body;
    const newClient = {
        id_cliente,
        nombre,
        apellido,
        nit,
        edad
    };

    //COMPROBAMOS SI EL CLIENTE AGREGADO YA EXISTE MEDIANTE EL ID DEL CLIENTE, NOMBRE Y SU NIT

    const val1 = users.some(user => user.id_cliente === newClient.id_cliente || user.nombre === newClient.nombre ||  (user.nit !== "C/F" && user.nit === newClient.nit) );

    console.log(val1);

    if(val1)
        return res.status(400).json({ message: 'El cliente ya existe' });

    //AÑADIMOS UN IDENTIFICADOR PARA SABER SI SON MAYORES O MENORES DE EDAD
    if(edad < 18){
        newClient.mayor_edad = false;
    }else{
        newClient.mayor_edad = true;
    }

    newClient.mayor_edad = edad >= 18 ? true : false;

    users.push(newClient);
    res.status(200).json({ message: 'Cliente creado' });
    console.log(newClient);
}

exports.getUsers = (req, res) => {
    res.status(200).json(users);
}
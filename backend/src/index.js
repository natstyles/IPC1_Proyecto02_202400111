const express = require('express');
const cors = require('cors'); // Importar cors
const userRouter = require('./Routes/userRouter');
const productRouter = require('./Routes/productRouter');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(cors());

app.use(userRouter);
app.use(productRouter);

app.get('/', (req, res)=>{
    res.status(200);
    res.send("Welcome to root URL of Server");
});


app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);

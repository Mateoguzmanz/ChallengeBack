const express = require('express');
const mongoose = require('mongoose'); 
const dotenv = require('dotenv'); 
const productosRouter = require('./routes/Productos');
const precioRouter = require('./routes/Precio');

dotenv.config();

const app = express();

app.use(express.json()); 
mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser:true,
    useUnifiedTopology: true
})
.then(() => console.log('Conexión exitosa a MongoDB'))
.catch(err => console.error('Error de conexión a MongoDB:', err));

app.use('/productos', productosRouter);
app.use('/precio', precioRouter); 

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Error en el servidor"); 
}); 

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor en ejecucion en el puerto ${PORT}`);
});
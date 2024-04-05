const moongose = require('mongoose'); 

const usuario = 'drenvio';
const contraseña = 'moM5f3AodwLE5d0A';
const host = 'ac-aemgtkt-shard-00-00.unqyghm.mongodb.net';
const puerto = '27017';
const nombreBaseDeDatos = 'ChallengeBackMGZ';

const cadenaConexion = `mongodb+srv://${usuario}:${contraseña}@${host}:${puerto}/${nombreBaseDeDatos}?retryWrites=true&w=majority`;

mongoose.connect(cadenaConexion, {
    userNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('conexion exitosa a MongoDB');
})
.catch((error)=> {
    console.error('Error de conexcion a MongoDb', error);
})

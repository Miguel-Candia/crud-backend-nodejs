const mongoose = require ('mongoose')

const DB_URL = `mongodb+srv://Miguel:eO69rNPbLKKcADFo@cluster0.rlbfj.mongodb.net/?retryWrites=true&w=majority`

module.exports = () => {

    const connect = () =>{

        mongoose.connect(
            DB_URL,
            {
              keepAlive: true,
              useNewUrlParser:true,
              useUnifiedTopology:true
                 
            },
            (err) => {
                if(err){
                    console.log('Error En conexion con DB');
                }else{
                    console.log('Conectado...');
                }
            }

        )
    }

    connect();


}
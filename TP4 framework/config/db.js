const mongoose = require('mongoose');
const ditenv = require('dotenv');
const uri = process.env.URI_MONGODB;
//const uri=`mongodb+srv://kouki:admin@cluster0.uizav.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
const connectDB = async() => {
    try{
await mongoose.connect(uri)
      .then(()=> console.log("Estabilised a connection to the database"))
      .catch(err => console.log("Something went wrong when connecting to th , err"));
    }catch ( error){
        console.error('Erreur de connexion à MongoDB :', error.message);
        process.exit(1);// Arrete le processus si la connexion échoue
    }
};
module.exports = connectDB;

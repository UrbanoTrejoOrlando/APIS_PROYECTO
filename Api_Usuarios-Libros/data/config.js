const mongoose = require("mongoose");
const connectDB = async()=>{
    const URL = "mongodb://libros:api4321@localhost:27019/";
    try {
        await mongoose.connect(URL);
        console.log("Database Running");
        
        }catch(error){
            console.error("Cant connect to database");
            console.error(error);

    }
    
}
module.exports = {connectDB};
import mongoose from "mongoose"

var db = {
    instance : null,
    isConnected: false
}

const handleDisconnection = (err) => {
    console.log("database disconnected!")
    db.isConnected = false
}

const connectSuccess = () => {
    console.log("Connected!")
    db.isConnected = true
}

async function connectToDatabase() {
    if ( !db.isConnected ) {
        try {
            console.log("Database is not connected attempting to connect...")
            db.instance = await mongoose.connect(process.env.MONGO_URI)
            
        } catch (error) {
            console.log(`error in establishing connection ${error}`)
            return
        }
        
        connectSuccess()
        mongoose.connection.addListener("disconnected", handleDisconnection)

        return db.instance
    }

    console.log("database is already connected")
    return db.instance
}

export default connectToDatabase;
import mongoose from "mongoose"

var db = {
    instance : null,
    isConnected: false
}

const handleDisconnection = (err) => {
    db.isConnected = false
    db.instance.removeAllListeners()
    console.log("database disconnected!")
}

const handleConnection = (instance) => {
    db.instance = instance.connection
    db.isConnected = true
    db.instance.addListener("disconnected", handleDisconnection)
    console.log("Connected!")
}

export async function connectToDatabase() {
    if ( !db.isConnected ) {
        try {
            console.log("Database is not connected attempting to connect...")
            await mongoose.connect(process.env.MONGO_URI).then((instance) => {
                handleConnection(instance)
            })
            
        } catch (error) {
            console.log(`error in establishing connection ${error}`)
            throw error
        } 
        
        return db.instance
    }

    console.log("database is already connected")
    return db.instance
}

export function getModel(model_name, schema) {
    const modelFunc = async () => {
        var connection = await connectToDatabase()
        return connection?.models[model_name] || connection?.model(model_name, schema)
    }
    return modelFunc
}
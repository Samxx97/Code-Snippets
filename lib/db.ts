import { PrismaClient } from '@prisma/client'

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.

const globalForPrisma = global as unknown as { prisma: PrismaClient }

export const prisma = globalForPrisma.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export default prisma

/*import mongoose from "mongoose"

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
}*/
const express = require('express')
const app = express()
var cors = require('cors')
require('dotenv').config()
const port = process.env.PORT || 8000
// const { Resend } = require('resend')
// const resend = new Resend(api_key)
// middleware
const corsOptions = {
    origin: ['http://localhost:5173', 'http://localhost:5174'],
    credentials: true,
    optionSuccessStatus: 200,
}
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASSWORD}@cluster0.iagloem.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;


const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});


// middleware 
app.use(cors(corsOptions))
app.use(express.json())

async function run() {
    const apartmentCollection = client.db("BUILDING_MANAGEMENT").collection("apartment");
    const usersCollection = client.db("BUILDING_MANAGEMENT").collection("user");
    const agreementCollection = client.db("BUILDING_MANAGEMENT").collection("agreement");

    try {
        // agreement data 
        app.post("/user", async (req, res) => {
            const data = req.body;
            const email = data.email;
            const query = { email: email }
            const resultQuery = await usersCollection.findOne(query)
            if (resultQuery) {
                return res.send(resultQuery)
            }
            const result = await usersCollection.insertOne(data)
            res.send(result)
        })


        app.get("/user/:email", async (req, res) => {
            const email = req.params.email;
            console.log(email)
            const query = { email: email };
            const result = await usersCollection.findOne(query)
            res.send(result)
        })

        // apartment data ?
        app.get("/apartment", async (req, res) => {
            const result = await apartmentCollection.find().toArray()
            res.send(result)
        })

        // agreement data 
        app.post("/agreement", async (req, res) => {
            const data = req.body;
            const result = await agreementCollection.insertOne(data)
            res.send(result)
        })

        // agreement get 
        app.get("/agreement/:email", async (req, res) => {
            const data = req.body;
            const result = await agreementCollection.insertOne(data)
            res.send(result)
        })



        // Connect the client to the server	(optional starting in v4.7)
        // Send a ping to confirm a successful connection
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
    }
}
run().catch(console.dir);




app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
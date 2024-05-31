const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
const corsConfig = {
  origin: ["http://localhost:5173/", "https://globeguidancehub-tourism.web.app"],
  credentials: true,
};
app.use(cors(corsConfig));
app.use(express.json());
// app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.irefuhm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    const touristsSpotCollection = client
      .db("globeGuidanceHubDB")
      .collection("touristsSpot");
    const usersCollection = client.db("globeGuidanceHubDB").collection("users");
    const countriesCollection = client.db("globeGuidanceHubDB").collection("Coutries");
    app.get("/countries", async (req, res) => {
      const cursor = countriesCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });
    app.get("/touristsSpotByCountries/:countryName", async (req, res) => {
      const countryName = req.params.countryName;
      const query = { countryName:countryName };
      const cursor = touristsSpotCollection.find(query);
      const result = await cursor.toArray();
      res.send(result);
    });
    app.get("/touristsSpot/:email", async (req, res) => {
      const email = req.params.email;
      const query = { userEmail: email };
      const cursor = touristsSpotCollection.find(query);
      const result = await cursor.toArray();
      res.send(result);
    });
    app.get("/touristsSpot", async (req, res) => {
      const cursor = touristsSpotCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });
    app.post("/touristsSpot", async (req, res) => {
      const newSpot = req.body;
      const result = await touristsSpotCollection.insertOne(newSpot);
      res.send(result);
    });
    app.post("/users", async (req, res) => {
      const newUser = req.body;
      const result = await usersCollection.insertOne(newUser);
      res.send(result);
    });
    app.get("/touristSpot/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await touristsSpotCollection.findOne(query);
      res.send(result);
    });
    app.put("/touristSpot/:id", async (req, res) => {
      const id = req.params.id;
      console.log(id);
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedTouristsSpot = req.body;
      const updatedTouristsSpotDoc = {
        $set: {
          image: updatedTouristsSpot.image,
          touristsSpotName: updatedTouristsSpot.touristsSpotName,
          countryName: updatedTouristsSpot.countryName,
          location: updatedTouristsSpot.location,
          shortDescription: updatedTouristsSpot.shortDescription,
          averageCost: updatedTouristsSpot.averageCost,
          seasonality: updatedTouristsSpot.seasonality,
          travelTime: updatedTouristsSpot.travelTime,
          totalVisitorsPerYear: updatedTouristsSpot.totalVisitorsPerYear,
        },
      };
      const result = await touristsSpotCollection.updateOne(
        filter,
        updatedTouristsSpotDoc,
        options
      );
      res.send(result);
    });
    app.delete("/touristSpot/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      console.log(id, query);
      const result = await touristsSpotCollection.deleteOne(query);
      res.send(result);
    });
    // await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("GlobeGuidanceHub server is running....");
});

app.listen(port, () => {
  console.log(`GlobeGuidanceHub Server is running on  port : ${port}`);
});

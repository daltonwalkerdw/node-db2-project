const express = require("express")
const db = require("./data/config")


const server = express()
const port = process.env.PORT || 5000


server.use(express.json())





server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})

server.post("/cars", async (req, res, next) => {
    try{
      const carData = req.body
      const [id] = await db("car-dealership").insert(carData)
      const newCar = await db("car-dealership").where({id})

      res.status(201).json(newCar)
    } catch (err) {
       next(err)
    }
})

server.get("/cars", async (req, res, next) => {
    try{
      const cars = await db("car-dealership")

      res.json(cars)
    } catch (err) {
       next(err)
    }
})

server.listen(port, () => {
	console.log(`Running at http://localhost:${port}`)
})

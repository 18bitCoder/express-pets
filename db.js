const dotenv = require("dotenv")
dotenv.config()
const { MongoClient } = require("mongodb")
const dns = require("dns")


dns.setServers(["1.1.1.1", "8.8.8.8"])

const client = new MongoClient(process.env.CONNECTIONSTRING)

async function start() {
  await client.connect()
  module.exports = client
  const app = require("./app")
  app.listen(process.env.PORT)
}

start()
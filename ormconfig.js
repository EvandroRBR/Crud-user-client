require("dotenv/config")

module.exports = [
  {
    name: 'default',
    type: 'mongodb',
    url: process.env.MONGO_DB_URL,
    useUnifiedTopology: true,
    authSourse: 'admin',
    database: 'crud_test',
    entities: ["./src/modules/**/infra/typeorm/schemas/**.ts"],

  }
]

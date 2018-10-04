module.exports = {

  development: {
    client: "pg",
    connection: "postgresql:///books-server"
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_url + "ssl=true"
  }
}
module.exports = {

  development: {
    client: "pg",
    connection: "postgres://localhost/sommstudy"
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL
  }

};

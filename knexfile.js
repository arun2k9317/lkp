module.exports = {
  development: {
    client: "pg",
    connection:
      process.env.DATABASE_URL ||
      "postgresql://localhost:5432/little_known_planet",
    migrations: {
      directory: "./src/migrations",
    },
    seeds: {
      directory: "./src/seeds",
    },
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: "./src/migrations",
    },
    seeds: {
      directory: "./src/seeds",
    },
  },
};

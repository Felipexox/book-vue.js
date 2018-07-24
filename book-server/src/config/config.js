module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'bookdb',
        user: process.env.DB_USER || 'bookdb',
        password: process.env.DB_PASS || 'bookdb',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './bookdb.sqlite'
        }
    }
}
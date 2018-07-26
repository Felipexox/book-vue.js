module.exports = (sequelize, DataTypes) => {
    const Books = sequelize.define('Books',{
        title: DataTypes.STRING,
        synopsis: DataTypes.TEXT,
        launchDate: DataTypes.STRING
    })

    return Books
}
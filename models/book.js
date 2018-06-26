module.exports = function (sequelize, DataTypes) {
    var babyBook = sequelize.define("babyBook", {
        // babyBook content
    });

    return babyBook;
};

// module.exports = function (sequelize, DataTypes) {
//     var Todo = sequelize.define("Todo", {
//         text: DataTypes.STRING,
//         complete: DataTypes.BOOLEAN
//     });
//     return Todo;
// };
module.exports = function (sequelize, DataTypes) {
    var BabyBook = sequelize.define("BabyBook", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 160]
            }
        },
        page1: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        page2: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        page3: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        page4: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        page5: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        page6: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });

    return BabyBook;
};

// module.exports = function (sequelize, DataTypes) {
//     var Todo = sequelize.define("Todo", {
//         text: DataTypes.STRING,
//         complete: DataTypes.BOOLEAN
//     });
//     return Todo;
// };
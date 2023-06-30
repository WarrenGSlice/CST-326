module.exports = (sequelize, Sequelize) => {
    const Menu = sequelize.define('Menu', {
        menu_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        dish_name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        price: {
          type: Sequelize.DECIMAL(12,2),
          allowNull: false
        },
        description: {
          type: Sequelize.TEXT,
          allowNull: true
        }
      }, {
        tableName: 'menu',
        timestamps: false
      });
  
    return Menu;
  };
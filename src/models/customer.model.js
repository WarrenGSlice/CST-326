module.exports = (sequelize, Sequelize) => {
    const Customer = sequelize.define('Customer', {
        customer_id: {
          type: DataTypes.INTEGER,
          primaryKey: true
        },
        user_name: {
          type: DataTypes.STRING
        },
        password: {
          type: DataTypes.STRING
        },
        first_name: {
          type: DataTypes.STRING
        },
        last_name: {
          type: DataTypes.STRING
        },
        dob: {
          type: DataTypes.DATEONLY
        },
        email: {
          type: DataTypes.STRING
        },
        phone_number: {
          type: DataTypes.STRING
        },
        street: {
          type: DataTypes.STRING
        },
        city: {
          type: DataTypes.STRING
        },
        state: {
          type: DataTypes.STRING
        },
        zip: {
          type: DataTypes.STRING
        }
      }, {
        tableName: 'customer',
        timestamps: false
      });

      return Customer;
}
import { sq } from "../config/db";
import { DataTypes } from "sequelize";

const Apartment = sq.define("apartment", {
     id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4, // Or DataTypes.UUIDV1
          primaryKey: true
     },
     address: {
          type: DataTypes.STRING,
          allowNull: false
     },
     rooms: {
          type: DataTypes.INTEGER,
          allowNull: false
     },
     owner: {
          type: DataTypes.STRING,
          allowNull: false
     },
     price: {
          type: DataTypes.DOUBLE,
          allowNull: false
     },
     currency: {
          type: DataTypes.STRING,
          allowNull: false,
          defaultValue: 'EGP'
     },
     type: {
          type: DataTypes.STRING,
          allowNull: false,
          defaultValue: 'apartment'
     },
     area: {
          type: DataTypes.DOUBLE,
          allowNull: false
     },
     compound: {
          type: DataTypes.STRING,
          allowNull: true
     }
});

(async () => {
     await sq.sync({
          alter: true
     });
     // Code here
})();

export default Apartment;
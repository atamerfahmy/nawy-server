import { Sequelize } from "sequelize";

export const sq = new Sequelize("postgres://ahmed:ahmed@localhost:5432/nawy")

export const testDbConnection = async () => {
    try {
        await sq.authenticate();
        await sq.sync();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};

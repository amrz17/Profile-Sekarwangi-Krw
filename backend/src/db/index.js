import { createPool } from "mysql2/promise";

// Database connection
const pool = createPool({
  port: 3306,
  password: "admin#123",
  host: "localhost",
  database: "test",
  user: "root",
});

const connectToDatabase = async () => {
  try {
    await pool.getConnection();
    console.log("MySQL Connection Successful ");
  } catch (error) {
    console.log("Database Connection Error");
    console.log(error);
    throw error;
  }
};

export { connectToDatabase, pool };

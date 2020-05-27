import dotenv from "dotenv";
dotenv.config();
import { ConnectionOptions } from "typeorm";
const { DB_ENDPOINT, DB_USERNAME, DB_PASSWORD, DB_NAME } = process.env;

const ConnectionOptions: ConnectionOptions = {
  type: "postgres",
  database: DB_NAME,
  synchronize: true,
  logging: true,
  entities: ["entities/**/*.*"],
  host: DB_ENDPOINT,
  port: 5432,
  username: DB_USERNAME,
  password: DB_PASSWORD,
};

export default ConnectionOptions;

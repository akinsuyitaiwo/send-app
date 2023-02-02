import { isEmpty } from "lodash";
// import logger from "pino";
import dotenv from "dotenv";

dotenv.config();

const config = {
	// logger: logger(),
	PORT: process.env.PORT,
	SQL_URL: process.env.SQL_URL as string,
	JWT_KEY: process.env.JWT_KEY as string,
	APP_NAME: process.env.APP_NAME,
	DB_USERNAME: process.env.DB_USERNAME,
	DB_PASSWORD: process.env.DB_PASSWORD,
	DB_HOST: process.env.DB_HOST,
	DATABASE: process.env.DATABASE,
	PAYSTACK_SECRET_KEY: process.env.PAYSTACK_SECRET_KEY,
	SEEDER_PASSWORD: process.env.SEEDER_PASSWORD
};

const absentConfig = Object.entries(config)
	.map(([key, value]) => [key, !!value])
	.filter(([, value]) => !value)
	.map(([key]) => key);

if (!isEmpty(absentConfig)) {
	throw new Error(`Missing Config: ${absentConfig.join(", ")}`);
}

export default config;

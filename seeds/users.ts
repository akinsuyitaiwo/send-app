import { Knex } from "knex";
import bcrypt from "bcrypt";
import config from "../src/config";

const seedPassword = config.SEEDER_PASSWORD as string;
const hash = bcrypt.hashSync(seedPassword, 10);

export async function seed(knex: Knex): Promise<void> {
	// Deletes ALL existing entries
	await knex("users").del();

	// Inserts seed entries
	await knex("users").insert([
		{
			id: "1", email: "akin@democredit.com", username: "admin", password: hash, balance: 10000
		},
		{
			id: "2", email: "tyler@democredit.com", username: "tyler", password: hash, balance: 1000
		},
		{
			id: "3", email: "taiwo@democredit.com", username: "taiwo", password: hash, balance: 5000
		},
	]);
}
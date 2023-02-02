import config from "./src/config";
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export default {
	development: {
		client: "mysql",
		connection: config.SQL_URL
	},

	staging: {
		client: "mysql",
		connection: config.SQL_URL,
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			tableName: "knex_migrations"
		}
	},

	production: {
		client: "mysql",
		connection: config.SQL_URL,
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			tableName: "knex_migrations"
		}
	}

};

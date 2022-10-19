import knex from "knex";

class DBContainer {
    constructor(config, tabla) {
        this.knex = knex(config);
        this.table = tabla;
        console.log(this.knex);
    }

    // Get
    async getAll() {
        try {
            return await this.knex.select('*').from(this.table);
        } catch (error) {
            throw new Error(error);
        }
        
    }
    // Post

    // Update

    // Delete
}

export default DBContainer;
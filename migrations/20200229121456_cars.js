
exports.up = async function(knex) {
    await knex.schema.createTable("car-dealership", (table) => {
        table.increments("id")
        table.integer("vin").notNull().unique()
        table.text("make").notNull()
        table.text("model").notNull()
        table.integer("mileage").notNull()
        table.text("transmission")
        
    })
  };
  
  exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("car-dealership")
  };
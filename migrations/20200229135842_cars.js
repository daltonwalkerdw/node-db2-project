
exports.up = async function(knex) {
    await knex.schema.alterTable("car-dealership", (table) => {
        table.text("carTitle")
    })
  };
  
  exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("car-dealership")
  };
  
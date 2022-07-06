/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .createTable('categories', table => {
      table.increments('id').primary();
      table.string('name').notNullable().unique();
      table.string('url').notNullable();
      table.timestamps(true, true);
    })
    .createTable('questions', table => {
      table.increments('id').primary();
      table.integer('category_id').notNullable().references('id').inTable('categories');
      table.string('question').notNullable();
      table.timestamps(true, true);
    })
    .createTable('answers', table => {
      table.increments('id').primary();
      table.integer('question_id').notNullable().references('id').inTable('questions');
      table.string('answer').notNullable();
      table.boolean('is_correct').notNullable();
      table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
    .dropTable('questions')
    .dropTable('categories');
};
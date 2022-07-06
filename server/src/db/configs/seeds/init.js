/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('categories').del()
  await knex('categories').insert(require('../../lib/categories.json'));
  await knex('questions').del()
  await knex('questions').insert(require('../../lib/questions.json'));
  await knex('answers').del();
  await knex('answers').insert(require('../../lib/answers.json'));
};
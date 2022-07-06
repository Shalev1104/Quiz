import knex from '../db';
import Tables from '../schema/tables';
import Question, { GetQuestionsByCategory } from '../schema/question';

export const questionsByCategory: GetQuestionsByCategory = async categoryId => {
    return await knex<Question>(Tables.Questions)
    .select([
        `${Tables.Questions}.question`,
        knex.raw(`array_agg(json_build_object
            ('answer',${Tables.Answers}.answer,
            'correct', ${Tables.Answers}.is_correct)) as answers`)
    ])
    .join(Tables.Answers, `${Tables.Answers}.question_id`, '=', `${Tables.Questions}.id`)
    .where(`${Tables.Questions}.category_id`, categoryId)
    .groupBy(`${Tables.Questions}.id`);
}
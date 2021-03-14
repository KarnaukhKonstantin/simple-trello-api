const { Model } = require('objection');
const DB = require('../../db/knex');
Model.knex(DB);

class Group extends Model {
    static get tableName() {
        return 'groups';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['name'],

            properties: {
                id: { type: 'integer' },
                name: { type: 'string' },
                created_at: { type: ['string', 'null'] },
                updated_at: { type: ['string', 'null'] },
            }
        };
    }

    static get idColumn() {
        return 'id';
    }

    static get relationMappings() {
        const Task = require('./Task');

        return {
            tasks: {
                relation: Model.HasManyRelation,
                modelClass: Task,
                join: {
                    from: 'groups.id',
                    to: 'tasks.group_id'
                }
            }
        };
    }
}

module.exports = Group;
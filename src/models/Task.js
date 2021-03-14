const { Model } = require('objection');

class Task extends Model {
    static get tableName() {
        return 'tasks';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            // required: ['group_id', 'order'],

            properties: {
                id: { type: 'integer' },
                group_id: { type: 'integer' },
                order: { type: 'integer' },
                name: { type: 'string' },
                description: { type: 'string' },
                created_at: { type: ['string', 'null'] },
                updated_at: { type: ['string', 'null'] },
            }
        };
    }


    static get idColumn() {
        return 'id';
    }
}

module.exports = Task;
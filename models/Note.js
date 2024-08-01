const mongoose = require('mongoose')

const AutoIncreement = require('mongoose-sequence')(mongoose)

const noteSchema = new mongoose.Schema({
    use : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    name: {
        type: String,
        required: true
    },

    file:
        {
            type: String,
            required: true
        },
},
{
timestamps: true
}
)

noteSchema.plugin(AutoIncreement, {
    inc_field: 'ticket',
    id: 'ticketNums',
    start_seq: 500
})

module.exports = mongoose.model('Note', noteSchema)
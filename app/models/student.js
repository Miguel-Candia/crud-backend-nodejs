const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2');

const StudentScheme = new mongoose.Schema(
    {
        id:{
            type: Number,

        },
        name:{
            type: String,

        },
        fecha:{
            type: Date

        }
    },
    {
        versionKey:false,
        timestamps: true
    }
)

StudentScheme.plugin(mongoosePaginate)

module.exports = mongoose.model('student',StudentScheme)
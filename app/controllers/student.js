const { default: mongoose } = require('mongoose');
const model = require('../models/student')


const options = {
    page: 1,
    limit:10
};

const parseId = (id) => {
    return mongoose.Types.ObjectId(id)
}



//obtener data Student
exports.getData = (req, res) =>{
    model.paginate({},options, (arr,docs) => {
        
    //    res.render('index', {
    //        docs: docs
    //    });

        res.send({
            docs: docs
        })
    })
}
// insertar Data Student

exports.insertData = (req, res) => {
    const data = req.body
    model.create(data, (err,docs) =>{
        if(err){
            res.send({ error:'Error'}, 422)
        }else{
            res.send({
                name: data.name,
                fecha: new Date (data.fecha)
            })
        }

    })
}

exports.updateSingle = (req,res) =>{
    const { id } = req.params.id
    const body = req.body
    model.updateOne(
        {_id: parseId(req.params.id)},
        body,
        (err, docs) => {
            res.send({
                items: docs
            })
        }
    )
}

exports.deleteSingle = (req,res) =>{
    model.deleteOne(
        {_id: parseId(req.params.id)},
        (err, docs) => {
            res.send({
                items: docs
            })
        }

    )

}
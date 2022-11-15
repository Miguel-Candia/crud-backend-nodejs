const express = require ('express')

const controller = require('../controllers/student')

const router = express.Router()

const path = 'student'

// Ruta: /student Get

router.get(
`/`,
controller.getData
)

router.post(
    `/`,
    controller.insertData
    )
    
router.put(
    `/:id`,
    controller.updateSingle
    )
router.delete(
    `/:id`,
    controller.deleteSingle
    )
    




module.exports = router
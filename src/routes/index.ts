import express  from "express"
import { condidatesController } from "../controllers/consdidates-controllers"

export const router =  express.Router()

router.get('/', (req, res) => res.json({hello: 'Hello, World'}))

router.get('/candidates', condidatesController.index) 
router.get('/candidates/:id',condidatesController.show)
router.post('/candidates', condidatesController.save)
router.put('/candidates/:id', condidatesController.update)
router.delete('/candidates/:id', condidatesController.delete)

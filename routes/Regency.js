import { Router } from 'express'
import {
    readRegencies,
    createRegency,
    readRegency,
    updateRegency,
    deleteRegency
} from '../controllers/Regency'

const regencyRouter = Router()

regencyRouter.get('/', readRegencies)
regencyRouter.post('/add', createRegency)
regencyRouter.get('/:id', readRegency)
regencyRouter.put('/:id', updateRegency)
regencyRouter.delete('/:id', deleteRegency)

export default regencyRouter
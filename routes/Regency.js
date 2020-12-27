import { Router } from 'express'
import {
    readRegency,
    readRegencies,
    createRegency,
    updateRegency,
    deleteRegency
} from '../controllers/Regency'

const regencyRouter = Router()

regencyRouter.get('/:id', readRegency)
regencyRouter.get('/', readRegencies)
regencyRouter.post('/add', createRegency)
regencyRouter.post('/edit', updateRegency)
regencyRouter.delete('/:id', deleteRegency)

export default regencyRouter
import { Router } from 'express'
import {
    readDistricts,
    createDistrict,
    readDistrict,
    updateDistrict,
    deleteDistrict
} from '../controllers/District'

const districtRouter = Router()

districtRouter.get('/', readDistricts)
districtRouter.post('/add', createDistrict)
districtRouter.get('/:id', readDistrict)
districtRouter.put('/:id', updateDistrict)
districtRouter.delete('/:id', deleteDistrict)

export default districtRouter
import { Router } from 'express'
import {
    readDistrict,
    readDistricts,
    createDistrict,
    updateDistrict,
    deleteDistrict
} from '../controllers/District'

const districtRouter = Router()

districtRouter.get('/:id', readDistrict)
districtRouter.get('/', readDistricts)
districtRouter.post('/add', createDistrict)
districtRouter.post('/edit/:id', updateDistrict)
districtRouter.delete('/:id', deleteDistrict)

export default districtRouter
import { Router } from 'express'
import {
    readProvinces,
    createProvince,
    readProvince,
    updateProvince,
    deleteProvince
} from '../controllers/Province'

const provinceRouter = Router()

provinceRouter.get('/', readProvinces)
provinceRouter.post('/add', createProvince)
provinceRouter.get('/:id', readProvince)
provinceRouter.put('/:id', updateProvince)
provinceRouter.delete('/:id', deleteProvince)

export default provinceRouter
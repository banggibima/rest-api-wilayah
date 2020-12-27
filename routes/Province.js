import { Router } from 'express'
import {
    readProvince,
    readProvinces,
    createProvince,
    updateProvince,
    deleteProvince
} from '../controllers/Province'

const provinceRouter = Router()

provinceRouter.get('/:id', readProvince)
provinceRouter.get('/', readProvinces)
provinceRouter.post('/add', createProvince)
provinceRouter.post('/edit', updateProvince)
provinceRouter.delete('/:id', deleteProvince)

export default provinceRouter
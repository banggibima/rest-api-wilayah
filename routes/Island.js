import { Router } from 'express'
import {
    readIslands,
    createIsland,
    readIsland,
    updateIsland,
    deleteIsland
} from '../controllers/Island'

const islandRouter = Router()

islandRouter.get('/', readIslands)
islandRouter.post('/add', createIsland)
islandRouter.get('/:id', readIsland)
islandRouter.put('/:id', updateIsland)
islandRouter.delete('/:id', deleteIsland)

export default islandRouter
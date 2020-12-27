import { Router } from 'express'
import {
    readIsland,
    readIslands,
    createIsland,
    updateIsland,
    deleteIsland
} from '../controllers/Island'

const islandRouter = Router()

islandRouter.get('/:id', readIsland)
islandRouter.get('/', readIslands)
islandRouter.post('/add', createIsland)
islandRouter.post('/edit', updateIsland)
islandRouter.delete('/:id', deleteIsland)

export default islandRouter
import { Schema, model } from 'mongoose'

const islandSchema = new Schema({
    code_island: { type: String, required: true },
    name: { type: String, required: true }
}, {
    timestamps: true
})

const Island = model('island', islandSchema)

export default Island
import { Schema, model } from 'mongoose'

const regencySchema = new Schema({
    code_island: { type: String, require: true },
    code_province: { type: String, require: true },
    code_regency: { type: String, require: true },
    name: { type: String, required: true }
})

const Regency = model('regencie', regencySchema)

export default Regency
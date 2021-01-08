import { Schema, model } from 'mongoose'

const provinceSchema = new Schema({
    code_island: { type: String, required: true },
    code_province: { type: String, require: true },
    name: { type: String, required: true }
}, {
    timestamps: true
})

const Province = model('province', provinceSchema)

export default Province
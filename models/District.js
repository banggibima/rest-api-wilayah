import { Schema, model } from 'mongoose'

const districtSchema = new Schema({
    code_island: { type: String, require: true },
    code_province: { type: String, require: true },
    code_regency: { type: String, require: true },
    code_district: { type: String, require: true },
    name: { type: String, required: true }
}, {
    timestamps: true
})

const District = model('district', districtSchema)

export default District
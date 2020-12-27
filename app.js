import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

import islandRouter from './routes/Island'
import provinceRouter from './routes/Province'
import regencyRouter from './routes/Regency'
import districtRouter from './routes/District'

dotenv.config()

const app = express()
const port = process.env.PORT
const uri = process.env.ATLAS_URI

app.use(cors())
app.use(express.json())

app.use('/island', islandRouter)
app.use('/province', provinceRouter)
app.use('/regency', regencyRouter)
app.use('/district', districtRouter)

app.listen(port, () => {
    console.log(`Server sedang berjalan di http://localhost:${port}`)
})

mongoose
    .connect(uri, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('Database Atlas MongoDB berhasil terhubung')
    })
    .catch(err => console.log(err))
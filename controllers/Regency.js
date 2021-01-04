import Regency from '../models/Regency'

const readRegencies = (req, res) => {
    Regency
        .find()
        .then(regency => res.json(regency))
        .catch(err => {
            res
                .status(400)
                .json(`Kesalahan: ${err}`)
        })
}

const createRegency = (req, res) => {
    const code_island = req.body.code_island
    const code_province = req.body.code_province
    const code_regency = req.body.code_regency
    const name = req.body.name

    const newRegency = new Regency({
        code_island,
        code_province,
        code_regency,
        name
    })

    newRegency
        .save()
        .then(() => res.json('Data kota / kabupaten berhasil ditambahkan'))
        .catch(err => {
            res
                .status(400)
                .json(`Kesalahan: ${err}`)
        })
}

const readRegency = (req, res) => {
    Regency
        .findById(req.params.id)
        .then(regency => res.json(regency))
        .catch(err => {
            res
                .status(400)
                .json(`Kesalahan: ${err}`)
        })
}

const updateRegency = (req, res) => {
    Regency
        .findById(req.params.id)
        .then(regency => {
            regency.code_island = req.body.code_island
            regency.code_province = req.body.code_province
            regency.code_regency = req.body.code_regency
            regency.name = req.body.name

            regency
                .save()
                .then(() => res.json('Data kota / kabupaten berhasil diperbarui'))
                .catch(err => {
                    res
                        .status(400)
                        .json(`Kesalahan: ${err}`)
                })
        })
        .catch(err => {
            res
                .status(400)
                .json(`Kesalahan: ${err}`)
        })
}

const deleteRegency = (req, res) => {
    Regency
        .findByIdAndDelete(req.params.id)
        .then(() => res.json('Data kota / kabupaten berhasil dihapus'))
        .catch(err => {
            res
                .status(400)
                .json(`Kesalahan: ${err}`)
        })
}

export {
    readRegencies,
    createRegency,
    readRegency,
    updateRegency,
    deleteRegency
}
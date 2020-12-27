import Province from '../models/Province'

const readProvince = (req, res) => {
    Province
        .findById(req.params.id)
        .then(province => res.json(province))
        .catch(err => {
            res
                .status(400)
                .json(`Kesalahan: ${err}`)
        })
}

const readProvinces = (req, res) => {
    Province
        .find()
        .then(province => res.json(province))
        .catch(err => {
            res
                .status(400)
                .json(`Kesalahan: ${err}`)
        })
}

const createProvince = (req, res) => {
    const code_island = req.body.code_island
    const code_province = req.body.code_province
    const name = req.body.name

    const newProvince = new Province({
        code_island,
        code_province,
        name
    })

    newProvince
        .save()
        .then(() => res.json('Data provinsi berhasil ditambahkan'))
        .catch(err => {
            res
                .status(400)
                .json(`Kesalahan: ${err}`)
        })
}

const updateProvince = (req, res) => {
    Province
        .findById(req.params.id)
        .then(province => {
            province.code_island = req.body.code_island
            province.code_province = req.body.code_province
            province.name = req.body.name

            province
                .save()
                .then(() => res.json('Data provinsi berhasil diperbarui'))
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

const deleteProvince = (req, res) => {
    Province
        .findByIdAndDelete(req.params.id)
        .then(() => res.json('Data provinsi berhasil dihapus'))
        .catch(err => {
            res
                .status(400)
                .json(`Kesalahan: ${err}`)
        })
}

export {
    readProvince,
    readProvinces,
    createProvince,
    updateProvince,
    deleteProvince
}
import District from '../models/District'

const readDistricts = (req, res) => {
    District
        .find()
        .then(district => res.json(district))
        .catch(err => {
            res
                .status(400)
                .json(`Kesalahan: ${err}`)
        })
}

const createDistrict = (req, res) => {
    const code_island = req.body.code_island
    const code_province = req.body.code_province
    const code_regency = req.body.code_regency
    const code_district = req.body.code_district
    const name = req.body.name

    const newDistrict = new District({
        code_island,
        code_province,
        code_regency,
        code_district,
        name
    })

    newDistrict
        .save()
        .then(() => res.json('Data kelurahan / desa berhasil ditambahkan'))
        .catch(err => {
            res
                .status(400)
                .json(`Kesalahan: ${err}`)
        })
}

const readDistrict = (req, res) => {
    District
        .findById(req.params.id)
        .then(district => res.json(district))
        .catch(err => {
            res
                .status(400)
                .json(`Kesalahan: ${err}`)
        })
}

const updateDistrict = (req, res) => {
    District
        .findByIdAndUpdate(req.params.id)
        .then(district => {
            district.code_island = req.body.code_island
            district.code_province = req.body.code_province
            district.code_regency = req.body.code_regency
            district.code_district = req.body.code_district
            district.name = req.body.name

            district
                .save()
                .then(() => res.json('Data kelurahan / desa berhasil diperbarui'))
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

const deleteDistrict = (req, res) => {
    District
        .findByIdAndDelete(req.params.id)
        .then(() => res.json('Data kelurahan / desa berhasil dihapus'))
        .catch(err => {
            res
                .status(400)
                .json(`Kesalahan: ${err}`)
        })
}

export {
    readDistricts,
    createDistrict,
    readDistrict,
    updateDistrict,
    deleteDistrict
}
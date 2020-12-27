import Island from '../models/Island'

const readIsland = (req, res) => {
    Island
        .findById(req.params.id)
        .then(island => res.json(island))
        .catch(err => {
            res
                .status(400)
                .json(`Kesalahan: ${err}`)
        })
}

const readIslands = (req, res) => {
    Island
        .find()
        .then(island => res.json(island))
        .catch(err => {
            res
                .status(400)
                .json(`Kesalahan: ${err}`)
        })
}

const createIsland = (req, res) => {
    const code_island = req.body.code_island
    const name = req.body.name

    const newIsland = new Island({
        code_island,
        name
    })

    newIsland
        .save()
        .then(() => res.json('Data pulau berhasil ditambahkan'))
        .catch(err => {
            res
                .status(400)
                .json(`Kesalahan: ${err}`)
        })
}

const updateIsland = (req, res) => {
    Island
        .findById(req.params.id)
        .then(island => {
            island.code_island = req.body.code_island
            island.name = req.body.name

            island
                .save()
                .then(() => res.json('Data pulau berhasil diperbarui'))
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

const deleteIsland = (req, res) => {
    Island
        .findByIdAndDelete(req.params.id)
        .then(() => res.json('Data pulau berhasil dihapus'))
        .catch(err => {
            res
                .status(400)
                .json(`Kesalahan: ${err}`)
        })
}

export {
    readIsland,
    readIslands,
    createIsland,
    updateIsland,
    deleteIsland
}
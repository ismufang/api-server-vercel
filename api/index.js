import apiList from '../json/index.json'
module.exports = (req, res) => {
    res.status(200).send(apiList)
}
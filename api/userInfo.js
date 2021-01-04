const userInfo = require('../json/userInfo.json')
module.exports = (req, res) => {
    res.status(200).send(userInfo)
}
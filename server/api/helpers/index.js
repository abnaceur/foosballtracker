

const responseStatus = (res, msg, code, data) => {
    res.status(200).json({code, msg, data})
}

module.exports = {
    responseStatus
}

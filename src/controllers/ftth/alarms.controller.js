const alarmsPost = (req, res) => {
    const body = req.body
    res.json({
        code: 201,
        failed: false,
        data: {
            body
        }
    })
}

module.exports = {
    alarmsPost
}
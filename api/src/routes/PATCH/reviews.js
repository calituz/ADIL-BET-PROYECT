const router = require('express').Router();
const updateReview = require("../../controllers/PATCH/updateReview")

router.patch("/reviews/:id", async (req, res) => {
    const {id} = req.params
    const { status } = req.body

    try {
        const update = await updateReview(id, status)
        res.status(200).json(update)
    } catch (error) {
        res.status(404).json({error: error.message})
    }

})

module.exports = router;
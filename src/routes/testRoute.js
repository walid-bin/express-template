/* imports */
const { Router } = require('express');

/* create router */
const router = Router();




/**
 * GET /v1/subscriptions/:id
 * @description Get single subscription.
 * @response {Array} 200 - The subscription data.
 */
router.get('/test', async (req, res)=>{
    res.status(200).send('Successful.')
});

module.exports = router;
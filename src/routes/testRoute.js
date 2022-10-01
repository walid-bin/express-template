/* imports */
const { Router } = require('express');

/* create router */
const router = Router();




/**
 * GET /v1/test
 * @description test api.
 * @response {string} 200 - succesful message
 */
router.get('/test', async (req, res)=>{
    res.status(200).send('Successful.')
});

module.exports = router;

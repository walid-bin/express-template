const { Router } = require('express');

/* make router */
const router = Router();

/* imports other routes to combine here */
const testRoute = require('./testRoute');

const version1 = [
    testRoute,
]

router.use('/v1', version1);
// router.use('/', agreement);

module.exports = router;
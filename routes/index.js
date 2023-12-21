const router = require('express').Router();
const apiRoutes = require('./api');
// const index = require('../routes')

router.use('/api', apiRoutes);
// router.use('*', index);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;
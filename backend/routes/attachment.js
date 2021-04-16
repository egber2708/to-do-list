const express = require('express');
const attachmentController = require('../controllers/attachment');
const router = express.Router();


// /api/attachment/load    => POST
router.post('/signin ', attachmentController.add);

// /api/attachment/delete  => POST
router.post('/delete', attachmentController.delete);

// /api/attachment/download => POST
router.get('/download/:url', attachmentController.getattachment);


module.exports = router;
const express = require('express');
const router = express.Router();

// validators
const { categoryCreateValidator, categoryUpdateValidator } = require('../validators/category');
const { runValidation } = require('../validators');
const { requireSignin, adminMiddleware } = require('../controllers/auth');
const { create, list, read, update, remove } = require('../controllers/category');

// Middleware functions are functions that have access to the request object ( req ), 
// the response object ( res ), and the next middleware function in the application's 
// request-response cycle.
// 
router.post('/category', requireSignin, adminMiddleware, create);
router.get('/categories', list);
router.get('/category/:slug', read);
router.put('/category/:slug', categoryUpdateValidator, runValidation, requireSignin, adminMiddleware, create);
router.delete('/category/:slug', requireSignin, adminMiddleware, remove);

module.exports = router;

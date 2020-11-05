

const express = require('express');
const { checkJwt } = require('../controllers/auth');

const router = express.Router();
const { getPortfolios, getPortfolioById, createPortfolio } = require('../controllers/portfolios');

router.get('', getPortfolios);
router.get('/:id', getPortfolioById);

router.post('', checkJwt, createPortfolio)

module.exports = router;

const express = require('express');
const router = express.Router();
const { createCompany, getAllCompanies, updateCompany, deleteCompany} = require('../controllers/productionCompanyController.js');

router.post('/', createCompany);
router.get('/', getAllCompanies);
router.put('/:id', updateCompany);
router.delete('/:id', deleteCompany);

module.exports = router;
const router = require('express').Router();
const usersController = require('../../controller/usersController');

router.route('/')
    .post(usersController.postUser);

router.route('/all')
    .get(usersController.getAllUsers);

router.route('/:user')
    .get(usersController.getUser)
    .delete(usersController.deleteUser);

module.exports = router;
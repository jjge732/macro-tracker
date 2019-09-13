const router = require('express').Router();
const usersController = require('../../controller/usersController');

router.route('/')
    .post(usersController.postUser)
    .delete(usersController.deleteUser);


router.route('/all')
    .get(usersController.getAllUsers);

router.route('/:user')
    .get(usersController.getUser);

module.exports = router;
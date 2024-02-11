const router = require("express").Router();
const {login, register, notesList, noteAdd, noteDelete} =require('../Controllers/AuthController')
const {verifyToken,getUser} = require('../middleware/AuthMiddleware')

router.get('/user', verifyToken,getUser)
router.post('/',login);
router.post('/register',register);
router.get('/notes',notesList);
router.post('/notes',noteAdd);
router.post('/notes/:id',noteDelete);

module.exports = router;

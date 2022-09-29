import express from 'express';
import register from '../controllers/register.js';
import login from '../controllers/login.js';
import logout from '../controllers/logout.js';
import dashboardMethods from '../controllers/dashboard.js';
import chatMethods from '../controllers/chat.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.get('/dashboard', dashboardMethods.getDashboard);
router.post('/addNickname', dashboardMethods.addNickname);
router.post('/addImage', dashboardMethods.addImage);
router.post('/search', dashboardMethods.findUser);
router.post('/addFriend', dashboardMethods.addFriend);
router.post('/sendMessage', chatMethods.addChat);
router.get('/chat', chatMethods.getChatHistory);

export default router;

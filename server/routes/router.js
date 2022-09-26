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

// import pkg from 'express-openid-connect';
// const { auth, requiresAuth } = pkg;

// Configuration of Auth0
// const config = {
//     authRequired: false,
//     auth0Logout: true,
//     secret: 'LONG_RANDOM_STRING_EVEN_LONGER_RANDOM_STRING',
//     baseURL: 'http://localhost:3001',
//     clientID: 'qdGoglnRGpBoLExaouM4V1d4OvZ5ftb2',
//     issuerBaseURL: 'https://dev-tynqo8ou.us.auth0.com'
// };
  
// The `auth` router attaches /login, /logout
// and /callback routes to the baseURL
// router.use(auth(config));
// Anyone can access the homepage
// router.get('/', (req, res) => {
//     res.send('<a href="/admin">Admin Section</a>');
// });
// requiresAuth checks authentication.
// router.get('/dashboard', requiresAuth(), (req, res) => {
//     console.log('dashboard-test');
//     res.send(
//       req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out'
//     )
// });
// The /profile route will show the user profile as JSON
// app.get('/profile', requiresAuth(), (req, res) => {
//   res.send(JSON.stringify(req.oidc.user, null, 2));
// });

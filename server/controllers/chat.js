import dbConnection from '../config/database.js';
import url from 'url';

// GET request to get chat history from DB

const getChatHistory = (req, res) => {
    const queryObject = url.parse(req.url, true).query;
    // console.log(queryObject);

    (async () => {

        // Call 1st function to query data of sender
        const sender = await getUser(queryObject.sender);
        // console.log(sender[0].id);
        
        // Call 2nd function to query data of receiver
        const receiver = await getUser(queryObject.receiver);
        // console.log(receiver[0].id);

        // Call 3rd function to get chat history of sender & receiver
        const chatHistory = await getChatList(sender[0].id, receiver[0].id);
        // console.log(chatHistory);

        res.send({chatHistory: chatHistory, sender: sender, receiver: receiver});
        // res.send("success");

    })()
    // res.send("success");
}

/// Get id for user
const getUser = (user) => {
    // console.log(user);
    return new Promise((resolve, reject) => {
        dbConnection.query('SELECT * FROM users WHERE email = ?', user,
            (err, result) => {
                // console.log(result);
                return err ? reject(err) : resolve(result)
            }
        )
    })
};

/// Get chat history as list
const getChatList = (sender, receiver) => {
    return new Promise((resolve, reject) => {
        dbConnection.query('SELECT * FROM chat_messages WHERE members LIKE ? OR members LIKE ?', [`%${sender},${receiver}%`, `%${receiver},${sender}%`],
            (err, result) => {
                // console.log(result);
                return err ? reject(err) : resolve(result)
            }
        )
    })
};

// POST request to store chat message in DB

const addChat = (req, res) => {
    // console.log(req.body);

    (async () => {
        // Call 1st function to query id of sender
        const sender = await getUser(req.body.sender);
        // console.log(sender[0].id);

        // Call 2nd function to query id of receiver
        const receiver = await getUser(req.body.members[1]);
        // console.log(receiver[0].id);

        // Call 3rd function to add message to DB
        const chatMessage = await addChatMessage(sender[0].email, sender[0].id, receiver[0].id, req.body.message);
        // console.log(chatMessage);
        res.send("success:" + chatMessage);

    })()
}

/// Add chat message to DB
const addChatMessage = (sender_email, sender_id, receiver_id, message) => {
    return new Promise((resolve, reject) => {
        const members = `${sender_id},${receiver_id}`;
        dbConnection.query(`INSERT INTO chat_messages (sender, members, message, sent_at) VALUES (?, ?, ?, now())`, [sender_email, members, message],
            (err, result) => {
                // console.log(result);
                return err ? reject(err) : resolve(result)
            }
        )
    })
};

export default { getChatHistory, addChat};
import dbConnection from '../config/database.js';
import url from 'url';

// GET request to get dashboard information
const getDashboard = (req, res) => {
    // Get url parameters
    const queryObject = url.parse(req.url, true).query;
    // console.log(queryObject.user);
    // console.log("chicken");

    (async () => {
        // Call 1st function to query information of logged in user
        const user = await getUser(queryObject.user);
        // console.log(user);
        // console.log(user[0].nickname);

        // Call 2nd function to query friend ids
        const friendIdList = await getFriendsId(user[0].id);
        // console.log(friendIdList);

        // Reformating friendIdList-array
        let formattedIdList = [];
        friendIdList.forEach((item, index) => {
            formattedIdList = [...formattedIdList, item.friend_id]
        });
        // console.log(formattedIdList);

        if (formattedIdList.length > 0) {
            // console.log("sheep");
            // Call 3rd function to get friend data
            const friendList = await getFriendsList(formattedIdList)
            // console.log(friendList);
            res.send({friendList: friendList, user: user});
        } else {
            res.send({friendList: false, user: user});
        }
    })()
}

/// Get data for logged in user
const getUser = (user) => {
    // console.log("cow");
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

/// Get friend ids for logged in user
const getFriendsId = (id) => {
    // console.log("cat");
    // console.log(id);
    return new Promise((resolve, reject) => {
        dbConnection.query('SELECT * FROM friends WHERE user_id = (?)', [id],
            (err, result) => {
                // console.log(result);
                return err ? reject(err) : resolve(result)
            }
        )
    })
};

/// Get list of friends for logged in user
const getFriendsList = (idList) => {
    // console.log("dog");
    // console.log(idList);
    return new Promise((resolve, reject) => {
        dbConnection.query('SELECT * FROM users WHERE id IN (?)', [idList],
            (err, result) => {
                // console.log(result);
                return err ? reject(err) : resolve(result)
            }
        )
    })
};

/// POST request to add nickname to DB for logged in user
const addNickname = (req, res) => {
    // console.log(req.body);
    return new Promise((resolve, reject) => {
        dbConnection.query('UPDATE users SET nickname = ? WHERE email = ?', [req.body.nickname, req.body.user],
            (err, result) => {
                // console.log(result);
                return err ? reject(err) : resolve(result)
            }
        )
    })
};

/// POST request to add image link to DB for logged in user
const addImage = (req, res) => {
    // console.log(req.body);
    return new Promise((resolve, reject) => {
        dbConnection.query('UPDATE users SET imgLink = ? WHERE email = ?', [req.body.imgLink, req.body.user],
            (err, result) => {
                console.log(result);
                return err ? reject(err) : resolve(result)
            }
        )
    })
};

/// POST request to add to list of friends for logged in user
const addToFriends = (userId, friendId) => {
    // console.log(userId, friendId);
    // console.log("dog");
    return new Promise((resolve, reject) => {
        dbConnection.query(`INSERT INTO friends (user_id, friend_id) VALUES (?, ?)`, [userId, friendId],
            (err, result) => {
                console.log(result);
                return err ? reject(err) : resolve(result)
            }
        )
    })
};

// POST request to find user
const findUser = (req, res) => {
    console.log(req.body);
    dbConnection.query(
        'SELECT * FROM users WHERE email = ?', req.body.userEmail,
        (err, result) => {
          // User does not exist
          if (err) {
            throw err;
            return res.status(400).send({
              msg: err
            });
          }
          if (result.length > 0) {
            res.send({
              search: 'True'
            });
          } else {
            res.send({
              search: 'False'
            });
          }
        }
    );
};

// POST request to add user to friends list
const addFriend = (req, res) => {
    console.log(req.body);
    // console.log("chicken");

    (async () => {
        // Call 1st function to query id of logged in user
        const userId = await getUser(req.body.user);
        console.log(userId);

        // Call 2nd function to query id of searched user
        const searchId = await getUser(req.body.search);
        // console.log(searchId);

        // Call 3rd function to add searchId to friends of userId
        const updateFriendList = await addToFriends(userId[0].id, searchId[0].id);

        res.send("User added to friends");
  })()
}

export default { findUser, addNickname, addFriend, addImage, getDashboard };

// // Get only friends to display on dashboard
// const getFriends = (req, res) => {
//     // Get url parameters
//     const queryObject = url.parse(req.url, true).query;
//     console.log(queryObject.username);
//     console.log("chicken");

//     (async () => {
//         // Call 1st function to query id of logged in user
//         const userId = await getUserId(queryObject.username);
//         // console.log(userId);

//         // Call 2nd function to query friend ids
//         const friendIdList = await getFriendsId(userId[0].id);
//         // console.log(friendIdList);

//         // Reformating friendIdList-array
//         let formattedIdList = [];
//         friendIdList.forEach((item, index) => {
//             formattedIdList = [...formattedIdList, item.friend_id]
//         });
//         // console.log(formattedIdList);

//         // Call 3rd function to get friend data
//         const friendList = await getFriendsList(formattedIdList)
//         console.log(friendList);
//             // return friendList;
//         res.send(friendList);
//     })()
// }

// const getImage = async (req, res) => {
    // const queryObject = url.parse(req.url, true).query;
    // console.log(queryObject.username);
    // console.log("chicken");
//     await dbConnection.query(
//         'SELECT imgLink FROM users WHERE username = ?', queryObject.username,
//         (err, result) => {
//             console.log(result);
//             // Link does not exist
//             if (err) {
//                 throw err;
//             }
//             // Link exists
//             if (result.length > 0) {
//                 res.send(result);
//             } else {
//                 res.send('');
//             }
//         }
//     );
// };

///

// Function to call promise function for profile image link

// const getImage = (req, res) => {
//     const queryObject = url.parse(req.url, true).query;
//     console.log(queryObject.username);
//     console.log("chicken");

//     (async () => {
//         const imageLink = await getImageLink(queryObject.username);
//         console.log(imageLink);

//         res.send(imageLink);

//     })()
// }

/// Get image link promise for profile pic of logged in user
// const getImageLink = (username) => {
//     return new Promise((resolve, reject)=> {
//         dbConnection.query('SELECT imgLink FROM users WHERE username = ?', username,
//             (err, result) => {
//                 // console.log(result);
//                 return err ? reject(err) : resolve(result)
//             }
//         )
//     })
// };
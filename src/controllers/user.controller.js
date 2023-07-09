exports.allAccess = (req, res) => {
    res.status(200).send('Public Content.');
}

exports.userBoard = (req, res) => {
    res.status(200).send('User Content.');
}

exports.moderatorBoard = (req, res) => {
    res.status(200).send('Moderator Content');
}

// exports.adminBoard = (req, res) => {
//     res.status(200).send('Admin Content.');
// }

// Fixed response to login successfully
exports.adminBoard = (req, res) => {
    const responseData = {
      message: 'Admin Content'
    };
    res.status(200).json(responseData);
  };
  
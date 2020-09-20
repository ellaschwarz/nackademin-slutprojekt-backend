const User = require('../models/userModel');

exports.authenticate = async (req, res, next) => {
	if (!req.headers.authorization) return res.sendStatus(401);
	try {
		const token = req.headers.authorization.replace('Bearer ', '');
		const payload = await User.verifyToken(token, process.env.SECRET);
		req.user = payload;
		next();
	} catch (error) {
		return res.status(401).json(error);
	}
};

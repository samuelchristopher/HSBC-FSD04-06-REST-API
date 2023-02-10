const { user } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res, next) => {
  try {
    const payload = req.body;
    // console.log('object: >>', payload);

    const hashedPass = bcrypt.hashSync(payload.password, 8);
    // console.log('object: >>', hashedPass);

    const registerUser = await user.create({
      firstname: payload.firstname,
      lastname: payload.lastname,
      username: payload.username,
      email: payload.email,
      password: hashedPass,
    });

    return res.status(201).send({
      message: `create new user`,
      result: registerUser,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const payload = req.body;
    // console.log('object: >>', payload);

    const getUser = await user.findOne({
      where: { email: payload.email },
    });
    // console.log('object: >>', getUser);

    if (getUser !== null) {
      const comparedPassword = bcrypt.compareSync(
        payload.password,
        getUser.dataValues.password
      );
      // console.log('object: >>', comparedPassword);

      if (comparedPassword === false) {
        return res.status(400).send({
          message: `Invalid password`,
        });
      } else {
        const token = jwt.sign(
          {
            id: getUser.dataValues.id,
            email: getUser.dataValues.email,
          },
          process.env.JWT_KEY,
          { expiresIn: 3600 }
        );

        return res.status(200).send({
          message: `Login success`,
          token: token,
        });
      }
    } else {
      return res.status(404).send({
        message: `Email Not Registered`,
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send({ error });
  }
};

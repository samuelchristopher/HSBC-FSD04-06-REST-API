const { user } = require('../models');
exports.helloWorld = (req, res) => {
  res.send('<h1>Hello Jakarta!</h1>');
};

exports.aboutMe = async (req, res, next) => {
  try {
    // res.send({
    //   name: 'Samuel',
    //   alamat: 'Tangerang',
    // });

    const me = await user.findOne({
      where: { id: req.user.id },
    });
    return res.status(200).send({
      message: `retrieve data profile successfully`,
      data: me.dataValues,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send(error);
  }
};

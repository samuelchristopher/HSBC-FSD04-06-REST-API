const { user } = require('../models');

exports.getUsers = async (req, res, next) => {
  try {
    // res.send({
    //   nama: 'Sam',
    //   alamat: 'Tangerang',
    //   pekerjaan: 'Software Developer',
    //   umur: 27,
    // });

    const users = await user.findAll();
    // console.log(users);

    return res.status(200).send({
      message: `retrieve all data successfully`,
      data: users,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send(error);
  }
};

// exports.createUser = async (req, res, next) => {
//   try {
//     const payload = req.body;

//     if (payload.name == '' && payload.email == '') {
//       return res.status(400).send({
//         message: `body is required, cannot be empty`,
//       });
//     }

//     // const insertData = await knex('users').insert({
//     // 	name: payload.name,
//     // 	email: payload.email
//     // })

//     /* const string = {}
// 		console.log('object :>> ', !!string); */

//     return res.status(201).send({
//       message: `success data created`,
//     });
//   } catch (error) {
//     return res.status(500).send(error);
//   }
// };

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

const { User } = require("../../db");
const { sendMail } = require("../../modules/emails");

const postUser = async (req, res) => {
  try {
    const { name, userName, email, password, phone, isAdmin } = req.body;

    // Verificamos que tengamos todos los valores
    if (name && userName && email && password && phone && isAdmin)
      throw new Error("missing parameters");

    // Si todo esta bien creamos el usuario 
    const newUser = await User.create({
      name,
      userName,
      email,
      password,
      phone: phone ? phone : null,
      isAdmin: isAdmin ? isAdmin : false,
    });

    console.log('asdasd');

    // Enviamos finalmente un email de confirmacion
    sendMail(
      email,
      "¬°Bienvenido a Adil Bet!",
      `<span>Tu cuenta fue creada satisfactoriamente</span>`
    );

    return res.status(200).json(newUser);
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
};

module.exports = { postUser };

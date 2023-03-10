const { User } = require("../../db");
const { sendMail } = require("../../modules/emails");

const updateProfile = async (id, { name, userName, email, phone }) => {
  
  const profileFound = await User.findOne({
    where: {
      id: id,
    },
  });
  
  if (userName.length !== 0) {
    profileFound.update({
      userName: userName,
    });
  }
  
  if (name.length !== 0) {
    profileFound.update({
      name: name,
    });
  }
  
  if (email.length !== 0) {
    profileFound.update({
      email: email,
    });
  }
  
  if (phone.length !== 0) {
    profileFound.update({
      phone: phone,
    });
  }
  
  await profileFound.save();
  
  sendMail(email, 'Actualizacion de datos del usuario', `<span>Se actualizo tu usuario correctamente</span>`);

  return profileFound;
};

module.exports = updateProfile;

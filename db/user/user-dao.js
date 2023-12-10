const model = require('./user-model');
const userRegister = (info) => model.create(info);
const findUsers = () => model.find();
const updateRole = (username, role) => model.findOneAndUpdate({username: username}, {role: role});
const findUserById = (id) => model.findById(id)
const updateUserProfile = (id, updateInfo) => model.update({_id: id}, {$set: updateInfo});

module.exports = {
  userRegister, findUsers, updateRole, findUserById, updateUserProfile
};
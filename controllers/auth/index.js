const registration = require("./auth");
const login = require("./login");
const getCurrent = require("./getCurrent");
const logout = require("./logout");

const ctrlWrapper = require("../../utils/ctrlWrapper");

module.exports = {
  registration: ctrlWrapper(registration),
  login: ctrlWrapper(login),
  getCurrent: ctrlWrapper(getCurrent),
  logout: ctrlWrapper(logout),
};
var mongoose = require("mongoose")
var Schema = mongoose.Schema

console.log("Ran database");

mongoose.connect("database-service:27017/devtest")
var userSchema = new Schema({
	username: String,
	password: String,
	type: String
})
var UserModel = mongoose.model("User", userSchema)

module.exports = {
  mongoose: mongoose,
  Schema: Schema,
	userSchema: userSchema,
	UserModel: UserModel
}

var mongoose = require("mongoose")
var Schema = mongoose.Schema

console.log("Ran database");

mongoose.connect("database-service:27017/devtest")
var personSchema = new Schema({
	name: String,
	age: Number
})
var PersonModel = mongoose.model("Person", personSchema)

module.exports = {
  mongoose: mongoose,
  Schema: Schema,
  personSchema: personSchema,
  PersonModel: PersonModel
}

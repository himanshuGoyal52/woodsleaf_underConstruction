import mongoose, { model, models } from "mongoose";


const connnetMongo = async () => mongoose.connect(process.env.MONGO_URI)
const emailSchema = new mongoose.Schema({
  email: {
    type:String,
    required:true, 
    unique:true,
  }
});
const emailModel = models.Email || model("Email" , emailSchema);

export default async function  handler(req,res){
    // console.log(req.body);

    await connnetMongo();
    const email = await emailModel.create(req.body);
    res.status(200).json({msg : "You will be get notified! Thanks" , email});
}
import foodModel from "../models/foodModel.js";
import fs from 'fs'


// add food

const addFood = async (req , res) => {

    let image_filename = `${req.file.filename}`


    const food = new foodModel ({
        name:req.body.name,
        address:req.body.address,
        category:req.body.category,
        image:image_filename
    })
    try {
        await food.save();
        res.json({success:true , message:"Thêm thông tin món ăn thành công"})
        
    } catch (error) {
        console.log(error)
        res.json({success:false , message:"Thêm thông tin thất bại"})
        
    }

}


export {addFood}
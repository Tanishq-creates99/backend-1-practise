const Product = require("../models/Product");

const createProduct = async (req, res) => {
  const body = req.body;
  try {
    const product = await Product(body);
    const result = await product.save();
    res.status(201).json({ message: "Created", result });
  } catch (err) {
    res.status(500).json({ message: "Internal Server error" });
  }
};

const getProducts = async (req, res) => {
  try {
    const result = await Product.find({});
    res.status(200).json({ message: "Success", products: result });
  } catch (err) {
    res.status(500).json({ message: "Internal Server error" });
  }
};

const getProductById = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Product.findById(id);
    res.status(200).json({ message: "Success", data: result });
  } catch (err) {
    res.status(500).json({ message: "Internal Server error" });
  }
};

const updateProductById = async(req,res)=>{
    try {
        const id = req.params.id;
        const body =req.body;
        
        const updateDoc = {$set:{...body}}
        updateDoc.updatedAt = Date.now();
        await Product.findByIdAndUpdate(id, updateDoc);
       
        res.status(200).json({ message: "Updated"});
      } catch (err) {
        res.status(500).json({ message: "Internal Server error" });
      }
}

const deletById = async(req,res)=>{
    try{
      const id = req.params.id;
      await Product.findByIdAndDelete(id);
      res.status(200).json({message:"Deleted"});
    }catch(err){
       res.status(500).json({message:"Internal Server error"})
    }
}

module.exports = { createProduct, getProducts , getProductById , updateProductById, deletById};

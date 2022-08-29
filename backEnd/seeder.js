const mongoose = require("mongoose");
const connectDB = require('./config/db.js'); 
const ProductModel = require('./Models/products.js');
const CategoryModel = require('./Models/categories.js');

const { productAllData } = require('./seeder-data/product.seeder.js');
const { categoryData } = require("./seeder-data/categories.seeder.js");


const importData = async () => {
    connectDB();
    try {
        //delete
        await ProductModel.deleteMany();
        await CategoryModel.deleteMany();

        //import data
        await ProductModel.insertMany(productAllData);
        await CategoryModel.insertMany(categoryData);
        //message for import data 
        console.log("Data imported successfully");
        process.exit();
    }
    catch (error) {
        console.log(`Error :${error.message}`);
        process.exit(1);
    }
}

const deleteData = async () => {
    connectDB();
    try {
        //delete data
        await ProductModel.deleteMany();
        await CategoryModel.deleteMany();

        console.log("product Data Deleted Successfully");
    } catch (error) {
        console.log(`Error :${error.message}`);
        process.exit(1);
        
    }
}
 
console.log(process.argv);
if (process.argv[2] === "-D") {
    deleteData();
} else {
    importData();
}
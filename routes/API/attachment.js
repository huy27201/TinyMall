const  express = require('express')
const multer = require('multer')
const path = require('path')
const router = express.Router();
const fs = require('fs');
//Item Model
const Product = require('../../models/Product')

//
const upload = multer({
    dest: path.join(process.cwd(), "/temp")
  });

//handle err
const handleError = (err, res) => {
    res
      .json(err)
  };

router.post('/upload',upload.single("file"), (req,res) => {
    const tempPath = req.file.path;
    const fileName = req.file.originalname;
    const targetPath =  path.join(process.cwd(),"/uploads/"+ fileName );
    console.log(fileName)
    if (path.extname(req.file.originalname).toLowerCase() === ".png" ) {
      fs.rename(tempPath, targetPath, err => {
        if (err) return handleError(err, res);

        res
          .status(200)
          .json({
              url:"/uploads/"+fileName 
              // "/uploads/image.png"
          })
      });
    }
});
  
module.exports = router;    

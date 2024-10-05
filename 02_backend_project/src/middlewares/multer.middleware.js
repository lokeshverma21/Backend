import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) { //cb is callback
        cb(null, "./public/temp")
    },
    filename: function (req, file, cb) {
        //   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        //   cb(null, file.fieldname + '-' + uniqueSuffix)

        cb(null, file.originalname)
    }
})
  
export const upload = multer({ 
    storage, 
})












// import multer from "multer";

// // Configure the storage for multer
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, "./public/temp"); // Set the destination folder
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.originalname); // Save the file with its original name
//     }
// });

// // Initialize multer with the storage settings
// export const upload = multer({ storage });

// // Middleware to handle file uploads for 'avatar' and 'coverImage' fields
// export const uploadFields = upload.fields([
//   { name: 'avatar', maxCount: 1 },
//   { name: 'coverImage', maxCount: 1 },
// ]);

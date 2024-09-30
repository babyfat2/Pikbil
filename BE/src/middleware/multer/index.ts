import multer from "multer";


// Cấu hình nơi lưu trữ file
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');  // Thư mục lưu file
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname);  // Tên file sau khi upload
    }
  });
  
export const upload = multer({ storage: storage });
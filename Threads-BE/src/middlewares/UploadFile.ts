// import * as multer from "multer";
// import * as express from "express";

// import { Request } from "express";
// import path = require("path");

// export default new (class UploadConfig {
//   upload(fieldName: string) {
//     const storage = multer.diskStorage({
//       destination: (req, res, cb) => {
//         cb(null, "src/uploads");
//       },

//       filename: (req, file, cb) => {
//         cb(null, `${file.fieldname}-${Date.now()}.png`); /// 1231242315-img.png
//       },
//     });

//     const uploadFile = multer({
//       storage: storage,
//       fileFilter: (req, file, cb) => {
//         const ext = path.extname(file.originalname);
//         if (
//           ext !== ".png" &&
//           ext !== ".jpg" &&
//           ext !== ".gif" &&
//           ext !== ".jpeg"
//         ) {
//           return cb(new Error("Only images are allowed"));
//         }
//         return cb(null, true);
//       },
//     });

//     return (
//       req: Request,
//       res: express.Response,
//       next: express.NextFunction
//     ) => {
//       uploadFile.single(fieldName)(req, res, (error: any) => {
//         if (error) return res.status(400).json({ message: error.message });
//         if (req.file !== undefined) {
//           res.locals.filename = req.file.filename;
//           next();
//         }
//         if (req.file === undefined) {
//           next();
//         }
//       });
//     };
//   }
// })();
import { NextFunction, Request, Response } from "express";
import * as multer from "multer";
const UploadFile = (fieldName: string): any => {
  const bufferFiles = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "src/uploads");
    },
    filename(req, file, cb) {
      const unixSuffix = Date.now();

      cb(null, `${file.fieldname}-${unixSuffix}.png`);
    },
  });

  const uploadFile = multer({
    storage: bufferFiles,
  });

  return (req: Request, res: Response, next: NextFunction) => {
    uploadFile.single(fieldName)(req, res, (error: any) => {
      if (error) return res.status(500).json({ error });

      if (req.file) {
        res.locals.filename = req.file.filename;
      }
      next();
    });
  };
};

export default UploadFile;

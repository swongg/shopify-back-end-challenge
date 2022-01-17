import express from "express";
import { upload } from "../controllers/image";

const singleUpload = upload.single("image");
const router = express.Router();

router.post("/", function (req, res) {
  singleUpload(req, res, function (err) {
    if (err) {
      return res.status(422).send({
        errors: [{ title: "Image Upload Error", detail: err.message }],
      });
    }

    return res.json({ imageUrl: req.file.location });
  });
});

export default router;

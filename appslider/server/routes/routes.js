import express from "express";
import { create,getAll } from "../controllers/Post";
import uploadFile from "../middleware/multer.js";
const router = express.Router();

router.post("/new",uploadFile,create);
router.post("/all",getAll);
export default router;
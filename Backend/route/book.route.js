import express from "express";
import { getBook } from "../controller/book.controller.js";

const router = express.Router();

router.get("/", getBook);
router.get("/all", allBook);
router.post("/save", createBook);
router.get("/:id", getBookById);
router.delete("/:id", deleteBook);
router.put("/:id", updateBook);


export default router;
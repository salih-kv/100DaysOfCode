import { Router } from "express";

const router = Router();

router.get("api/products", (req, res) => {
  res.send("[]");
});

export default router;

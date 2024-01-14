import { Router } from "express";

const router = Router();

router.get("/api/products", (req, res) => {
  console.log(req.signedCookies);

  if (req.signedCookies && req.signedCookies.msg === "hello-world") {
    res.send([{ id: 1, productName: "Laptop x", price: 60000 }]);
  }

  res.send("Sorry. You need the correct cookie");
});

export default router;

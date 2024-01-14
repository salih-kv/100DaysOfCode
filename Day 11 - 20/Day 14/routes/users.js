import { Router } from "express";
import {
  query,
  validationResult,
  matchedData,
  checkSchema,
} from "express-validator";
import { createUserValidationSchema } from "../utils/validationSchemas.js";
import { resolveUserIndexById } from "../utils/middleware.js";
import { mockUsers } from "../utils/constants.js";

const router = Router();

router.get(
  "/api/users",
  query("filter")
    .isString()
    .notEmpty()
    .withMessage("Must not be empty")
    .isLength({ min: 3, max: 10 })
    .withMessage("Must be at least 3-10 characters"),
  (req, res) => {
    const result = validationResult(req);
    console.log(result);

    const {
      query: { filter, value },
    } = req;

    if (filter && value) {
      return res.send(mockUsers.filter((user) => user[filter].includes(value)));
    }

    return res.send(mockUsers);
  }
);

router.post(
  "/api/users",
  checkSchema(createUserValidationSchema),
  (req, res) => {
    const result = validationResult(req);
    console.log(result);

    if (!result.isEmpty()) {
      return res.status(400).send({ errors: result.array() });
    }

    const data = matchedData(req);
    const newUser = { id: mockUsers[mockUsers.length - 1].id + 1, ...data };
    mockUsers.push(newUser);

    return res.status(201).send(newUser);
  }
);

router.get("/api/users/:id", resolveUserIndexById, (req, res) => {
  const { findUserIndex } = req;
  const user = mockUsers[findUserIndex];
  if (!user) return res.sendStatus(404);

  res.status(200).send(user);
});

router.put("/api/users/:id", resolveUserIndexById, (req, res) => {
  const { body, findUserIndex } = req;
  mockUsers[findUserIndex] = { id: mockUsers[findUserIndex].id, ...body };
  res.send(mockUsers[findUserIndex]);
});

router.patch("/api/users/:id", resolveUserIndexById, (req, res) => {
  const { body, findUserIndex } = req;
  mockUsers[findUserIndex] = { ...mockUsers[findUserIndex], ...body };
  res.send(mockUsers[findUserIndex]);
});

router.delete("/api/users/:id", resolveUserIndexById, (req, res) => {
  const { findUserIndex } = req;
  const deletedUser = mockUsers.splice(findUserIndex, 1);
  res.send(deletedUser);
});

export default router;

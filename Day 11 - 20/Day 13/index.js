import express from "express";
import { query, validationResult, body, matchedData } from "express-validator";

const app = express();
const PORT = 3000;

const mockUsers = [
  { id: 1, name: "Leanne Graham", username: "Bret" },
  { id: 2, name: "Ervin Howell", username: "Antonette" },
  { id: 3, name: "Clementine", username: "Samantha" },
  { id: 4, name: "Patricia", username: "Karianne" },
  { id: 5, name: "Chelsey", username: "Kamren" },
  { id: 6, name: "Dennis", username: "Leopoldo_Corkery" },
  { id: 7, name: "Glenna", username: "Delphine" },
];

app.get(
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

app.post(
  "/api/users",
  [
    body("username")
      .notEmpty()
      .withMessage("Username cannot be empty")
      .isLength({ min: 5, max: 32 })
      .withMessage(
        "Username must be at least 5 characters with a max of 32 characters"
      )
      .isString()
      .withMessage("Username must be a string!"),
    body("displayName").notEmpty(),
  ],
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

/** */
app.listen(PORT, () => {
  `Server Running on Port:${PORT}`;
});

import express from "express";

const app = express();
const PORT = 3000;

const loggingMiddleware = (req, res, next) => {
  console.log(`${req.method} - ${req.url}`);
  next();
};

const resolveUserIndexById = (req, res, next) => {
  const {
    params: { id },
  } = req;

  const parsedId = parseInt(id);
  if (isNaN(parsedId)) return res.sendStatus(400);
  const findUserIndex = mockUsers.findIndex((user) => user.id === parsedId);
  if (findUserIndex === -1) return res.sendStatus(404);

  req.findUserIndex = findUserIndex;
  next();
};

app.use(express.json());
app.use(loggingMiddleware);

const mockUsers = [
  { id: 1, name: "Leanne Graham", username: "Bret" },
  { id: 2, name: "Ervin Howell", username: "Antonette" },
  { id: 3, name: "Clementine", username: "Samantha" },
  { id: 4, name: "Patricia", username: "Karianne" },
  { id: 5, name: "Chelsey", username: "Kamren" },
  { id: 6, name: "Dennis", username: "Leopoldo_Corkery" },
  { id: 7, name: "Glenna", username: "Delphine" },
];

/** GET */
app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/api/users", (req, res) => {
  /** Query Params */
  const { filter, value, sort } = req.query;

  if (filter && value) {
    const result = mockUsers.filter((user) => user[filter].includes(value));
    res.send(result);
  }

  if (sort === "asc") {
    res.send(mockUsers.sort((a, b) => a.id - b.id));
  }

  if (sort === "dsc") {
    res.send(mockUsers.sort((a, b) => b.id - a.id));
  }

  res.send(mockUsers);
});

/** POST */
app.post("/api/users", (req, res) => {
  const { name, username } = req.body;
  const newUser = { id: mockUsers.length + 1, name, username };
  mockUsers.push(newUser);
  res.status(201).send("User Created");
});

app.get("/api/users/:id", resolveUserIndexById, (req, res) => {
  // /** Route Params */
  // const { id } = req.params;
  // const parsedId = parseInt(id);

  // if (isNaN(parsedId)) {
  //   return res.status(400).send({ msg: "Bad Request. Invalid ID." });
  // }
  // const user = mockUsers.find((user) => user.id === parsedId);

  const { findUserIndex } = req;
  const user = mockUsers[findUserIndex];
  if (!user) return res.sendStatus(404);

  res.status(200).send(user);
});

/** PUT */
app.put("/api/users/:id", resolveUserIndexById, (req, res) => {
  const { body, findUserIndex } = req;
  mockUsers[findUserIndex] = { id: mockUsers[findUserIndex].id, ...body };
  res.send(mockUsers[findUserIndex]);
});

/** PATCH */
app.patch("/api/users/:id", resolveUserIndexById, (req, res) => {
  const { body, findUserIndex } = req;
  mockUsers[findUserIndex] = { ...mockUsers[findUserIndex], ...body };
  res.send(mockUsers[findUserIndex]);
});

/** DELETE */
app.delete("/api/users/:id", resolveUserIndexById, (req, res) => {
  const { findUserIndex } = req;
  const deletedUser = mockUsers.splice(findUserIndex, 1);
  res.send(deletedUser);
});

/** */
app.listen(PORT, () => {
  `Server Running on Port:${PORT}`;
});

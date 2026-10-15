import express from "express";
import { User } from "@myorg/shared-types";

const app = express();

app.get("/user", (_req, res) => {
  const u: User = { id: "1", name: "Alice", email: "alice@example.com" };
  res.json(u);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`API listening ${port}`));

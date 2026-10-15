import { z } from "zod";
import fetch from "node-fetch";
import { User } from "@myorg/shared-types";

const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().optional(),
});

async function main() {
  console.log("Starting fetch...");
  const res = await fetch("http://localhost:3000/user");
  console.log("Status:", res.status);

  const raw = await res.text();
  console.log("Raw response:", raw);

  const data = JSON.parse(raw);
  const user = UserSchema.parse(data);
  console.log("Parsed user:", user);
}

main().catch((err) => {
  console.error("ERROR:", err);
  process.exit(1);
});

import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const Prisma = require("./index.js");
import type { PrismaClient } from "./index.d.ts";
const prisma: PrismaClient = new Prisma.PrismaClient({
  datasourceUrl: Deno.env.get("DATABASE_URL"),
});

async function main() {
  // Create users
  const user1 = await prisma.user.create({
    data: {
      email: "user1@example.com",
      username: "user1",
      password: "password1",
    },
  });

  const user2 = await prisma.user.create({
    data: {
      email: "user2@example.com",
      username: "user2",
      password: "password2",
    },
  });

  // Create tweets
  const tweet1 = await prisma.tweet.create({
    data: {
      text: "Hello, this is my first tweet!",
      authorId: user1.id,
    },
  });

  const tweet2 = await prisma.tweet.create({
    data: {
      text: "Hello, this is another tweet!",
      authorId: user2.id,
    },
  });

  // Create likes
  await prisma.like.create({
    data: {
      userId: user1.id,
      tweetId: tweet2.id,
    },
  });

  await prisma.like.create({
    data: {
      userId: user2.id,
      tweetId: tweet1.id,
    },
  });

  console.log("Database has been seeded.");
}

main()
  .catch((e) => {
    console.error(e);
    Deno.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

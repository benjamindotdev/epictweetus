import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const Prisma = require("./generated/client/index.js");
import type { PrismaClient } from "./generated/client/index.d.ts";
const prisma: PrismaClient = new Prisma.PrismaClient({
  datasourceUrl: Deno.env.get("DATABASE_URL"),
});
import {
  Application,
  Router,
  RouterContext,
} from "https://deno.land/x/oak@v11.1.0/mod.ts";

const app = new Application();
const router = new Router();

router
  .get("/", (context: RouterContext) => {
    context.response.body = "Hello, World!";
  })
  .get("/:username", async (context: RouterContext) => {
    const username = context.params.username;
    const user = await prisma.user.findUnique({
      where: { username: username },
    });
    context.response.body = user;
  })
  .get("/users", async (context: RouterContext) => {
    const users = await prisma.user.findMany();
    context.response.body = users;
  })
  .post("/users", async (context: RouterContext) => {
    const { username, email, password } = await context.request.body().value;

    if (!username || !email || !password) {
      context.response.status = 400;
      context.response.body = { error: "Invalid input" };
      return;
    }

    if (await prisma.user.findUnique({ where: { email: email } })) {
      context.response.status = 400;
      context.response.body = { error: "Email already exists" };
      return;
    }

    if (await prisma.user.findUnique({ where: { username: username } })) {
      context.response.status = 400;
      context.response.body = { error: "Username already exists" };
      return;
    }

    const user = await prisma.user.create({
      data: {
        username,
        email,
        password,
      },
    });
    context.response.body = user;
  })
  .get("/tweets", async (context: RouterContext) => {
    const tweets = await prisma.tweet.findMany();
    context.response.body = tweets;
  })
  .get("/tweets/:id", async (context: RouterContext) => {
    const { id } = context.params;
    const tweet = await prisma.tweet.findUnique({
      where: { id: id },
    });
    context.response.body = tweet;
  })
  .post("/tweets", async (context: RouterContext) => {
    const { content } = await context.request.body().value;
    const tweet = await prisma.tweet.create({
      data: {
        ...content,
      },
    });
    context.response.body = tweet;
  });

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });

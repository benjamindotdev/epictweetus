import { PrismaClient } from "https://deno.land/x/prisma@v2.30.3/deno/edge.ts";

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: Deno.env.get("DATABASE_URL"),
    },
  },
});

export default prisma;

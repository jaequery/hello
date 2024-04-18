import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { userService } from "./user.service";

export const userRouter = createTRPCRouter({
  getUsers: publicProcedure.query(() => {
    const users = userService.getUsers();
    return users;
  }),
});

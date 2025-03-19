import { queryField } from "nexus";

export const User = queryField("user", {
  type: "User",
  resolve: async (args, ctx) => {
    const user = await ctx.prisma.user.findUnique({
      where: { id: args.id },
      include: { todos: true },
    });
  },
});

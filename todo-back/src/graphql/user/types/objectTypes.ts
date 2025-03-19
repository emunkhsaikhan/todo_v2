import { objectType } from "nexus";

export const UserType = objectType({
  name: User.name,
  definition(t) {
    t.field(U);
  },
});

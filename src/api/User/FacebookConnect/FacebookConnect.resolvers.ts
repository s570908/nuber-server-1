import {
  FacebookConnectMutationArgs,
  FacebookConnectResponse,
} from "src/types/graph";
import { Resolvers } from "src/types/resolvers";
import User from "../../../entities/User"; // 이건 꼭 상대경로로 해야 찾을 수 있다.

const resolvers: Resolvers = {
  Mutation: {
    FacebookConnect: async (
      _,
      args: FacebookConnectMutationArgs
    ): Promise<FacebookConnectResponse> => {
      const { fbId } = args;
      try {
        const exitingUser = User.findOne({ fbId });
        if (exitingUser) {
          return {
            ok: true,
            error: null,
            token: "Coming soon, already",
          };
        }
      } catch (error) {
        return {
          ok: false,
          error: error.message,
          token: null,
        };
      }
      try {
        await User.create({
          ...args,
          profilePhoto: `http://graph.facebook.com/${fbId}/picture?type=square'`,
        }).save();
        return {
          ok: true,
          error: null,
          token: "Coming soon, created",
        };
      } catch (error) {
        return {
          ok: false,
          error: error.message,
          token: null,
        };
      }
    },
  },
};

export default resolvers;

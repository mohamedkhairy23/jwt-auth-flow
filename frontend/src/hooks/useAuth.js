import { useQuery } from "@tanstack/react-query";
import { getUser } from "../lib/api";

export const AUTH = "auth";

const useAuth = (opts = {}) => {
  const { data: user, ...rest } = useQuery({
    queryKey: [AUTH],
    queryFn: getUser,
    // stale time infinity for storing and cashing user data
    staleTime: Infinity,
    ...opts,
  });
  return {
    user,
    ...rest,
  };
};

export default useAuth;

import { getTodos } from "@/services/todos";
import { useQuery } from "@tanstack/react-query";

const useTodos = () => {
  const query = useQuery({
    queryFn: getTodos,
    queryKey: ["todos"],
    select : data => data?.data
  });

  return query;
};
export default useTodos;

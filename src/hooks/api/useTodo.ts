import { getTodo } from "@/services/todos"
import { useQuery } from "@tanstack/react-query"

export type useTodoProps = {
    id: number
}

const useTodo = ({ id }: useTodoProps) => {
    const query = useQuery({
        queryKey: ["todo", id],
        queryFn: () => getTodo(id),
        select : data => data.data
    })
    return query
}

export default useTodo
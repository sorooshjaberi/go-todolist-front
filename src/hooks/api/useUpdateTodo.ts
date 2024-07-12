import { updateTodo } from "@/services/todos"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { AxiosError } from "axios";
import { get } from "lodash";
import { toast } from "react-toastify";

const useUpdateTodo = () => {
    const queryClient = useQueryClient()

    const mutation = useMutation(
        {
            mutationFn: updateTodo,
            mutationKey: ["update-todo"],
            onSuccess(_, { id }) {
                queryClient.invalidateQueries({ queryKey: ["todo", id], })
                queryClient.invalidateQueries({ queryKey: ["todos"], })
                // toast.info(`Updated todo #${id}`);
            },
            onError(error) {
                if (error instanceof AxiosError) {
                    const message = get(error, ["response", "data", "message"]);
                    toast.error(message);
                }
            },

        }
    )

    return mutation
}

export default useUpdateTodo
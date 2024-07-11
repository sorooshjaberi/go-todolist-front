import { useParams } from "react-router-dom"

const useCurrentTodo = () => {
    const { todoId } = useParams()
    

    return {
        todoId
    }
}

export default useCurrentTodo
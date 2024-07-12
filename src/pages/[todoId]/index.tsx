import useCurrentTodo from '@/hooks/useCurrentTodo'
import { Box, CircularProgress } from '@mui/material'
import { toNumber } from 'lodash'
import TodoComponent from '@/components/todos/todo'
import useTodo from '@/hooks/api/useTodo'

const Todo = () => {

    const { todoId } = useCurrentTodo()

    const { data, isInitialLoading, isError } = useTodo({
        id: toNumber(todoId)
    })

    if (isInitialLoading || isError) {
        return <CircularProgress />
    }
    return (
        <Box p={2}>
            <TodoComponent key={todoId} todo={data?.data!} />
        </Box>
    )
}

export default Todo
import useCurrentTodo from '@/hooks/useCurrentTodo'
import { Box } from '@mui/material'
import { toNumber } from 'lodash'
import TodoComponent from '@/components/todos/todo'

const Todo = () => {

    const { todoId } = useCurrentTodo()

    return (
        <Box p={2}>
            <TodoComponent key={todoId} todoId={toNumber(todoId)} />
        </Box>
    )
}

export default Todo
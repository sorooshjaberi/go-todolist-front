import useTodo from '@/hooks/api/useTodo'
import { Checkbox, Stack, Typography } from '@mui/material'
import { get, toNumber } from 'lodash'
import { FC } from 'react'

type TodoProps = {
    todoId: number
}
const Todo: FC<TodoProps> = ({ todoId }) => {

    const { data: todo } = useTodo({
        id: toNumber(todoId)
    })

    const done = get(todo, ["data", "done"])



    return (
        <Stack>
            <Typography>
                {get(todo, ["data", "id"])}
            </Typography>
            <Typography>
                {get(todo, ["data", "description"])}
            </Typography>
            <Checkbox defaultChecked={done} />
        </Stack>
    )
}

export default Todo
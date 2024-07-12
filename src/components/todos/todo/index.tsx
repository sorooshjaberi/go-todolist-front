import useUpdateTodo from '@/hooks/api/useUpdateTodo'
import useOnlyEffect from '@/hooks/useOnlyEffect'
import { Todo } from '@/models/todos'
import { Box, Checkbox, Stack } from '@mui/material'
import { useFormik } from 'formik'
import { TextFieldWithFormik, CheckboxWithFormik } from 'formik-mui-inputs'
import { isEqual, toNumber } from 'lodash'
import { FC } from 'react'
import { useDebounce } from 'use-debounce'

type TodoProps = {
    todo: Todo
}
const Todo: FC<TodoProps> = ({ todo }) => {


    const { mutate } = useUpdateTodo()


    const formik = useFormik<Partial<Todo>>({
        initialValues: todo,
        onSubmit() { },
    }
    )

    const [debouncedFormikValues,] = useDebounce(formik.values, 1000)

    useOnlyEffect(() => {
        if (!isEqual(debouncedFormikValues, todo)) {
            mutate({ ...debouncedFormikValues, id: toNumber(todo.id) })
            console.log(formik.values)
        }
    }, [JSON.stringify(debouncedFormikValues)])



    return (
        <Stack>


            <TextFieldWithFormik formik={formik} name="title" />
            <TextFieldWithFormik formik={formik} name="description" />
            <CheckboxWithFormik formik={formik} name="done" />


        </Stack>
    )
}

export default Todo
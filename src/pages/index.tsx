import Center from "@/components/ui/Center";
import HStack from "@/components/ui/HStack";
import useTodos from "@/hooks/api/useTodos";
import useCurrentTodo from "@/hooks/useCurrentTodo";
import { ButtonBase, Stack, Typography } from "@mui/material";
import { isUndefined, map, toString } from "lodash";
import { Outlet, useNavigate } from "react-router-dom";

const Home = () => {
  const { data } = useTodos();

  const { todoId } = useCurrentTodo()

  const navigate = useNavigate()


  return (
    <HStack height="100%">
      <Stack width="200px" height="100%" borderRight="1px solid" borderColor="action.disabled">
        {map(data?.data, ({ id, title }, index) => {

          const isItemActive = toString(id) === todoId
          return (
            <ButtonBase key={index} onClick={() => navigate(`./${toString(id)}`)} sx={{
              p: 2,
              borderBottom: "1px solid",
              borderColor: "action.disabled",
              bgcolor: isItemActive ? "primary.100" : undefined
            }}>
              <Typography>{title}</Typography>
            </ButtonBase>

          )
        })}
      </Stack>
      {!isUndefined(todoId) && <Outlet />}
      {isUndefined(todoId) && <Center flex="1"><Typography>Select a todo</Typography></Center>}
    </HStack>
  );
};

export default Home;

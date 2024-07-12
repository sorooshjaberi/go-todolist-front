import NavItem from "@/components/layout/Navbar/NavItem";
import HStack, { HStackProps } from "@/components/ui/HStack";
import { Box, CircularProgress, Icon, Stack } from "@mui/material";
import { useIsMutating } from "@tanstack/react-query";
import { get, map } from "lodash";
import { ReactNode, useEffect, useMemo, useState } from "react";
import { IconDeviceFloppy } from '@tabler/icons-react'
import { AnimatePresence, Variants, motion } from 'framer-motion'


const variants: Variants = {
  popIn: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: .5
    }
  },
  popOut: {
    scale: 0,
    opacity: 0,
    transition: {
      duration: .5
    }
  }
}

type Route = {
  route: string;
  label: ReactNode;
};

type Props = HStackProps;

const Navbar = (props: Props) => {
  const [showNavbar, setShowNavbar] = useState(true);

  const routes: Route[] = useMemo(
    () => [
      {
        label: "Home",
        route: "/todos",
      },
      {
        label: "Login",
        route: "/login",
      },
      {
        label: "Signup",
        route: "/signup",
      },
    ],
    []
  );

  useEffect(() => {
    const scrollContainer = document.getElementById(
      "virtual_container"
    ) as HTMLDivElement;

    if (scrollContainer) {
      let lastScrollTop = scrollContainer.scrollTop;

      scrollContainer.addEventListener("scroll", (event) => {
        const currentScrollTop = get(event, ["target", "scrollTop"]) as number;

        const scrollChange = currentScrollTop - lastScrollTop;

        setShowNavbar(scrollChange > 0);

        lastScrollTop = currentScrollTop;
      });
    }
  }, []);

  const isMutating = useIsMutating() > 0


  return (
    <HStack
      bgcolor="white"
      position="sticky"
      alignItems="center"
      top={showNavbar ? "0" : "-100px"}
      gap={2}
      px={2}
      py={1}
      sx={{
        transition: ".3s all ease",
      }}
      {...props}
    >
      {map(routes, ({ label, route }, index) => {
        return (
          <NavItem to={route} key={index}>
            {label}
          </NavItem>
        );
      })}

      <Box ml="auto" alignSelf="stretch" px={2} position="relative">
        <AnimatePresence>
          {
            isMutating &&
            <Stack justifyContent="center" alignItems="center" sx={{ position: "absolute", inset: 0 }} component={motion.div} variants={variants} initial="popOut" exit="popOut" animate="popIn">
              <CircularProgress size="1rem" color="inherit" />
            </Stack>
          }
        </AnimatePresence>
        <AnimatePresence>
          {
            !isMutating && <Stack justifyContent="center" alignItems="center" sx={{ position: "absolute", inset: 0 }} component={motion.div} variants={variants} initial="popOut" exit="popOut" animate="popIn">
              <Icon color="disabled" fontSize="medium" >
                <IconDeviceFloppy />
              </Icon>
            </Stack>
          }
        </AnimatePresence>
      </Box>
    </HStack>
  );
};

export default Navbar;

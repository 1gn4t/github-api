import { useRef } from "react";

import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  SimpleGrid,
  useDisclosure,
} from "@chakra-ui/react";
import store from "../store/store";
import FavoritesCard from "./FavoritesCard";
import { observer } from "mobx-react-lite";

export const DrawerFavorites = observer(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const { favoriteList } = store;

  return (
    <>
      <Button ref={btnRef} colorScheme="pink" onClick={onOpen} m={"10px"}>
        Favorites
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader fontSize={{ base: "xl", sm: "2xl" }} color={"pink.500"}>
            Favorites
          </DrawerHeader>
          <DrawerBody>
            <SimpleGrid columns={1} spacing={10}>
              {favoriteList.map((item) => (
                <FavoritesCard key={item.id} data={item} />
              ))}
            </SimpleGrid>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
});

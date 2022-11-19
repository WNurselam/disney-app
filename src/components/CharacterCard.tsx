import React from "react";
import type { Character } from "../api/fetchCharacter";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { CheckCircleIcon,WarningTwoIcon } from "@chakra-ui/icons";


import {
    Flex,
    Text,
    ListItem,
    List,
    ListIcon,
    HStack,
} from "@chakra-ui/react";

type Props = {
    character: Character;
};

const CharacterCard = ({ character }: Props) => {
    return (
        <Flex
            overflow='hidden'
            borderRadius="0.5rem"
            boxShadow="rgb(0 0 0 / 10%) 0px 4px 6px -1px, rgb(0 0 0 / 6%) 0px 2px 4px -1px;"
            maxWidth="640px"
            width="640px"
            height="220px"
            bg="rgb(40, 40,48)"
        >
            <Text p={5}>
            <LazyLoadImage
                src={character.imageUrl}
                alt={`image of ${character.name}`}
                effect="blur"
                width="220"
                height="220"
                style={{
                    flex: "2 1 0%",
                  }}
            />
            </Text>        
            <List spacing={3}>
                 <Text m={4} color="whatsapp.400">{character.name}</Text>
                {character.films.length > 0 ?
                    character.films.slice(0, 3).map((film: string) => (
                        <ListItem>
                           <ListIcon as={CheckCircleIcon} color="green.500" />
                            {film}
                        </ListItem>
                    )): <HStack><Text>Nothing films</Text>   <ListIcon as={WarningTwoIcon} color="green.500" /></HStack>
}
            </List>
        </Flex>
    );
};

export default CharacterCard;



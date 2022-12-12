import React from "react";
import type { Character } from "../api/fetchCharacter";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import {
    Flex,
    Text,
    HStack,
    Skeleton,
    VStack,
    Box
} from "@chakra-ui/react";

type Props = {
    character: Character;

};

const CharacterCard = ({ character }: Props) => {

    if (!character) {
        return (
            <Skeleton>
                <Flex
                    bg="rgb(40, 40,48)"
                    borderRadius="0.5rem"
                    boxShadow="rgb(0 0 0 / 10%) 0px 4px 6px -1px, rgb(0 0 0 / 6%) 0px 2px 4px -1px;"
                    maxWidth="640px"
                    width="640px"
                    height="220px"
                ></Flex>
            </Skeleton>
        );
    }
    return (
        <Flex
            key={character._id}
            overflow='hidden'
            borderRadius="0.5rem"
            boxShadow="rgb(0 0 0 / 10%) 0px 4px 6px -1px, rgb(0 0 0 / 6%) 0px 2px 4px -1px;"
            maxWidth="640px"
            width="640px"
            height="220px"
            bg="#120f34"
        >
            <LazyLoadImage
                src={character.imageUrl}
                alt={`image of ${character.name}`}
                effect="blur"
                width="220"
                height="220"
                style={{
                    flex: "2 1 0%",
                    width: "220px",
                    height: "220px"
                }}
            />

            <VStack flex="3 1 0%" p="1rem" alignItems="flex-start">
                <Text fontSize="1.3rem" fontWeight="600">{character.name}</Text>
                <HStack>
                    <Box>
                        <Text>
                            <Text color="rgb(158, 158, 158)">Film:</Text>
                            {
                                character.films.length > 0 ? character.films[0] : <Text color="whatsapp.400">Nothing films</Text>
                            }</Text>
                    </Box>
                </HStack>
                <Box>
                    <Text>
                        <Text color="rgb(158, 158, 158)">Tv Show:</Text>
                        {
                            character.tvShows.length > 0 ? character.tvShows[0] : <Text color="whatsapp.400"> Nothing Tv Show</Text>
                        }
                    </Text>
                </Box>
            </VStack>
        </Flex>
    );
};
export default CharacterCard;




import React from "react";
import type { Character } from "../api/fetchCharacter";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { CheckCircleIcon, WarningTwoIcon } from "@chakra-ui/icons";
import { useEffect } from 'react'


import {
    Flex,
    Text,
    ListItem,
    List,
    ListIcon,
    HStack,
    Skeleton,
    VStack,
    Box
} from "@chakra-ui/react";

type Props = {
    character: Character;
    callBack: (randomNumber: number) => void;
};

const CharacterCard = ({ character, callBack }: Props) => {

    useEffect(() => {
        callBack(1)
    }, [])


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
            <Text p={5} verticalAlign="middle">
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
            <VStack flex="3 1 0%" p="1rem"  alignItems="flex-start">
            <Text   fontSize="1.3rem" fontWeight="600">{character.name}</Text>
            <HStack>
                <Box>
                    <Text>
                    <Text color="rgb(158, 158, 158)">Film:</Text>
                    {
                        character.films.length > 0 ? character.films[0]:<Text color="whatsapp.400">Nothing films</Text>
                    }</Text>
                </Box>
            </HStack>
            <Box>
                <Text>
                <Text color="rgb(158, 158, 158)">Tv Show:</Text>
                    {
                        character.tvShows.length > 0 ? character.tvShows[0] :<Text color="whatsapp.400"> Nothing Tv Show</Text>
                    }
                </Text>
            </Box>
            </VStack>
        </Flex>
    );
};

export default CharacterCard;

/*
<List spacing={3}>
                <Text m={4} color="whatsapp.400" fontSize="1.3rem" fontWeight="600">{character.name}</Text>
                {character.films.length > 0 ?
                    character.films.slice(0, 3).map((film: string) => (
                        <ListItem>
                            <ListIcon as={CheckCircleIcon} color="green.500" />
                            {film}
                        </ListItem>
                    )) : <HStack><Text>Nothing films</Text>   <ListIcon as={WarningTwoIcon} color="green.500" /></HStack>
                }
            </List>
*/



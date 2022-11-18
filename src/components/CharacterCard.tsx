import React from 'react'
import type { Character } from '../api/fetchCharacter';
import {LazyLoadImage} from  'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useEffect } from "react";

import {
    Flex,
    VStack,
    HStack,
    Image,
    Text,
    Box,
    Button,
    Square,
    Center,
} from "@chakra-ui/react";

type Props = {
    character: Character;  
};


const CharacterCard = ({ character}: Props) => {
    return (
        <Flex
        direction="row"
        justify="space-between"
        align="center"
        gap={1}
        border={1}
        >
            <LazyLoadImage
                src={character.imageUrl}
                alt={`image of ${character.name}`}
                width="220px"
                height="220px"
                effect="blur"
                style={{
                    flex: "2 1 0%",
                }}
            />
            <Text>{character.name}</Text>
        </Flex>
    )
}

export default CharacterCard
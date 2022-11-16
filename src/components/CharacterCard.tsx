import React from 'react'
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
import type { Character } from '../api/fetchCharacter';

type Props = {
    character: Character;
};

const CharacterCard = ({ character }: Props) => {
    return (
        <div>CharacterCard</div>
    )
}

export default CharacterCard
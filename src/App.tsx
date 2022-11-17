import { fetchCharacter } from "./api/fetchCharacter"
import { useQuery,useInfiniteQuery } from "react-query"
import { Flex, Text, Center, Grid, Button, Box, chakra } from "@chakra-ui/react"
import CharacterCard from "./components/CharacterCard"

function App() {
  const { isLoading, data } = useQuery({
    queryFn: fetchCharacter
  })

  if (isLoading) {
    return <Text>Character İs Loading...</Text>
  }

  console.log(data);
  return (
    <Center>
      <Grid templateColumns="repeat(2,2fr)" gap={4}>
        {
          data && data.data.map((character, index) => (
            <CharacterCard character={character} key={index} />
          ))
        }
      </Grid>
    </Center>
  )
}

export default App

import { fetchCharacter } from "./api/fetchCharacter"
import { useQuery, useInfiniteQuery } from "react-query"
import { Flex, Text, Center, Grid, Button, Box, chakra } from "@chakra-ui/react"
import CharacterCard from "./components/CharacterCard"



function App() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    isLoading,
  } = useInfiniteQuery({
    queryKey: ["projects"],
    queryFn: (context) => fetchCharacter(context.pageParam),
    getNextPageParam: (lastPage) => {
      return lastPage?.nextPage;
    },
  });

  console.log(data);
  return (
    <Center>
      <Flex
        direction="column"
        gap={4}
      >
        {
          data?.pages.map((page) =>
            page?.data.map((character, index) =>
              <CharacterCard character={character} key={index} />
            )
          )
        }
      </Flex>
    </Center>
  )
}

export default App

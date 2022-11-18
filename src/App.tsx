import { fetchCharacter } from "./api/fetchCharacter"
import { useQuery, useInfiniteQuery } from "react-query"
import { Flex, Text, Center, Grid, Button, Box, chakra, Skeleton } from "@chakra-ui/react"
import CharacterCard from "./components/CharacterCard"

import { useInView } from "react-intersection-observer";


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

  const { ref } = useInView({
    threshold: 0.5,
    onChange(inView) {
      if (inView) hasNextPage && fetchNextPage();
    },
  });
  return (
    isLoading ? (
      <Text>loading...</Text>
    ) :
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
        <Text
          ref={ref}
        >
          {isFetchingNextPage
            ? 'Loading more...'
            : hasNextPage
              ? 'Load More'
              : 'Nothing more to load'}
        </Text>
        <Text>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</Text>
      </Flex>
    </Center>
  )
}

export default App

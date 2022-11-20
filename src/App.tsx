import { fetchCharacter } from "./api/fetchCharacter";
import { useQuery, useInfiniteQuery } from "react-query";
import { useCallback, useState } from "react";
import { Flex, Text, Center, Grid, Skeleton } from "@chakra-ui/react";
import CharacterCard from "./components/CharacterCard";
import { useInView } from "react-intersection-observer";

function App() {
  const [number, setNumber] = useState(0)
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

  const callBack = (randomNuber: number) => setNumber(randomNuber);

  const { ref } = useInView({
    threshold: 0.5,
    onChange(inView) {
      if (inView) hasNextPage && fetchNextPage();
    },
  });

  if (isLoading) {
    return (
      <Center mt="3rem">
        <Grid templateColumns="repeat(2, 1fr)" gap={4}>
          <Skeleton w="600px" height="220px" border="6px" />
          <Skeleton w="600px" height="220px" border="6px" />
          <Skeleton w="600px" height="220px" border="6px" />
          <Skeleton w="600px" height="220px" border="6px" />
          <Skeleton w="600px" height="220px" border="6px" />
          <Skeleton w="600px" height="220px" border="6px" />
        </Grid>
      </Center>
    );
  }

  return (
    <Center mt="3rem" px="1rem" flexDirection="column" gap="1rem">
      <Flex direction="column" 
        gap="10px"
        border="2px solid #718f9b"
        p="1rem"
        borderRadius="0.5rem"  >
        <Grid templateColumns={[
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(2, 1fr)",
        ]}
          gap={7}>
          {data?.pages.map((page) =>
            page?.data.map((character, index) => (
              <CharacterCard character={character} key={index} callBack={callBack} />
            ))
          )}
          <Text ref={ref}>
            {isFetchingNextPage
              ? "Fetching more characters..."
              : hasNextPage
                ? "Load More"
                : "Nothing more to load"}
          </Text>
          <Text>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</Text>
        </Grid>
      </Flex>
    </Center>
  );
}

export default App;

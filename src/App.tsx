import { fetchCharacter } from "./api/fetchCharacter";
import { useQuery, useInfiniteQuery } from "react-query";
import { Flex, Text, Center, Grid} from "@chakra-ui/react";
import CharacterCard from "./components/CharacterCard";
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
    <Center mt="3rem" px="1rem" flexDirection="column" gap="1rem">
      <Flex direction="column" >
        <Grid  templateColumns={[
                "repeat(1, 1fr)",
                "repeat(1, 1fr)",
                "repeat(2, 1fr)",
                "repeat(2, 1fr)",
              ]}
              gap={6}>
        {data?.pages.map((page) =>
          page?.data.map((character, index) => (
            <CharacterCard character={character} key={index} />
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

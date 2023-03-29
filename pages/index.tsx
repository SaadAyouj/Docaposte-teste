import { Text, Container, SimpleGrid, Box } from "@chakra-ui/react";
import { useQuery } from "react-query";

import Filter from "../components/filter/Filter";
import MovieCard from "../components/movieCard/MovieCard";
import { Movie, TvShow } from "../data/index";


const Home = () => {
  const getMarvel = async () => {
    const res = await fetch("/api/marvel");
    console.log({ res });
    return res.json();
  };
  const { data } = useQuery("marvel", getMarvel);

  console.log(data);
  
  return (
    <Container maxW="container.lg" centerContent>
      <Text bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold">Marvel Movies</Text>
      <Filter />
      <SimpleGrid columns={3} spacingX='40px' spacingY='20px'>
        {data?.map((item: Movie | TvShow) => (
          <Box key={item.id} width='350px'><MovieCard data={item} /></Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Home;

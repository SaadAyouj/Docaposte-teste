import { Movie, TvShow } from "../../data/index";
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
  AspectRatio,
} from '@chakra-ui/react';
import { MdEventRepeat } from 'react-icons/md';
import Link from 'next/link'


interface Props {
  movie: Movie | TvShow;
}

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/api/marvel");
  const data = await res.json();
  
  const paths = data.map((movie: Movie | TvShow) => {
    return {
      params: {id: movie.id.toString()}
    }
  })

  return {
    paths,
    fallback: false,
  }
};

export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const res = await fetch("http://localhost:3000/api/marvel/" + id);
  const data = await res.json();
  
  return {
    props: {movie: data}
  }
}



function Movie({movie}: Props) {
  return (
    <Container maxW={'7xl'}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}>
        <Flex>
          <Image
            rounded={'md'}
            alt={'product image'}
            src={movie.cover_url}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src="https://static6.depositphotos.com/1002881/567/i/450/depositphotos_5677451-stock-photo-error-404.jpg";
            }}
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={{ base: '100%', sm: '400px', lg: '500px' }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
              {movie.title}
            </Heading>
            <Text
              color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              fontSize={'2xl'}>
              {movie.type}
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.200', 'gray.600')}
              />
            }>
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue('gray.500', 'gray.400')}
                fontSize={'2xl'}
                fontWeight={'300'}>
                  <Stack direction="row" alignItems="center" justifyContent={'center'}>
                    <MdEventRepeat />
                    <Text>{movie.release_date}</Text>
                  </Stack>         
              </Text>
              <Text fontSize={'lg'}>
                {movie.overview}
              </Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Show Details
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                  Directed by
                  </Text>{' '}
                  {movie.directed_by}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    From the saga:
                  </Text>{' '}
                  {movie.saga}
                </ListItem>
              </List>
            </Box>
          </Stack>
            <Link href="/">
          <Button
            rounded={'none'}
            w={'full'}
            mt={8}
            size={'lg'}
            py={'7'}
            bg={useColorModeValue('gray.900', 'gray.50')}
            color={useColorModeValue('white', 'gray.900')}
            textTransform={'uppercase'}
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
            }}>
            Back to movie list
          </Button></Link>
        </Stack>
      </SimpleGrid>
    </Container>
  )
}

export default Movie
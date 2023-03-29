import {
  Box,
  Heading,
  Text,
  Img,
  Flex,
  Center,
  useColorModeValue,
  HStack,
} from '@chakra-ui/react';
import { BsArrowUpRight, BsHeartFill, BsHeart } from 'react-icons/bs';
import { Movie, TvShow } from "../../data/index";
import Link from 'next/link'


interface Props {
  data: Movie | TvShow;
}

export default function MovieCard({ data }: Props ) {

  return (
    <Center py={6}>
      <Box
        w="xs"
        rounded={'sm'}
        my={5}
        mx={[0, 5]}
        overflow={'hidden'}
        bg="white"
        border={'1px'}
        borderColor="black"
        boxShadow={useColorModeValue('6px 6px 0 black', '6px 6px 0 cyan')}>
        <Box h={'200px'} borderBottom={'1px'} borderColor="black">
          <Img
            src={
              data.cover_url
            }
            roundedTop={'sm'}
            objectFit="cover"
            h="full"
            w="full"
            alt={'Blog Image'}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src="https://static6.depositphotos.com/1002881/567/i/450/depositphotos_5677451-stock-photo-error-404.jpg";
            }}
          />
        </Box>
        <Box p={4}>
          <Box
            bg="black"
            display={'inline-block'}
            px={2}
            py={1}
            color="white"
            mb={2}>
            <Text fontSize={'xs'} fontWeight="medium">
              {data.type}
            </Text>
          </Box>
          <Heading color={'black'} fontSize={'2xl'} noOfLines={1}>
            {data.title}
          </Heading>
          <Text color={'gray.500'} noOfLines={2}>
            {data.overview === null ? "Sorry, no informations about this movie or show are available" : data.overview}
          </Text>
        </Box>
        <HStack borderTop={'1px'} color="black">
          <Flex
            p={4}
            alignItems="center"
            justifyContent={'space-between'}
            roundedBottom={'sm'}
            cursor={'pointer'}
            w="full">
            <Text fontSize={'md'} fontWeight={'semibold'}>
              
             <Link href={'/movie/' + data.id}>View more</Link>
            </Text>
            <BsArrowUpRight />
          </Flex>
        </HStack>
      </Box>
    </Center>
  );
}
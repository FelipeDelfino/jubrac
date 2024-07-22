'use client'
import { useLayoutEffect, useState } from "react";

import Image from "next/image";
import { Inter } from "next/font/google";
import { Box, Button, Container, Divider, Flex, Grid as GridChakra, GridItem, Heading, HStack, Icon, IconButton, Link, Spacer, Stack, Text, VStack } from "@chakra-ui/react";
import { FaInstagram } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';

import Front from '../../public/f1.png'
import Back from '../../public/file.png'
import Logo from '../../public/obpc.png'

import Nav from '../components/Nav'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';


// const inter = Inter({ subsets: ["latin"] });



export default function Home() {
  const [maxHeight, setMaxHeight] = useState<string>("100vh");

  useLayoutEffect(() => {
    const updateMaxHeight = () => {
      setMaxHeight(`${window.innerHeight}px`);
    };

    window.addEventListener("resize", updateMaxHeight);

    // Define a altura máxima inicial quando o componente é montado
    updateMaxHeight();

    return () => window.removeEventListener("resize", updateMaxHeight);
  }, []);

  return (
    <>
      <Flex
        w='100vw'
        h='100vh'
        bg='#151515'
        direction='column'
      >
          <Nav/>
        {/* <Container
          minW='70vw'
        // bg='pink'
        >
          <Flex
            h='9vh'
          // bg='tomato'
          >

            <Box
              display='flex'
              alignItems='center'
              justifyContent='center'
              // bg='yellow'
              w='10vw'
            >
              <Image
                src={Logo}
                height={31}
                width={31}
                priority={true}
                quality={100}
                layout=""
                alt="OBPC"
              />
              <Text
                fontSize='2xl'
                ml={2}
                color='white'
                h='100%'
                display='flex'
                alignItems='center'
                justifyContent='center'
              >
                <b>JUBRAC</b>
              </Text>
            </Box>
            <Spacer />
            <HStack
              // bg='gray.700'
              display='flex'
              alignItems='center'
              justifyContent='center'
              gap={8}
              w='15vw'
            >
              <Link fontSize='sm' color='gray.200' >
                Inicio
              </Link>
              <Link fontSize='sm' color='gray.200' >
                Projetos
              </Link>
              <Link fontSize='sm' color='gray.200' >
                Produtos
              </Link>
            </HStack>
            <Spacer />
            <Box
              w='10vw'
              display='flex'
              justifyContent='center'
              alignItems='center'
            // bg='red'
            >
              <IconButton
                onClick={handleInstagramClick}
                aria-label='instagram'
                variant="solid"
                bgGradient='linear(to-tr, #7928CA, #ff006a)'
                borderRadius="full"
                size='sm'
                icon={<Icon as={FaInstagram} color='white' boxSize={5} />}
                _hover={{
                  bgGradient: 'linear(to-tr, #6a28ac, #e4005f,)'
                }}
              />
            </Box>
          </Flex>
        </Container> */}

        <Flex
          h='90vh'
          direction='column'
          
        >
          <Container
            bg=''
            w='100%'
            maxW='60vw'
            display='flex'
            alignItems='center'
            mb={6}
          >
            <Text
              as='h2'
              fontSize={'3xl'}
              color='white'
            >
              <b>Produtos</b>
            </Text>
          </Container>

          <Container
            maxW='65vw'
            borderRadius={6}
          >
            <Box>
              <GridChakra templateColumns='repeat(6, 1fr)' h='100%'>
                <GridItem colSpan={4}>
                  <HStack
                    align='stretch'
                    justify='center'
                    h='100%'
                  >
                    <Box
                      // mt='12'
                      maxW='100%'
                      display='flex'
                      justifyContent='center'
                      alignItems='center'
                    >
                      <Swiper
                        pagination={{
                          dynamicBullets: true,
                        }}
                        modules={[Pagination]}
                        // className="mySwiper"
                        style={{ backgroundColor: '', maxHeight: '65vh' }}
                      >
                        <SwiperSlide>
                          <Box
                            display='flex'
                            justifyContent='center'
                            alignItems='center'
                            p={6}
                          >
                            <Image
                              src={Front}
                              height={500}
                              width={300}
                              priority={true}
                              quality={100}
                              // layout="responsive"
                              alt='Camisa Front'
                            />
                          </Box>
                        </SwiperSlide>

                        <SwiperSlide>
                          <Box
                            display='flex'
                            justifyContent='center'
                            alignItems='center'
                            p={6}
                          >
                            <Image
                              src={Back}
                              height={500}
                              width={300}
                              priority={true}
                              quality={100}
                              // layout="responsive"
                              alt='Camisa Back'
                            />
                          </Box>
                        </SwiperSlide>
                      </Swiper>
                    </Box>
                  </HStack>
                </GridItem>
                <GridItem colSpan={2}>
                  <Box
                    h='100%'
                    mt=''
                    // bg='blue'
                  >
                    <Box
                      w='100%'
                      h='100px'
                      p='3'
                      pt='6'
                    >
                      <Stack spacing={4} mb='2'>
                        <Box>
                          <Heading size='md' fontWeight='900' color='white'>
                            Camiseta - E Todos Ficaram Cheios
                          </Heading>
                        </Box>
                        <Box>
                          <Text fontSize='md' fontWeight='400' color='white'>
                            R$45,00
                          </Text>

                        </Box>
                        <Button borderRadius='full' colorScheme='blue' size='sm'> Eu quero!</Button>
                        <Text color='gray' align='justify' fontSize='sm'>
                          Se perguntando se isso ficará tão bom em você quanto na tela? A resposta é sim. Uma camiseta 100% algodão de qualidade com um design inteligente e estiloso.
                        </Text>

                      </Stack>

                    </Box>

                  </Box>
                </GridItem>
              </GridChakra>
            </Box>
          </Container>
        </Flex>



        {/* Footer - Refatorar */}
        <Flex
          bg='#1F1F1F'
          h=''
          direction='column'
          mt={12}
        >
          <Container
            maxW='70vw'
            pt='8'
            pb='10'
          >
            <Flex>
              <Box>
                <VStack spacing={3}>
                  <Text
                    color='white'
                    as='b'
                    fontSize='lg'
                  >
                    Juventude Unida O Brasil Para Cristo - JUBRAC
                  </Text>
                  <Flex
                    gap={4}
                    align='center'
                    w='100%'
                  >
                    <Image src="/obpc.png" width={34} height={100} alt='obpc' />
                    <Text
                      color='gray.400'
                      fontSize='md'
                    >
                      Igreja O Brasil Para Cristo
                    </Text>
                  </Flex>
                </VStack>
              </Box>
              <Spacer />
              <Box>
                <VStack spacing={3}>
                  <Text
                    color='white'
                    as='b'
                    fontSize='lg'
                  >
                    Acompanhe-nos
                  </Text>
                  <Link color='gray.300'> Instagram</Link>
                </VStack>
              </Box>
              <Spacer />
              <Box>
                <VStack spacing={3}>
                  <Text
                    color='white'
                    as='b'
                    fontSize='lg'
                  >
                    Fale conosco
                  </Text>
                  <Link color='gray.300'>Telefone</Link>
                </VStack>
              </Box>
            </Flex>
            <Divider orientation='horizontal' pt={14} />
            <Flex pt={3}>
              <Text p='' color='gray.400'>
                © {' '}
                {new Date().getFullYear()}
                {' '}
                Todos os Direitos reservados | Felipe Delfino
              </Text>
              <Spacer />
              <Image src="/obpc.png" width={34} height={100} alt='obpc' />
            </Flex>
          </Container>
        </Flex>

      </Flex >

    </>
  );
}

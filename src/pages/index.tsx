'use client'
import { useLayoutEffect, useState } from "react";

import Image from "next/image";
import { Inter } from "next/font/google";
import { Box, Button, Container, Divider, Flex, Grid as GridChakra, GridItem, Heading, HStack, Icon, IconButton, Link, Spacer, Stack, Text, VStack } from "@chakra-ui/react";
import { FaInstagram } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';


const inter = Inter({ subsets: ["latin"] });



export default function Home() {
  const [maxHeight, setMaxHeight] = useState<string>("100vh");
  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/jubracadobrac_regionalitaqua/', '_blank')
  };

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
      <Flex w='100vw' h='100vh' bg='#151515' direction='column'>
        <Container bg='' minW='60vw'>
          <Flex h='10vh' bg=''>

            {/* <Box w='100%' bg='' h={75} bg='gray.800'> */}
            <Box w='10vh' bg='' display='flex' alignItems='center' justifyContent='end'>
              <Image src="/obpc.png" width={34} height={100} alt='obpc' />
              {/* </Box>
            <Box h='100%' w='12vh' bg='red'> */}

              <Text fontSize='2xl' ml={2} color='white' h='100%' display='flex' alignItems='center' justifyContent='center'>
                <b>JUBRAC</b>
              </Text>
            </Box>
            {/* </Box> */}
            {/* <Box w='100%' bg='' h={75} bg='gray.800'> */}
            <Spacer />
            <HStack h='100%' bg='' display='flex' alignItems='center' justifyContent='center' gap={8}>


              <Link fontSize='sm' color='gray' >
                Sobre
              </Link>
              <Link fontSize='sm' color='gray' >
                Projetos
              </Link>
              <Link fontSize='sm' color='gray' >
                Produtos
              </Link>
            </HStack>
            {/* </Box> */}
            <Spacer />
            <Box w='10vh' display='flex' alignItems='center'>
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
        </Container>

        <Flex h='90vh' direction='column'>
          <Container
            bg=''
            w='100%'
            maxW='60vw'
            display='flex'
            alignItems='center'
            justifyContent=''
            mb={6}
          >
            <Text
              as='h2'
              fontSize={'3xl'}
              as='b'
              color='white'
            >
              Produtos
            </Text>
          </Container>

          <Container
            maxW='65vw'
            // bg='#0e0e0e'
            // margin={6}
            // border='1px'
            // borderColor='gray'
            borderRadius={6}
          >
            <Box h='' >
              <GridChakra templateColumns='repeat(6, 1fr)' h='100%'>
                <GridItem colSpan={4}>
                  <HStack align='stretch' justify='center' h='100%' ml='' bg=''>
                    {/* <Box>
                      <VStack>
                        <Box>
                          <Image
                            src='/front-camisa.jpeg'
                            width={100}
                            height={120}
                            alt='Product Front'
                          />
                        </Box>
                        <Box>
                          <Image
                            src='/back-camisa.jpeg'
                            width={100}
                            height={120}
                            quality={100}
                            alt='Product Front'
                          />
                        </Box>
                      </VStack>
                    </Box> */}
                    <Box
                      // mt='12'
                      maxW='100%'
                      display='flex'
                      justifyContent='center'
                      alignItems='center'
                      bg=''
                    >
                      <Swiper
                        pagination={{
                          dynamicBullets: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                      >
                        <SwiperSlide>
                          <Box
                            display='flex'
                            justifyContent='center'
                            alignItems='center'
                            bg=''
                            p={6}
                          >
                            <Image
                              src='/back-camisa.png'
                              width={500}
                              height={100}
                              quality={100}
                              alt='Camisa Front'
                            />
                          </Box>
                        </SwiperSlide>

                        <SwiperSlide>
                          <Box
                            display='flex'
                            justifyContent='center'
                            alignItems='center'
                            bg=''
                            p={6}
                          >
                            <Image
                              src='/front-camisa.png'
                              width={500}
                              height={100}
                              quality={100}
                              alt='Camisa Front'
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
                    mt='12'
                  >
                    <Box
                      w='100%'
                      h='100px'
                      p='3'
                      pt='6'
                    >
                      <Stack spacing={4} mb='2'>
                        <Box>
                          <Heading size='md' color='white'>
                            Camiseta - E Todos Ficaram Cheios
                          </Heading>
                        </Box>
                        <Box>
                          <Text fontSize='md' as='b' color='white'>
                            R$45,00
                          </Text>

                        </Box>
                        <Button borderRadius='full' colorScheme='blue' size='sm'> Eu quero!</Button>
                        <Text color='gray' align='justify' fontSize='sm'>
                          Se perguntando se isso ficará tão bom em você quanto na tela? A resposta é sim. Uma camiseta 100% algodão de qualidade com um design inteligente e estiloso.
                        </Text>

                      </Stack>

                    </Box>
                    {/* <Box
                      w='100%'
                      h='100px'
                      p='3'
                      pt='16'

                    > */}

                    {/* <Box bg='gray.300'>
                                    <Divider />
                                    </Box> */}
                    {/* </Box> */}
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

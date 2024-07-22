import { Container, Flex, Box, Spacer, HStack, Link, IconButton, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";


import Logo from '../../public/obpc.png'


export default function Nav() {
    
    const handleInstagramClick = () => {
        window.open('https://www.instagram.com/jubracadobrac_regionalitaqua/', '_blank')
    };

    return (
        <Container
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
        </Container>
    )
}
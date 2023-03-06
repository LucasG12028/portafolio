import React from 'react';
import { Box, Flex, HStack, Text, Button, Image } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import NavBar from "./NavBar";
import AboutMe from './AboutMe';
import Tecnologies from './Tecnologies';


export default function Home() {
    return (
        <Box >
            <NavBar />
            <Flex mb='100px'>
                <Box ml='100px' w='700px'>
                    <Box mt='5%' textAlign='left'>
                        <Text fontSize='20px' color='purple.500'>Hi! I'm Lucas!</Text>
                        <Text fontSize='70px'>Full Stack Developer</Text>
                        <Text color='#7a818c'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nihil error alias possimus voluptates, itaque laudantium nam aut earum amet vel quod minus ipsum. Iure recusandae error dolor animi perspiciatis?</Text>
                    </Box>
                    <Flex>
                        <Button mt='30px' colorScheme='purple'>Work with me</Button>
                    </Flex>
                </Box>
                <Box mt='30px' ml='10%' boxSize='sm'>
                    <Image src='https://firebasestorage.googleapis.com/v0/b/portafolio-69706.appspot.com/o/imgHero.a904b4f8ece836bb3df1.png?alt=media&token=59543543-d2ab-4360-bde4-49382ee8c31f' alt='Dan Abramov' />
                </Box>
            </Flex>
            <AboutMe/>
            <Tecnologies/>
        </Box >
    )
}
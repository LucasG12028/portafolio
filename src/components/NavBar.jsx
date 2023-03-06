import React from 'react';
import { Box, Flex, HStack, Button, Text } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { DiGithubBadge } from "react-icons/di";
import { SiLinkedin } from "react-icons/si";
import { RiMoonFill } from "react-icons/ri";
import { RiSunLine } from "react-icons/ri";

export default function NavBar() {

    return (
        <HStack color='white' bg='#131419' alignItems='center' justifyContent='space-between'>
            <Flex alignItems='center'>
                <Text as='u' ml='100px' fontSize='35px'>Lucas Iván Giménez</Text>
                <Box ml='30px' mr='10px'> <SiLinkedin size='30px' /></Box>
                <Box> <DiGithubBadge size='30px' /></Box>
            </Flex>
            <Tabs>
                <TabList>
                    <Tab _selected={{ color: 'white', bg: 'purple.500' }}>Home</Tab>
                    <Tab _selected={{ color: 'white', bg: 'purple.500' }}>About Me</Tab>
                    <Tab _selected={{ color: 'white', bg: 'purple.500' }}>Portfolio</Tab>
                    <Tab _selected={{ color: 'white', bg: 'purple.500' }}>Contact</Tab>
                </TabList>
            </Tabs>
            <Flex alignItems='center'>
                {/* uno y otro */}
                <Flex mr='10px'>
                    <RiMoonFill size='25px' />
                    <RiSunLine size='25px' />
                </Flex>
                <Flex mr='10px'>
                    <Box ml='5px'>ES</Box>
                    <Box ml='5px'>EN</Box>
                </Flex>
            </Flex>
        </HStack>
    )
}
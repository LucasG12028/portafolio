import React from 'react';
import { Box, Flex, HStack, Button } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { DiGithubBadge } from "react-icons/di";
import { SiLinkedin } from "react-icons/si";
import { RiMoonFill } from "react-icons/ri";
import { RiSunLine } from "react-icons/ri";

export default function NavBar() {

    return (
        <HStack alignItems='center' justifyContent='space-between' margin='2%' border='2px'>
            <Flex alignItems='center'>
                <Box ml='40px' fontSize='25px'>Lucas Iván Giménez</Box>
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
                <Box>
                    <RiMoonFill size='25px' />
                    <RiSunLine size='25px' />
                </Box>
                <Box>
                    <Button ml='5px'>ES</Button>
                    <Button ml='5px'>EN</Button>
                </Box>
            </Flex>
        </HStack>
    )
}
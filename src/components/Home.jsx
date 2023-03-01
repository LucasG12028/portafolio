import React from 'react';
import { Box, Flex, HStack } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import NavBar from "./NavBar";

export default function Home() {
    return (
        <Box>
            <NavBar/>
            <Box>
                <Box>Hi! I'm Lucas!</Box>
                <Box>Full Stack Developer</Box>
                <Box>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nihil error alias possimus voluptates, itaque laudantium nam aut earum amet vel quod minus ipsum. Iure recusandae error dolor animi perspiciatis?</Box>
            </Box>
        </Box>
    )
}
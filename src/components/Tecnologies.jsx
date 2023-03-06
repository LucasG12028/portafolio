import React from 'react';
import { Box, Flex, HStack, Image, Button, Text, Divider, Center } from "@chakra-ui/react";

export default function Tecnologies() {
    return (
        <Box >
            <Text mt='20px' color='purple.500' fontSize='20px'>Tecnologies</Text>
            <Divider mt='20px' mb='20px' />
            <Center p='30px'>
                <Flex direction='column'>
                <Center>
                    <Image m='30px' h='80px' src='https://firebasestorage.googleapis.com/v0/b/portafolio-69706.appspot.com/o/css.png?alt=media&token=424ecde8-008e-4a2e-ad1e-0d1ea9377c20' alt='css'></Image>
                    <Image m='30px' h='80px' src='https://firebasestorage.googleapis.com/v0/b/portafolio-69706.appspot.com/o/redux.png?alt=media&token=a1b5dd9d-99a9-4436-9aee-f9fe6442df94' alt='redux'></Image>
                    <Image m='30px' h='80px' src='https://firebasestorage.googleapis.com/v0/b/portafolio-69706.appspot.com/o/react.png?alt=media&token=76e566dd-b8e2-4394-bc36-10ada57c329a' alt='react'></Image>
                    <Image m='30px' h='80px' src='https://firebasestorage.googleapis.com/v0/b/portafolio-69706.appspot.com/o/jss.png?alt=media&token=b5f333bd-8a08-42d2-9067-a6ca5a834d72' alt='js'></Image>
                    <Image m='30px' h='80px' src='https://firebasestorage.googleapis.com/v0/b/portafolio-69706.appspot.com/o/mongo.png?alt=media&token=0d7dfb49-bdb2-4d47-bb9e-08bf2f5a1de5' alt='mongoDB'></Image>
                </Center>
                <Center>
                    <Image m='30px' h='80px' src='https://firebasestorage.googleapis.com/v0/b/portafolio-69706.appspot.com/o/html5.png?alt=media&token=26d0e53f-bc81-4b1e-876d-0ed26eb9aad9' alt='html5'></Image>
                    <Image m='30px' h='80px' src='https://firebasestorage.googleapis.com/v0/b/portafolio-69706.appspot.com/o/boostrap.png?alt=media&token=12dd2cb8-3f47-4dea-bc52-adfc621b9509' alt='boostrap'></Image>
                    <Image m='30px' h='80px' src='https://firebasestorage.googleapis.com/v0/b/portafolio-69706.appspot.com/o/git.png?alt=media&token=af0504d4-c800-4989-9b7d-f666fb9ea3f5' alt='git'></Image>
                    <Image m='30px' h='80px' src='https://firebasestorage.googleapis.com/v0/b/portafolio-69706.appspot.com/o/chakra.png?alt=media&token=7ba5617a-49bc-4ae0-9aac-9ebe491d9c4e' alt='chakraUI'></Image>
                    <Image m='30px' h='80px' src='https://firebasestorage.googleapis.com/v0/b/portafolio-69706.appspot.com/o/pfadmin.png?alt=media&token=23291cae-b140-4db3-ae47-2749c0900c7a' alt='pgadmin'></Image>
                </Center>
                <Center>
                    <Image m='30px' h='80px' src='https://firebasestorage.googleapis.com/v0/b/portafolio-69706.appspot.com/o/arduino.png?alt=media&token=12bcd0b3-3b10-442c-9b1f-8fb3469cf1e1' alt='arduino'></Image>
                    <Image m='30px' h='80px' src='https://firebasestorage.googleapis.com/v0/b/portafolio-69706.appspot.com/o/java.webp?alt=media&token=0592422a-6f0b-4f38-bb33-f392f8e33c6a' alt='java'></Image>
                    <Image m='30px' h='80px' src='https://firebasestorage.googleapis.com/v0/b/portafolio-69706.appspot.com/o/js.png?alt=media&token=3aabf096-980b-4b56-b805-0ce3bafe10b4' alt='nodeJS'></Image>
                </Center>
                </Flex>
            </Center>
        </Box >

    )
}
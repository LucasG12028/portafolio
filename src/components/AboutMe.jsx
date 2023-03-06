import React from 'react';
import { Box, Flex, HStack, Image, Button, Text, Divider } from "@chakra-ui/react";


export default function AboutMe() {
    return (
        <Box bg='#050402'>
            <Box>About</Box>
            <Box p='5%'>

                <Flex>
                    <Box pl='190px' pt='40px' w='40%'>
                        <Image borderRadius='20px' h='350px' src='https://firebasestorage.googleapis.com/v0/b/portafolio-69706.appspot.com/o/a5d32cfb-16b4-4af2-8676-b38dd8305d10.jpg?alt=media&token=f2c8fd09-7000-48dc-8e6a-d0d150a4369b' alt='Dan Abramov' />
                    </Box>
                    <Box p='50px' w='60%' align='start' >
                        <Text>Lucas Iván Giménez</Text>
                        <Text color='purple.500'>Full Stack Developer</Text>
                        <Divider mt='10px' mb='10px' />
                        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit perferendis sequi laudantium vero alias quasi totam, optio, aut tenetur aliquam, eius ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi officia ducimus assumenda nobis laudantium voluptate vero maiores cum nisi, laborum numquam iure quas, labore perferendis incidunt laboriosam reiciendis modi quibusdam. Aperiam vel fuga sunt inventore aut perferendis natus.   Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nihil error alias possimus voluptates, itaque laudantium nam aut earum amet vel quod minus ipsum. Iure recusandae error dolor animi perspiciatis?</Text>
                        <Box align='center'>
                            <Button colorScheme='purple' mt='40px'>Contact me</Button>
                        </Box>
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
}
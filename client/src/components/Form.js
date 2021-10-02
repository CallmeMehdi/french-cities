import React, { Component } from 'react';
import { Input, Box, Text, Flex } from "@chakra-ui/react"

export default class Form extends Component {
    render() {
        return(
            <div>
                <Box bg="#D2E5E9" w="100%" p={4} pl={15} color="black" borderRadius="10">
                    <Flex color="black" justify="space-around">
                    <Text fontSize="4xl" mr={25}>Je recherche...</Text>

                    <Input placeholder="Entrer la ville ici" w="80%" pl={10} size="lg" borderRadius="10"/>
                    </Flex>
                </Box>
                <Flex h="100%">
                    <Box bg="#D2E5E9" w="100%" h="100%" mt={12} mr={12} p={4} pl={15} color="black" borderRadius="10">
                        <Flex justify="center">
                            <Text fontSize="4xl" mr={25}>Ville de metropole</Text>
                        </Flex>
                    </Box>
                    <Box bg="#D2E5E9" w="100%" h="100%" mt={12} p={4} pl={15} color="black" borderRadius="10">
                        <Flex justify="center">
                            <Text fontSize="4xl" mr={25}>Ville d'outre-mer</Text>
                        </Flex>
                    </Box>
                </Flex>
            </div>
        )
      }
}
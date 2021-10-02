import React, { Component } from 'react';
import { Input, Box, Text, Flex, Center } from "@chakra-ui/react"
import axios from 'axios';



export default class Form extends Component {

    constructor(){
        super()
        
        this.state = {
            city: '',
            selectedCities: []
        }
    }
    
    handleCityChange(e){

        let newCity = e.target.value.toUpperCase()
        this.setState({city: newCity})
        axios.get(process.env.REACT_APP_BASE_URL +"/cities/" + newCity)
        .then(res => {
            console.log(e.target.value)

            console.log(res)
            const cities = res.data;
            this.setState({ selectedCities: cities });
        })
    }


    render() {
        return(
            <div>
                <Box bg="#D2E5E9" w="100%" p={4} pl={15} color="black" borderRadius="10">
                    <Flex color="black" justify="space-around">
                    <Text fontSize="4xl" mr={25}>Je recherche...</Text>

                    <Input onChange={(e) => {this.handleCityChange(e)}} placeholder="Entrer la ville ici" w="80%" pl={10} size="lg" borderRadius="10"/>
                    </Flex>
                </Box>
                <Flex h="100%">
                    <Box bg="#D2E5E9" w="100%" h="100%" mt={12} mr={12} p={4} pl={15} color="black" borderRadius="10">
                        <Flex justify="center">
                            <Text fontSize="4xl" mr={25}>Ville de metropole</Text>
                        </Flex>
                        {this.state.selectedCities.length > 0?
                        <Center>
                            <Box bg="#6FC676" w="80%" m={5} p={15} color="white" fontSize="12px" fontWeight="normal">{this.state.selectedCities.length} villes correspondant au texte saisi</Box>
                        </Center>
                        :
                        <Center>
                            <Box bg="#C37678" w="80%" m={5} p={15} color="white" fontSize="12px" fontWeight="normal">Aucune ville correspondant au texte saisi</Box>
                        </Center>
                        }

                        <div style={{ margin: "auto"}}>
                        {this.state.selectedCities.map(function(city){
                            return <Box style={{display:"inline-block" }} bg="#5B6670" w="39%" m={5} p={15} color="white" fontSize="12px" fontWeight="normal">
                            {city.libelleAcheminement}
                          </Box>;
                        })}
                        </div>
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
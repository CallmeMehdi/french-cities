import React, { Component } from 'react';
import { Input, Box, Text, Flex, Center } from "@chakra-ui/react"
import axios from 'axios';



export default class Form extends Component {

    constructor(){
        super()
        
        this.state = {
            city: '',
            selectedMetropoleCities: [],
            selectedOtherCities: []
        }
    }
    
    // Function for when input is changed that sends get request to backend to get cities
    handleCityChange(e){

        // Creating the prefix
        let newCity = e.target.value
        
        // Changing state of city
        this.setState({city: newCity})

        // Sending request to get all cities for prefix
        axios.get(process.env.REACT_APP_BASE_URL +"/cities/" + newCity)
        .then(res => {
            const cities = res.data;
            this.setState({ selectedMetropoleCities: cities["metropoleCities"], selectedOtherCities: cities["otherCities"] });
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
                        {this.state.selectedMetropoleCities.length > 0?
                        <Center>
                            <Box bg="#6FC676" w="80%" m={5} p={15} color="white" fontSize="12px" fontWeight="normal">{this.state.selectedMetropoleCities.length} villes correspondant au texte saisi</Box>
                        </Center>
                        :
                        <Center>
                            <Box bg="#C37678" w="80%" m={5} p={15} color="white" fontSize="12px" fontWeight="normal">Aucune ville correspondant au texte saisi</Box>
                        </Center>
                        }

                        <div style={{ margin: "auto"}}>
                        {this.state.selectedMetropoleCities.map(function(city){
                            return <Box style={{display:"inline-block" }} bg="#5B6670" w="39%" m={5} p={15} color="white" fontSize="12px" fontWeight="normal">
                            {city.nomCommune}
                          </Box>;
                        })}
                        </div>
                    </Box>
                    <Box bg="#D2E5E9" w="100%" h="100%" mt={12} p={4} pl={15} color="black" borderRadius="10">
                        <Flex justify="center">
                            <Text fontSize="4xl" mr={25}>Ville d'outre-mer</Text>
                        </Flex>
                        {this.state.selectedOtherCities.length > 0?
                        <Center>
                            <Box bg="#6FC676" w="80%" m={5} p={15} color="white" fontSize="12px" fontWeight="normal">{this.state.selectedOtherCities.length} villes correspondant au texte saisi</Box>
                        </Center>
                        :
                        <Center>
                            <Box bg="#C37678" w="80%" m={5} p={15} color="white" fontSize="12px" fontWeight="normal">Aucune ville correspondant au texte saisi</Box>
                        </Center>
                        }

                        <div style={{ margin: "auto"}}>
                        {this.state.selectedOtherCities.map(function(city){
                            return <Box style={{display:"inline-block" }} bg="#5B6670" w="39%" m={5} p={15} color="white" fontSize="12px" fontWeight="normal">
                            {city.nomCommune}
                          </Box>;
                        })}
                        </div>
                    </Box>
                </Flex>
            </div>
        )
      }
}
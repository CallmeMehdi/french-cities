import React, { Component } from 'react';
import { Input, Box, Text, Flex } from "@chakra-ui/react"
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
                        <div style={{ margin: "auto"}}>
                        {this.state.selectedCities.map(function(city){
                            return <Box style={{display:"inline-block" }} bg="#5B6670" w="39%" m={5} p={4} color="white" fontSize="12px" fontWeight="normal">
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
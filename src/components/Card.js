import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <>
    <HStack>
  {
    <Box bg="white"  color="black" borderRadius='lg' >  
    <VStack >
    < Image  src={imageSrc} borderRadius='lg' />
    </VStack>
    <VStack alignItems="left" style={{padding: 25}}>
    <Heading as="h4" size="md">
    {title}
    </Heading>
     <Text  py='2' opacity="60%">{description}</Text>
     <Text fontSize='sm' >See more<FontAwesomeIcon icon={faArrowRight} size="1x" /></Text>
     </VStack>
    </Box>
  }
   </HStack>
   </>
  )
};

export default Card;

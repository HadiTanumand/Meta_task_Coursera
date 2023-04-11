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
        <VStack>
          <Box borderRadius='xl' bg="white" color='black'>
            <Image borderRadius='xl' src={imageSrc}></Image>
            <Heading m={4} size="md">{title}</Heading>
            <Text m={4} color="gray">{description}</Text>
            <Text m={4} color="black">See More  <FontAwesomeIcon icon={faArrowRight} size="1x" /></Text>
          </Box>
        </VStack>
      </HStack>
    </>
  );
};

export default Card;

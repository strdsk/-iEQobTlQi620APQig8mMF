import { Image } from '@chakra-ui/image'
import { Box, Flex, HStack, Link, Spacer } from '@chakra-ui/layout'
import { Link as RouterLink } from 'react-router-dom'
import React from 'react'
import Navbar from './Navbar'

export default function Header() {
  return (
    <HStack 
      bgColor='white' as="header"
      minH={20} shadow="md"
    >
      <Flex>
        <Box width={52} bgColor="gray.500" height={16}></Box>
      </Flex>
      <Spacer/>
      <Navbar/>
    </HStack>
  )
}
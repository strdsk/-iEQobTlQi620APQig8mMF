import { Image } from '@chakra-ui/image'
import { Flex, HStack, Link, Spacer } from '@chakra-ui/layout'
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
        <Image></Image>
      </Flex>
      <Spacer/>
      <Navbar/>
    </HStack>
  )
}
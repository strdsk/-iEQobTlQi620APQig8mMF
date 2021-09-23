import React from 'react'
import { Flex, HStack, Link } from '@chakra-ui/layout'
import { Link as RouterLink } from 'react-router-dom'

function NavLink(props: Parameters<typeof Flex>[0] & Parameters<typeof RouterLink>[0]) {
  return (
    <Flex 
      as={RouterLink}
      px={3.5} alignItems="center"
      _hover={{ bgColor: 'gray.200' }}
      {...props}
    />
  )
}

export default function Navbar() {
  return (
    <HStack 
      as='nav' spacing={0}
      alignSelf="stretch" alignItems="stretch"
    >
      <NavLink to='/' children='Beranda'/>
      <NavLink to='/informasi' children='Informasi'/>
      <NavLink to='/layanan' children='Layanan'/>
      <NavLink to='/tentang' children='Tentang'/>
    </HStack>
  )
}
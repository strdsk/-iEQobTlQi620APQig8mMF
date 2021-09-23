import { Image } from '@chakra-ui/image'
import { Box, Flex, Grid, Heading, HStack, Link, Spacer, Text, VStack } from '@chakra-ui/layout'
import { Link as RouterLink } from 'react-router-dom'
import React, { Fragment } from 'react'
import Navbar from './Navbar'

function StackingSpan(props: Parameters<typeof VStack>[0] & {
  title: string
}) {
  const { children, title, ...rest } = props
  return (
    <VStack alignItems="flex-start" px={10} {...rest}>
      <Heading as="h4" variant="list-title" mb={3}>{ title }</Heading>
      { children }
    </VStack>
  )
}

export default function Footer() {
  return (
    <Fragment>
      <HStack 
        bgColor='white' as="footer" py={10} minH={24}
      >
        <VStack>
          <Box width={52} bgColor="gray.500" height={20}></Box>
          <Box width={52} bgColor="gray.500" height={20}></Box>
        </VStack>
        <StackingSpan title="Desa Digidesa">
          <Text as="span">Kecamatan Digimatan</Text>
          <Text as="span">Kabupaten Digipaten</Text>
          <Text as="span">Provinsi Diginsi, 91234</Text>
        </StackingSpan>
        <Spacer/>
        <StackingSpan title="Informasi Publik" borderLeft="3px solid" borderColor="gray.700">
          <Text as="span">Publik Secara Berkala</Text>
          <Text as="span">Serta Merta</Text>
          <Text as="span">Setiap Saat</Text>
        </StackingSpan>
        <StackingSpan title="Layanan" borderLeft="3px solid" borderColor="gray.700">
          <Text as="span">Permintaan Informasi</Text>
          <Text as="span">Dasar Hukum</Text>
          <Text as="span">Profil Desa</Text>
        </StackingSpan>
      </HStack>
      <Grid 
        templateColumns="repeat(3, 1fr)"
        bgColor="gray.700" color="white"
        py={2}
      >
        <Text textAlign="center">0822-9118-3339</Text>
        <Text textAlign="center">Kontak Penting Lainnya</Text>
        <Text textAlign="center">emaildesa@gmail.com</Text>
      </Grid>
    </Fragment>
  )
}
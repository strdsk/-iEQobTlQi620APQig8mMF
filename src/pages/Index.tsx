import React from 'react'
import DefaultLayout from 'Layouts/Default'
import { Flex, Grid, Heading, HStack, Text, VStack, Box, Badge } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'

function Card(props: Parameters<typeof VStack>[0] & {
  title: string,
  desc: string
}) {
  const { title, desc, ...rest } = props
  return (
    <VStack 
      bgColor="gray.50" shadow="md"
      zIndex={1}
      {...rest}
    >
      {/* <Flex>Logo</Flex> */}
      <VStack px={10} py={10}>
        <Heading variant="card-title" textAlign="center">{title}</Heading>
        <Text variant="card-desc">{desc}</Text>
      </VStack>
    </VStack>
  )
}

function FeedItem(props: Parameters<typeof HStack>[0] & {
  title: string,
  date: string,
  type: string,
  downloadLink?: string
}) {
  const { title, date, type, ...rest } = props
  return (
    <HStack 
      px={3.5} py={3} bgColor="gray.600" 
      rounded="lg" spacing={5} color="white"
      alignSelf="stretch" shadow="base"
    >
      <Badge py={1.5} px={2.5} bgColor="blackAlpha.500" color="white" rounded="md">{type}</Badge>
      <VStack spacing={0} alignItems="flex-start" flexGrow={1}>
        <Heading variant="card-title">{title}</Heading>
        <Text as="span">{date}</Text>
      </VStack>
      <Button colorScheme="blackAlpha">Download</Button>
    </HStack>
  )
}

export default function IndexPage() {
  return (
    <DefaultLayout>
      <VStack
        as="section" id="title"
        justifyContent="center"
        minH="xs"
      >
        <Heading variant="hero-title" as="h1">Pejabat Pengelola Informasi dan Dokumentasi</Heading>
        <Heading variant="hero-subtitle" as="span">Desa Digidesa, Kabupaten Digipaten</Heading>
      </VStack>
      <VStack 
        as="section" id="options"
        justifyContent="center"
        position="relative"
        pb={10}
        sx={{
          '&::after': {
            content: '""',
            width: 'full',
            height: '50%',
            bgColor: 'white',
            position: 'absolute',
            bottom: 0,
            zIndex: 0
          }
        }}
      >
        <Grid
          templateColumns="repeat(3, 1fr)"
          gap={24} 
        >
          <Card
            title="Informasi Publik Secara Berkala"
            desc="Informasi yang wajib disediakan dan diumumkan secara berkala."
          />
          <Card 
            title="Informasi Serta Merta"
            desc="Informasi yang dapat mengancam hajat hidup orang banyak dan ketertiban umum."
          />
          <Card 
            title="Informasi Setiap Saat"
            desc="Informasi yang wajib disediakan oleh Badan Publik."
          />
        </Grid>
      </VStack>
      <HStack
        as="nav" id="nav-button"
        justifyContent="center" bgColor="white"
        pb={10} pt={5}
      >
        <Button variant="outline">Ajukan Permintaan Informasi</Button>
        <Button variant="outline">Dasar Hukum PPID</Button>
        <Button variant="outline">Profil Desa</Button>
      </HStack>
      <VStack
        as="section" id="feed"
        py={10} spacing={10}
      >
        <VStack>
          <Heading variant="section-title">Informasi Publik Terbaru</Heading>
          <Heading as="span" variant="section-subtitle">Terakhir di update: <strong>3 jam lalu</strong>.</Heading>
        </VStack>
        <VStack alignSelf="stretch">
          <FeedItem title="Mekanisme Pengajuan Keberatan Informasi" date="Sabtu, 27 September 2021" type="Berkala"/>
          <FeedItem title="Mekanisme Pengajuan Keberatan Informasi" date="Sabtu, 27 September 2021" type="Berkala"/>
          <FeedItem title="Mekanisme Pengajuan Keberatan Informasi" date="Sabtu, 27 September 2021" type="Berkala"/>
          <FeedItem title="Mekanisme Pengajuan Keberatan Informasi" date="Sabtu, 27 September 2021" type="Berkala"/>
        </VStack>
        <Button shadow="base" colorScheme="blackAlpha">Lihat Selengkapnya</Button>
      </VStack>
    </DefaultLayout>
  )
}
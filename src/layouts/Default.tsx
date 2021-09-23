import React, { Fragment } from 'react'
import { Box, Flex, VStack } from "@chakra-ui/layout";
import Header from 'Components/Header';
import { useBreakpointValue } from '@chakra-ui/media-query';
import { useToken } from '@chakra-ui/system';

export default function DefaultLayout(props: Parameters<typeof VStack>[0]) {
  const [sm] = useToken('space', ['32'])
  const px = useBreakpointValue({ sm })
  return (
    <Box
      sx={{
        '& > *': { px },
        '--page-px': px
      }}
      minW='100%' minH='100vh'
      bgColor='gray.50'
    >
      <Header/>
      <VStack
        as="main"
        spacing={0} width="full"
        alignItems="stretch"
        sx={{
          '& > *': { px },
          'div > &': { px: 0 }
        }}
        {...props}
      />
    </Box>
  )
}
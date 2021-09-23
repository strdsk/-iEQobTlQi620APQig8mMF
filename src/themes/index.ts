import { ChakraTheme, extendTheme } from '@chakra-ui/react'

import Button from './components/Button'
import Heading from './components/Heading'
import Flex from './components/Flex'

import colors from './colors'
import textStyles from './text-style'
import fonts from './fonts'

const theme: Partial<ChakraTheme> = {
  fonts,
  colors,

  components: {
    Button,
    Heading,
    Flex
  },
  textStyles
}

export default extendTheme(theme)
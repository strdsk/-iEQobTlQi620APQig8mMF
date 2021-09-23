import type { StyleConfig } from "@chakra-ui/theme-tools";
import textStyles from './../text-style'

const Heading: StyleConfig = {
  baseStyle: {
    fontWeight: 'semibold'
  },
  variants: {
    'hero-title': {
      fontWeight: 'black',
      fontSize: '4xl',
    },
    'hero-subtitle': {
      fontWeight: 'light',
      fontSize: '3xl',
    },
    'section-title': {
      fontWeight: 'bold',
      fontSize: '3xl'
    },
    'section-subtitle': {
      fontSize: 'xl',
      fontWeight: 'medium'
    },
    'card-title': {
      fontWeight: 'bold',
      fontSize: 'xl'
    }
  }
}

export default Heading
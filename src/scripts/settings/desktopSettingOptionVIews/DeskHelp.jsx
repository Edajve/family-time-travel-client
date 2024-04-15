import React from 'react'
import {
  useTheme,
  Box,
  Button,
  useDisclosure,
  Text,
  Stack,
  Heading,
  Divider,
  ButtonGroup,
  Image,
  VStack,
  StackDivider,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
} from '@chakra-ui/react'
import DeskHelpStyles from '../../../styles/DeskHelpStyles';

const DeskHelp = () => {
  const theme = useTheme();
  const styles = DeskHelpStyles(theme);

  return (
    <Box className='helpContainer' sx={styles.helpContainer}>
      <Box className='helpCard' sx={styles.helpCard}>

      </Box>
    </Box>
  )
}

export default DeskHelp
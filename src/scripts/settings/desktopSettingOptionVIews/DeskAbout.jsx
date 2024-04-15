import React from 'react'
import DeskAboutStyles from '../../../styles/DeskAboutStyles'
import {
  useTheme
  , Box
  , Text
} from '@chakra-ui/react';

const DeskAbout = () => {
  const theme = useTheme();
  const styles = DeskAboutStyles(theme);

  return (
    <Box className='aboutContainer' sx={styles.aboutContainer}>
      <Text className='aboutHeader' sx={styles.aboutHeader}>Why the website?</Text>
      <Text className='aboutParagraph' sx={styles.aboutParagraph}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Officiis placeat necessitatibus molestiae. In ipsam iusto reiciendis
        ullam accusamus, maxime tenetur aliquam, consectetur, fuga magni impedit
        est quisquam blanditiis distinctio. Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Accusamus voluptas doloremque rem culpa est, sunt
        dignissimos laboriosam qui, voluptates in aperiam corrupti temporibus
        deleniti nemo repellendus corporis omnis, debitis dolorem!
      </Text>
    </Box>
  )
}

export default DeskAbout
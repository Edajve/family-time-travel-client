import { Text, useTheme, Box, VStack, Icon, Divider, Avatar, Button, Input } from '@chakra-ui/react';
import DeskAccountStyle from '../../../styles/DeskAccountStyle'

const DeskAccount = () => {
  const theme = useTheme()
  const styles = DeskAccountStyle(theme)

  return (
    <>
      <VStack className='deskAccountContainer' sx={styles.deskAccountContainer}>
        <Box className='deskAccountTitleContainer' sx={styles.deskAccountTitleContainer}>
          <Text className='deskAccountTitleMainText' sx={styles.deskAccountTitleMainText}>
            Account
          </Text>
          <Text className='deskAccountTitleSubText' sx={styles.deskAccountTitleSubText}>
            Real-time information and activities of your property.
          </Text>
        </Box>
        <Divider className='deskAccountDivider' sx={styles.deskAccountDivider} />
        <Box className='deskAccountProfileContainer' sx={styles.deskAccountProfileContainer}>
          <Box className='deskAccountProfilePicParentContainer' sx={styles.deskAccountProfilePicParentContainer}>
            <Box className='deskAccountProfilePicContainer' sx={styles.deskAccountProfilePicContainer}>
              <Avatar
                size="lg"
                name="User Name"
                src=""
              />
            </Box>
            <Box className='deskAccountProfilePicTextContainer' sx={styles.deskAccountProfilePicTextContainer}>
              <Text className='deskAccountProfilePicText' sx={styles.deskAccountProfilePicText}>
                Profile picture
              </Text>
              <Text className='deskAccountProfilePicTypeOfFileText' sx={styles.deskAccountProfilePicTypeOfFileText}>
                PNG, JPEG under 15MB
              </Text>
            </Box>
          </Box>
          <Box className='deskAccountProfilePicOperationButtonsContainer' sx={styles.deskAccountProfilePicOperationButtonsContainer}>
            <Button size='xs' p={1} className='deskAccountProfilePicOperationUploadButton' sx={styles.deskAccountProfilePicOperationUploadButton}>
              Upload new picture
            </Button>
            <Button size='xs' p={1} className='deskAccountProfilePicOperationDeleteButton' sx={styles.deskAccountProfilePicOperationDeleteButton}>
              Delete
            </Button>
          </Box>
        </Box>
        <Box className='deskAccountFullNameContainer' sx={styles.deskAccountFullNameContainer}>
          <Box className='deskAccountFullNameTextContainer' sx={styles.deskAccountFullNameTextContainer}>
            <Text className='deskAccountFullNameText' sx={styles.deskAccountFullNameText}>
              Full name
            </Text>
          </Box>
          <Box className='deskAccountFullNameInputContainer' sx={styles.deskAccountFullNameInputContainer}>
            <Box className='deskAccountNameInputGroup' sx={styles.deskAccountNameInputGroup}>
              <Text className='deskAccountNameInputTextElement' sx={styles.deskAccountNameInputTextElement}>First Name</Text>
              <Input className='deskAccountFirstNameInput' sx={styles.deskAccountFirstNameInput} placeholder='First Name' size='xs' />
            </Box>
            <Box className='deskAccountNameInputGroup' sx={styles.deskAccountNameInputGroup}>
              <Text className='deskAccountNameInputTextElement' sx={styles.deskAccountNameInputTextElement}>Last Name</Text>
              <Input className='deskAccountLastNameInput' sx={styles.deskAccountLastNameInput} placeholder='Last Name' size='xs' />
            </Box>
          </Box>
        </Box>
        <Divider className='deskAccountDivider' sx={styles.deskAccountDivider} />
        <Box className='deskAccountEmailContainer' sx={styles.deskAccountEmailContainer}>
          <Box className='deskAccountEmailDescriptionContainer' sx={styles.deskAccountEmailDescriptionContainer}>
            <Text className='deskAccountEmailMainText' sx={styles.deskAccountEmailMainText}>
              Contact email
            </Text>
            <Text className='deskAccountEmailSubText' sx={styles.deskAccountEmailSubText}>
              Manage your accounts
            </Text>
          </Box>
          <Box className='deskAccountEmailInputButtonGroup' sx={styles.deskAccountEmailInputButtonGroup}>
            <Box className='deskAccountEmailInputContainer' sx={styles.deskAccountEmailInputContainer}>
              <Input className='deskAccountEmailInputElement' sx={styles.deskAccountEmailInputElement} placeholder='Email' size='xs' />
            </Box>
            <Box className='deskAccountEmailButtonContainer' sx={styles.deskAccountEmailButtonContainer}>
              <Button size='xs' className='deskAccountEmailButtonElement' sx={styles.deskAccountEmailButtonElement}>
                Add another email
              </Button>
            </Box>
          </Box>
        </Box>
        <Divider className='deskAccountDivider' sx={styles.deskAccountDivider} />
        <Box
          className='deskAccountProfileAnalayticsContainer'
          sx={styles.deskAccountProfileAnalayticsContainer}
        >
          <Box className='deskAccountProfileAnalayticsDateJoinedContainer' sx={styles.deskAccountProfileAnalayticsDateJoinedContainer}>
            <Box className='deskAccountProfileAnalayticsDataGroup' sx={styles.deskAccountProfileAnalayticsDataGroup}>
              <Text className='deskAccountProfileAnalayticsDataGroupText' sx={styles.deskAccountProfileAnalayticsDataGroupText} >
                Date Joined
              </Text>
              <Divider className='deskAccountProfileAnalayticsDataGroupDivider' sx={styles.deskAccountProfileAnalayticsDataGroupDivider} />
              <Text className='deskAccountProfileAnalayticsDataGroupSubText' sx={styles.deskAccountProfileAnalayticsDataGroupSubText} >
                January, 12th 2024
              </Text>
            </Box>
          </Box>
          <Box className='deskAccountProfileAnalayticsLastNoteContainer' sx={styles.deskAccountProfileAnalayticsLastNoteContainer}>
            <Box className='deskAccountProfileAnalayticsDataGroup' sx={styles.deskAccountProfileAnalayticsDataGroup}>
              <Box className='deskAccountProfileAnalayticsDataGroup' sx={styles.deskAccountProfileAnalayticsDataGroup}>
                <Text className='deskAccountProfileAnalayticsDataGroupText' sx={styles.deskAccountProfileAnalayticsDataGroupText} >
                  Last Note Submission
                </Text>
                <Divider className='deskAccountProfileAnalayticsDataGroupDivider' sx={styles.deskAccountProfileAnalayticsDataGroupDivider} />
                <Text className='deskAccountProfileAnalayticsDataGroupSubText' sx={styles.deskAccountProfileAnalayticsDataGroupSubText} >
                  January, 12th 2024
                </Text>
              </Box>
            </Box>
          </Box>
          <Box className='deskAccountProfileAnalayticsTotalNotesContainer' sx={styles.deskAccountProfileAnalayticsTotalNotesContainer}>
            <Box className='deskAccountProfileAnalayticsDataGroup' sx={styles.deskAccountProfileAnalayticsDataGroup}>
              <Box className='deskAccountProfileAnalayticsDataGroup' sx={styles.deskAccountProfileAnalayticsDataGroup}>
                <Text className='deskAccountProfileAnalayticsDataGroupText' sx={styles.deskAccountProfileAnalayticsDataGroupText} >
                  Total Notes Submissions
                </Text>
                <Divider className='deskAccountProfileAnalayticsDataGroupDivider' sx={styles.deskAccountProfileAnalayticsDataGroupDivider} />
                <Text className='deskAccountProfileAnalayticsDataGroupSubText' sx={styles.deskAccountProfileAnalayticsDataGroupSubText} >
                  January, 12th 2024
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </VStack>
    </>
  )
}

export default DeskAccount
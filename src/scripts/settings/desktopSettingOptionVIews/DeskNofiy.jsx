import { Text, useTheme, Flex, Box, VStack, Divider, Switch, FormControl, FormLabel, Button } from '@chakra-ui/react';
import DeskNotifyStyles from '../../../styles/DeskNotifyStyles';

const DeskNofiy = () => {
  const theme = useTheme();
  const styles = DeskNotifyStyles(theme);

  return (
    <VStack className='notificationSettingContainer' sx={styles.notificationSettingContainer}>
      <Box className='notificationSettingTitleContainer' sx={styles.notificationSettingTitleContainer}>
        <Text className='notificationSettingTitleMainText' sx={styles.notificationSettingTitleMainText}>
          Notification settings
        </Text>
        <Text className='notificationSettingTitleSubText' sx={styles.notificationSettingTitleSubText}>
          We may still send you important notifications about your account outside of your notification settings.
        </Text>
      </Box>
      <Divider className='notificationSettingDivider' sx={styles.notificationSettingDivider} />
      <Box className='notificationSettingTitleContainer notificationSettingGeneralTitleContainer' sx={styles.notificationSettingGeneralTitleContainer}>
        <Box className='notificationSettingCommunicationTextContainer notificationSettingGeneralCommunicationTextContainer' sx={styles.notificationSettingGeneralCommunicationTextContainer}>
          <Text className='notificationSettingCommunicationMainText notificationSettingGeneralCommunicationMainText' sx={styles.notificationSettingGeneralCommunicationMainText}>
            Communication Style
          </Text>
          <Text className='notificationSettingCommunicationSubText notificationSettingGeneralCommunicationSubText' sx={styles.notificationSettingGeneralCommunicationSubText}>
            Select your notification method.
          </Text>
        </Box>
        <Box className='notificationSettingCommunicationTextDescriptionContainer notificationSettingCommunicationGeneralTextDescriptionContainer' sx={styles.notificationSettingCommunicationGeneralTextDescriptionContainer}>
          <Box className='notificationSettingCommunicationGeneralToggleContainer' sx={styles.notificationSettingCommunicationGeneralToggleContainer}>
            <Box className='notificationSettingCommunicationGeneralToggleAndTextContainer' sx={styles.notificationSettingCommunicationGeneralToggleAndTextContainer}>
              <FormControl className='notificationSettingCommunicationFormControl' sx={styles.notificationSettingCommunicationFormControl} display='flex' alignItems='center'>
                <Switch id='communication-style-email' colorScheme='green' className='notificationSettingCommunicationSwitch' sx={styles.notificationSettingCommunicationSwitch} />
                <FormLabel htmlFor='email-alerts' mb='0' size='xs' className='notificationSettingCommunicationFormLabel' sx={styles.notificationSettingCommunicationFormLabel}>
                  <Text className='notificationSettingCommunicationLabelText' sx={styles.notificationSettingCommunicationLabelText}>
                    Email
                  </Text>
                </FormLabel>
              </FormControl>
              <FormControl className='notificationSettingCommunicationFormControl' sx={styles.notificationSettingCommunicationFormControl} display='flex' alignItems='center'>
                <Switch id='communication-style-sms' colorScheme='green' className='notificationSettingCommunicationSwitch' sx={styles.notificationSettingCommunicationSwitch} />
                <FormLabel htmlFor='email-alerts' mb='0' size='xs' className='notificationSettingCommunicationFormLabel' sx={styles.notificationSettingCommunicationFormLabel}>
                  <Text className='notificationSettingCommunicationLabelText' sx={styles.notificationSettingCommunicationLabelText}>
                    SMS
                  </Text>
                </FormLabel>
              </FormControl>
            </Box>
          </Box>
        </Box>
      </Box>
      <Divider className='notificationSettingDivider' sx={styles.notificationSettingDivider} />
      <Box className='notificationSettingTitleContainer notificationSettingGeneralTitleContainer' sx={styles.notificationSettingGeneralTitleContainer}>
        <Box className='notificationSettingCommunicationTextContainer notificationSettingGeneralCommunicationTextContainer' sx={styles.notificationSettingGeneralCommunicationTextContainer}>
          <Text className='notificationSettingCommunicationMainText notificationSettingGeneralCommunicationMainText' sx={styles.notificationSettingGeneralCommunicationMainText}>
            Cadenced Reminder
          </Text>
          <Text className='notificationSettingCommunicationSubText notificationSettingGeneralCommunicationSubText' sx={styles.notificationSettingGeneralCommunicationSubText}>
            Set cadended reminder to remind you to submit a note.
          </Text>
        </Box>
        <Box className='notificationSettingCommunicationTextDescriptionContainer notificationSettingCommunicationGeneralTextDescriptionContainer' sx={styles.notificationSettingCommunicationGeneralTextDescriptionContainer}>
          <Box className='notificationSettingCommunicationGeneralToggleContainer' sx={styles.notificationSettingCommunicationGeneralToggleContainer}>
            <Box className='notificationSettingCommunicationGeneralToggleAndTextContainer' sx={styles.notificationSettingCommunicationGeneralToggleAndTextContainer}>
              <FormControl className='notificationSettingCommunicationFormControl' sx={styles.notificationSettingCommunicationFormControl} display='flex' alignItems='center'>
                <Switch id='annually-reminder' colorScheme='green' className='notificationSettingCommunicationSwitch' sx={styles.notificationSettingCommunicationSwitch} />
                <FormLabel htmlFor='email-alerts' mb='0' size='xs' className='notificationSettingCommunicationFormLabel' sx={styles.notificationSettingCommunicationFormLabel}>
                  <Text className='notificationSettingCommunicationLabelText' sx={styles.notificationSettingCommunicationLabelText}>
                    Annually
                  </Text>
                </FormLabel>
              </FormControl>
              <FormControl className='notificationSettingCommunicationFormControl' sx={styles.notificationSettingCommunicationFormControl} display='flex' alignItems='center'>
                <Switch id='semi-annually-reminder' colorScheme='green' className='notificationSettingCommunicationSwitch' sx={styles.notificationSettingCommunicationSwitch} />
                <FormLabel htmlFor='email-alerts' mb='0' size='xs' className='notificationSettingCommunicationFormLabel' sx={styles.notificationSettingCommunicationFormLabel}>
                  <Text className='notificationSettingCommunicationLabelText' sx={styles.notificationSettingCommunicationLabelText}>
                    Semi-Annually
                  </Text>
                </FormLabel>
              </FormControl>
              <FormControl className='notificationSettingCommunicationFormControl' sx={styles.notificationSettingCommunicationFormControl} display='flex' alignItems='center'>
                <Switch id='quarterly-reminder' colorScheme='green' className='notificationSettingCommunicationSwitch' sx={styles.notificationSettingCommunicationSwitch} />
                <FormLabel htmlFor='email-alerts' mb='0' size='xs' className='notificationSettingCommunicationFormLabel' sx={styles.notificationSettingCommunicationFormLabel}>
                  <Text className='notificationSettingCommunicationLabelText' sx={styles.notificationSettingCommunicationLabelText}>
                    Quarterly
                  </Text>
                </FormLabel>
              </FormControl>
              <FormControl className='notificationSettingCommunicationFormControl' sx={styles.notificationSettingCommunicationFormControl} display='flex' alignItems='center'>
                <Switch id='monthly-reminder' colorScheme='green' className='notificationSettingCommunicationSwitch' sx={styles.notificationSettingCommunicationSwitch} />
                <FormLabel htmlFor='email-alerts' mb='0' size='xs' className='notificationSettingCommunicationFormLabel' sx={styles.notificationSettingCommunicationFormLabel}>
                  <Text className='notificationSettingCommunicationLabelText' sx={styles.notificationSettingCommunicationLabelText}>
                    Monthly
                  </Text>
                </FormLabel>
              </FormControl>
              <FormControl className='notificationSettingCommunicationFormControl' sx={styles.notificationSettingCommunicationFormControl} display='flex' alignItems='center'>
                <Switch id='weekly-reminder' colorScheme='green' className='notificationSettingCommunicationSwitch' sx={styles.notificationSettingCommunicationSwitch} />
                <FormLabel htmlFor='email-alerts' mb='0' size='xs' className='notificationSettingCommunicationFormLabel' sx={styles.notificationSettingCommunicationFormLabel}>
                  <Text className='notificationSettingCommunicationLabelText' sx={styles.notificationSettingCommunicationLabelText}>
                    Weekly
                  </Text>
                </FormLabel>
              </FormControl>
            </Box>
          </Box>
        </Box>
      </Box>
      <Divider className='notificationSettingDivider' sx={styles.notificationSettingDivider} />
      <Flex className='notificationSettingButtonContainer' sx={styles.notificationSettingButtonContainer} justifyContent="flex-end">
        <Button onClick={() => console.log('go with update settings flow')} className='notificationSettingSubmitButton' size='xs' sx={styles.notificationSettingSubmitButton}>Save Settings</Button>
      </Flex>
    </VStack>
  )
}

export default DeskNofiy
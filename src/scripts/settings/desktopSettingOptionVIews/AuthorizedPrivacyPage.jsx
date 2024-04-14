import React, { useState, useEffect } from 'react';
import { Text, useTheme, VStack, Box, Divider, Input, Button, InputGroup, InputRightElement } from '@chakra-ui/react';
import AuthorizedPrivacyPageStyles from '../../../styles/AuthorizedPrivacyPageStyles';

const AuthorizedPrivacyPage = () => {
  const theme = useTheme();
  const styles = AuthorizedPrivacyPageStyles(theme);
  const [show, setShow] = useState(false);
  const [passwords, setPasswords] = useState({
    oldPassword: '',
    newPassword: ''
  });

  const handleClick = () => setShow(!show);

  const handleInputChange = (event, type) => {
    setPasswords(prev => ({
      ...prev,
      [type]: event.target.value
    }));
  };

  useEffect(() => {
    console.log("Old Password:", passwords.oldPassword);
    console.log("New Password:", passwords.newPassword);
  }, [passwords.oldPassword, passwords.newPassword]);

  return (
    <VStack className='settingsAuthorizedPrivacyContainer' sx={styles.settingsAuthorizedPrivacyContainer}>
      <Box className='settingsAuthorizedPrivacyGridBox' sx={styles.settingsAuthorizedPrivacyGridBox}>
        <Box className='settingsAuthorizedPrivacyGridC' sx={styles.settingsAuthorizedPrivacyGridC}>
          <Text className='settingsAuthorizedPrivacyMainText' sx={styles.settingsAuthorizedPrivacy}>
            Reset Password
          </Text>
          <Text className='settingsAuthorizedPrivacySubText' sx={styles.settingsAuthorizedPrivacySubText}>
            Reset your password via email or phone number
          </Text>
        </Box>
        <Box className='settingsAuthorizedPrivacyFlex' sx={styles.settingsAuthorizedPrivacyFlex}>
          <Box className='settingsAuthorizedPrivacyChild' sx={styles.settingsAuthorizedPrivacyChild}>
            <InputGroup size='xs'>
              <Input
                pr='4.5rem'
                type={show ? 'text' : 'password'}
                placeholder='Old password'
                onChange={(event) => handleInputChange(event, 'oldPassword')}
                value={passwords.oldPassword}
              />
              <InputRightElement width='4.5rem'>
                <Button className='settingsAuthorizedPrivacyShowButton' sx={styles.settingsAuthorizedPrivacyShowButton} h='1.15rem' size='sm' onClick={handleClick}>
                  {show ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
          </Box>
          <Box className='settingsAuthorizedPrivacyChild' sx={styles.settingsAuthorizedPrivacyChild}>
            <InputGroup size='xs'>
              <Input
                pr='4.5rem'
                type={show ? 'text' : 'password'}
                placeholder='New password'
                onChange={(event) => handleInputChange(event, 'newPassword')}
                value={passwords.newPassword}
              />
              <InputRightElement width='4.5rem'>
                <Button className='settingsAuthorizedPrivacyShowButton' sx={styles.settingsAuthorizedPrivacyShowButton} h='1.15rem' size='sm' onClick={handleClick}>
                  {show ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
          </Box>
          <Button onClick={()=> console.log('continue with reset password flow')} size='xs' className='settingsAuthorizedPrivacySubmitButton' sx={styles.settingsAuthorizedPrivacySubmitButton}>Submit</Button>
        </Box>
      </Box>
      <Divider className='settingsAuthorizedPrivacyDivider' sx={styles.settingsAuthorizedPrivacyDivider} />
    </VStack>
  );
}

export default AuthorizedPrivacyPage;

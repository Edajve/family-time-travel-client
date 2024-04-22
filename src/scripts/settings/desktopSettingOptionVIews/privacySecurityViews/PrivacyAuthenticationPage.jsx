import {Text, useTheme, Box, Input, InputGroup, InputRightElement, Button} from '@chakra-ui/react';
import PrivacyAuthenticationStyles from '../../../../styles/PrivacyAuthenticationStyles';
import {useState, useEffect} from 'react';

const PrivacyAuthenticationPage = ({onAuthorize}) => {
    const theme = useTheme();
    const styles = PrivacyAuthenticationStyles(theme);
    const [show, setShow] = useState(false);
    const [password, setPassword] = useState('');
    const dummyPassword = 'pass';

    const handleClick = () => setShow(!show);

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    useEffect(() => {
        if (password === dummyPassword) {
            onAuthorize('AUTHORIZED');
        }
    }, [password, onAuthorize]);

    return (
        <Box className='settingsPrivacySecurityContainer' sx={styles.settingsPrivacySecurityContainer}>
            <Box className='settingsPrivacySecurityAuthContainer' sx={styles.settingsPrivacySecurityAuthContainer}>
                <Text className='settingsPrivacySecurityAuthText' sx={styles.settingsPrivacySecurityAuthText}>
                    Password
                </Text>
                <InputGroup size='sm'>
                    <Input
                        className='settingsPrivacySecurityInput'
                        sx={styles.settingsPrivacySecurityInput}
                        pr='4.5rem'
                        type={show ? 'text' : 'password'}
                        placeholder='Enter password'
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <InputRightElement width='4.5rem'>
                        <Button
                            className='settingsPrivacySecurityAuthShowButton'
                            sx={styles.settingsPrivacySecurityAuthShowButton}
                            h='1.25rem'
                            size='xs'
                            onClick={handleClick}
                        >
                            {show ? 'Hide' : 'Show'}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </Box>
        </Box>
    );
};

export default PrivacyAuthenticationPage;

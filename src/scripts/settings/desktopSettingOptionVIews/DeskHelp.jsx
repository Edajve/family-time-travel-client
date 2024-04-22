import {useEffect, useState} from 'react';
import {Box, Button, Divider, Input, Text, Textarea, useTheme} from '@chakra-ui/react';
import DeskHelpStyles from '../../../styles/DeskHelpStyles';

const DeskHelp = () => {
    const theme = useTheme();
    const styles = DeskHelpStyles(theme);
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        concerns: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    useEffect(() => {
        console.log('Form Data:', formData);
    }, [formData]);

    return (
        <Box className='helpContainer' sx={styles.helpContainer}>
            <Box className='helpForm' sx={styles.helpForm}>
                <Text className='formTitle' sx={styles.formTitle}>Send Questions and Concerns</Text>
                <Text className='emailLabel' sx={styles.emailLabel}>Email</Text>
                <Input
                    className='emailInput'
                    type='email'
                    placeholder='Enter your email'
                    size='sm'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    sx={styles.emailInput}
                />
                <Divider className='helpDivider' sx={styles.helpDivider}/>
                <Text className='nameLabel' sx={styles.nameLabel}>Name</Text>
                <Input
                    className='nameInput'
                    type='text'
                    placeholder='Enter your name'
                    size='sm'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    sx={styles.nameInput}
                />
                <Divider className='helpDivider' sx={styles.helpDivider}/>
                <Text className='questionLabel' sx={styles.questionLabel}>Questions/Concerns</Text>
                <Textarea
                    className='questionInput'
                    placeholder='Describe your questions or concerns'
                    size='sm'
                    name='concerns'
                    value={formData.concerns}
                    onChange={handleChange}
                    sx={styles.questionInput}
                />
                <Button
                    onClick={() => console.log('Finish send questions to email flow')}
                    className='helpButton'
                    sx={styles.helpButton}
                    size='xs'
                >
                    Submit
                </Button>
            </Box>
        </Box>
    );
}

export default DeskHelp;

import {HStack, useTheme} from '@chakra-ui/react';
import {useState} from 'react';
import CreateRsvpStyles from "../../../styles/CreateRsvpStyles.js";
import BackHeader from "../../navigation/BackHeader.jsx";

const CreateRSVP = () => {
    const theme = useTheme();
    const styles = CreateRsvpStyles(theme);
    const [isWindowOver768px] = useState(window.innerWidth > 768);


    return (
        <HStack className='createRsvpContainer' gap={0} sx={styles.createRsvpContainer}>
            <BackHeader linkTo='rsvp'/>
            {isWindowOver768px ? (
                <>
                    Cant Put down the cup
                </>
            ) : (
                <>
                    Cant put down the cup
                </>
            )}
        </HStack>
    );
};

export default CreateRSVP;

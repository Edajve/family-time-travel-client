import {Box, useTheme} from '@chakra-ui/react'
import {Link} from "react-router-dom"
import BackHeaderStyles from '../../styles/BackHeaderStyles'
import {ChevronLeftIcon} from '@chakra-ui/icons'

const BackHeader = ({linkTo}) => {
    const theme = useTheme()
    const styles = BackHeaderStyles(theme)

    return (
        <Box className='backHeaderContainer' sx={styles.backHeaderContainer}>
            <Link to={linkTo}>
                <ChevronLeftIcon boxSize={10} className='backHeader' sx={styles.backHeader} />
            </Link>
        </Box>
    )
}

export default BackHeader
import React from 'react'
import NoteCardStyles from '../../styles/NoteCardStyles'
import { useTheme } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const NoteCard = () => {
    const theme = useTheme();
    const styles = NoteCardStyles(theme);

    return (
       <>Click Here</> 
    )
}

export default NoteCard
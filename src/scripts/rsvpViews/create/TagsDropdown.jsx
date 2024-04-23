import React, {useState} from 'react';
import {FormErrorMessage, FormHelperText, FormLabel, Input, Tag, TagCloseButton, TagLabel} from '@chakra-ui/react';

const WhosComingTags = () => {
    const [tags, setTags] = useState([]);
    const [input, setInput] = useState('');
    const [error, setError] = useState(false);

    const handleInputChange = (e) => {
        setInput(e.target.value);
        setError(false);
    };

    const handleInputKeyDown = (e) => {
        if (e.key === 'Enter' && input.trim() !== '') {
            if (tags.includes(input.trim())) {
                setError(true); // Tag already exists
            } else {
                setTags([...tags, input.trim()]);
                setInput('');
            }
        }
    };

    const handleTagRemove = (tagToRemove) => {
        setTags(tags.filter(tag => tag !== tagToRemove));
    };

    return (
        <div>
            <FormLabel className='formLabel'>Guests Who Are Attending (Optional)</FormLabel>
            <Input
                className='input'
                type='text'
                value={input}
                onChange={handleInputChange}
                onKeyDown={handleInputKeyDown}
            />
            {tags.map(tag => (
                <Tag key={tag} variant="solid" colorScheme="teal" className='tag'>
                    <TagLabel>{tag}</TagLabel>
                    <TagCloseButton onClick={() => handleTagRemove(tag)}/>
                </Tag>
            ))}
            {!tags.length && !error && (
                <FormHelperText className='formHelperText'>Type and press Enter to add a guest</FormHelperText>
            )}
            {error && (
                <FormErrorMessage className='formErrorMessage'>Guest already added</FormErrorMessage>
            )}
        </div>
    );
};

export default WhosComingTags;

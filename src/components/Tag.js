import React, { useState } from 'react';
import { Tag } from '@contentstack/venus-components';

const Tags = () => {
    const [tags, setTags] = useState(['Summer', 'season'])

    const handleTagUpdate = tags => {
        setTags(tags)
    }
    return <Tag tags={tags} onChange={handleTagUpdate} />
}

export default Tags

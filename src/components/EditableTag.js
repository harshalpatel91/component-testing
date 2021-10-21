import React, { useState } from 'react';
import { EditableTags } from '@contentstack/venus-components';

const EditableTag = () => {
    const [tags, setTags] = useState([
        'season',
        'Summer SummerSummerSummerSummerSummerSummerSummerSummerSummer',
        'winter',
      ])
    
      const handleTagUpdate = tags => {
        setTags(tags)
      }
      return <EditableTags tags={tags} onChange={handleTagUpdate} />
}

export default EditableTag

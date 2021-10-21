import React, { useState } from 'react';
import { Tag } from '@contentstack/venus-components';


const Tags = () => {
    const [tags, setTags] = useState(['Summer', 'season'])
    const [tagsOne, setTagsOne] = useState(['Summer', 'season'])


    const handleTagUpdate = tags => {
        setTags(tags)
    }

    const handleTagUpdateOne = tags => {
        setTagsOne(tags)
    }
    return (
        <>
            <div>
                <div style={{marginBottom: "15px", marginTop: '30px'}}>
                  Default
                </div>
                <div>
                    <Tag tags={tags} label="Default" onChange={handleTagUpdate} />
                </div>
            </div>

            <div>
                <div style={{marginBottom: "15px", marginTop: '30px'}}>
                  Tag With Remove Only
                </div>
                <div>
                    <Tag tags={tagsOne} label="Tag With Remove Only"  onChange={handleTagUpdateOne} />
                </div>
            </div>

            <div>
                <div style={{marginBottom: "15px", marginTop: '30px'}}>
                  Disabled Tag
                </div>
                <div>
                    <Tag tags={['Summer', 'season']} isDisabled={true} label="Tag With Remove Only"  onChange={handleTagUpdate} />
                </div>
            </div>
        </>
    )
}

export default Tags

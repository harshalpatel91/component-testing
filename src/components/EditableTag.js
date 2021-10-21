import React, { useState } from 'react';
import { EditableTags } from '@contentstack/venus-components';

const EditableTag = () => {
    const [tags, setTags] = useState([ 'season', 'Summer', 'winter'])
    const [tagsOne, setTagsOne] = useState([ 'season', 'Summer', 'winter'])
    const [tagsThree, setTagsThree] = useState([])
    
      const handleTagUpdate = tags => {
        setTags(tags)
      }
      const handleTagUpdateOne = tags => {
        setTagsOne(tags)
      }
      const handleTagUpdateThree = tags => {
        setTagsThree(tags)
      }
      return (
        <>
          <div>
              <div style={{marginBottom: "15px", marginTop: '30px'}}>
                Default
              </div>
              <div>
                <EditableTags label="Default" tags={tags} onChange={handleTagUpdate} />
              </div>
          </div>

          <div>
              <div style={{marginBottom: "15px", marginTop: '30px'}}>
                With placeholder
              </div>
              <div>
                <EditableTags tags={tagsThree} label="With Placeholder" placeholder="Type Something..." onChange={handleTagUpdateThree} />
              </div>
          </div>

          <div>
              <div style={{marginBottom: "15px", marginTop: '30px'}}>
                Sortable Tag
              </div>
              <div>
                <EditableTags label="Sortable Tag" placeholder="Type Something..." tags={tagsOne} onChange={handleTagUpdateOne} isSortable/>
              </div>
          </div>
        </>
      )
}

export default EditableTag

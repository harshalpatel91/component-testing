import React from 'react';
import { OutlineTag } from '@contentstack/venus-components';

const OutlineTags = () => {
    return (
        <>
          <div>
              <div style={{marginBottom: "15px", marginTop: '30px'}}>
                Default
              </div>
              <div>
                <OutlineTag content={'OutlineTag'} />
              </div>
          </div>

          <div>
              <div style={{marginBottom: "15px", marginTop: '30px'}}>
                Add tag content as a component
              </div>
              <div>
                <div
                  style={{
                    paddingTop: '10px'
                  }}
                >
                  <span>
                    Default:{'  '}
                  </span>
                  <OutlineTag
                    content="Default"
                    type="positive"
                  />
                </div>
                <div
                  style={{
                    paddingTop: '10px'
                  }}
                >
                  <span>
                    Positive:{' '}
                  </span>
                  <OutlineTag
                    content="Enabled"
                    type="positive"
                  />
                </div>
              </div>
          </div>

          <div>
              <div style={{marginBottom: "15px", marginTop: '30px'}}>
                Outline Content As Component
              </div>
              <div>
              <OutlineTag
                content={<div className="flex-v-center">some text</div>}
                style={{
                  border: '1px solid #007A52',
                  color: '#007A52'
                }}
                type="positive"
              />
              </div>
          </div>
        </>
      );
}

export default OutlineTags

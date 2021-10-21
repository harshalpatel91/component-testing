import React from 'react'

import { Button, ButtonGroup } from '@contentstack/venus-components';

const seperator = {
  marginLeft: "10px"
}

const buttonWrapper = {
  display: 'flex',
  width: '500px', 
  flexWrap: 'wrap'
}

const ButtonComponents = () => {
  return (
    <>
      <div>
        <div style={{marginBottom: "15px"}}>
          Types Of Button
        </div>
        <div style={{...buttonWrapper, height: '200px'}}>
          <div style={seperator}>
            <Button buttonType="primary">Primary</Button>
          </div>
          <div style={seperator}>
            <Button buttonType="secondary">Secondary</Button>
          </div>
          <div style={seperator}>
            <Button buttonType="tertiary">Tertiary</Button>
          </div>
          <div style={seperator}>
            <Button buttonType="warning">Warning</Button>
          </div>
          <div style={seperator}>
            <Button buttonType="danger">Danger</Button>
          </div>
          <div style={seperator}>
            <Button buttonType="success">Success</Button>
          </div>
          <div style={seperator}>
            <Button buttonType="light">Light</Button>
          </div>
          <div style={seperator}>
            <Button buttonType="control">Control</Button>
          </div>
          <div style={seperator}>
            <Button buttonType="delete">Delete</Button>
          </div>
          <div style={seperator}>
            <Button buttonType="white">White</Button>
          </div>
          <div style={seperator}>
            <Button buttonType="bulk-delete">Bulk-Delete</Button>
          </div>
          <div style={seperator}>
            <Button buttonType="outline">Outline</Button>
          </div>
          <div style={seperator}>
            <Button buttonType="tertiary-outline">Tertiary-Outline</Button>
          </div>
          <div style={seperator}>
            <Button buttonType="outline-delete">Outline-Delete</Button>
          </div>
          <div style={seperator}>
            <Button buttonType="outline-success">Outline-Success</Button>
          </div>
        </div>
      </div>

      <div>
        <div style={{marginBottom: "15px", marginTop: '30px'}}>
          Button With Icon
        </div>
        <div style={buttonWrapper}>
          <div style={seperator}>
            <Button buttonType="primary" icon="Send">Publish</Button>
          </div>
          <div style={seperator}>
            <Button buttonType="primary" iconAlignment="right" icon="Send">Publish</Button>
          </div>
        </div>
      </div>

      <div>
        <div style={{marginBottom: "15px", marginTop: '30px'}}>
          Disabled
        </div>
        <div style={buttonWrapper}>
          <div style={seperator}>
            <Button buttonType="primary" disabled={true}>Publish</Button>
          </div>
        </div>
      </div>

      <div>
        <div style={{marginBottom: "15px", marginTop: '30px'}}>
          With Loader
        </div>
        <div style={buttonWrapper}>
          <div style={seperator}>
            <Button buttonType="primary" loading="true">Publish</Button>
          </div>
          <div style={seperator}>
            <Button buttonType="secondary" loadingColor="#6C5CE7" loading="true">Publish</Button>
          </div>
        </div>
      </div>

      <div>
        <div style={{marginBottom: "15px", marginTop: '30px'}}>
          Group Button
        </div>
        <ButtonGroup>
            <Button buttonType="primary" >Publish</Button>
            <Button buttonType="secondary" >Publish</Button>
        </ButtonGroup>
      </div>
    </>
  )
}

export default ButtonComponents

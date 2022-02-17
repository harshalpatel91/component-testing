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

  const handleClick = () => {
    console.log('This is the click check');
  }

  return (
    <>
      <div>
        <div style={{marginBottom: "15px"}}>
          Types Of Button
        </div>
        <div style={{...buttonWrapper, height: '200px'}}>
          <div style={seperator}>
            <Button onClick={handleClick} buttonType="primary">Primary</Button>
          </div>
          <div style={seperator}>
            <Button onClick={handleClick} buttonType="secondary">Secondary</Button>
          </div>
          <div style={seperator}>
            <Button onClick={handleClick} buttonType="tertiary">Tertiary</Button>
          </div>
          <div style={seperator}>
            <Button onClick={handleClick} buttonType="warning">Warning</Button>
          </div>
          <div style={seperator}>
            <Button onClick={handleClick} buttonType="danger">Danger</Button>
          </div>
          <div style={seperator}>
            <Button onClick={handleClick} buttonType="success">Success</Button>
          </div>
          <div style={seperator}>
            <Button onClick={handleClick} buttonType="light">Light</Button>
          </div>
          <div style={seperator}>
            <Button onClick={handleClick} buttonType="control">Control</Button>
          </div>
          <div style={seperator}>
            <Button onClick={handleClick} buttonType="delete">Delete</Button>
          </div>
          <div style={seperator}>
            <Button onClick={handleClick} buttonType="white">White</Button>
          </div>
          <div style={seperator}>
            <Button onClick={handleClick} buttonType="bulk-delete">Bulk-Delete</Button>
          </div>
          <div style={seperator}>
            <Button onClick={handleClick} buttonType="outline">Outline</Button>
          </div>
          <div style={seperator}>
            <Button onClick={handleClick} buttonType="tertiary-outline">Tertiary-Outline</Button>
          </div>
          <div style={seperator}>
            <Button onClick={handleClick} buttonType="outline-delete">Outline-Delete</Button>
          </div>
          <div style={seperator}>
            <Button onClick={handleClick} buttonType="outline-success">Outline-Success</Button>
          </div>
        </div>
      </div>

      <div>
        <div style={{marginBottom: "15px", marginTop: '30px'}}>
          Button With Icon
        </div>
        <div style={buttonWrapper}>
          <div style={seperator}>
            <Button onClick={handleClick} buttonType="primary" icon="Send">Publish</Button>
          </div>
          <div style={seperator}>
            <Button onClick={handleClick} buttonType="primary" iconAlignment="right" icon="Send">Publish</Button>
          </div>
        </div>
      </div>

      <div>
        <div style={{marginBottom: "15px", marginTop: '30px'}}>
          Disabled
        </div>
        <div style={buttonWrapper}>
          <div style={seperator}>
            <Button onClick={handleClick} buttonType="primary" disabled={true}>Publish</Button>
          </div>
        </div>
      </div>

      <div>
        <div style={{marginBottom: "15px", marginTop: '30px'}}>
          With Loader
        </div>
        <div style={buttonWrapper}>
          <div style={seperator}>
            <Button onClick={handleClick} buttonType="primary" loading="true">Publish</Button>
          </div>
          <div style={seperator}>
            <Button onClick={handleClick} buttonType="secondary" loadingColor="#6C5CE7" loading="true">Publish</Button>
          </div>
        </div>
      </div>
    </>
  )
}
const ButtonGroupComponent=()=>{
  const handleClick = () => {
    console.log('This is the click check');
  }
  return(
    <>
    <div>
        <div style={{marginBottom: "15px", marginTop: '30px'}}>
          Group Button
        </div>
        <ButtonGroup>
            <Button onClick={handleClick} buttonType="primary" >Publish</Button>
            <Button onClick={handleClick} buttonType="secondary" >Publish</Button>
        </ButtonGroup>
      </div>
    </>
  )
}
const AllButtons = () => {
  return (
    <div>
      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ marginBottom: '40px', color: '#6760c3' }}>Button Component</h3>
        <ButtonComponents />
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ marginBottom: '40px', color: '#6760c3' }}>ButtonGroup Component</h3>
        <ButtonGroupComponent />
      </div>
    </div>
  )
}

export default AllButtons

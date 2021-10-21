import React, { useState } from 'react';
import { ToggleSwitch } from '@contentstack/venus-components';

const Default = () => {
  const [chkState, setChkState] = useState(false)
  return (<ToggleSwitch
    label={"Label text"}
    labelPosition={"left"}
    onChange={() => { setChkState(!chkState) }}
    onClick={()=>{}}
    labelColor={"primary"}
    disabled={false}
    checked={chkState}
  />)
}

const Checked = () => {
  return (
    <ToggleSwitch
      checked={true}
      label={"checked"}
      labelPosition={"left"}
      labelColor={"secondary"}
    />
  )
}

const Disabled = () => {
  return (
    <ToggleSwitch
      id="disabled"
      disabled={true}
      label={"disabled"}
      labelPosition="left"
    />
  )
}

const CheckedDisabled = () => {
  return (
    <ToggleSwitch
      checked={true}
      disabled={true}
      label={"checked disabled"}
      labelPosition="left"
    />
  )
}

const WithLabel = () => {
  const [isToggleChecked, setIsToggleChecked] = useState(false)
  return (
    <ToggleSwitch
      onChange={() => { isToggleChecked ? setIsToggleChecked(false) : setIsToggleChecked(true) }}
      checked={isToggleChecked}
      label={isToggleChecked ? "Enabled" : "Disabled"}
      labelPosition={"left"}
      labelColor={"secondary"}
    />
  )
}

const ToggleSwitchComponent = () => {
    return (
      <div style={{ width: '1100px' }}>
        <div style={{ marginBottom: '50px' }}>
          <h3>Default</h3>
          <Default />
        </div>
        <div style={{ marginBottom: '50px' }}>
          <h3>Checked</h3>
          <Checked />
        </div>
        <div style={{ marginBottom: '50px' }}>
          <h3>Disabled</h3>
          <Disabled />
        </div>
        <div style={{ marginBottom: '50px' }}>
          <h3>CheckedDisabled</h3>
          <CheckedDisabled />
        </div>
        <div style={{ marginBottom: '50px' }}>
          <h3>WithLabel</h3>
          <WithLabel />
        </div>
      </div>
    )
  }
  
  export default ToggleSwitchComponent
import React from 'react'
import { Radio } from '@contentstack/venus-components';

export const Default = (arg) => {
  return (
    <>
      <div className="Radio-wrapper">
        <Radio onClick={()=>{}} name="option" checked="true" onChange={()=>{}} id="default" label={'option one'} disabled={false} />
      </div>
      <div className="Radio-wrapper">
        <Radio onClick={()=>{}} name="option" onChange={()=>{}} id="default" label={'option two'} disabled={false} />
      </div>
    </>
  )
}

export const Checked = () => {
  return (
    <Radio
      id="checked"
      checked={true}
      label={'checked'}
    />
  )
}

export const Disabled = () => {
  return (
    <Radio
      id="disabled"
      disabled={true}
      label={'disabled'}
    />
  )
}

export const CheckedDisabled = (arg) => {
  return (
    <Radio
      id="disabled"
      checked={true}
      disabled={true}
      label={'checked disabled'}
    />
  )
}

const RadioComponent = () => {
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
      </div>
    )
  }
  
  export default RadioComponent
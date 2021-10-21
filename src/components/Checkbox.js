import React, {useEffect} from 'react'

import { Checkbox } from '@contentstack/venus-components';

  export const Default = () => (
    <>
      <div className="Checkbox-wrapper"><Checkbox onClick={()=>{}} onChange={()=>{}} label={'option one'} checked={true} disabled={false} isButton={false} isLabelFullWidth={false} /></div>
    </>
  )
  
  export const Checked = () => (
    <div className="CheckWrapper">
      <Checkbox checked={true} label={"checked"} />
    </div>
  )
  
  export const Disabled = () => (
    <Checkbox disabled={true} label={"disabled"} />
  )
  
  export const CheckedDisabled = () => (
    <Checkbox checked={true} disabled={true} label={"checked disabled"} />
  )
  
  export const FullWidthSelect = (args) => (
    <Checkbox isLabelFullWidth={true} label={"isLabelFullWidth"} />
  )
  
  export const ButtonCheckbox = () => (
    <Checkbox label={"Button"} isButton={true} id="buttonCheckbox" />
  )
  
  export const ButtonDisabledCheckbox = (args) => (
    <Checkbox label={"Button"} isButton={true} id="buttonCheckbox" disabled={true} />
  )
  
  export const IndeterminateCheckbox = () => {
    const resolvedRef= React.useRef()
    useEffect(() => {
      if (resolvedRef.current) {
        resolvedRef.current.indeterminate = true
      }
    }, [resolvedRef.current])
    return (<div>
      <Checkbox inputRef={resolvedRef} label="IndeterminateCheckbox" />
    </div>)
  }

  const CheckboxComponent = () => {
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
          <h3>FullWidthSelect</h3>
          <FullWidthSelect />
        </div>
        <div style={{ marginBottom: '50px' }}>
          <h3>ButtonCheckbox</h3>
          <ButtonCheckbox />
        </div>
  
        <div style={{ marginBottom: '50px' }}>
          <h3>ButtonDisabledCheckbox</h3>
          <ButtonDisabledCheckbox />
        </div>
        <div style={{ marginBottom: '50px' }}>
          <h3>IndeterminateCheckbox</h3>
          <IndeterminateCheckbox />
        </div>
      </div>
    )
  }
  
  export default CheckboxComponent
  
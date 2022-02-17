import React from 'react'

import { Field,FieldLabel,TextInput } from '@contentstack/venus-components'
const Default = () => (
    <Field labelText="Label text here" helpText="Fill the data below">
        <FieldLabel htmlFor="label">First Name</FieldLabel>
        <TextInput name="label" placeholder="Type something..." width="medium"/>
    </Field>
    )
const Disabled = () => (
    <Field disabled={true} width="small">
        <FieldLabel htmlFor="label">First Name</FieldLabel>
        <TextInput name="label" placeholder="Type something..."  disabled={true} width="medium"/>  
    </Field>
  )
const FieldComponents = () => {
    return (
    <div>
      <div style={{ marginBottom: '40px' }}>
        <h4 style={{ marginBottom: '10px' }} >Default</h4>
        <Default />
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h4 style={{ marginBottom: '10px' }}>Disabled</h4>
        <Disabled />
      </div>
    </div>
    )
  }
  
  export default FieldComponents
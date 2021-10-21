import React from 'react'

import { Textarea } from '@contentstack/venus-components'
const Default = () => <Textarea type="text" placeholder="Type Something..."/>
const Disabled = () => (
    <Textarea  placeholder="Type Something..." disabled value="Disabled" />
  )
const WithError = () => (
    <Textarea  placeholder="Type Something..." error />
  )
const MediumSize = () => (
    <Textarea  placeholder="Type Something..."  value="Medium size" width="medium"/>
  )
const WithCharCount = () => (
    <Textarea  placeholder="Type Something..." width="large" showCharacterCount={true} maxLength={10}/>
  )
const TextareaComponents = () => {
    return (
    <div>
      <div style={{ marginBottom: '40px' }}>
        <h4>Default</h4>
        <Default />
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h4>Disabled</h4>
        <Disabled />
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h4>WithError</h4>
        <WithError />
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h4>MediumSize</h4>
        <MediumSize />
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h4>WithCharCount</h4>
        <WithCharCount />
      </div>
    </div>
    )
  }
  
  export default TextareaComponents
import React from 'react'

import { FieldLabel } from '@contentstack/venus-components'

const Default = () => <FieldLabel htmlFor="someInput">FieldLabel</FieldLabel>

const WithRequired = () => (
  <FieldLabel htmlFor="someInput" required>
   FieldLabel
  </FieldLabel>
)

const WithRequiredAndError = () => (
  <FieldLabel htmlFor="someInput" required requiredText={'Required text here'} error>
   FieldLabel
</FieldLabel>
)

const WithDisabled = () => (
  <FieldLabel htmlFor="someInput" disabled>
   FieldLabel
</FieldLabel>
)

const CustomRequiredText =()=> (
  <FieldLabel htmlFor="someInput" requiredText={'Required text here'} required error>
   FieldLabel
</FieldLabel >
)

const FieldLabelComponents = () => {
  return (
    <div>
      <div style={{ marginBottom: '40px' }}>
        <h5>Default</h5>
        <Default />
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h5>WithRequired</h5>
        <WithRequired />
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h5>WithRequiredAndError</h5>
        <WithRequiredAndError/>
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h5>With Disabled</h5>
        <WithDisabled/>
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h5>CustomRequiredText</h5>
        <CustomRequiredText/>
      </div>
    </div>
  )
}

export default FieldLabelComponents

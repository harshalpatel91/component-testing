import React from 'react'

import { InstructionText } from '@contentstack/venus-components'

const Default = () =>  <InstructionText>InstructionText here</InstructionText>

const InstructionTextComponent = () => {
    return (
        <div style={{ marginBottom: '40px' }}>
        <h5>Default</h5>
        <Default />
      </div>
    )
  }
  

export default InstructionTextComponent

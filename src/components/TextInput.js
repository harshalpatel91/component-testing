import React from 'react'

import { TextInput } from '@contentstack/venus-components'

const textInputWrapper = {
  width: '500px'
}

const textInpytHeader = {
  marginBottom: '5px', marginTop: '5px'
}

const TextInputComponents = () => {
  return (
    <>
      <div>
        <div style={{marginBottom: "15px", marginTop: '30px'}}>
          Default with value
        </div>
        <div style={textInputWrapper}>
          <TextInput type="text" value="Pre Existing Value" placeholder="Type Something..." />
        </div>
      </div>

      <div>
        <div style={{marginBottom: "15px", marginTop: '30px'}}>
          Default with placeholder
        </div>
        <div style={textInputWrapper}>
          <TextInput type="text" placeholder="Type Something..." />
        </div>
      </div>

      <div>
        <div style={{marginBottom: "15px", marginTop: '30px'}}>
          Disabled
        </div>
        <div style={textInputWrapper}>
          <TextInput type="text" disabled={true} value="This text cannot be exited" placeholder="Type Something..." />
        </div>
      </div>

      <div>
        <div style={{marginBottom: "15px", marginTop: '30px'}}>
          Error
        </div>
        <div style={textInputWrapper}>
          <TextInput type="text" error={true} placeholder="Type Something..." />
        </div>
      </div>

      <div>
        <div style={{marginBottom: "15px", marginTop: '30px'}}>
          Text Input Types
        </div>
        <div style={textInputWrapper}>
          <div style={textInpytHeader}>text</div>
          <TextInput type="text" placeholder="Type Something..." />
        </div>
        <div style={textInputWrapper}>
          <div style={textInpytHeader}>number</div>
          <TextInput type="number" placeholder="Type Something..." />
        </div>
        <div style={textInputWrapper}>
          <div style={textInpytHeader}>email</div>
          <TextInput type="email" placeholder="Type Something..." />
        </div>
        <div style={textInputWrapper}>
          <div style={textInpytHeader}>search</div>
          <TextInput type="search" placeholder="Type Something..." />
        </div>
        <div style={textInputWrapper}>
          <div style={textInpytHeader}>url</div>
          <TextInput type="url" autoComplete="new-password" placeholder="Type Something..." />
        </div>
        <div style={textInputWrapper}>
          <div style={textInpytHeader}>password</div>
          <TextInput type="password" autoComplete="new-password" placeholder="Type Something..." />
        </div>
        <div style={textInputWrapper}>
          <div style={textInpytHeader}>date</div>
          <TextInput type="date" placeholder="Type Something..." />
        </div>
        <div style={textInputWrapper}>
          <div style={textInpytHeader}>time</div>
          <TextInput type="time" placeholder="Type Something..." />
        </div>
        <div style={textInputWrapper}>
          <div style={textInpytHeader}>string</div>
          <TextInput type="string" placeholder="Type Something..." />
        </div>
      </div>

      <div>
        <div style={{marginBottom: "15px", marginTop: '30px'}}>
          Show/Hide Field Value
        </div>
        <div style={textInputWrapper}>
          <TextInput type="password" canShowPassword={true} placeholder="Type Something..." />
        </div>
      </div>

      <div>
        <div style={{marginBottom: "15px", marginTop: '30px'}}>
          Field With View Icon
        </div>
        <div style={textInputWrapper}>
          <TextInput placeholder="Enter value..." suffix={<></>} type="text" width="large"/>
        </div>
      </div>

      <div>
        <div style={{marginBottom: "15px", marginTop: '30px'}}>
          Varying Input Field
        </div>
        <div>
          <div style={textInpytHeader}>full</div>
          <TextInput placeholder="Enter value..." type="text" width="full"/>
        </div>
        <div>
          <div style={textInpytHeader}>small</div>
          <TextInput placeholder="Enter value..." type="text" width="small"/>
        </div>
        <div>
          <div style={textInpytHeader}>medium</div>
          <TextInput placeholder="Enter value..." type="text" width="medium"/>
        </div>
        <div>
          <div style={textInpytHeader}>large</div>
          <TextInput placeholder="Enter value..." type="text" width="large"/>
        </div>
        <div>
          <div style={textInpytHeader}>x-large</div>
          <TextInput placeholder="Enter value..." type="text" width="x-large"/>
        </div>
      </div>
    </>
  )
}

export default TextInputComponents

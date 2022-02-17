import React from 'react'

import { Search } from '@contentstack/venus-components'
const Default = () => (
    <Search placeholder="Search for widget" onClear={true}/>
    )
const Secondary = () => (
    <Search  placeholder="Search for widget" type="secondary" onClear={true} width="full"/>
  )
const WithRegularCorner= () => (
    <Search  placeholder="Search for widget" corners="regular" onClear={true} width="large"/>
  )
const ToggleSearchInputArea = () => (
    <Search  placeholder="Search for widget" dynamicInput={true} width="medium" onClear={true}/>
  )
const Disabled = () => (
    <Search  placeholder="Search for widget" disabled={true} width="small"/>
  )
const SearchComponents = () => {
    return (
    <div>
      <div style={{ marginBottom: '40px' }}>
        <h4 style={{ marginBottom: '10px' }} >Default</h4>
        <Default />
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h4 style={{ marginBottom: '10px' }}>Secondary</h4>
        <Secondary />
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h4 style={{ marginBottom: '10px' }}>WithRegularCorner</h4>
        <WithRegularCorner />
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h4 style={{ marginBottom: '10px' }}>ToggleSearchInputArea</h4>
        <ToggleSearchInputArea />
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h4 style={{ marginBottom: '10px' }}>Disabled</h4>
        <Disabled />
      </div>
    </div>
    )
  }
  
  export default SearchComponents
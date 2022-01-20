import React, {useState} from 'react'

import { Dropdown, Button, Icon, Checkbox } from '@contentstack/venus-components'

const CustomComponent = () => {
  return (
    <>
      <span> custom component</span>
      <span className="icon-spacing">
        <Icon icon="Logo" size="tiny" />
      </span>
    </>
  )
}

const list = [
  {
    label: 'first stack',
    action: () => {
      console.log('selected first')
      alert('selected first stack')
    },
    default: true,
  },
  {
    label: 'second stack',
    action: () => {
      console.log('selected second')
      alert('selected second stack')
    },
  },
  {
    label: 'third stack',
    action: () => {
      console.log('selected third')
      alert('selected third stack')
    },
  },
  {
    label: 'fourth stack',
    action: () => {
      console.log('selected fourth')
      alert('selected fourth stack')
    },
  },
  {
    label: 'fifth stack',
    action: () => {
      console.log('selected fifth')
      alert('selected fifth stack')
    },
  },
  {
    label: 'sixth stack',
    action: () => {
      console.log('selected sixth')
      alert('selected sixth stack')
    },
  },
  {
    label: <CustomComponent />,
    action: () => {
      console.log('selected Example')
      alert('selected custom component')
    },
    searchKey: 'custom component',
  },
]

const styleCss={
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  width: '600px',
  height: '100px',
  alignContent: 'space-evenly',
  color: '#010101',
}

export const Default = () => {
  const [type, setType] = useState("select")
  const default_list = [
    {
      label: 'India',
      action: () => { console.log("India clicked") },   //optional
      default: true,    //optional
      value: 'India',   //optional
      disable: false,   //optional
    },
    {
      label: 'Belgium',
      action: () => { console.log("Belgium clicked") },
      default: false,
      value: 'Belgium',
      disable: false
    },
    {
      label: 'Canada',
      action: () => { console.log("Canada clicked") },
      default: false,
      value: 'Canada',
      disable: false
    },
    {
      label: 'Denmark',
      action: () => { console.log("Denmark clicked") },
      default: false,
      value: 'Denmark',
      disable: false
    },
    {
      label: 'England',
      action: () => { console.log("England clicked") },
      default: false,
      value: 'England',
      disable: false
    },
    {
      label: 'France',
      default: false,
    },
    {
      label: 'Poland',
      default: false,
    },
    {
      label: 'Germany',
      default: false,
    },
    {
      label: 'Algeria',
      default: false,
    },
  ]
  return (
    <div>
      <div
      style={{...styleCss}}
      >
        <Checkbox label="select" checked={type==="select"} onClick={()=>{if(type!=="select")setType("select")}}/>
        <Checkbox label="click" checked={type==="click"} onClick={()=>{if(type!=="click")setType("click")}}/>
        <Checkbox label="hover" checked={type==="hover"} onClick={()=>{if(type!=="hover")setType("hover")}}/>
      </div>
      <div className="Dropdown-wrapper">
        <Dropdown list={default_list} type={type} withArrow={true} highlightActive={true} dropDownPosition={"bottom"} withSearch={false} closeAfterSelect={true} >
          <Icon icon="Settings" size="original" />
        </Dropdown>
      </div>
    </div>
  )
}

export const EllipseDropdown = () => {
  const [data, setData] = useState(true)
  let ellipseList = [
    {
      label: 'India',
      action: () => {
        console.log('selected India')
        alert('selected India')
      },
      default: true,
    },
    {
      label: 'Germany',
      action: () => {
        console.log('selected Germany')
        alert('selected Germany')
      },
    },
  ]
  return (
    <div>
      <div style={{...styleCss}}>
        <Checkbox label="isEllipse" checked={data} onClick={()=>{setData(!data)}}/>
      </div>
      <div className="Dropdown-wrapper">
        <Dropdown list={ellipseList} type="click" isEllipse={data}><Icon icon="Settings" size="original" /></Dropdown>
      </div>
    </div>
  )
}

export const LabelAsJSX = () => {
  let list = [
    {
      label: <><Icon icon="Logo" size="extraSmall" /><div>India</div></>
    },
    {
      label: <><Icon icon="Logo" size="extraSmall" /><div>Germany</div></>
    },
  ]
  return (
    <div className="Dropdown-wrapper">
      <Dropdown list={list} type="click" withIcon={true} isEllipse={true}><Icon icon="Settings" size="original" /></Dropdown>
    </div>
  )
}

export const SelectAsLabelOrValue = () => {
  const [type, setType] = useState("label")

  const list_obj = [
    {
      label: 'India',
      default: true,
      value: 'Delhi'
    },
    {
      label: 'Germany',
      value: 'Berlin'
    },
    {
      label: 'England'
    },
    {
      label: 'Algeria'
    },
    {
      label: 'Denmark'
    },
    {
      label: 'Canada'
    },
    {
      label: 'Poland',
      value: 'Poland'
    },
  ]
  return (
    <div>
    <div
    style={{...styleCss}}
    >
      <Checkbox label="label" checked={type==="label"} onClick={()=>{if(type!=="label")setType("label")}}/>
      <Checkbox label="value" checked={type==="value"} onClick={()=>{if(type!=="value")setType("value")}}/>
    </div>
    <div className="Dropdown-wrapper">
      <Dropdown
        list={list_obj}
        type="select"
        dropDownType="primary"
        withSearch={false}
        viewAs={type}
        onChange={(value) => { console.log('value return from CB ', value) }}
        closeAfterSelect={true}
      />
    </div>
    </div>
  )
}

export const WithScrollEvent = () => {
  return (
    <>
      <span style={{...styleCss}}>
        Check console when dropdown menu list is scrolled
      </span>
      <div className="Dropdown-wrapper">
        <Dropdown
          list={list}
          type={'click'}
          withArrow={true}
          onListScroll={() => { console.log("yes list scroll event captured!") }}
        >
          <Icon icon="Settings" size="original" />
        </Dropdown>
      </div>
    </>
  )
}

const DropdownComponents = () => {
  return (
    <div>
      <div style={{ marginBottom: '40px' }}>
        <h5>Default</h5>
        <Default />
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h5>EllipseDropdown</h5>
        <EllipseDropdown />
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h5>labelAsJSX</h5>
        <LabelAsJSX />
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h5>SelectAsLabelOrValue</h5>
        <SelectAsLabelOrValue />
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h5>WithScrollEvent</h5>
        <WithScrollEvent />
      </div>
    </div>
  )
}

export default DropdownComponents

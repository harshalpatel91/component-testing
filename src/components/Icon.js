import React, {useState} from 'react'

import { Icon } from '@contentstack/venus-components'

const icons = {
  Assets: 'Assets',
  // ContentModels: 'ContentModels',
  Dashboard: 'Dashboard',
  Entries: 'Entries',
  Releases: 'Releases',
  // Tasks: 'Tasks',
}

const Default = () => {
  return(<div className="flex IconStoriesWrapper">
  {Object.keys(icons).map((icon, index) => {
    return (
      <div key={`${icon}-${index}`} className="icon-spacing">
        <Icon icon={icon} size={'large'} />
      </div>
    )
  })}
  </div>)
}

const IconState = () => {
  return (<div className="IconStoriesWrapper">
    <div>
      <div>Default State :</div>
      <div className="flex pb-10">
        {Object.keys(icons).map((icon, index) => {
          return (
            <div key={`${icon}-${index}`} className="icon-spacing">
              <Icon icon={icon} size="large" />
            </div>
          )
        })}
      </div>
    </div>
    <div>
      <div>Hover State:</div>
      <div className="flex pb-10">
        {Object.keys(icons).map((icon, index) => {
          return (
            <div key={`${icon}-${index}`} className="icon-spacing">
              <Icon icon={icon} hover={true} size="large" />
            </div>
          )
        })}
      </div>
    </div>
    <div>
      <div>Active State:</div>
      <div className="flex pb-10">
        {Object.keys(icons).map((icon, index) => {
          return (
            <div key={`${icon}-${index}`} className="icon-spacing">
              <Icon icon={icon} active={true} size="large" />
            </div>
          )
        })}
      </div>
    </div>
  </div>
  )
}

const IconHoverTypes = () => {
  return (
    <>
      <div className="IconStoriesWrapper flex" style={{ flexDirection: 'column' }}>
        <div>Hover Type: Primary (default)</div>
        <div className="flex pb-10">
          <div className="icon-spacing">
            <Icon icon="Releases" hover={true} />
          </div>
          <div className="icon-spacing">
            <Icon icon="Dashboard" hover={true} />
          </div>
          <div className="icon-spacing">
            <Icon icon="Preferences" hover={true} />
          </div>
        </div>
      </div>
      <div className="IconStoriesWrapper flex" style={{ flexDirection: 'column' }}>
        <div>Hover Type: Secondary</div>
        <div className="flex pt-10 pb-10" style={{ columnGap: 20 }}>
          <Icon icon="SettingsOutline" hover={true} hoverType='secondary' shadow='medium' />
          <Icon icon="Expand" hover={true} hoverType='secondary' shadow='medium' />
          <Icon icon="Compress" hover={true} hoverType='secondary' shadow='medium' />
        </div>
      </div>
    </>
  )
}

const IconStateUsingActiveIcon = () => {
  const [activeIconState, setActiveIconState] = useState('exp')

  return (
    <div className="IconStoriesWrapper">
      <div>
        <div>Using only active:</div>
        <div className="flex pb-10">
          <div className="icon-spacing">
            <Icon icon='Preferences' active={activeIconState === 'pref'} hover={true} size="large" onClick={() => setActiveIconState('pref')} />
          </div>
          <div className="icon-spacing">
            <Icon icon='Assets' active={activeIconState === 'asset'} hover={true} size="large" onClick={() => setActiveIconState('asset')} />
          </div>
          <div className="icon-spacing">
            <Icon icon='Entries' active={activeIconState === 'entries'} hover={true} size="large" onClick={() => setActiveIconState('entries')} />
          </div>
        </div>
      </div>
      <div>
        <div>Using active with activeIcon:</div>
        <div className="flex pb-10">
          <div className="icon-spacing">
            <Icon
              icon='PersonalizationExperiences'
              hover={true}
              active={activeIconState === 'exp'}
              activeIcon='PersonalizationExperiencesActive'
              size="large"
              onClick={() => setActiveIconState('exp')}
            />
          </div>
          <div className="icon-spacing">
            <Icon
              icon='PersonalizationAudiences'
              hover={true}
              active={activeIconState === 'aud'}
              activeIcon='PersonalizationAudiencesActive'
              size="large"
              onClick={() => setActiveIconState('aud')}
            />
          </div>
          <div className="icon-spacing">
            <Icon
              icon='PersonalizationAttributes'
              hover={true}
              active={activeIconState === 'attr'}
              activeIcon='PersonalizationAttributesActive'
              size="large"
              onClick={() => setActiveIconState('attr')}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

const IconSizes = ()=>{
return(  <div className="IconStoriesWrapper">
<div className="flex-v-center">
  <div>Tiny</div>
  <Icon icon="Releases" size="tiny" />
</div>
<div className="flex-v-center">
  <div>Small</div>
  <Icon icon="Releases" size="small" />
</div>
<div className="flex-v-center">
  <div>Medium</div>
  <Icon icon="Releases" size="medium" />
</div>
<div className="flex-v-center">
  <div>Large</div>
  <Icon icon="Releases" size="large" />
</div>
<div className="flex-v-center">
  <div>Original</div>
  <Icon icon="Releases" size="original" />
</div>
</div>)  
}

const IconWithFillProperty = ()=>{
  return(  <div className="IconStoriesWrapper">
  <div className="flex-v-center">
    <div>Default Icon</div>
    <Icon icon="Dropdown" size="large" />
  </div>
  <div className="flex-v-center">
    <div>Icon with fill property</div>
    <Icon icon="Dropdown" size="large" fill={true} />
  </div>
</div>)
}

const IconWithHeightAndWidthProperty = ()=>{
  return(
    <div className="IconStoriesWrapper">
    <div className="flex-v-center">
      <div>Default Icon</div>
      <Icon icon="Dropdown" size="large" />
    </div>
    <div className="flex-v-center">
      <div>Icon with height and width property</div>
      <Icon icon="Dropdown" height={"100px"} width={"100px"} />
    </div>
  </div>
  )
}

const IconWithData=()=>{
  const dataAsText = 'data as string'
  const DataAsMarkup = <div>data as markup</div>
  return (
    <>
      <div className="">
        <Icon icon={icons.Assets} data={dataAsText} />
      </div>
      <div className="">
        <Icon icon={icons.Assets} data={DataAsMarkup} />
      </div>
    </>
  )
}

const IconComponents = () => {
  return (
    <div>
      <div style={{ marginBottom: '40px' }}>
        <h4>Default</h4>
        <Default />
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h4>IconState</h4>
        <IconState />
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h4>IconHoverTypes</h4>
        <IconHoverTypes />
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h4>IconStateUsingActiveIcon</h4>
        <IconStateUsingActiveIcon />
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h4>IconSizes</h4>
        <IconSizes />
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h4>IconWithFillProperty</h4>
        <IconWithFillProperty />
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h4>IconWithHeightAndWidthProperty</h4>
        <IconWithHeightAndWidthProperty />
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h4>IconWithData</h4>
        <IconWithData />
      </div>
      
    </div>
  )
}

export default IconComponents

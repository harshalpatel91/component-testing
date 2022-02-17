import React, { useState } from 'react';
import { Tooltip, Checkbox, Button } from '@contentstack/venus-components';

const styleCss={
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width: '600px',
    height: '100px',
    textAlign: "center",
    // alignContent: 'space-evenly',
    color: '#010101',
}

export const Default = () => {
    const [arg, setArg] = useState({ content: 'Tooltip Content...', position: "right", type: "primary", variantType: "dark", disabled: false })
    return (
      <>
      <div style={{display:'flex' , justifyContent:'center'}}>
        <div>
            <h6>variantType: </h6>
            <Checkbox label="dark" checked={arg.variantType==="dark"} onClick={()=>{if(arg.variantType!=="dark")setArg({...arg, variantType: "dark"})}}/>
            <Checkbox label="light" checked={arg.variantType==="light"} onClick={()=>{if(arg.variantType!=="light")setArg({...arg, variantType: "light"})}}/>
            <Checkbox label="menuIcon" checked={arg.variantType==="menuIcon"} onClick={()=>{if(arg.variantType!=="hover")setArg({...arg, variantType: "menuIcon"})}}/>
        </div>
        <div>
            <h6>disable: </h6>
            <Checkbox label="disable" checked={arg.disabled} onClick={()=>{setArg({...arg, disabled: !arg.disabled})}}/>
        </div>
      </div>
        <div style={{marginTop : '20px'}}>
          <Tooltip content={arg.variantType === "menuIcon" ? { text: 'abc', icon: 'A' } : arg.content} position={arg.position} type={arg.type} variantType={arg.variantType} maxWidth={arg.maxWidth} disabled={arg.disabled}>
            <Button buttonType="primary">Hover for Tooltip</Button>
          </Tooltip>
        </div>
      </>
    )
}

export const CustomComponentAsContent = () => {
    const CustomComponent = () => {
      return (
        <Button
          buttonType="secondary"
          onClick={() => {
            alert('You Clicked from Custom Component!')
          }}
        >
          This is the custom Component
        </Button>
      )
    }
    return (
        <div>
        <Tooltip content={<CustomComponent />} position="bottom" showArrow={false} variantType="light" trigger='click'>
            <Button buttonType="primary">Click me!</Button>
        </Tooltip>
        </div>
    )
}

export const WithArrow = () => {
    return (
      <div>
        <div className="pl-10">
          <Tooltip
            content="Plain text to show additional information."
            position="top"
            showArrow={true}
            variantType="dark"
            type="secondary"
            visible={true}
          >
            <Button buttonType="primary">Save</Button>
          </Tooltip>
        </div>
  
        <div className="mt-20 pl-10">
          <Tooltip
            content="Plain text to show additional information."
            position="right"
            showArrow={true}
            variantType="light"
            type="secondary"
            visible={true}
          >
            <Button buttonType="primary">Save</Button>
          </Tooltip>
        </div>
        <div className="mt-20">
          <Tooltip
            content="Plain text to show additional information."
            position="left"
            showArrow={true}
            variantType="light"
            type="secondary"
            visible={true}
          >
            <Button buttonType="primary">Save</Button>
          </Tooltip>
        </div>
        <div className="mt-20 pl-10">
          <Tooltip
            content="Plain text to show additional information."
            position="bottom"
            showArrow={true}
            variantType="dark"
            type="secondary"
            visible={true}
          >
            <Button buttonType="primary">Save</Button>
          </Tooltip>
        </div>
      </div>
  
    )
}

const ControlVisibility = (arg) => {

    const [showTooltip, setShowTooltip] = useState(arg.visible);
    const buttonText = showTooltip ? 'Hide Tooltip' : 'Show Tooltip';
  
    return (
      <div>
        <Tooltip
          content="Plain text to show additional information."
          position="right"
          showArrow={true}
          variantType="light"
          type="secondary"
          visible={showTooltip}
        >
          <Button buttonType="primary" onClick={() => setShowTooltip(!showTooltip)}>{buttonText}</Button>
        </Tooltip>
      </div>
    );
}

export const WithClose = (arg) => {

    const [showTooltip, setShowTooltip] = useState(true);
    const buttonText = showTooltip ? 'Hide Tooltip' : 'Show Tooltip';
  
    return (
      <div>
        <Tooltip
          content={
            <div style={{ width: 280 }}>
              <div style={{ fontSize: 14, maxWidth: 240, lineHeight: '20px' }}>Some tooltip text here.</div>
            </div>
          }
          position="bottom"
          showArrow={true}
          variantType="light"
          type="secondary"
          visible={showTooltip}
          showClose={true}
          onClose={() => setShowTooltip(false)}
        >
          <Button buttonType="primary" onClick={() => setShowTooltip(!showTooltip)}>{buttonText}</Button>
        </Tooltip>
      </div>
    );
  }

const TooltipComponent = () => {
    return(
        <div style={{textAlign:'center'}}> 
            <div style={{ width: '100%',marginBottom: '50px'}}>
                <div>Default</div>
                <Default />
            </div>

            <div style={{ width: '100%' , marginBottom: '50px'}}>
                <div>CustomComponentAsContent</div>
                <CustomComponentAsContent />
            </div>

            <div style={{ width: '100%' , marginBottom: '50px'}}>
                <div>WithArrow</div>
                <WithArrow />
            </div>
            <div style={{ width: '100%',marginBottom: '50px'}}>
                <div>ControlVisibility</div>
                <ControlVisibility />
            </div>
            <div style={{ width: '100%',marginBottom: '50px'}}>
                <div>WithClose</div>
                <WithClose />
            </div>
        </div>
    )

}

export default TooltipComponent

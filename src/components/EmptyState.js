import React from 'react'
import { EmptyState, Button } from '@contentstack/venus-components'


export const Default = () => {
    const Footer = () => {
        return <Button onClick={() => { alert('clicked') }} buttonType="tertiary" > Learn More</Button >
    }
    const ChildComponent = () => {
        return <p className='mt-10' > This is the child component</p >
    }
    return (<EmptyState
        type={'primary'}
        heading={'Structure your content with Content Types!'}
        headingType={'large'}
        moduleIcon={'WorkflowModuleLarge'}
        description={'Think of content type as collection of fields or a template that can be used to create similar kinds of content. You can create different content types for different elements of your project (e.g., homepage, header, navigation)'}
        actions={<><div><Button onClick={() => { alert('clicked') }} buttonType="secondary" icon="UnpublishAsset" className="mr-20">Unpublish</Button><Button onClick={() => { alert('clicked') }} buttonType="primary" icon="CheckedWhite">Add</Button></div></>}
        footer={<Footer />}
        testId='custom-emptystate'
        width={'500px'}
        children={<ChildComponent />}
    // imgSrc={{ src: 'https://picsum.photos/536/354', alt: 'Error code' }}
    // displayImage={false}
    // img={<Icon icon="LoginError" />}
    />)
}


export const CustomComponent =()=> {
    const MockHeading = () => {
        return <>No matching results found!</>
    };
    const MockDescription = () => {
        return <><div>Try changing the search query or filter to find what you are looking for.</div><Button className="mt-10" buttonType="outline">Learn More</Button></>
    };
    return (
        <EmptyState heading={<MockHeading />} description={<MockDescription />} />
    )
}

const EmptyStateComponents = () => {
return(<div style={{display :'flex' , justifyContent:'space-evenly'}}>
        <div>
            <h5 style={{textAlign:'center'}}>Default EmptyState</h5>
            <Default/>
        </div>
        <div>
        <h5 style={{textAlign:'center'}}>EmptyState with custom components</h5>
        <div style={{marginTop :'103px'}}><CustomComponent/></div>
        </div>
    </div>)
}

export default EmptyStateComponents

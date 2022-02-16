import React, { useEffect, useState } from 'react'

import {
  cbModal,
  ModalFooter,
  ModalHeader,
  ModalBody,
  Button,
  ButtonGroup,
  // Form,
  Icon,
} from '@contentstack/venus-components'


const HeaderActionButton = (props) => {
  return (
    <Button
      icon='AddPlus'
      onClick={() => {
        console.log('button Action clicked')
      }}
    >
      Action
    </Button>
  )
}

const Default = () => {
  const ModalComponent = (props) => {
    return (
      <>
        <ModalHeader title='Modal header' closeModal={props.closeModal} />

        <ModalBody className='modalBodyCustomClass'>
          <h3>Hello from modal</h3> <br />
          <p>The Modal component is a dialog box/popup window that is displayed on top of the current page</p>
        </ModalBody>

        <ModalFooter>
          <ButtonGroup>
            <Button buttonType='light' onClick={() => props.closeModal()}>
              Cancel
            </Button>
            <Button>Send</Button>
          </ButtonGroup>
        </ModalFooter>
      </>
    )
  }

  const onClose = () => {
    console.log('on modal close')
  }

  const handleClick = () => {
    cbModal({
      component: (props) => <ModalComponent {...props} />,
      modalProps: {
        onClose,
        onAfterOpen: () => {
          console.log('onAfterOpen gets called')
        },
      },
      testId: 'cs-modal-storybook',
    })
  }

  return (
    <Button id='modal-stories' buttonType='outline' onClick={handleClick}>
      <span>Open Modal</span>
    </Button>
  )
}

const CloseOnOverlayClick = () => {
  const ModalComponent = (props) => {
    return (
      <>
        <ModalHeader title='Modal header' closeModal={props.closeModal} />

        <ModalBody className='modalBodyCustomClass'>
          <h3>Hello from modal</h3> <br />
          <p>The Modal component is a dialog box/popup window that is displayed on top of the current page</p>
        </ModalBody>

        <ModalFooter>
          <ButtonGroup>
            <Button buttonType='light' onClick={() => props.closeModal()}>
              Cancel
            </Button>
            <Button>Send</Button>
          </ButtonGroup>
        </ModalFooter>
      </>
    )
  }

  const handleClick = () => {
    cbModal({
      component: (props) => <ModalComponent {...props} />,
      modalProps: {
        shouldCloseOnOverlayClick: true,
      },
    })
  }

  return (
    <Button buttonType='outline' onClick={handleClick}>
      <span>Open Modal</span>
    </Button>
  )
}

const MultipleModal = () => {
  const NestedModalComponent = (props) => {
    return (
      <>
        <ModalHeader title='Modal header2' closeModal={props.closeModal} />

        <ModalBody>
          <h3>Hello modal 2</h3>
          <br />
          <p>The Modal component is a dialog box/popup window that is displayed on top of the current page</p>
        </ModalBody>

        <ModalFooter>
          <ButtonGroup>
            <Button buttonType='light' onClick={() => props.closeModal()}>
              Cancel
            </Button>
            <Button>Send</Button>
          </ButtonGroup>
        </ModalFooter>
      </>
    )
  }

  const ModalComponent = (props) => {
    const openModal2 = () => {
      cbModal({
        component: NestedModalComponent,
      })
    }

    return (
      <>
        <ModalHeader title='Modal header' closeModal={props.closeModal} />
        <ModalBody>
          <h1>Hello modal 1</h1> <br />
          <p>The Modal component is a dialog box/popup window that is displayed on top of the current page</p>
          <br />
          <Button onClick={openModal2}>Open modal 2</Button> <br />
        </ModalBody>
        <ModalFooter>
          <Button buttonType='light' onClick={() => props.closeModal()}>
            Cancel
          </Button>
        </ModalFooter>
      </>
    )
  }

  const handleClick = () => {
    cbModal({
      component: (props) => <ModalComponent {...props} />,
    })
  }

  return (
    <Button onClick={handleClick} buttonType='outline'>
      Open modal 1
    </Button>
  )
}

const FullPageModal = () => {
  const ModalComponent = ({ closeModal }) => (
    <div
      style={{
        width: 'calc(100vw - 100px)',
        height: 'calc(100vh - 100px)',
        borderRadius: 'inherit',
      }}
    >
      <div className='flex FullPage_Modal_Header'>
        <h6 className='ml-30 mt-20'> Header </h6>
        <Icon
          icon='Compress'
          size='small'
          className='Tab__icon mt-20'
          hover={true}
          hoverType='secondary'
          style={{ marginRight: '30px', marginLeft: 'auto', cursor: 'pointer' }}
          onClick={closeModal}
        />
      </div>
      <div className='mt-30 mr-20 ml-20 mb-20'>Content over here</div>
    </div>
  )

  const handleClickModal = () => {
    cbModal({
      component: (props) => <ModalComponent {...props} />,
      modalProps: {
        size: 'customSize',
      },
    })
  }

  return (
    <Button onClick={handleClickModal} buttonType='outline'>
      Open full page modal
    </Button>
  )
}

const ModalSize = () => {
  const ModalComponent = (props) => {
    return (
      <>
        <ModalHeader title='Modal header' closeModal={props.closeModal} />

        <ModalBody className='modalBodyCustomClass'>
          <h3>Hello from modal</h3> <br />
          <p>The Modal component is a dialog box/popup window that is displayed on top of the current page</p>
        </ModalBody>

        <ModalFooter>
          <ButtonGroup>
            <Button buttonType='light' onClick={() => props.closeModal()}>
              Cancel
            </Button>
            <Button>Send</Button>
          </ButtonGroup>
        </ModalFooter>
      </>
    )
  }

  const handleClickTiny = () => {
    cbModal({
      component: (props) => <ModalComponent {...props} />,
      modalProps: {
        size: 'tiny',
      },
    })
  }

  const handleClickxsmall = () => {
    cbModal({
      component: (props) => <ModalComponent {...props} />,
      modalProps: {
        size: 'xsmall',
      },
    })
  }

  const handleClickSmall = () => {
    cbModal({
      component: (props) => <ModalComponent {...props} />,
      modalProps: {
        size: 'small',
      },
    })
  }

  const handleClickMedium = () => {
    cbModal({
      component: (props) => <ModalComponent {...props} />,
      modalProps: {
        size: 'medium',
      },
    })
  }

  const handleClickLarge = () => {
    cbModal({
      component: (props) => <ModalComponent {...props} />,
      modalProps: {
        size: 'large',
      },
    })
  }

  const handleClickMax = () => {
    cbModal({
      component: (props) => <ModalComponent {...props} />,
      modalProps: {
        size: 'max',
      },
    })
  }

  return (
    <div>
      <Button onClick={handleClickTiny} buttonType='outline'>
        Open tiny size modal
      </Button>
      <Button onClick={handleClickxsmall} buttonType='outline'>
        Open x-small size modal
      </Button>
      <Button onClick={handleClickSmall} buttonType='outline'>
        Open small size modal
      </Button>
      <Button onClick={handleClickMedium} buttonType='outline'>
        Open medium size modal
      </Button>
      <Button onClick={handleClickLarge} buttonType='outline'>
        Open large size modal
      </Button>
      <Button onClick={handleClickMax} buttonType='outline'>
        Open max size modal
      </Button>
    </div>
  )
}

const ModalWithHeaderButton = () => {
  const ModalComponent = (props) => {
    return (
      <>
        <ModalHeader title='Modal header' closeModal={props.closeModal} actionButtons={<HeaderActionButton />} />

        <ModalBody className='modalBodyCustomClass'>
          <h3>Hello from modal</h3> <br />
          <p>The Modal component is a dialog box/popup window that is displayed on top of the current page</p>
        </ModalBody>

        <ModalFooter>
          <ButtonGroup>
            <Button>Send</Button>
            <Button buttonType='light' onClick={() => props.closeModal()}>
              Cancel
            </Button>
          </ButtonGroup>
        </ModalFooter>
      </>
    )
  }

  const handleClick = () => {
    cbModal({
      component: (props) => <ModalComponent {...props} showHeader={true} />,
      modalProps: {
        size: 'max',
      },
    })
  }

  return (
    <Button id='modal-stories' buttonType='outline' onClick={handleClick}>
      <span>Open Modal</span>
    </Button>
  )
}

const ModalComponent = () => {
  return (
    <div>
      <div style={{ marginBottom: '50px' }}>
        <h3>Default</h3>
        <Default />
      </div>
      <div style={{ marginBottom: '50px' }}>
        <h3>CloseOnOverlayClick</h3>
        <CloseOnOverlayClick />
      </div>
      <div style={{ marginBottom: '50px' }}>
        <h3>MultipleModal</h3>
        <MultipleModal />
      </div>
      <div style={{ marginBottom: '50px' }}>
        <h3>FullPageModal</h3>
        <FullPageModal />
      </div>
      <div style={{ marginBottom: '50px' }}>
        <h3>ModalSize</h3>
        <ModalSize />
      </div>
      <div style={{ marginBottom: '50px' }}>
        <h3>ModalWithHeaderButton</h3>
        <ModalWithHeaderButton />
      </div>

    </div>
  )
}

export default ModalComponent

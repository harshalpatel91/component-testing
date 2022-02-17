import React, { useState } from 'react';
import { Accordion, TextInput, InstructionText, Field, FieldLabel, Tooltip, Icon, Button } from '@contentstack/venus-components';

const accordionWrapper = {
  // display: 'flex',
  // width: '2000px', 
  // flexWrap: 'wrap'
}

const AccordionComponent = () => {

  const [value, setValue] = useState('Accordion title');
  const [isAccordionOpen, setAccordionOpen] = useState(false);

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const getAccordionTitle = () => {
    return value ? value : 'Accordion Title'
  }

  const actions = [
    {
      component: (
        <Tooltip content="Delete" position="top" showArrow={false}>
          <Icon icon="Delete" size="tiny" />
        </Tooltip>
      ),
      onClick: () => {
        alert('Delete triggered')
      },
      actionClassName: "ActionListItem--warning",
    },
    {
      component: (
        <Tooltip content="Edit" position="top" showArrow={false}>
          <Icon icon="Edit" size="tiny" />
        </Tooltip>
      ),
      onClick: () => {
        alert('Edit triggered')
      },
      actionClassName: "font-color-tertiary",
    },
  ]

  return (
    <>
      <div>
        <div style={{marginBottom: "15px"}}>
          Default Accordion
        </div>
        <div style={accordionWrapper}>
          <Accordion
            title={'Default View'}
            accordionDataCount={1}
            hasBackgroundColor={true}
            dashedLineVisibility={'hover'}
          >
            <Field>
              <FieldLabel required htmlFor="name">
                {' '}
                Name
              </FieldLabel>
              <TextInput
                required
                value=""
                placeholder="Type your name.."
                name="name"
                autoComplete="off"
              ></TextInput>
              <InstructionText>Name should include middle name also</InstructionText>
            </Field>
          </Accordion>
        </div>
      </div>

      <div style={{marginTop: '30px'}}>
        <div style={{marginBottom: "15px"}}>
          Accordion Lock
        </div>
        <div style={accordionWrapper}>
          <Accordion
            title={'Locked Accordion'}
            accordionLock={true}
            accordionDataCount={1}
            renderExpanded={true}
            hasBackgroundColor={true}
            dashedLineVisibility={'hover'}
          >
            <Field>
              <FieldLabel required htmlFor="name">
                {' '}
                Name
              </FieldLabel>
              <TextInput
                required
                value=""
                placeholder="Type your name.."
                name="name"
                autoComplete="off"
              ></TextInput>
              <InstructionText>Name should include middle name also</InstructionText>
            </Field>
          </Accordion>
        </div>
      </div>

      <div style={{marginTop: '30px'}}>
        <div style={{marginBottom: "15px"}}>
          No Chevron
        </div>
        <div style={accordionWrapper}>
          <Accordion
            title={'No chevron'}
            noChevron={true}
            accordionDataCount={1}
            hasBackgroundColor={true}
            dashedLineVisibility={'hover'}
          >
            <Field>
              <FieldLabel required htmlFor="name">
                {' '}
                Name
              </FieldLabel>
              <TextInput
                required
                value=""
                placeholder="Type your name.."
                name="name"
                autoComplete="off"
              ></TextInput>
              <InstructionText>Name should include middle name also</InstructionText>
            </Field>
          </Accordion>
        </div>
      </div>

      <div style={{marginTop: '30px'}}>
        <div style={{marginBottom: "15px"}}>
          Error Message
        </div>
        <div style={accordionWrapper}>
          <Accordion
            title={'Error Message'}
            errorMessage={'This is error message'}
            accordionDataCount={1}
            hasBackgroundColor={true}
            dashedLineVisibility={'hover'}
          >
            <Field>
              <FieldLabel required htmlFor="name">
                {' '}
                Name
              </FieldLabel>
              <TextInput
                required
                value=""
                placeholder="Type your name.."
                name="name"
                autoComplete="off"
              ></TextInput>
              <InstructionText>Name should include middle name also</InstructionText>
            </Field>
          </Accordion>
        </div>
      </div>
      
      <div style={{marginTop: '30px'}}>
        <div style={{marginBottom: "15px"}}>
          Multiple Accordion
        </div>
        <div style={accordionWrapper}>
          <Accordion title={'Group 1'} accordionDataCount={1}>
          <Field>
            <FieldLabel required htmlFor="name">
              {' '}
              Name
            </FieldLabel>
            <TextInput
              required
              value=""
              placeholder="Type your name.."
              name="name"
              autoComplete="off"
            ></TextInput>
            <InstructionText>Name should include middle name also</InstructionText>
          </Field>
        </Accordion>
        <Accordion title={'Group 2'} accordionDataCount={2}>
          <Field>
            <FieldLabel required htmlFor="location">
              {' '}
              Location
            </FieldLabel>
            <TextInput
              required
              value=""
              placeholder="Type your name.."
              name="name"
              autoComplete="off"
            ></TextInput>
            <InstructionText>Name should include middle name also</InstructionText>
          </Field>
          <Field>
            <FieldLabel required htmlFor="location">
              {' '}
              Name
            </FieldLabel>
            <TextInput
              required
              value=""
              placeholder="Type your location.."
              name="location"
              autoComplete="off"
            ></TextInput>
            <InstructionText>Include house no also</InstructionText>
          </Field>
        </Accordion>
        <Accordion title={'Group 3'} accordionDataCount={1}>
          <Field>
            <FieldLabel required htmlFor="name">
              {' '}
              Name
            </FieldLabel>
            <TextInput
              required
              value=""
              placeholder="Type your name.."
              name="name"
              autoComplete="off"
            ></TextInput>
            <InstructionText>Name should include middle name also</InstructionText>
          </Field>
        </Accordion>
        </div>

        <div style={{marginTop: '30px'}}>
          <div style={{marginBottom: "15px"}}>
            Nested Accordion
          </div>
          <div style={accordionWrapper}>
          <Accordion title={'Group 1'} accordionDataCount={2} hasBackgroundColor={true}>
            <Field>
              <FieldLabel required htmlFor="name">
                {' '}
                G Name
              </FieldLabel>
              <TextInput
                required
                value=""
                placeholder="Type your name.."
                name="name"
                autoComplete="off"
              ></TextInput>
              <InstructionText>Name should include middle name also</InstructionText>
            </Field>
            <Accordion title={'Group 2'} accordionDataCount={1}>
              <Field>
                <FieldLabel required htmlFor="name">
                  {' '}
                  Name
                </FieldLabel>
                <TextInput
                  required
                  value=""
                  placeholder="Type your name.."
                  name="name"
                  autoComplete="off"
                ></TextInput>
                <InstructionText>Name should include middle name also</InstructionText>
              </Field>
              <Accordion title={'Group 3'} accordionDataCount={1}>
                <Field>
                  <FieldLabel required htmlFor="name">
                    {' '}
                    Name
                  </FieldLabel>
                  <TextInput
                    required
                    value=""
                    placeholder="Type your name.."
                    name="name"
                    autoComplete="off"
                  ></TextInput>
                  <InstructionText>Name should include middle name also</InstructionText>
                </Field>
                <Accordion title={'Group 4'} accordionDataCount={1}>
                  <Field>
                    <FieldLabel required htmlFor="name">
                      {' '}
                      Name
                    </FieldLabel>
                    <TextInput
                      required
                      value=""
                      placeholder="Type your name.."
                      name="name"
                      autoComplete="off"
                    ></TextInput>
                    <InstructionText>Name should include middle name also</InstructionText>
                  </Field>
                </Accordion>
              </Accordion>
            </Accordion>
          </Accordion>
          </div>
        </div>
      
        <div style={{marginTop: '30px'}}>
          <div style={{marginBottom: "15px"}}>
            Render Expanded
          </div>
          <div style={accordionWrapper}>
          <Accordion
            title={'Render Expanded'}
            renderExpanded={true}
            accordionDataCount={2}
          >
            <Field>
              <FieldLabel required htmlFor="name">
                {' '}
                Name
              </FieldLabel>
              <TextInput
                required
                value=""
                placeholder="Type your name.."
                name="name"
                autoComplete="off"
              ></TextInput>
              <InstructionText>Name should include middle name also</InstructionText>
            </Field>
            <Accordion title={'Group 2'} accordionDataCount={1}>
              <Field>
                <FieldLabel required htmlFor="name">
                  {' '}
                  Name
                </FieldLabel>
                <TextInput
                  required
                  value=""
                  placeholder="Type your name.."
                  name="name"
                  autoComplete="off"
                ></TextInput>
                <InstructionText>Name should include middle name also</InstructionText>
              </Field>
            </Accordion>
          </Accordion>
          </div>
        </div>
      
        <div style={{marginTop: '30px'}}>
          <div style={{marginBottom: "15px"}}>
            Set Header Dynamically
          </div>
          <div style={accordionWrapper}>
          <Accordion
            title={getAccordionTitle()}
            setTitleOnHide={`${getAccordionTitle()} On hide`}
            renderExpanded={true}
            accordionDataCount={1}
          >
            <Field>
              <FieldLabel required htmlFor="name">
                {' '}
                Name
              </FieldLabel>
              <TextInput
                required
                value={value}
                placeholder="Type your name.."
                name="name"
                autoComplete="off"
                onChange={handleChange}
              ></TextInput>
              <InstructionText>Name should include middle name also</InstructionText>
            </Field>
          </Accordion>
          </div>
        </div>

        <div style={{marginTop: '30px'}}>
          <div style={{marginBottom: "15px"}}>
            Accordion With Actions
          </div>
          <div style={accordionWrapper}>
          <Accordion
            title={'Accordion with actions'}
            renderExpanded={true}
            actions={actions}
            hasBackgroundColor={true}
          >
            <Field>
              <FieldLabel required htmlFor="name">
                Name
              </FieldLabel>
              <TextInput
                required
                value=""
                placeholder="Type your name.."
                name="name"
                autoComplete="off"
              ></TextInput>
              <InstructionText>Name should include middle name also</InstructionText>
            </Field>
          </Accordion>
          </div>
        </div>

        <div style={{marginTop: '30px'}}>
          <div style={{marginBottom: "15px"}}>
            Toggle With External state
          </div>
          <div style={accordionWrapper}>
            <Button onClick={() => setAccordionOpen(!isAccordionOpen)}>Toggle Accordion</Button>
            <Accordion
              title={'Toggle With External State'}
              actions={actions}
              isAccordionOpen={isAccordionOpen}
              onTitleClick={() => setAccordionOpen(!isAccordionOpen)}
            >
              <Field>
                <FieldLabel required htmlFor="name">
                  Name
                </FieldLabel>
                <TextInput
                  required
                  value=""
                  placeholder="Type your name.."
                  name="name"
                  autoComplete="off"
                ></TextInput>
                <InstructionText>Name should include middle name also</InstructionText>
              </Field>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  )
}

export default AccordionComponent
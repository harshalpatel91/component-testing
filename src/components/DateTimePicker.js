import React, { useState } from 'react'
import { addDays } from 'date-fns'
import { DateTimePicker, DateTimePicker2, Checkbox } from '@contentstack/venus-components'

const DateTimePickers = () => {
  const [hideTime, setHideTime] = useState(false)

  return (
    <div style={{display: 'flex'}}>
      <div>
        <div>Default</div>
        <div style={{marginTop: '10px'}}>
          <DateTimePicker
            initialDate={new Date()}
            startDate={new Date()}
            endDate={addDays(new Date(), 7)}
            onCancel={() => {}}
            onDone={() => {}}
          />
        </div>
      </div>
      <div style={{marginLeft: '100px'}}>
        <div>DateTimePickerWithHideTimeOption</div>
        <div style={{marginTop: '10px'}}><Checkbox checked={hideTime} onClick={() => setHideTime(!hideTime)} label={'Toggle hide time'} /></div>
        <div style={{marginTop: '10px'}}>
          <DateTimePicker2
            initialDate={new Date()}
            onCancel={() => {}}
            onDone={() => {}}
            hideTime={hideTime}
            startDate={new Date()}
            endDate={addDays(new Date(), 7)}
            onCloseModal={() => {}}
          />
        </div>
      </div>
    </div>
  )
}

export default DateTimePickers

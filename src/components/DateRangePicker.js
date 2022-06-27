import React from 'react'
import { addDays, format } from 'date-fns'
import { DateRangePicker } from '@contentstack/venus-components'

function DateRangePickers() {
  return (
    <DateRangePicker
      fromDate={format(new Date(), 'yyyy/MM/dd')}
      toDate={format(addDays(new Date(), 7), 'yyyy/MM/dd')}
      onChange={() => {
        alert('onChange')
      }}
      onSave={() => {
        alert('onSave')
      }}
      onCancel={() => {
        alert('Cancel')
      }}
    />
  )
}

export default DateRangePickers

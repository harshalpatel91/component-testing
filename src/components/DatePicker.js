import React, { useState } from 'react'
import { DatePicker } from '@contentstack/venus-components'

const DatePickers = () => {
  const [startDate, setStartDate] = useState(new Date())

  return (
    <DatePicker
      onChange={() => {
        alert('onChange')
      }}
      initialDate={startDate}
    />
  )
}

export default DatePickers

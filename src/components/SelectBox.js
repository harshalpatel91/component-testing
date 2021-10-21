import React, { useState } from 'react'

import { Select, Checkbox, AsyncSelect} from '@contentstack/venus-components'

const getSampleData = (size = 50) => {
  let data = []
  for (let i = 0; i < size; ++i) {
    data.push({
      value: i + 1,
      label: `Option ${i + 1}`,
      id: i,
    })
  }
  return data
}

const Default = props => {
  const options = getSampleData()

  const [isMulti, setIsMulti] = useState(false)
  const [isClearable, setIsClearable] = useState(false)
  const [isSearchable, setIsSearchable] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)
  const [hideSelectedOptions, setHideSelectedOptions] = useState(false)
  const [maxMenuHeight, updateMaxMenuHeight] = useState(200)

  const [value, updateValue] = useState(isMulti ? [] : null)

  const handleValueUpdate = data => {
    updateValue(data)
  }

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          width: '600px',
          height: '100px',
          alignContent: 'space-evenly',
          color: '#010101',
        }}
      >
        <div>
          <Checkbox
            onChange={() => {
              setIsMulti(!isMulti)
              handleValueUpdate(isMulti ? [] : null)
            }}
            checked={isMulti}
          />
          <label style={{ padding: '5px' }}>isMulti</label>
        </div>
        <div>
          <Checkbox onChange={() => setIsClearable(!isClearable)} checked={isClearable} />
          <label style={{ padding: '5px' }}>isClearable</label>
        </div>
        <div>
          <Checkbox onChange={() => setIsSearchable(!isSearchable)} checked={isSearchable} />
          <label style={{ padding: '5px' }}>isSearchable</label>
        </div>
        <div>
          <Checkbox onChange={() => setIsDisabled(!isDisabled)} checked={isDisabled} />
          <label style={{ padding: '5px' }}>isDisabled</label>
        </div>
        <div>
          <Checkbox
            onChange={() => setHideSelectedOptions(!hideSelectedOptions)}
            checked={hideSelectedOptions}
          />
          <label style={{ padding: '5px' }}>hideSelectedOptions</label>
        </div>
        <div>
          <div style={{ display: 'inline-block' }}>
            <label style={{ padding: '5px' }}>MaxMenuHeight: </label>
            <input
              style={{ width: '50px' }}
              type="text"
              value={maxMenuHeight}
              onChange={e => {
                updateMaxMenuHeight(+e.target.value)
              }}
            />
          </div>
        </div>
      </div>

      <Select
        value={value}
        onChange={handleValueUpdate}
        isMulti={isMulti}
        options={options}
        placeholder={isMulti ? 'Select Options' : 'Select Option'}
        // updateOption={handleValueUpdate}
        isClearable={isClearable}
        isSearchable={isSearchable}
        isDisabled={isDisabled}
        hideSelectedOptions={hideSelectedOptions}
        width="400px"
        maxMenuHeight={maxMenuHeight}
      />
    </div>
  )
}

const GroupSelectOptions = () => {
  const data = [
    {
      label: 'Group 1',
      options: [
        { label: 'item 1', value: 'value_1' },
        { label: 'item 2', value: 'value_2' },
        { label: 'item 3', value: 'value_3' },
        { label: 'item 4', value: 'value_4' },
      ],
    },
    {
      label: 'Group 2',
      options: [
        { label: 'item 5', value: 'value_5' },
        { label: 'item 6', value: 'value_6' },
        { label: 'item 7', value: 'value_7' },
        { label: 'item 8', value: 'value_8' },
      ],
    },
    { label: 'root option 1', value: 'value_root_1' },
    { label: 'root option 2', value: 'value_root_2' },
  ]

  const [value, updateValue] = useState(null)

  return (
    <div>
      <Select
        value={value}
        onChange={updateValue}
        options={data}
        placeholder="Select value"
        isSearchable={true}
        width="300px"
      />
    </div>
  )
}

const SingleSelectEditable = () => {
  const [value, updateValue] = useState(null)

  let [options, updateOptions] = useState(getSampleData())

  const handleOptionsUpdate = updatedOption => {
    console.log('singel update', updatedOption)
    let optionsCopy = [...options]
    let newOptions = optionsCopy.find(opt => opt.id === updatedOption.id)
    newOptions.label = updatedOption.label
    updateOptions(options)
  }

  return (
    <div>
      <Select
        value={value}
        onChange={updateValue}
        options={options}
        placeholder="Select value"
        updateOption={handleOptionsUpdate}
        canEditOption={true}
        isClearable={true}
        isSearchable={true}
        width="300px"
      />
    </div>
  )
}

const MultiSelectEditable = () => {
  const [value, updateValue] = useState([])

  let [options, updateOptions] = useState(getSampleData())

  const handleOptionsUpdate = updatedOption => {
    console.log('multi onupdate', updatedOption)
    let optionsCopy = [...options]
    let newOptions = optionsCopy.find(opt => opt.id === updatedOption.id)
    newOptions.label = updatedOption.label
    updateOptions(options)
  }

  return (
    <div>
      <Select
        value={value}
        onChange={updateValue}
        options={options}
        placeholder="Select value"
        updateOption={handleOptionsUpdate}
        canEditOption={true}
        isClearable={true}
        isSearchable={true}
        isMulti
        width="300px"
      />
    </div>
  )
}

const MultiSelectWithDisplayLimit = () => {
  const getOptions = (num) => {
    let options = []
    for (let i = 0; i < num; i++) {
      options[i] = {
        label: `item ${i}`,
        value: `value_${i}`,
      }
    }
    return options
  }
  const [value, updateValue] = useState(null)
  return (
    <Select
      selectLabel="Multi Select With Display Limit"
      value={value}
      isMulti={true}
      onChange={updateValue}
      options={getOptions(15)}
      placeholder="Select Items"
      isSearchable={true}
      isClearable={true}
      width="400px"
      multiDisplayLimit={2}
    />
  )
}

const Nested = (arg) => {

  const [value, updateValue] = useState(null)

  const addOption = () => {
    console.log("Add option");
  }

  return (
    <div>
      <Select
        value={value}
        options={[
          { label: 'one', value: 'one', depth: 0 },
          { label: 'two', value: 'two', depth: 1 },
          { label: 'three', value: 'three', depth: 2 },
          { label: 'four-parent', value: 'fourparent', depth: 1 },
          { label: 'four', value: 'four', depth: 3 },
          { label: 'a1', value: 'a1', depth: 0 },
          { label: 'a2', value: 'a2', depth: 0 },
          { label: 'a3', value: 'a3', depth: 0 },
          { label: 'a4', value: 'a4', depth: 0 },
        ]}
        onChange={updateValue}
        isNested={true}
        isMulti={true}
        // menuIsOpen={arg.}
        hasAddOption={true}
        addOption={addOption}
        showCount={true}
        addOptionText={<>Add new Label</>}
        selectedLabel={'Labels'}
      // isClearable={true}
      // noCheckBox={true}
      />
    </div>
  )
}

const DifferentKeyValue = () => {

  const [value, updateValue] = useState(null)
  const funz = (val) => {
    console.log(val, 'pjjj')
    updateValue(val)
  }
  console.log()
  return (
    <div>
      <Select
        value={value}
        options={[
          { name: 'one', code: 'one' },
          { name: 'two', code: 'two' },
          { name: 'three', code: 'three' },
          { name: 'four-parent', code: 'fourparent' },
          { name: 'four', code: 'four' }
        ]}
        onChange={funz}
        menuIsOpen={false}
        getOptionLabel={(option) => option.name}
        getOptionValue={(option) => option.code}

      />
    </div>
  )
}

const Disabled = (arg) => {

  const [value, updateValue] = useState(null)

  return (
    <div>
      <Select
        value={value}
        options={[
          { name: 'one', code: 'one' },
          { name: 'two', code: 'two' },
          { name: 'three', code: 'three' },
          { name: 'four-parent', code: 'fourparent' },
          { name: 'four', code: 'four', isDisabled: true }
        ]}
        onChange={updateValue}
        menuIsOpen={false}
        isMulti={true}
        getOptionLabel={(option) => option.name}
        getOptionValue={(option) => option.code}
        isDisabled={true}
      />
    </div>
  )
}

const WithCreateButton = () => {

  const [val, setVal] = useState([]);

  return (
    <div>
      <Select
        isDisabled={false}
        value={val}
        isMulti={true}
        isNested={true}
        onChange={(data: any) => {
          console.log('you changed me', data);
          setVal(data);
        }}
        options={[
          {
            label: 'one',
            value: 'one',
            depth: 0
          },
          {
            label: 'two',
            value: 'two',
            depth: 1
          }
        ]}
        placeholder="Apply Label"
        isSearchable={true}
        isClearable={true}
        hasAddOption={true}
        addOptionText={<>New Label</>}
        addOption={() => {

        }}
        showCount={true}
        selectedLabel={'Labels'}
      />
    </div>
  )
}

const DynamicWidth = () => {
  const data = [
    { label: 'item 1 abc', value: 'value_1' },
    { label: 'item 2', value: 'value_2' },
    { label: 'item 3 long long text', value: 'value_3' },
    { label: 'item 4 sample', value: 'value_4' },
    { label: 'item 5 xyz', value: 'value_5' },
    { label: 'item 6 sample text', value: 'value_6' },
    { label: 'item 7', value: 'value_7' },
    { label: 'item 8', value: 'value_8' },
    { label: 'item 9', value: 'value_9' },
    { label: 'item 10', value: 'value_10' },
    { label: 'item 11', value: 'value_11' },
    { label: 'item 12', value: 'value_12' },
    { label: 'item 13', value: 'value_13' },
    { label: 'item 14', value: 'value_14' },
    { label: 'item 15', value: 'value_15' },
    { label: 'item 16', value: 'value_16' },
  ]

  const [value, updateValue] = useState(null)

  return (
    <div>
      <Select
        selectLabel="Group Select Options"
        value={value}
        isMulti={true}
        onChange={updateValue}
        options={data}
        // menuIsOpen={true}
        placeholder="Select Title"
        isSearchable={true}
        isClearable={true}
        width="auto"
        maxWidth="500px"
        showMore={true}
      />
    </div>
  )
}

const WithIcons = () => {

  const labelClassname = "flex-v-center col-gap-10";

  const optionsForWithIcons = [
    {
      label: (
        <span className={labelClassname}>
          Is Equal To
        </span>
      ),
      value: 'val1'
    },
    {
      label: (
        <span className={labelClassname}>
          Not Equal To
        </span>
      ),
      value: 'val2'
    },
    {
      label: (
        <span className={labelClassname}>
          Settings
        </span>
      ),
      value: 'val4'
    },
  ]

  const optionsForWithHoverableIcons = [
    {
      label: (
        <span className="flex-v-center col-gap-10">
          Is Equal To
        </span>
      ),
      value: 'val1'
    },
    {
      label: (
        <span className="flex-v-center col-gap-10">
          Not Equal To
        </span>
      ),
      value: 'val2'
    },
    {
      label: (
        <span className="flex-v-center col-gap-10">
          Settings
        </span>
      ),
      value: 'val4'
    },
  ]

  const [value1, updateValue1] = useState(null)
  const [value2, updateValue2] = useState(null)
  return (
    <div className="flex" style={{ columnGap: 100 }}>
      <Select
        value={value1}
        onChange={updateValue1}
        options={optionsForWithIcons}
        placeholder="With Icons"
        width="200px"
        menuIsOpen={false}
      />
      <Select
        value={value2}
        onChange={updateValue2}
        options={optionsForWithHoverableIcons}
        placeholder="With Hoverable Icons"
        width="200px"
        menuIsOpen={false}
        optionClassname="Select__option__icon"
        className="Select__control__icon--hover"
        isOptionSelected={
          (option, selectedOptions) => {
            return option.value === selectedOptions[0]?.value
          }
        }
      />
    </div>
  )
}

const serveData = ({ search, skip, limit }) => {
  return new Promise(resolve => {
    setTimeout(() => {
      const data = filterData({ search, skip, limit })
      return resolve(data)
    }, 1000)
  })
}

const filterData = ({ search, skip, limit }) => {
  console.log('filterData ', { search, skip, limit })

  let filteredData = getSampleData()
  if (search) {
    filteredData = filteredData.filter(i => i.label.toLowerCase().includes(search.toLowerCase()))
  }

  const skippedData = filteredData.slice(skip, filteredData.length)
  // console.log('filterData -> skippedData', skippedData)
  const limitedData = skippedData.slice(0, limit)
  return { data: limitedData, count: filteredData.length }
}

// export const AsyncSelectBox = () => {
//   let pageSize = 10

//   const [value, updateValue] = useState(null)
//   const [totalCounts, updtaeTotalCount] = useState(50)

//   const handleValueUpdate = data => {
//     updateValue(data)
//   }

//   const loadMoreOptions = async ({ search, skip, limit }) => {
//     const response = await serveData({ search, skip, limit })
//     console.log('handleLoadMoreOptions -> response', response)
//     updtaeTotalCount(response.count)
//     return response.data
//   }

//   return (
//     <div>
//       <AsyncSelect
//         value={value}
//         onChange={handleValueUpdate}
//         placeholder="Select value"
//         loadMoreOptions={loadMoreOptions}
//         isSearchable={true}
//         limit={pageSize}
//         width="300px"
//         totalCounts={totalCounts}
//         isMulti={true}
//         isClearable={true}
//       />
//     </div>
//   )
// }

export const AsyncSelectBox = () => {
  let pageSize = 10

  const [value, updateValue] = useState(null)
  const [numberOfRequests, setNumberOfRequests] = useState(0)
  // const [totalCounts, updtaeTotalCount] = useState(null)

  const handleValueUpdate = data => {
    updateValue(data)
  }

  const loadMoreOptions = async ({
    search,
    skip,
    limit
  }) => {
    setNumberOfRequests(numberOfRequests + 1)
    const response = await serveData({ search, skip, limit })
    return { options: response.data, hasMore: response.count > skip + limit }
  }

  return (
    <div style={{ width: '800px' }}>
      <div style={{ margin: '0 0 20px 10px' }}>Number of requests: {numberOfRequests}</div>
      <AsyncSelect
        selectLabel="Async Select"
        value={value}
        onChange={handleValueUpdate}
        placeholder="Select Title"
        loadMoreOptions={loadMoreOptions}
        isSearchable={true}
        // menuIsOpen={true}
        limit={pageSize}
        width="200px"
        // totalCounts={totalCounts}
        isMulti
        isClearable
        defaultOptions={false}
        debounceTimeout={0}
      />
    </div>
  )
}

const SelectBoxComponent = () => (
  <div>
    <div style={{ marginBottom: '40px' }}>
      <h3>Default</h3>
      <Default />
    </div>
    <div style={{ marginBottom: '40px' }}>
      <h3>GroupSelectOptions</h3>
      <GroupSelectOptions />
    </div>
    <div style={{ marginBottom: '40px' }}>
      <h3>SingleSelectEditable</h3>
      <SingleSelectEditable />
    </div>
    <div style={{ marginBottom: '40px' }}>
      <h3>MultiSelectEditable</h3>
      <MultiSelectEditable />
    </div>
    <div style={{ marginBottom: '40px' }}>
      <h3>MultiSelectWithDisplayLimit</h3>
      <MultiSelectWithDisplayLimit />
    </div>
    <div style={{ marginBottom: '40px' }}>
      <h3>Nested</h3>
      <Nested />
    </div>
    {/* <div style={{ marginBottom: '40px' }}>
      <h3>DifferentKeyValue</h3>
      <DifferentKeyValue />
    </div> */}
    <div style={{ marginBottom: '40px' }}>
      <h3>Disabled</h3>
      <Disabled />
    </div>
    <div style={{ marginBottom: '40px' }}>
      <h3>WithCreateButton</h3>
      <WithCreateButton />
    </div>
    <div style={{ marginBottom: '40px' }}>
      <h3>DynamicWidth</h3>
      <DynamicWidth />
    </div>
    {/* <div style={{ marginBottom: '40px' }}>
      <h3>WithIcons</h3>
      <WithIcons />
    </div> */}
    <div style={{ marginBottom: '40px' }}>
      <h3>AsyncSelect</h3>
      <AsyncSelectBox />
    </div>
  </div>
)

export default SelectBoxComponent

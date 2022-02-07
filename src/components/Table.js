import React, {useState, useEffect} from 'react'

import { InfiniteScrollTable, Icon, 
  // InstructionText,
  //  DateLabel
} from '@contentstack/venus-components'


import { orderBy } from 'lodash'

// import DocSubData from '../../utils/components/DocSubData'
// import Table from './Table'
// import InfiniteScrollTable from './InfiniteScrollTable'
// import InlineForms from '../InlineForms/InlineForms'
// import Icon from '../Icon2/Icon'
// import InstructionText from '../InstructionText/InstructionText'
// import DateLabel from '../DateLabel/DateLabel'


const InstructionText = (props) => {
  return props.children
}

const DateLabel = (props) => {
  return props.date
}




const makeData = (size) => {
  const data = []
  for (let i = 1; i <= size; i++) {
    const dataObject = {
      title: `Can Augmented And Future Reality Build Empathy${i}`,
      uuid: `blt006d3106e3a6532b${i}`,
      age: i,
      status: i % 2 === 0 ? 'Active' : 'Inactive',
      status2: i % 2 === 0 ? 'Active' : 'Inactive',
      status3: i % 2 === 0 ? 'Active' : 'Inactive',
      status4: i % 2 === 0 ? 'Active' : 'Inactive',
      uid: `test${i}`,
      _canSelect: i % 2 === 0 ? true : false,
      text: `Text-${i}`,
      singleText: `Single Text-${i}`,
      _invalid: i % 2 === 0 ? true : false,
      errorMessage: i % 2 === 0 ? `Error message ${i}` : '',
    }
    data.push(dataObject)
  }
  return data
}

const serverData = makeData(1000)

const filterData = ({ skip, limit, sortBy }) => {
  let responseData = serverData
  //sort first and then paginate
  if (sortBy) {
    const { sortingDirection, id } = sortBy
    responseData = orderBy(serverData, [id], [sortingDirection])
  }

  const skippedData = responseData.slice(skip, responseData.length)
  const limitedData = skippedData.slice(0, limit)
  return { data: limitedData, count: responseData.length }
}

const fakeServer = ({ skip, limit, sortBy }) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = filterData({ skip, limit, sortBy })
      return resolve(data)
    }, 3000)
  })
}

const parseJsonSafely = (query) => {
  let parsedData
  try {
    if (query) {
      parsedData = JSON.parse(query)
    }
  } catch (error) {
    console.log('json parsing error', error)
  }

  return parsedData
}

const fetchHiddenColumns = () => {
  let hiddenColumns = []
  const columnData = localStorage.getItem('columnData')
  const parsedObject = parseJsonSafely(columnData)
  if (parsedObject) {
    Object.keys(parsedObject).map((columnId) => {
      if (typeof parsedObject[columnId] === 'boolean' && !parsedObject[columnId]) {
        hiddenColumns.push(columnId)
      }
    })
  }

  return hiddenColumns
}

const delay = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(null)
    }, time)
  })
}

export const Default = (args) => {
  let [data, updateData] = useState([])
  let [itemStatusMap, updateItemStatusMap] = useState({})
  let [loading, updateLoading] = useState(false)
  let [viewBy, updateViewBy] = useState('Comfort')
  let [totalCounts, updateTotalCounts] = useState(null)

  const fetchData = async ({ sortBy, searchText, skip, limit, startIndex, stopIndex }) => {
    try {
      let itemStatusMap = {}
      for (let index = 0; index <= 30; index++) {
        itemStatusMap[index] = 'loading'
      }

      updateItemStatusMap(itemStatusMap)
      updateLoading(true)

      const response = await fakeServer({ skip: 0, limit: 30, sortBy })
      for (let index = 0; index <= 30; index++) {
        itemStatusMap[index] = 'loaded'
      }

      updateItemStatusMap({ ...itemStatusMap })
      updateLoading(false)
      updateData(response.data)
      updateTotalCounts(response.count)
    } catch (error) {
      console.log('fetchData -> error', error)
    }
  }

  const loadMoreItems = async ({ sortBy, searchText, skip, limit, startIndex, stopIndex }) => {
    try {
      let itemStatusMapCopy = { ...itemStatusMap }

      for (let index = startIndex; index <= stopIndex; index++) {
        itemStatusMapCopy[index] = 'loading'
      }

      updateItemStatusMap({ ...itemStatusMapCopy })
      updateLoading(true)

      const response = await fakeServer({ skip, limit, sortBy })

      let updateditemStatusMapCopy = { ...itemStatusMap }

      for (let index = startIndex; index <= stopIndex; index++) {
        updateditemStatusMapCopy[index] = 'loaded'
      }

      updateItemStatusMap({ ...updateditemStatusMapCopy })
      updateLoading(false)
      updateData([...data, ...response.data])
      updateTotalCounts(response.count)
    } catch (error) {
      console.log('loadMoreItems -> error', error)
    }
  }

  const getViewByValue = (selectedViewBy) => {
    updateViewBy(selectedViewBy)
  }

  const columns = [
    {
      Header: 'Title',
      id: 'title',
      accessor: (data) => {
        if (viewBy === 'Comfort') {
          return (
            <div>
              <div className='content-title'>{data.title}</div>
              <InstructionText> Content Type: Header content </InstructionText>
            </div>
          )
        }
        return <div className='content-title'> {data.title} </div>
      },
      default: true,
      addToColumnSelector: true,
    },
    {
      Header: 'Unique UID',
      accessor: 'uuid',
      default: false,
      addToColumnSelector: true,
      cssClass: 'uidCustomClass',
    },
    {
      Header: 'Age',
      id: 'age',
      accessor: (data) => {
        if (viewBy === 'Comfort') {
          return (
            <div>
              <div>{data.age}</div>
              <DateLabel date={'1992-04-14'} />
            </div>
          )
        }
        return data.age
      },
      default: true,
      addToColumnSelector: true,
    },
    {
      Header: 'Status',
      accessor: 'status',
      default: false,
      disableSortBy: true,
      addToColumnSelector: true,
    },
    {
      Header: 'Active',
      accessor: (data) => {
        return data._canSelect ? 'true' : 'false'
      },
      id: '_canSelect',
      default: false,
      disableSortBy: true,
      addToColumnSelector: true,
    },
  ]

  return (
    <InfiniteScrollTable
      data={data}
      columns={columns}
      uniqueKey={'uid'}
      fetchTableData={fetchData}
      loading={loading}
      totalCounts={totalCounts}
      loadMoreItems={loadMoreItems}
      itemStatusMap={itemStatusMap}
      minBatchSizeToFetch={50}
      viewSelector={true}
      getViewByValue={getViewByValue}
      initialSortBy={[{ id: 'title', desc: true }]}
      columnSelector={true}
      searchPlaceholder={'Search'}
      canSearch={true}
      canRefresh={true}
    />
  )
}


export const RowSelectOperation = (args) => {
  let [data, updateData] = useState([])
  let [itemStatusMap, updateItemStatusMap] = useState({})
  let [loading, updateLoading] = useState(false)
  let [viewBy, updateViewBy] = useState('Comfort')
  let [totalCounts, updateTotalCounts] = useState(null)

  let [selectedAssets, updateSelectedAssets] = useState({})
  let [resetRowSelection, updateResetRowSelection] = useState(false)

  const fetchData = async ({ sortBy, searchText, skip, limit, startIndex, stopIndex }) => {
    try {
      let itemStatusMap = {}
      for (let index = 0; index <= 30; index++) {
        itemStatusMap[index] = 'loading'
      }

      updateItemStatusMap(itemStatusMap)
      updateLoading(true)

      const response = await fakeServer({ skip: 0, limit: 30, sortBy })
      for (let index = 0; index <= 30; index++) {
        itemStatusMap[index] = 'loaded'
      }

      updateItemStatusMap({ ...itemStatusMap })
      updateLoading(false)
      updateData(response.data)
      updateTotalCounts(response.count)
    } catch (error) {
      console.log('fetchData -> error', error)
    }
  }

  const loadMoreItems = async ({ sortBy, searchText, skip, limit, startIndex, stopIndex }) => {
    try {
      let itemStatusMapCopy = { ...itemStatusMap }

      for (let index = startIndex; index <= stopIndex; index++) {
        itemStatusMapCopy[index] = 'loading'
      }

      updateItemStatusMap({ ...itemStatusMapCopy })
      updateLoading(true)

      const response = await fakeServer({ skip, limit, sortBy })

      let updateditemStatusMapCopy = { ...itemStatusMap }

      for (let index = startIndex; index <= stopIndex; index++) {
        updateditemStatusMapCopy[index] = 'loaded'
      }

      updateItemStatusMap({ ...updateditemStatusMapCopy })
      updateLoading(false)
      updateData([...data, ...response.data])
      updateTotalCounts(response.count)
    } catch (error) {
      console.log('loadMoreItems -> error', error)
    }
  }

  const getViewByValue = (selectedViewBy) => {
    updateViewBy(selectedViewBy)
  }

  const getSelectedRow = (singleSelectedRowIds, selectedData) => {
    let selectedObj = {}
    singleSelectedRowIds.forEach((assetUid) => {
      selectedObj[assetUid] = true
    })
    updateSelectedAssets({ ...selectedObj })
    console.log("getSelectedRow -> singleSelectedRowIds, selectedData", singleSelectedRowIds, selectedData)
  }

  const columns = [
    {
      Header: 'Title',
      id: 'title',
      accessor: (data) => {
        if (viewBy === 'Comfort') {
          return (
            <div>
              <div className='content-title'>{data.title}</div>
              <InstructionText> Content Type: Header content </InstructionText>
            </div>
          )
        }
        return <div className='content-title'> {data.title} </div>
      },
      default: true,
      addToColumnSelector: true,
    },
    {
      Header: 'Unique UID',
      accessor: 'uuid',
      default: false,
      addToColumnSelector: true,
      cssClass: 'uidCustomClass',
    },
    {
      Header: 'Age',
      id: 'age',
      accessor: (data) => {
        if (viewBy === 'Comfort') {
          return (
            <div>
              <div>{data.age}</div>
              <DateLabel date={'1992-04-14'} />
            </div>
          )
        }
        return data.age
      },
      default: true,
      addToColumnSelector: true,
    },
    {
      Header: 'Status',
      accessor: 'status',
      default: false,
      disableSortBy: true,
      addToColumnSelector: true,
    },
    {
      Header: 'Active',
      accessor: (data) => {
        return data._canSelect ? 'true' : 'false'
      },
      id: '_canSelect',
      default: false,
      disableSortBy: true,
      addToColumnSelector: true,
    },
  ]

  const onRowSelectProp = [
    {
      label: 'Log selected Items',
      cb: (data) => {
        console.log('selected data', data)
        updateResetRowSelection(true)
      },
    },
  ]

  return (
    <InfiniteScrollTable
      data={data}
      columns={columns}
      uniqueKey={'uid'}
      fetchTableData={fetchData}
      loading={loading}
      totalCounts={totalCounts}
      loadMoreItems={loadMoreItems}
      itemStatusMap={itemStatusMap}
      minBatchSizeToFetch={50}
      viewSelector={true}
      getViewByValue={getViewByValue}
      initialSortBy={[{ id: 'title', desc: true }]}
      columnSelector={true}
      searchPlaceholder={'Search'}
      canSearch={true}
      canRefresh={true}
      fullRowSelect={true}
      initialSelectedRowIds={selectedAssets}
      isRowSelect={true}
      onRowSelectProp={onRowSelectProp}
      getSelectedRow={getSelectedRow}
    />
  )
}


export const ConditionalRowSelect = (args) => {
  let [data, updateData] = useState([])
  let [itemStatusMap, updateItemStatusMap] = useState({})
  let [loading, updateLoading] = useState(false)
  let [viewBy, updateViewBy] = useState('Comfort')
  let [totalCounts, updateTotalCounts] = useState(null)

  let [selectedAssets, updateSelectedAssets] = useState({})
  let [resetRowSelection, updateResetRowSelection] = useState(false)

  useEffect(() => {
    if (resetRowSelection) {
      updateResetRowSelection(false)
    }
  }, [resetRowSelection])

  const fetchData = async ({ sortBy, searchText, skip, limit, startIndex, stopIndex }) => {
    try {
      let itemStatusMap = {}
      for (let index = 0; index <= 30; index++) {
        itemStatusMap[index] = 'loading'
      }
      updateItemStatusMap(itemStatusMap)
      updateLoading(true)

      const response = await fakeServer({ skip: 0, limit: 30, sortBy })
      for (let index = 0; index <= 30; index++) {
        itemStatusMap[index] = 'loaded'
      }

      updateItemStatusMap({ ...itemStatusMap })
      updateLoading(false)
      updateData(response.data)
      updateTotalCounts(response.count)
    } catch (error) {
      console.log('fetchData -> error', error)
    }
  }

  const loadMoreItems = async ({ sortBy, searchText, skip, limit, startIndex, stopIndex }) => {
    try {
      let itemStatusMapCopy = { ...itemStatusMap }

      for (let index = startIndex; index <= stopIndex; index++) {
        itemStatusMapCopy[index] = 'loading'
      }

      updateItemStatusMap({ ...itemStatusMapCopy })
      updateLoading(true)

      const response = await fakeServer({ skip, limit, sortBy })

      let updateditemStatusMapCopy = { ...itemStatusMap }

      for (let index = startIndex; index <= stopIndex; index++) {
        updateditemStatusMapCopy[index] = 'loaded'
      }

      updateItemStatusMap({ ...updateditemStatusMapCopy })
      updateLoading(false)
      updateData([...data, ...response.data])
      updateTotalCounts(response.count)
    } catch (error) {
      console.log('loadMoreItems -> error', error)
    }
  }

  const getViewByValue = (selectedViewBy) => {
    updateViewBy(selectedViewBy)
  }

  const getSelectedRow = (singleSelectedRowIds, selectedData) => {
    let selectedObj = {}
    singleSelectedRowIds.forEach((assetUid) => {
      selectedObj[assetUid] = true
    })

    updateSelectedAssets({ ...selectedObj })
  }

  const columns = [
    {
      Header: 'Title',
      id: 'title',
      accessor: (data) => {
        if (viewBy === 'Comfort') {
          return (
            <div>
              <div className='content-title'>{data.title}</div>
              <InstructionText> Content Type: Header content </InstructionText>
            </div>
          )
        }
        return <div className='content-title'> {data.title} </div>
      },
      default: true,
      addToColumnSelector: true,
    },
    {
      Header: 'Unique UID',
      accessor: 'uuid',
      default: false,
      addToColumnSelector: true,
      cssClass: 'uidCustomClass',
    },
    {
      Header: 'Age',
      id: 'age',
      accessor: (data) => {
        if (viewBy === 'Comfort') {
          return (
            <div>
              <div>{data.age}</div>
              <DateLabel date={'1992-04-14'} />
            </div>
          )
        }
        return data.age
      },
      default: true,
      addToColumnSelector: true,
    },
    {
      Header: 'Status',
      accessor: 'status',
      default: false,
      disableSortBy: true,
      addToColumnSelector: true,
    },
    {
      Header: 'Active',
      accessor: (data) => {
        return data._canSelect ? 'true' : 'false'
      },
      id: '_canSelect',
      default: false,
      disableSortBy: true,
      addToColumnSelector: true,
    },
  ]

  const onRowSelectProp = [
    {
      label: 'Log selected Items',
      cb: (data) => {
        updateResetRowSelection(true)
      },
    },
  ]

  const tableStateReducer = (newState, action, prevState) => {
    if (resetRowSelection) {
      return { ...newState, selectedRowIds: {} }
    } else {
      return newState
    }
  }

  return (
    <InfiniteScrollTable
      data={data}
      columns={columns}
      uniqueKey={'uid'}
      fetchTableData={fetchData}
      loading={loading}
      totalCounts={totalCounts}
      loadMoreItems={loadMoreItems}
      itemStatusMap={itemStatusMap}
      minBatchSizeToFetch={50}
      viewSelector={true}
      getViewByValue={getViewByValue}
      initialSortBy={[{ id: 'title', desc: true }]}
      columnSelector={true}
      searchPlaceholder={'Search'}
      canSearch={true}
      canRefresh={true}
      fullRowSelect={true}
      initialSelectedRowIds={selectedAssets}
      isRowSelect={true}
      onRowSelectProp={onRowSelectProp}
      getSelectedRow={getSelectedRow}
      tableStateReducer={tableStateReducer}
      rowSelectCheckboxProp={{ key: '_canSelect', value: true }}
    />
  )
}

export const EqualColumnWidth = (args) => {
  let [data, updateData] = useState([])
  let [itemStatusMap, updateItemStatusMap] = useState({})
  let [loading, updateLoading] = useState(false)
  let [viewBy, updateViewBy] = useState('Comfort')
  let [totalCounts, updateTotalCounts] = useState(null)

  const fetchData = async ({ sortBy, searchText, skip, limit, startIndex, stopIndex }) => {
    try {
      let itemStatusMap = {}
      for (let index = 0; index <= 30; index++) {
        itemStatusMap[index] = 'loading'
      }

      updateItemStatusMap(itemStatusMap)
      updateLoading(true)

      const response = await fakeServer({ skip: 0, limit: 30, sortBy })
      for (let index = 0; index <= 30; index++) {
        itemStatusMap[index] = 'loaded'
      }

      updateItemStatusMap({ ...itemStatusMap })
      updateLoading(false)
      updateData(response.data)
      updateTotalCounts(response.count)
    } catch (error) {
      console.log('fetchData -> error', error)
    }
  }

  const loadMoreItems = async ({ sortBy, searchText, skip, limit, startIndex, stopIndex }) => {
    try {
      let itemStatusMapCopy = { ...itemStatusMap }

      for (let index = startIndex; index <= stopIndex; index++) {
        itemStatusMapCopy[index] = 'loading'
      }

      updateItemStatusMap({ ...itemStatusMapCopy })
      updateLoading(true)

      const response = await fakeServer({ skip, limit, sortBy })

      let updateditemStatusMapCopy = { ...itemStatusMap }

      for (let index = startIndex; index <= stopIndex; index++) {
        updateditemStatusMapCopy[index] = 'loaded'
      }

      updateItemStatusMap({ ...updateditemStatusMapCopy })
      updateLoading(false)
      updateData([...data, ...response.data])
      updateTotalCounts(response.count)
    } catch (error) {
      console.log('loadMoreItems -> error', error)
    }
  }

  const getViewByValue = (selectedViewBy) => {
    updateViewBy(selectedViewBy)
  }

  const columns = [
    {
      Header: 'Title',
      id: 'title',
      accessor: (data) => {
        if (viewBy === 'Comfort') {
          return (
            <div>
              <div className='content-title'>{data.title}</div>
              <InstructionText> Content Type: Header content </InstructionText>
            </div>
          )
        }
        return <div className='content-title'> {data.title} </div>
      },
      default: true,
      addToColumnSelector: true,
    },
    {
      Header: 'Unique UID',
      accessor: 'uuid',
      default: false,
      addToColumnSelector: true,
      cssClass: 'uidCustomClass',
    },
    {
      Header: 'Age',
      id: 'age',
      accessor: (data) => {
        if (viewBy === 'Comfort') {
          return (
            <div>
              <div>{data.age}</div>
              <DateLabel date={'1992-04-14'} />
            </div>
          )
        }
        return data.age
      },
      default: true,
      addToColumnSelector: true,
    },
    {
      Header: 'Status',
      accessor: 'status',
      default: false,
      disableSortBy: true,
      addToColumnSelector: true,
    },
    {
      Header: 'Active',
      accessor: (data) => {
        return data._canSelect ? 'true' : 'false'
      },
      id: '_canSelect',
      default: false,
      disableSortBy: true,
      addToColumnSelector: true,
    },
  ]

  return (
    <InfiniteScrollTable
      data={data}
      columns={columns}
      uniqueKey={'uid'}
      fetchTableData={fetchData}
      loading={loading}
      totalCounts={totalCounts}
      loadMoreItems={loadMoreItems}
      itemStatusMap={itemStatusMap}
      minBatchSizeToFetch={50}
      viewSelector={true}
      getViewByValue={getViewByValue}
      initialSortBy={[{ id: 'title', desc: true }]}
      columnSelector={true}
      searchPlaceholder={'Search'}
      canSearch={true}
      canRefresh={true}
      equalWidthColumns={true}
    />
  )
}

export const RowHoverAction = (args) => {
  let [data, updateData] = useState([])
  let [itemStatusMap, updateItemStatusMap] = useState({})
  let [loading, updateLoading] = useState(false)
  let [viewBy, updateViewBy] = useState('Comfort')
  let [totalCounts, updateTotalCounts] = useState(null)

  const fetchData = async ({ sortBy, searchText, skip, limit, startIndex, stopIndex }) => {
    try {
      let itemStatusMap = {}
      for (let index = 0; index <= 30; index++) {
        itemStatusMap[index] = 'loading'
      }

      updateItemStatusMap(itemStatusMap)
      updateLoading(true)

      const response = await fakeServer({ skip: 0, limit: 30, sortBy })
      for (let index = 0; index <= 30; index++) {
        itemStatusMap[index] = 'loaded'
      }

      updateItemStatusMap({ ...itemStatusMap })
      updateLoading(false)
      updateData(response.data)
      updateTotalCounts(response.count)
    } catch (error) {
      console.log('fetchData -> error', error)
    }
  }

  const loadMoreItems = async ({ sortBy, searchText, skip, limit, startIndex, stopIndex }) => {
    try {
      let itemStatusMapCopy = { ...itemStatusMap }

      for (let index = startIndex; index <= stopIndex; index++) {
        itemStatusMapCopy[index] = 'loading'
      }

      updateItemStatusMap({ ...itemStatusMapCopy })
      updateLoading(true)

      const response = await fakeServer({ skip, limit, sortBy })

      let updateditemStatusMapCopy = { ...itemStatusMap }

      for (let index = startIndex; index <= stopIndex; index++) {
        updateditemStatusMapCopy[index] = 'loaded'
      }

      updateItemStatusMap({ ...updateditemStatusMapCopy })
      updateLoading(false)
      updateData([...data, ...response.data])
      updateTotalCounts(response.count)
    } catch (error) {
      console.log('loadMoreItems -> error', error)
    }
  }

  const getViewByValue = (selectedViewBy) => {
    updateViewBy(selectedViewBy)
  }

  const columns = [
    {
      Header: 'Title',
      id: 'title',
      accessor: (data) => {
        if (viewBy === 'Comfort') {
          return (
            <div>
              <div className='content-title'>{data.title}</div>
              <InstructionText> Content Type: Header content </InstructionText>
            </div>
          )
        }
        return <div className='content-title'> {data.title} </div>
      },
      default: true,
      addToColumnSelector: true,
    },
    {
      Header: 'Unique UID',
      accessor: 'uuid',
      default: false,
      addToColumnSelector: true,
      cssClass: 'uidCustomClass',
    },
    {
      Header: 'Age',
      id: 'age',
      accessor: (data) => {
        if (viewBy === 'Comfort') {
          return (
            <div>
              <div>{data.age}</div>
              <DateLabel date={'1992-04-14'} />
            </div>
          )
        }
        return data.age
      },
      default: true,
      addToColumnSelector: true,
    },
    {
      Header: 'Status',
      accessor: 'status',
      default: false,
      disableSortBy: true,
      addToColumnSelector: true,
    },
    {
      Header: 'Active',
      accessor: (data) => {
        return data._canSelect ? 'true' : 'false'
      },
      id: '_canSelect',
      default: false,
      disableSortBy: true,
      addToColumnSelector: true,
    },
  ]

  const onHoverActionList = [
    {
      label: <Icon icon='Edit' />,
      canDisplay: (data) => {
        return true
      },
      title: (data) => {
        return data.status
      },
      action: (event, data) => {
        event.stopPropagation()
        event.preventDefault()
        console.log(' edit data for row', data)
      },
    },
    {
      label: <Icon icon='SingleCopyIcon' />,
      title: 'Copy',
      action: (event, data) => {
        event.stopPropagation()
        event.preventDefault()
        console.log('Copy triggered data', data)
      },
    },
    {
      label: <Icon icon='PublishIcon' />,
      title: 'Publish',
      action: (event, data) => {
        event.stopPropagation()
        event.preventDefault()
        console.log('PublishIcon triggered data', data)
      },
    },
    {
      label: <Icon icon='Trash' />,
      title: 'Trash',
      action: (event, data) => {
        event.stopPropagation()
        event.preventDefault()
        console.log('Trash triggered data', data)
      },
    },
  ]

  return (
    <InfiniteScrollTable
      data={data}
      columns={columns}
      uniqueKey={'uid'}
      fetchTableData={fetchData}
      loading={loading}
      totalCounts={totalCounts}
      loadMoreItems={loadMoreItems}
      itemStatusMap={itemStatusMap}
      minBatchSizeToFetch={50}
      viewSelector={true}
      getViewByValue={getViewByValue}
      initialSortBy={[{ id: 'title', desc: true }]}
      columnSelector={true}
      searchPlaceholder={'Search'}
      canSearch={true}
      canRefresh={true}
      onHoverActionList={onHoverActionList}
    />
  )
}


export const ConditionalRowHoverAction = (args) => {
  let [data, updateData] = useState([])
  let [itemStatusMap, updateItemStatusMap] = useState({})
  let [loading, updateLoading] = useState(false)
  let [viewBy, updateViewBy] = useState('Comfort')
  let [totalCounts, updateTotalCounts] = useState(null)

  const fetchData = async ({ sortBy, searchText, skip, limit, startIndex, stopIndex }) => {
    try {
      let itemStatusMap = {}
      for (let index = 0; index <= 30; index++) {
        itemStatusMap[index] = 'loading'
      }

      updateItemStatusMap(itemStatusMap)
      updateLoading(true)

      const response = await fakeServer({ skip: 0, limit: 30, sortBy })
      for (let index = 0; index <= 30; index++) {
        itemStatusMap[index] = 'loaded'
      }

      updateItemStatusMap({ ...itemStatusMap })
      updateLoading(false)
      updateData(response.data)
      updateTotalCounts(response.count)
    } catch (error) {
      console.log('fetchData -> error', error)
    }
  }

  const loadMoreItems = async ({ sortBy, searchText, skip, limit, startIndex, stopIndex }) => {
    try {
      let itemStatusMapCopy = { ...itemStatusMap }

      for (let index = startIndex; index <= stopIndex; index++) {
        itemStatusMapCopy[index] = 'loading'
      }

      updateItemStatusMap({ ...itemStatusMapCopy })
      updateLoading(true)

      const response = await fakeServer({ skip, limit, sortBy })

      let updateditemStatusMapCopy = { ...itemStatusMap }

      for (let index = startIndex; index <= stopIndex; index++) {
        updateditemStatusMapCopy[index] = 'loaded'
      }

      updateItemStatusMap({ ...updateditemStatusMapCopy })
      updateLoading(false)
      updateData([...data, ...response.data])
      updateTotalCounts(response.count)
    } catch (error) {
      console.log('loadMoreItems -> error', error)
    }
  }

  const getViewByValue = (selectedViewBy) => {
    updateViewBy(selectedViewBy)
  }

  const columns = [
    {
      Header: 'Title',
      id: 'title',
      accessor: (data) => {
        if (viewBy === 'Comfort') {
          return (
            <div>
              <div className='content-title'>{data.title}</div>
              <InstructionText> Content Type: Header content </InstructionText>
            </div>
          )
        }
        return <div className='content-title'> {data.title} </div>
      },
      default: true,
      addToColumnSelector: true,
    },
    {
      Header: 'Unique UID',
      accessor: 'uuid',
      default: false,
      addToColumnSelector: true,
      cssClass: 'uidCustomClass',
    },
    {
      Header: 'Age',
      id: 'age',
      accessor: (data) => {
        if (viewBy === 'Comfort') {
          return (
            <div>
              <div>{data.age}</div>
              <DateLabel date={'1992-04-14'} />
            </div>
          )
        }
        return data.age
      },
      default: true,
      addToColumnSelector: true,
    },
    {
      Header: 'Status',
      accessor: 'status',
      default: false,
      disableSortBy: true,
      addToColumnSelector: true,
    },
    {
      Header: 'Active',
      accessor: (data) => {
        return data._canSelect ? 'true' : 'false'
      },
      id: '_canSelect',
      default: false,
      disableSortBy: true,
      addToColumnSelector: true,
    },
  ]

  const onHoverActionList = [
    {
      label: <Icon icon='Edit' />,
      title: (data) => {
        return data.status
      },
      action: (event, data) => {
        event.stopPropagation()
        event.preventDefault()
        console.log(' edit data for row', data)
      },
      canDisplay: (data) => {
        return data._canSelect
      },
    },
    {
      label: <Icon icon='SingleCopyIcon' />,
      title: 'Copy',
      action: (event, data) => {
        event.stopPropagation()
        event.preventDefault()
        console.log('Copy triggered data', data)
      },
    },
    {
      label: <Icon icon='PublishIcon' />,
      title: 'Publish',
      action: (event, data) => {
        event.stopPropagation()
        event.preventDefault()
        console.log('PublishIcon triggered data', data)
      },
    },
    {
      label: <Icon icon='Trash' />,
      title: 'Trash',
      action: (event, data) => {
        event.stopPropagation()
        event.preventDefault()
        console.log('Trash triggered data', data)
      },
      canDisplay: (data) => {
        return data._canSelect
      },
    },
  ]


  return (
    <InfiniteScrollTable
      data={data}
      columns={columns}
      uniqueKey={'uid'}
      fetchTableData={fetchData}
      loading={loading}
      totalCounts={totalCounts}
      loadMoreItems={loadMoreItems}
      itemStatusMap={itemStatusMap}
      minBatchSizeToFetch={50}
      viewSelector={true}
      getViewByValue={getViewByValue}
      initialSortBy={[{ id: 'title', desc: true }]}
      columnSelector={true}
      searchPlaceholder={'Search'}
      canSearch={true}
      canRefresh={true}
      onHoverActionList={onHoverActionList}
    />
  )
}

export const SingleRowSelect = (args) => {
  let [data, updateData] = useState([])
  let [itemStatusMap, updateItemStatusMap] = useState({})
  let [loading, updateLoading] = useState(false)
  let [viewBy, updateViewBy] = useState('Comfort')
  let [totalCounts, updateTotalCounts] = useState(null)

  const [singleSelectedRowId, setSelectedRowId] = useState('')

  const onRowClick = (data) => {
    setSelectedRowId(data.uid)
  }

  const fetchData = async ({ sortBy, searchText, skip, limit, startIndex, stopIndex }) => {
    try {
      let itemStatusMap = {}
      for (let index = 0; index <= 30; index++) {
        itemStatusMap[index] = 'loading'
      }

      updateItemStatusMap(itemStatusMap)
      updateLoading(true)

      const response = await fakeServer({ skip: 0, limit: 30, sortBy })
      for (let index = 0; index <= 30; index++) {
        itemStatusMap[index] = 'loaded'
      }

      updateItemStatusMap({ ...itemStatusMap })
      updateLoading(false)
      updateData(response.data)
      updateTotalCounts(response.count)
    } catch (error) {
      console.log('fetchData -> error', error)
    }
  }

  const loadMoreItems = async ({ sortBy, searchText, skip, limit, startIndex, stopIndex }) => {
    try {
      let itemStatusMapCopy = { ...itemStatusMap }

      for (let index = startIndex; index <= stopIndex; index++) {
        itemStatusMapCopy[index] = 'loading'
      }

      updateItemStatusMap({ ...itemStatusMapCopy })
      updateLoading(true)

      const response = await fakeServer({ skip, limit, sortBy })

      let updateditemStatusMapCopy = { ...itemStatusMap }

      for (let index = startIndex; index <= stopIndex; index++) {
        updateditemStatusMapCopy[index] = 'loaded'
      }

      updateItemStatusMap({ ...updateditemStatusMapCopy })
      updateLoading(false)
      updateData([...data, ...response.data])
      updateTotalCounts(response.count)
    } catch (error) {
      console.log('loadMoreItems -> error', error)
    }
  }

  const getViewByValue = (selectedViewBy) => {
    updateViewBy(selectedViewBy)
  }

  const columns = [
    {
      Header: 'Title',
      id: 'title',
      accessor: (data) => {
        if (viewBy === 'Comfort') {
          return (
            <div>
              <div className='content-title'>{data.title}</div>
              <InstructionText> Content Type: Header content </InstructionText>
            </div>
          )
        }
        return <div className='content-title'> {data.title} </div>
      },
      default: true,
      addToColumnSelector: true,
    },
    {
      Header: 'Unique UID',
      accessor: 'uuid',
      default: false,
      addToColumnSelector: true,
      cssClass: 'uidCustomClass',
    },
    {
      Header: 'Age',
      id: 'age',
      accessor: (data) => {
        if (viewBy === 'Comfort') {
          return (
            <div>
              <div>{data.age}</div>
              <DateLabel date={'1992-04-14'} />
            </div>
          )
        }
        return data.age
      },
      default: true,
      addToColumnSelector: true,
    },
    {
      Header: 'Status',
      accessor: 'status',
      default: false,
      disableSortBy: true,
      addToColumnSelector: true,
    },
    {
      Header: 'Active',
      accessor: (data) => {
        return data._canSelect ? 'true' : 'false'
      },
      id: '_canSelect',
      default: false,
      disableSortBy: true,
      addToColumnSelector: true,
    },
  ]

  return (
    <InfiniteScrollTable
      data={data}
      columns={columns}
      uniqueKey={'uid'}
      fetchTableData={fetchData}
      loading={loading}
      totalCounts={totalCounts}
      loadMoreItems={loadMoreItems}
      itemStatusMap={itemStatusMap}
      minBatchSizeToFetch={50}
      viewSelector={true}
      getViewByValue={getViewByValue}
      initialSortBy={[{ id: 'title', desc: true }]}
      columnSelector={true}
      searchPlaceholder={'Search'}
      canSearch={true}
      canRefresh={true}
      linkToRow={(rowData) => {
        return `https://www.youtube.com/results?search_query=${rowData.uid}`
      }}
      singleSelectedRowId={singleSelectedRowId}
      onRowClick={onRowClick}
    />
  )
}


export const TableLoader = (args) => {
  const columns = [
    {
      Header: 'Name',
      accessor: 'name',
      default: true,
    },
    {
      Header: 'Key',
      accessor: 'key',
      default: false,
    },
    {
      Header: 'Description',
      accessor: 'description',
      default: false,
    },
  ]
  const data = [
    {
      uid: 0,
      name: 'Age',
      key: 'age',
      description: 'Age of the person',
    },
    {
      uid: 1,
      name: 'Location',
      key: 'location',
      description: 'The location the user is accessing the application from',
    },
    {
      uid: 2,
      name: 'Lorem ipsum',
      key: 'lorem',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a felis interdum, viverra tellus sit amet, venenatis nunc. Etiam ullamcorper, mi a nec.',
    },
  ]
  return (
    <InfiniteScrollTable
      totalCounts={3}
      data={data}
      loading={args.loading}
      fetchTableData={() => { }}
      loadMoreItems={() => { }}
      itemStatusMap={
        args.loading
          ? { 0: 'loading', 1: 'loading', 2: 'loading' }
          : { 0: 'loaded', 1: 'loaded', 2: 'loaded' }
      }
      columns={columns}
      uniqueKey={'uid'}
    />
  )
}


export const TableWithColumnWidthMultiplier = (args) => {
  const data = [
    {
      uid: 0,
      name: 'Age',
      key: 'age',
      description: 'Age of the person',
    },
    {
      uid: 1,
      name: 'Location',
      key: 'location',
      description: 'The location the user is accessing the application from',
    },
    {
      uid: 2,
      name: 'Lorem ipsum',
      key: 'lorem',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a felis interdum, viverra tellus sit amet, venenatis nunc. Etiam ullamcorper, mi a nec.',
    },
  ]

  const columns = [
    {
      Header: 'Name',
      accessor: 'name',
      default: true,
      columnWidthMultiplier: 3,
    },
    {
      Header: 'Key',
      accessor: 'key',
      default: false,
      columnWidthMultiplier: 2,
    },
    {
      Header: 'Description',
      accessor: 'description',
      default: false,
      columnWidthMultiplier: 5,
    },
  ]

  return (
    <InfiniteScrollTable
      isRowSelect={false}
      totalCounts={3}
      data={data}
      fetchTableData={() => undefined}
      loadMoreItems={() => undefined}
      itemStatusMap={{ 0: 'loaded', 1: 'loaded', 2: 'loaded' }}
      columns={columns}
      equalWidthColumns={false}
      uniqueKey={'uid'}
    />
  )
}


export const ConditionalRowDisable = (args) => {
  let [data, updateData] = useState([])
  let [itemStatusMap, updateItemStatusMap] = useState({})
  let [loading, updateLoading] = useState(false)
  let [viewBy, updateViewBy] = useState('Comfort')
  let [totalCounts, updateTotalCounts] = useState(null)

  const fetchData = async ({ sortBy, searchText, skip, limit, startIndex, stopIndex }) => {
    try {
      let itemStatusMap = {}
      for (let index = 0; index <= 30; index++) {
        itemStatusMap[index] = 'loading'
      }

      updateItemStatusMap(itemStatusMap)
      updateLoading(true)

      const response = await fakeServer({ skip: 0, limit: 30, sortBy })
      for (let index = 0; index <= 30; index++) {
        itemStatusMap[index] = 'loaded'
      }

      updateItemStatusMap({ ...itemStatusMap })
      updateLoading(false)
      updateData(response.data)
      updateTotalCounts(response.count)
    } catch (error) {
      console.log('fetchData -> error', error)
    }
  }

  const loadMoreItems = async ({ sortBy, searchText, skip, limit, startIndex, stopIndex }) => {
    try {
      let itemStatusMapCopy = { ...itemStatusMap }

      for (let index = startIndex; index <= stopIndex; index++) {
        itemStatusMapCopy[index] = 'loading'
      }

      updateItemStatusMap({ ...itemStatusMapCopy })
      updateLoading(true)

      const response = await fakeServer({ skip, limit, sortBy })

      let updateditemStatusMapCopy = { ...itemStatusMap }

      for (let index = startIndex; index <= stopIndex; index++) {
        updateditemStatusMapCopy[index] = 'loaded'
      }

      updateItemStatusMap({ ...updateditemStatusMapCopy })
      updateLoading(false)
      updateData([...data, ...response.data])
      updateTotalCounts(response.count)
    } catch (error) {
      console.log('loadMoreItems -> error', error)
    }
  }

  const getViewByValue = (selectedViewBy) => {
    updateViewBy(selectedViewBy)
  }

  const columns = [
    {
      Header: 'Title',
      id: 'title',
      accessor: (data) => {
        if (viewBy === 'Comfort') {
          return (
            <div>
              <div className='content-title'>{data.title}</div>
              <InstructionText> Content Type: Header content </InstructionText>
            </div>
          )
        }
        return <div className='content-title'> {data.title} </div>
      },
      default: true,
      addToColumnSelector: true,
    },
    {
      Header: 'Unique UID',
      accessor: 'uuid',
      default: false,
      addToColumnSelector: true,
      cssClass: 'uidCustomClass',
    },
    {
      Header: 'Age',
      id: 'age',
      accessor: (data) => {
        if (viewBy === 'Comfort') {
          return (
            <div>
              <div>{data.age}</div>
              <DateLabel date={'1992-04-14'} />
            </div>
          )
        }
        return data.age
      },
      default: true,
      addToColumnSelector: true,
    },
    {
      Header: 'Status',
      accessor: 'status',
      default: false,
      disableSortBy: true,
      addToColumnSelector: true,
    },
    {
      Header: 'Active',
      accessor: (data) => {
        return data._canSelect ? 'true' : 'false'
      },
      id: '_canSelect',
      default: false,
      disableSortBy: true,
      addToColumnSelector: true,
    },
  ]

  return (
    <InfiniteScrollTable
      data={data}
      columns={columns}
      uniqueKey={'uid'}
      fetchTableData={fetchData}
      loading={loading}
      totalCounts={totalCounts}
      loadMoreItems={loadMoreItems}
      itemStatusMap={itemStatusMap}
      minBatchSizeToFetch={50}
      viewSelector={args.viewSelector}
      getViewByValue={getViewByValue}
      initialSortBy={[{ id: 'title', desc: true }]}
      columnSelector={args.columnSelector}
      searchPlaceholder={'Search'}
      canRefresh={args.canRefresh}
      rowDisableProp={{ key: '_invalid', value: true }}
      onRowHoverText={(data) => data.errorMessage}
    />
  )
}



// export const CustomRowAdd = (args) => {
//   let [data, updateData] = useState([])
//   let [itemStatusMap, updateItemStatusMap] = useState({})
//   let [loading, updateLoading] = useState(false)
//   let [viewBy, updateViewBy] = useState('Comfort')
//   let [totalCounts, updateTotalCounts] = useState(null)

//   const fetchData = async ({ sortBy, searchText, skip, limit, startIndex, stopIndex }) => {
//     try {
//       let itemStatusMap = {}
//       for (let index = 0; index <= 30; index++) {
//         itemStatusMap[index] = 'loading'
//       }

//       updateItemStatusMap(itemStatusMap)
//       updateLoading(true)

//       const response = await fakeServer({ skip: 0, limit: 30, sortBy })
//       for (let index = 0; index <= 30; index++) {
//         itemStatusMap[index] = 'loaded'
//       }

//       updateItemStatusMap({ ...itemStatusMap })
//       updateLoading(false)
//       updateData(response.data)
//       updateTotalCounts(response.count)
//     } catch (error) {
//       console.log('fetchData -> error', error)
//     }
//   }

//   const loadMoreItems = async ({ sortBy, searchText, skip, limit, startIndex, stopIndex }) => {
//     try {
//       let itemStatusMapCopy = { ...itemStatusMap }

//       for (let index = startIndex; index <= stopIndex; index++) {
//         itemStatusMapCopy[index] = 'loading'
//       }

//       updateItemStatusMap({ ...itemStatusMapCopy })
//       updateLoading(true)

//       const response = await fakeServer({ skip, limit, sortBy })

//       let updateditemStatusMapCopy = { ...itemStatusMap }

//       for (let index = startIndex; index <= stopIndex; index++) {
//         updateditemStatusMapCopy[index] = 'loaded'
//       }

//       updateItemStatusMap({ ...updateditemStatusMapCopy })
//       updateLoading(false)
//       updateData([...data, ...response.data])
//       updateTotalCounts(response.count)
//     } catch (error) {
//       console.log('loadMoreItems -> error', error)
//     }
//   }

//   const getViewByValue = (selectedViewBy) => {
//     updateViewBy(selectedViewBy)
//   }

//   const CustomRowComponent = () => {
//     const [relName, setRelName] = useState('')
//     const [relDec, setRelDec] = useState('')

//     const onSaveChange = () => {
//       setRelName('')
//       setRelDec('')
//     }

//     let fieldArray = [
//       <TextInput
//         onChange={(e) => {
//           e.stopPropagation()
//           setRelName(e.target.value)
//         }}
//         autoFocus={true}
//         placeholder={'Enter a name '}
//         width='small'
//         value={relName}
//         required={true}
//       />,
//       <TextInput
//         onChange={(e) => {
//           e.stopPropagation()
//           setRelDec(e.target.value)
//         }}
//         placeholder={'Enter a description'}
//         width='medium'
//         value={relDec}
//       />,
//     ]
//     return (
//       <div className='formCustomAddWrapper'>
//         <div className='formCustomAdd'>
//           <InlineForms
//             onSave={onSaveChange}
//             defaultOpen={true}
//             fieldArray={fieldArray}
//             defaultTitle='Create New Release'
//             disableSave={relName.length === 0 ? true : false}
//             onCancel={() => {
//               setRelName('')
//               setRelDec('')
//             }}
//           />
//         </div>
//       </div>
//     )
//   }

//   const columns = [
//     {
//       Header: 'Title',
//       id: 'title',
//       accessor: (data) => {
//         if (viewBy === 'Comfort') {
//           return (
//             <div>
//               <div className='content-title'>{data.title}</div>
//               <InstructionText> Content Type: Header content </InstructionText>
//             </div>
//           )
//         }
//         return <div className='content-title'> {data.title} </div>
//       },
//       default: true,
//       addToColumnSelector: true,
//     },
//     {
//       Header: 'Unique UID',
//       accessor: 'uuid',
//       default: false,
//       addToColumnSelector: true,
//       cssClass: 'uidCustomClass',
//     },
//     {
//       Header: 'Age',
//       id: 'age',
//       accessor: (data) => {
//         if (viewBy === 'Comfort') {
//           return (
//             <div>
//               <div>{data.age}</div>
//               <DateLabel date={'1992-04-14'} />
//             </div>
//           )
//         }
//         return data.age
//       },
//       default: true,
//       addToColumnSelector: true,
//     },
//     {
//       Header: 'Status',
//       accessor: 'status',
//       default: false,
//       disableSortBy: true,
//       addToColumnSelector: true,
//     },
//     {
//       Header: 'Active',
//       accessor: (data) => {
//         return data._canSelect ? 'true' : 'false'
//       },
//       id: '_canSelect',
//       default: false,
//       disableSortBy: true,
//       addToColumnSelector: true,
//     },
//   ]

//   return (
//     <InfiniteScrollTable
//       data={data}
//       columns={columns}
//       uniqueKey={'uid'}
//       fetchTableData={fetchData}
//       loading={loading}
//       totalCounts={totalCounts}
//       loadMoreItems={loadMoreItems}
//       itemStatusMap={itemStatusMap}
//       minBatchSizeToFetch={50}
//       viewSelector={args.viewSelector}
//       getViewByValue={getViewByValue}
//       initialSortBy={[{ id: 'title', desc: true }]}
//       columnSelector={args.columnSelector}
//       searchPlaceholder={'Search'.searchPlaceholder}
//       canRefresh={args.canRefresh}
//       customRowComponent={<CustomRowComponent />}
//       customRowAdd={args.customRowAdd}
//       onSaveChange={(name, desc) => console.log('save values')}
//     />
//   )
// }


const TableComponent = () => {
  return (
    <div style={{ width: '1100px' }}>
      <div style={{ marginBottom: '50px' }}>
        <h3>Default</h3>
        <Default />
      </div>
      <div style={{ marginBottom: '50px' }}>
        <h3>RowSelectOperation</h3>
        <RowSelectOperation />
      </div>
      <div style={{ marginBottom: '50px' }}>
        <h3>ConditionalRowSelect</h3>
        <ConditionalRowSelect />
      </div>
      <div style={{ marginBottom: '50px' }}>
        <h3>EqualColumnWidth</h3>
        <EqualColumnWidth />
      </div>
      <div style={{ marginBottom: '50px' }}>
        <h3>RowHoverAction</h3>
        <RowHoverAction />
      </div>
      <div style={{ marginBottom: '50px' }}>
        <h3>SingleRowSelect</h3>
        <SingleRowSelect />
      </div>

      <div style={{ marginBottom: '50px' }}>
        <h3>TableLoader</h3>
        <TableLoader />
      </div>
      <div style={{ marginBottom: '50px' }}>
        <h3>TableWithColumnWidthMultiplier</h3>
        <TableWithColumnWidthMultiplier />
      </div>
      <div style={{ marginBottom: '50px' }}>
        <h3>ConditionalRowDisable</h3>
        <ConditionalRowDisable />
      </div>
      {/* <div style={{ marginBottom: '50px' }}>
        <h3>CustomRowAdd</h3>
        <CustomRowAdd />
      </div> */}
    </div>
  )
}

export default TableComponent

















// const makeData = size => {
//   const data = []
//   for (let i = 1; i <= size; i++) {
//     const dataObject = {
//       title: `Can Augmented And Future Reality Build Empathy${i}`,
//       uuid: `blt006d3106e3a6532b${i}`,
//       age: i,
//       status: i % 2 === 0 ? 'active' : 'inactive',
//       uid: `test${i}`,
//       _canSelect: i % 2 === 0 ? true : false,
//     }
//     data.push(dataObject)
//   }
//   return data
// }

// const serverData = makeData(1000)

// const filterData = ({ skip, limit, sortBy }) => {
//   let responseData = serverData
//   //sort first and then paginate
//   if (sortBy) {
//     const { sortingDirection, id } = sortBy
//     responseData = orderBy(serverData, [id], [sortingDirection])
//   }

//   const skippedData = responseData.slice(skip, responseData.length)
//   const limitedData = skippedData.slice(0, limit)
//   return { data: limitedData, count: responseData.length }
// }

// const fakeServer = ({ skip, limit, sortBy }) => {
//   console.log('fakeServer -> skip, limit', skip, limit, sortBy)
//   return new Promise(resolve => {
//     setTimeout(() => {
//       const data = filterData({ skip, limit, sortBy })
//       return resolve(data)
//     }, 200)
//   })
// }

// class InfiniteScroll extends React.Component {
//   state = {
//     data: [],
//     itemStatusMap: {},
//     loading: false,
//   }

//   fixedlistRef = React.createRef()

//   async componentDidMount() {
//     try {
//       await this.fetchData({})
//     } catch (error) {
//       console.log('componentDidMount -> error', error)
//     }
//   }

//   fetchData = async ({ sortBy, skip, limit }) => {
//     try {
//       if (this.fixedlistRef && this.fixedlistRef.current) {
//         this.fixedlistRef.current.scrollToItem(0)
//       }
//       let itemStatusMap = {}
//       for (let index = 0; index <= 30; index++) {
//         itemStatusMap[index] = 'loading'
//       }

//       this.setState({ itemStatusMap, loading: true })

//       const response = await fakeServer({ skip: 0, limit: 30, sortBy })
//       for (let index = 0; index <= 30; index++) {
//         itemStatusMap[index] = 'loaded'
//       }

//       this.setState({ itemStatusMap, loading: true, data: response.data })
//     } catch (error) {
//       console.log('error', error)
//     }
//   }

//   loadMoreItems = async ({ sortBy, skip, limit, startIndex, stopIndex }) => {
//     try {
//       let itemStatusMapCopy = { ...this.state.itemStatusMap }

//       for (let index = startIndex; index <= stopIndex; index++) {
//         itemStatusMapCopy[index] = 'loading'
//       }

//       this.setState({ itemStatusMap: itemStatusMapCopy, loading: true })

//       const response = await fakeServer({ skip, limit, sortBy })

//       let updateditemStatusMapCopy = { ...this.state.itemStatusMap }

//       for (let index = startIndex; index <= stopIndex; index++) {
//         updateditemStatusMapCopy[index] = 'loaded'
//       }

//       this.setState({
//         itemStatusMap: updateditemStatusMapCopy,
//         loading: false,
//         data: [...this.state.data, ...response.data],
//       })
//     } catch (error) {
//       console.log('loadMoreItems -> error', error)
//     }
//   }

//   render() {
//     const columns = [
//       {
//         Header: 'Title',
//         accessor: 'title',
//         default: true,
//         // disableSortBy: true,
//         addToColumnSelector: true,
//       },
//       {
//         Header: 'Unique UID',
//         accessor: 'uuid',
//         default: false,
//         // disableSortBy: true,
//         addToColumnSelector: true,
//       },
//       {
//         Header: 'Age',
//         accessor: 'age',
//         default: true,
//         // disableSortBy: true,
//         addToColumnSelector: true,
//       },
//       {
//         Header: 'Status',
//         accessor: 'status',
//         default: false,
//         disableSortBy: true,
//         addToColumnSelector: true,
//       },
//     ]
//     const onRowSelectProp = [
//       {
//         label: 'Log selected Items',
//         cb: function (data) {
//           console.log('selected data', data)
//         },
//       },
//     ]

//     return (
//       <InfiniteScrollTable
//         isRowSelect={true}
//         onRowSelectProp={onRowSelectProp}
//         data={this.state.data}
//         columns={columns}
//         uniqueKey={'uid'}
//         fetchTableData={this.fetchData}
//         loading={this.state.loading}
//         totalCounts={1000}
//         loadMoreItems={this.loadMoreItems}
//         itemStatusMap={this.state.itemStatusMap}
//         minimumBatchSize={50}
//         dataType={{ singular: 'item', plural: 'items' }}
//         fixedlistRef={this.fixedlistRef}
//       />
//     )
//   }
// }

// const Default = () => {
//   return <InfiniteScroll />
// }

// const CoulmnSelector = () => {
//   const data = makeData(10)
//   const columns = [
//     {
//       Header: 'Title',
//       accessor: 'title',
//       default: false,
//       addToColumnSelector: true,
//     },
//     {
//       Header: 'Age',
//       accessor: 'age',
//       default: false,
//       addToColumnSelector: true,
//     },
//     {
//       Header: 'Status',
//       accessor: 'status',
//       default: false,
//       disableSortBy: true,
//       addToColumnSelector: true,
//     },
//   ]
//   return (
//     <Table
//       dataType={{ singular: 'item', plural: 'items' }}
//       totalCounts={10}
//       data={data}
//       columns={columns}
//       canPaginate={false}
//       uniqueKey={'uid'}
//     />
//   )
// }

// const SkeletonLoading = () => {
//   const data = makeData(10)
//   const columns = [
//     {
//       Header: 'Title',
//       accessor: 'title',
//       default: false,
//     },
//     {
//       Header: 'Age',
//       accessor: 'age',
//       default: false,
//     },
//     {
//       Header: 'Status',
//       accessor: 'status',
//       default: false,
//       disableSortBy: true,
//     },
//   ]
//   return (
//     <Table
//       totalCounts={10}
//       data={data}
//       loading={true}
//       columns={columns}
//       canPaginate={false}
//       uniqueKey={'uid'}
//       isRowSelect={true}
//       dataType={{ singular: 'item', plural: 'items' }}
//     />
//   )
// }

// const DisableCoulmnSelector = () => {
//   const data = makeData(10)
//   const columns = [
//     {
//       Header: 'Title',
//       accessor: 'title',
//       default: true,
//       addToColumnSelector: true,
//     },
//     {
//       Header: 'Age',
//       accessor: 'age',
//       default: true,
//       addToColumnSelector: true,
//     },
//     {
//       Header: 'Status',
//       accessor: 'status',
//       default: false,
//       disableSortBy: true,
//       addToColumnSelector: true,
//     },
//   ]
//   return (
//     <Table
//       dataType={{ singular: 'item', plural: 'items' }}
//       totalCounts={10}
//       data={data}
//       columns={columns}
//       canPaginate={false}
//       uniqueKey={'uid'}
//     />
//   )
// }

// const HideColumnSelector = () => {
//   const data = makeData(10)
//   const columns = [
//     {
//       Header: 'Title',
//       accessor: 'title',
//     },
//     {
//       Header: 'Unique UID',
//       accessor: 'uuid',
//     },
//     {
//       Header: 'Age',
//       accessor: 'age',
//     },
//     {
//       Header: 'Status',
//       accessor: 'status',
//     },
//   ]
//   return (
//     <Table
//       totalCounts={10}
//       data={data}
//       columns={columns}
//       canPaginate={false}
//       uniqueKey={'uid'}
//       columnSelector={false}
//       dataType={{ singular: 'item', plural: 'items' }}
//     />
//   )
// }

// const HideColumn = () => {
//   const data = makeData(10)
//   const columns = [
//     {
//       Header: 'Title',
//       accessor: 'title',
//       default: true,
//       addToColumnSelector: true,
//     },
//     {
//       Header: 'Unique UID',
//       accessor: 'uuid',
//       default: false,
//     },
//     {
//       Header: 'Age',
//       accessor: 'age',
//       default: true,
//       addToColumnSelector: true,
//     },
//     {
//       Header: 'Status',
//       accessor: 'status',
//       default: false,
//       disableSortBy: true,
//     },
//   ]
//   return (
//     <Table
//       totalCounts={10}
//       hiddenColumns={['status', 'uuid']}
//       data={data}
//       columns={columns}
//       canPaginate={false}
//       uniqueKey={'uid'}
//       dataType={{ singular: 'item', plural: 'items' }}
//     />
//   )
// }

// const RowSelectAndOperation = () => {
//   const data = makeData(10)
//   const columns = [
//     {
//       Header: 'Title',
//       accessor: 'title',
//       default: true,
//       addToColumnSelector: true,
//     },
//     {
//       Header: 'Unique UID',
//       accessor: 'uuid',
//       default: false,
//       addToColumnSelector: true,
//     },
//     {
//       Header: 'Age',
//       accessor: 'age',
//       default: true,
//       addToColumnSelector: true,
//     },
//     {
//       Header: 'Status',
//       accessor: 'status',
//       default: false,
//       disableSortBy: true,
//       addToColumnSelector: true,
//     },
//   ]

//   const onRowSelectProp = [
//     {
//       label: 'Log selected Items',
//       cb: function (data) {
//         console.log('selected data', data)
//       },
//     },
//   ]
//   return (
//     <Table
//       totalCounts={10}
//       data={data}
//       columns={columns}
//       canPaginate={false}
//       uniqueKey={'uid'}
//       isRowSelect={true}
//       onRowSelectProp={onRowSelectProp}
//       dataType={{ singular: 'item', plural: 'items' }}
//     />
//   )
// }

// const ConditionallyRowSelect = () => {
//   const data = makeData(10)
//   const columns = [
//     {
//       Header: 'Title',
//       accessor: 'title',
//       default: true,
//       addToColumnSelector: true,
//     },
//     {
//       Header: 'Unique UID',
//       accessor: 'uuid',
//       default: false,
//       addToColumnSelector: true,
//     },
//     {
//       Header: 'Age',
//       accessor: 'age',
//       default: true,
//       addToColumnSelector: true,
//     },
//     {
//       Header: 'Status',
//       accessor: 'status',
//       default: false,
//       disableSortBy: true,
//       addToColumnSelector: true,
//     },
//   ]

//   const onRowSelectProp = [
//     {
//       label: 'Log selected Items',
//       cb: function (data) {
//         console.log('selected data', data)
//       },
//     },
//   ]
//   //this will add check box when it find _canSelect on data to be true
//   const rowSelectCheckboxProp = { key: '_canSelect', value: true }
//   return (
//     <Table
//       totalCounts={10}
//       data={data}
//       columns={columns}
//       canPaginate={false}
//       uniqueKey={'uid'}
//       isRowSelect={true}
//       dataType={{ singular: 'item', plural: 'items' }}
//       onRowSelectProp={onRowSelectProp}
//       rowSelectCheckboxProp={rowSelectCheckboxProp}
//     />
//   )
// }

// const TableWithPagination = () => {
//   const columns = [
//     {
//       Header: 'Title',
//       accessor: 'title',
//       default: true,
//       addToColumnSelector: true,
//     },
//     {
//       Header: 'Unique UID',
//       accessor: 'uuid',
//       default: false,
//       addToColumnSelector: true,
//     },
//     {
//       Header: 'Age',
//       accessor: 'age',
//       default: true,
//       addToColumnSelector: true,
//     },
//     {
//       Header: 'Status',
//       accessor: 'status',
//       default: false,
//       disableSortBy: true,
//       addToColumnSelector: true,
//     },
//   ]

//   const [data, setData] = React.useState([])
//   const [pageCount, setPageCount] = React.useState(0)
//   const fetchIdRef = React.useRef(0)

//   const fetchData = React.useCallback(({ pageSize, pageIndex, sortBy }) => {
//     const fetchId = ++fetchIdRef.current

//     setTimeout(() => {
//       if (fetchId === fetchIdRef.current) {
//         const startRow = pageSize * pageIndex
//         const endRow = startRow + pageSize

//         let DataPerPage = serverData.slice(startRow, endRow)

//         if (sortBy) {
//           const { sortingDirection, id } = sortBy
//           DataPerPage = orderBy(DataPerPage, [id], [sortingDirection])
//         }

//         setData(DataPerPage)

//         setPageCount(Math.ceil(serverData.length / pageSize))
//       }
//     }, 400)
//   }, [])

//   const onRowSelectProp = [
//     {
//       label: 'Log selected Items',
//       cb: function (data) {
//         console.log('selected data', data)
//       },
//     },
//   ]

//   return (
//     <Table
//       data={data}
//       columns={columns}
//       pageCount={pageCount}
//       fetchTableData={fetchData}
//       uniqueKey={'uid'}
//       isRowSelect={true}
//       onRowSelectProp={onRowSelectProp}
//       dataType={{ singular: 'item', plural: 'items' }}
//       totalCounts={1000}
//       // initialSortBy={[{ id: 'title', desc: true }]}
//     />
//   )
// }


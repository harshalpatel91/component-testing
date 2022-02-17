import React, { useState } from 'react';
import { AssetCardVertical, Carousel, Button } from '@contentstack/venus-components'

const items = [
  {
    index: 1,
    id: 'item1',
    component: (
      <AssetCardVertical
        title="Sample Image 1"
        type="image"
        size={50000}
        height="300"
        width="300"
        url={'https://via.placeholder.com/300x300'}></AssetCardVertical>
    )
  },
  {
    index: 2,
    id: 'item2',
    component: (
      <AssetCardVertical
        title="Sample Image 2"
        type="image"
        size={50000}
        height="300"
        width="300"
        url={'https://via.placeholder.com/300x300'}></AssetCardVertical>
    )
  },
  {
    index: 3,
    id: 'item3',
    component: (
      <AssetCardVertical
        title="Sample Image 3"
        type="image"
        size={50000}
        height="300"
        width="300"
        url={'https://via.placeholder.com/300x300'}></AssetCardVertical>
    )
  },
  {
    index: 4,
    id: 'item4',
    component: (
      <AssetCardVertical
        title="Sample Image 4"
        type="image"
        size={50000}
        height="300"
        width="300"
        url={'https://via.placeholder.com/300x300'}></AssetCardVertical>
    )
  },
  {
    index: 5,
    id: 'item5',
    component: (
      <AssetCardVertical
        title="Sample Image 5"
        type="image"
        size={50000}
        height="300"
        width="300"
        url={'https://via.placeholder.com/300x300'}></AssetCardVertical>
    )
  },
  {
    index: 6,
    id: 'item6',
    component: (
      <AssetCardVertical
        title="Sample Image 6"
        type="image"
        size={50000}
        height="300"
        width="300"
        url={'https://via.placeholder.com/300x300'}></AssetCardVertical>
    )
  },
  {
    index: 7,
    id: 'item7',
    component: (
      <AssetCardVertical
        title="Sample Image 7"
        type="image"
        size={50000}
        height="300"
        width="300"
        url={'https://via.placeholder.com/300x300'}></AssetCardVertical>
    )
  }
]

const items3 = [
  {
    index: 8,
    id: 'item8',
    component: (
      <AssetCardVertical
        title="Sample Image 8"
        type="image"
        size={50000}
        height="300"
        width="300"
        url={'https://via.placeholder.com/300x300'}></AssetCardVertical>
    )
  },
  {
    index: 9,
    id: 'item9',
    component: (
      <AssetCardVertical
        title="Sample Image 9"
        type="image"
        size={50000}
        height="300"
        width="300"
        url={'https://via.placeholder.com/300x300'}></AssetCardVertical>
    )
  },
  {
    index: 10,
    id: 'item10',
    component: (
      <AssetCardVertical
        title="Sample Image 10"
        type="image"
        size={50000}
        height="300"
        width="300"
        url={'https://via.placeholder.com/300x300'}></AssetCardVertical>
    )
  },
  {
    index: 11,
    id: 'item11',
    component: (
      <AssetCardVertical
        title="Sample Image 11"
        type="image"
        size={50000}
        height="300"
        width="300"
        url={'https://via.placeholder.com/300x300'}></AssetCardVertical>
    )
  },
  {
    index: 12,
    id: 'item12',
    component: (
      <AssetCardVertical
        title="Sample Image 12"
        type="image"
        size={50000}
        height="300"
        width="300"
        url={'https://via.placeholder.com/300x300'}></AssetCardVertical>
    )
  },
  {
    index: 13,
    id: 'item13',
    component: (
      <AssetCardVertical
        title="Sample Image 13"
        type="image"
        size={50000}
        height="300"
        width="300"
        url={'https://via.placeholder.com/300x300'}></AssetCardVertical>
    )
  }
]

const items5 = [
  {
    index: 1,
    id: 'item1',
    component: (
      <div style={{ width: '200px', height: '200px', marginRight: '10px', background: '#f1f1f1' }}>
        <img src="https://via.placeholder.com/200x200" style={{ width: '100%', height: '100%' }} alt="img"></img>
        <p style={{ textAlign: 'center', marginTop: '10px', fontSize: '14px', color: '#6c5ce7', fontWeight: 500 }}>
          200*200
        </p>
      </div>
    )
  },
  {
    index: 2,
    id: 'item2',
    component: (
      <div style={{ width: '150px', height: '200px', marginRight: '10px', background: '#f1f1f1' }}>
        <img src="https://via.placeholder.com/150x200" style={{ width: '100%', height: '100%' }} alt="img"></img>

        <p style={{ textAlign: 'center', marginTop: '10px', fontSize: '14px', color: '#6c5ce7', fontWeight: 500 }}>
          150*200
        </p>
      </div>
    )
  },
  {
    index: 3,
    id: 'item3',
    component: (
      <div style={{ width: '250px', height: '200px', marginRight: '10px', background: '#f1f1f1' }}>
        <img src="https://via.placeholder.com/250x200" style={{ width: '100%', height: '100%' }} alt="img"></img>

        <p style={{ textAlign: 'center', marginTop: '10px', fontSize: '14px', color: '#6c5ce7', fontWeight: 500 }}>
          250*200
        </p>
      </div>
    )
  },
  {
    index: 4,
    id: 'item4',
    component: (
      <div style={{ width: '200px', height: '200px', marginRight: '10px', background: '#f1f1f1' }}>
        <img src="https://via.placeholder.com/200x200" style={{ width: '100%', height: '100%' }} alt="img"></img>

        <p style={{ textAlign: 'center', marginTop: '10px', fontSize: '14px', color: '#6c5ce7', fontWeight: 500 }}>
          200*200
        </p>
      </div>
    )
  },
  {
    index: 5,
    id: 'item5',
    component: (
      <div style={{ width: '300px', height: '200px', marginRight: '10px', background: '#f1f1f1' }}>
        <img src="https://via.placeholder.com/300x200" style={{ width: '100%', height: '100%' }} alt="img"></img>

        <p style={{ textAlign: 'center', marginTop: '10px', fontSize: '14px', color: '#6c5ce7', fontWeight: 500 }}>
          300*200
        </p>
      </div>
    )
  },
  {
    index: 6,
    id: 'item6',
    component: (
      <div style={{ width: '100px', height: '200px', marginRight: '10px', background: '#f1f1f1' }}>
        <img src="https://via.placeholder.com/100x200" style={{ width: '100%', height: '100%' }} alt="img"></img>

        <p style={{ textAlign: 'center', marginTop: '10px', fontSize: '14px', color: '#6c5ce7', fontWeight: 500 }}>
          100*200
        </p>
      </div>
    )
  },
  {
    index: 7,
    id: 'item7',
    component: (
      <div style={{ width: '200', height: '200px', marginRight: '10px', background: '#f1f1f1' }}>
        <img src="https://via.placeholder.com/200x200" style={{ width: '100%', height: '100%' }} alt="img"></img>

        <p style={{ textAlign: 'center', marginTop: '10px', fontSize: '14px', color: '#6c5ce7', fontWeight: 500 }}>
          200*200
        </p>
      </div>
    )
  }
]

const AsyncSingleItem = [
  {
    index: 1,
    id: 'item1',
    component: (
      <AssetCardVertical
        title="Sample Image 1"
        type="image"
        size={50000}
        height="300"
        width="300"
        url={'https://via.placeholder.com/300x300'}></AssetCardVertical>
    )
  }
]

const CarouselComponent = () => {

  const [item, setItem] = useState(items3)
  const [count, setCount] = useState(6);

  const addSlideHandler = () => {
    setCount(item.length + 1)
    setItem(item.concat(AsyncSingleItem))
  }

  return (
    <>
      <div>
        <div style={{marginBottom: "15px"}}>
          Default Carousel
        </div>
        <div style={{ width: '720px' }}>
          <Carousel
            type={'card'}
            itemCount={7}
            items={items}
            disableDragDrop={false}
          />
        </div>
      </div>

      <div style={{marginTop: '30px'}}>
        <div style={{marginBottom: "15px"}}>
          Disable Drag Drop Item
        </div>
        <div style={{ width: '720px' }}>
        <Carousel type={'card'} itemCount={7} items={items} disableDragDrop={true} />
        </div>
      </div>

      <div style={{marginTop: '30px'}}>
        <div style={{marginBottom: "15px"}}>
          Async Add
        </div>
        <Button onClick={addSlideHandler} buttonType={'primary'}>
        {' '}
        + Add Slide
      </Button>
      <div style={{ width: '720px', marginTop: '30px' }}>
        <Carousel itemCount={count} items={item} disableDragDrop={false} />
      </div>
      </div>

      <div style={{marginTop: '30px'}}>
        <div style={{marginBottom: "15px"}}>
          Custom Item Width
        </div>
        <div style={{ width: '720px' }}>
        <Carousel type={'card'} itemCount={7} items={items5} disableDragDrop={false} />
        </div>
      </div>
    </>
  )
}

export default CarouselComponent
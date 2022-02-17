import React, { useState, useEffect } from 'react';
import { AssetCardVertical, Icon } from '@contentstack/venus-components';

import img from '../sample.jpg'

const AssetCardVerticalComponent = () => {
  const [check, setCheck] = useState(false);

  const [percentage, setPercentage] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage(_counter => {
        // Random number between 5 and 10
        const randNumber = Math.floor(Math.random() * 16 + 5)
        const adder = _counter + randNumber > 100 ? 100 - _counter : randNumber
        return _counter + adder
      })
    }, 500)

    if (percentage >= 100) {
      clearInterval(interval)
    }

    return () => {
      clearInterval(interval)
    }
  }, [percentage])

  const handleClick = () => {
    alert('This is card Clicked')
  }

  const onChecked = () => {
    console.log('This is onChecked')
    setCheck(!check)
  }

  const handleEditClick = () => {
    alert('This is Edit clicked')
  }

  const handleDeleteClick = () => {
    alert('This is delete clicked')
  }

  const handleFullScreenClick = () => {
    alert('This is fullscreen clicked')
  }

  const handleActionClick = () => {
    alert('This is action clicked')
  }
  const customActions = [
    {
      actionTitle: "Preview",
      actionIcon: <Icon icon="View" />,
      actionOnClick: handleActionClick
    },
    {
      actionTitle: "Delete",
      actionIcon: <Icon icon="Webhooks" />,
      actionOnClick: handleActionClick
    },
    {
      actionTitle: "Preview",
      actionIcon: <Icon icon="View" />,
      actionOnClick: handleActionClick
    },
    {
      actionTitle: "Delete",
      actionIcon: <Icon icon="Webhooks" />,
      actionOnClick: handleActionClick
    }

  ]

  return (
    <>
      <div>
        <div style={{marginBottom: "15px"}}>
          Default Carousel
        </div>
        <div style={{ display: 'flex' }}>
        <AssetCardVertical
          onChecked={onChecked}
          checked={check}
          onEditClick={handleEditClick}
          onFullScreenClick={handleFullScreenClick}
          onDeleteClick={handleDeleteClick}
          onCardClick={handleClick}
          title={'Sample Image'}
          assetType={'image'}
          size={500000}
          height={300}
          width={300}
          assetUrl={img}
          hoverText={'Hovering'}
        />
        </div>
      </div>

      <div>
        <div style={{marginBottom: "15px"}}>
          Asset Card With Radio
        </div>
        <div style={{ display: 'flex' }}>
        <AssetCardVertical
          onChecked={onChecked}
          checked={check}
          onEditClick={handleEditClick}
          onFullScreenClick={handleFullScreenClick}
          onDeleteClick={handleDeleteClick}
          onCardClick={handleClick}
          title={'Sample Image'}
          assetType={'image'}
          isRadio={true}
          size={500000}
          height={300}
          width={300}
          assetUrl={img}
          hoverText={'Hovering'}
        />
        </div>
      </div>

      <div>
        <div style={{marginBottom: "15px"}}>
          Asset Card Disabled
        </div>
        <div style={{ display: 'flex' }}>
        <AssetCardVertical
          onChecked={onChecked}
          checked={check}
          onEditClick={handleEditClick}
          onFullScreenClick={handleFullScreenClick}
          onDeleteClick={handleDeleteClick}
          onCardClick={handleClick}
          title={'Sample Image'}
          assetType={'image'}
          isCardDisabled={true}
          size={500000}
          height={300}
          width={300}
          assetUrl={img}
          hoverText={'Hovering'}
        />
        </div>
      </div>

      <div>
        <div style={{marginBottom: "15px"}}>
          Default checked
        </div>
        <div style={{ display: 'flex' }}>
        <AssetCardVertical
          onChecked={()=>{}}
          checked={true}
          onEditClick={handleEditClick}
          onFullScreenClick={handleFullScreenClick}
          onDeleteClick={handleDeleteClick}
          onCardClick={handleClick}
          title={'Sample Image'}
          assetType={'image'}
          size={500000}
          height={300}
          width={300}
          assetUrl={img}
          hoverText={'Hovering'}
        />
        </div>
      </div>

      <div>
        <div style={{marginBottom: "15px"}}>
          Without Actions
        </div>
        <div style={{ display: 'flex' }}>
        <AssetCardVertical
          title={'Sample Image'}
          assetType={'image'}
          size={500000}
          height={300}
          width={300}
          assetUrl={img}
        />
        </div>
      </div>

      <div>
        <div style={{marginBottom: "15px"}}>
          Without Dimensions
        </div>
        <div style={{ display: 'flex' }}>
        <AssetCardVertical
          title={'Sample Image'}
          assetType={'image'}
          size={500000}
          assetUrl={img}
        />
        </div>
      </div>

      <div>
        <div style={{marginBottom: "15px"}}>
          With progress Bar
        </div>
        <div style={{ display: 'flex' }}>
        <AssetCardVertical
          title={'Sample Image'}
          assetType={'image'}
          size={500000}
          assetUrl={img}
          progressBar={percentage}
        />
        </div>
      </div>

      <div>
        <div style={{marginBottom: "15px"}}>
          Failed Progress
        </div>
        <div style={{ display: 'flex' }}>
        <AssetCardVertical
          title={'Sample Image'}
          assetType={'image'}
          size={500000}
          assetUrl={img}
          progressBar={-1}
        />
        </div>
      </div>

      <div>
        <div style={{marginBottom: "15px"}}>
          Custom Actions
        </div>
        <div style={{ display: 'flex' }}>
        <AssetCardVertical
          title={'Sample Image'}
          assetType={'image'}
          size={500000}
          assetUrl={img}
          actions={customActions}
        />
        </div>
      </div>

      <div>
        <div style={{marginBottom: "15px"}}>
          All Cards
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <div>
            <AssetCardVertical
              onChecked={onChecked}
              checked={check}
              onEditClick={handleEditClick}
              onFullScreenClick={handleFullScreenClick}
              onDeleteClick={handleDeleteClick}
              onCardClick={handleClick}
              title={'Image'}
              assetType={'image'}
              size={500000}
              height={300}
              width={300}
              assetUrl={img}
              hoverText={'Hovering'}
            />
          </div>

          <div>
            <AssetCardVertical
              onChecked={onChecked}
              checked={check}
              onEditClick={handleEditClick}
              onFullScreenClick={handleFullScreenClick}
              onDeleteClick={handleDeleteClick}
              onCardClick={handleClick}
              title={'Folder'}
              assetType={'folder'}
              size={500000}
              height={300}
              width={300}
              assetUrl={img}
              hoverText={'Hovering'}
            />
          </div>

          <div>
            <AssetCardVertical
              onChecked={onChecked}
              checked={check}
              onEditClick={handleEditClick}
              onFullScreenClick={handleFullScreenClick}
              onDeleteClick={handleDeleteClick}
              onCardClick={handleClick}
              title={'Code'}
              assetType={'code'}
              size={500000}
              height={300}
              width={300}
              assetUrl={img}
              hoverText={'Hovering'}
            />
          </div>

          <div>
            <AssetCardVertical
              onChecked={onChecked}
              checked={check}
              onEditClick={handleEditClick}
              onFullScreenClick={handleFullScreenClick}
              onDeleteClick={handleDeleteClick}
              onCardClick={handleClick}
              title={'PDF'}
              assetType={'pdf'}
              size={500000}
              height={300}
              width={300}
              assetUrl={img}
              hoverText={'Hovering'}
            />
          </div>

          <div>
            <AssetCardVertical
              onChecked={onChecked}
              checked={check}
              onEditClick={handleEditClick}
              onFullScreenClick={handleFullScreenClick}
              onDeleteClick={handleDeleteClick}
              onCardClick={handleClick}
              title={'Excel'}
              assetType={'excel'}
              size={500000}
              height={300}
              width={300}
              assetUrl={img}
              hoverText={'Hovering'}
            />
          </div>

          <div>
            <AssetCardVertical
              onChecked={onChecked}
              checked={check}
              onEditClick={handleEditClick}
              onFullScreenClick={handleFullScreenClick}
              onDeleteClick={handleDeleteClick}
              onCardClick={handleClick}
              title={'Presentation'}
              assetType={'presentation'}
              size={500000}
              height={300}
              width={300}
              assetUrl={img}
              hoverText={'Hovering'}
            />
          </div>

          <div>
            <AssetCardVertical
              onChecked={onChecked}
              checked={check}
              onEditClick={handleEditClick}
              onFullScreenClick={handleFullScreenClick}
              onDeleteClick={handleDeleteClick}
              onCardClick={handleClick}
              title={'Document'}
              assetType={'document'}
              size={500000}
              height={300}
              width={300}
              assetUrl={img}
              hoverText={'Hovering'}
            />
          </div>

          <div>
            <AssetCardVertical
              onChecked={onChecked}
              checked={check}
              onEditClick={handleEditClick}
              onFullScreenClick={handleFullScreenClick}
              onDeleteClick={handleDeleteClick}
              onCardClick={handleClick}
              title={'JSON'}
              assetType={'json'}
              size={500000}
              height={300}
              width={300}
              assetUrl={img}
              hoverText={'Hovering'}
            />
          </div>

          <div>
            <AssetCardVertical
              onChecked={onChecked}
              checked={check}
              onEditClick={handleEditClick}
              onFullScreenClick={handleFullScreenClick}
              onDeleteClick={handleDeleteClick}
              onCardClick={handleClick}
              title={'Text/Plain'}
              assetType={'text/plain'}
              size={500000}
              height={300}
              width={300}
              assetUrl={img}
              hoverText={'Hovering'}
            />
          </div>

          <div>
            <AssetCardVertical
              onChecked={onChecked}
              checked={check}
              onEditClick={handleEditClick}
              onFullScreenClick={handleFullScreenClick}
              onDeleteClick={handleDeleteClick}
              onCardClick={handleClick}
              title={'Zip'}
              assetType={'zip'}
              size={500000}
              height={300}
              width={300}
              assetUrl={img}
              hoverText={'Hovering'}
            />
          </div>

          <div>
            <AssetCardVertical
              onChecked={onChecked}
              checked={check}
              onEditClick={handleEditClick}
              onFullScreenClick={handleFullScreenClick}
              onDeleteClick={handleDeleteClick}
              onCardClick={handleClick}
              title={'Video'}
              assetType={'video'}
              size={500000}
              height={300}
              width={300}
              assetUrl={img}
              hoverText={'Hovering'}
            />
          </div>

          <div>
            <AssetCardVertical
              onChecked={onChecked}
              checked={check}
              onEditClick={handleEditClick}
              onFullScreenClick={handleFullScreenClick}
              onDeleteClick={handleDeleteClick}
              onCardClick={handleClick}
              title={'Audio'}
              assetType={'audion'}
              size={500000}
              height={300}
              width={300}
              assetUrl={img}
              hoverText={'Hovering'}
            />
          </div>

          <div>
            <AssetCardVertical
              onChecked={onChecked}
              checked={check}
              onEditClick={handleEditClick}
              onFullScreenClick={handleFullScreenClick}
              onDeleteClick={handleDeleteClick}
              onCardClick={handleClick}
              title={'Image Broken'}
              assetType={'imageBroken'}
              size={500000}
              height={300}
              width={300}
              assetUrl={img}
              hoverText={'Hovering'}
            />
          </div>

          <div>
            <AssetCardVertical
              onChecked={onChecked}
              checked={check}
              onEditClick={handleEditClick}
              onFullScreenClick={handleFullScreenClick}
              onDeleteClick={handleDeleteClick}
              onCardClick={handleClick}
              title={'Image/TIFF'}
              assetType={'image/tiff'}
              size={500000}
              height={300}
              width={300}
              assetUrl={img}
              hoverText={'Hovering'}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default AssetCardVerticalComponent
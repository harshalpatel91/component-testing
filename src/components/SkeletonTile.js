import React, { useState } from 'react';
import { SkeletonTile } from '@contentstack/venus-components';


const SkeletonTileComponent = () => {
    const Default = () => {
        let arg = { numberOfTiles: 1, tileHeight: 15, tileWidth: 200, tileBottomSpace: 7, tileTopSpace: 0, tileleftSpace: 0, tileRadius: 0 }
        return (
          <SkeletonTile
            numberOfTiles={arg.numberOfTiles}
            tileHeight={arg.tileHeight}
            tileWidth={arg.tileWidth}
            tileBottomSpace={arg.tileBottomSpace}
            tileTopSpace={arg.tileTopSpace}
            tileleftSpace={arg.tileleftSpace}
            tileRadius={arg.tileRadius}
          />
        )
    }

    const CustomSkeleton = (arg) => {
        return (
          <div>
            <div>
              <SkeletonTile
                numberOfTiles={1}
                tileHeight={15}
                tileWidth={305}
                tileBottomSpace={7}
                tileTopSpace={5}
                tileleftSpace={5}
              />
            </div>
            <div className="flex">
              <SkeletonTile
                numberOfTiles={1}
                tileHeight={90}
                tileWidth={100}
                tileBottomSpace={10}
                tileTopSpace={0}
                tileleftSpace={5}
              />
              <SkeletonTile
                numberOfTiles={4}
                tileHeight={15}
                tileWidth={200}
                tileBottomSpace={10}
                tileTopSpace={0}
                tileleftSpace={5}
              />
            </div>
          </div>
        )
    }

    const ImageSkeleton = (arg) => {
        return (
          <SkeletonTile
            numberOfTiles={1}
            tileHeight={300}
            tileWidth={300}
            tileBottomSpace={0}
            tileTopSpace={10}
            tileleftSpace={10}
            tileRadius={10}
          />
        )
    }

    return(
        <div>
            <div style={{marginBottom: "15px", marginTop: '30px' }}>
            <div >Default</div>
            <Default />
            </div>
            <div style={{marginBottom: "15px", marginTop: '30px' }}>
            <div>CustomSkeleton</div>
            <CustomSkeleton />
            </div>
            <div style={{marginBottom: "15px", marginTop: '30px' }}>
            <div>ImageSkeleton</div>
            <ImageSkeleton />
            </div>
        </div>
    )

}

export default SkeletonTileComponent

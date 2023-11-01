import React from 'react';
import * as M from './MapStyle';

export default function MapWrapper() {
  return (
    <>
      <M.Title>WISCOM MAP</M.Title>
      <M.Floorplan>
        <M.RoomR style={{ top: '10px', left: '100px' }}>01</M.RoomR>
        <M.Room style={{ top: '100px', left: '10px' }}>02</M.Room>
        <M.Room style={{ top: '100px', left: '90px' }}>03</M.Room>
        <M.Room style={{ top: '100px', left: '150px' }}>04</M.Room>
        <M.Room style={{ top: '190px', left: '150px' }}>05</M.Room>
        <M.Room style={{ top: '190px', left: '90px' }}>06</M.Room>
        <M.Room style={{ top: '280px', left: '10px' }}>07</M.Room>
        <M.Room style={{ top: '280px', left: '90px' }}>08</M.Room>
        <M.RoomR style={{ top: '280px', left: '150px' }}>10</M.RoomR>
        <M.RoomR style={{ bottom: '10px', left: '30px' }}>09</M.RoomR>
        <M.RoomR style={{ bottom: '10px', left: '125px' }}>11</M.RoomR>

        <M.Door />

        <M.LineContainer>
          <M.Line />
          <M.Line />
        </M.LineContainer>

        <M.Info>Info</M.Info>
      </M.Floorplan>
    </>
  );
}

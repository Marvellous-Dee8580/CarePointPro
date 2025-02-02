import * as React from 'react';

function MapMarker({ name, isSelected }) {
  return (
    <div className="flex flex-col leading-3 text-center">
      <div className="flex self-center min-h-[25px] w-[25px]" />
      <div className={isSelected ? 'text-green-900' : 'text-black'}>
        {name.includes('Royal') ? (
          <>
            De Royal Treat
            <br />
            Pharmacy
          </>
        ) : (
          name
        )}
      </div>
    </div>
  );
}

export default MapMarker;
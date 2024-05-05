import React, { useState } from 'react';
import ImagePanel from './imagePanel';
import FloorPlanForm from './floorPlanForm';

const App = () => {
  const [floorPlanData, setFloorPlanData] = useState({
    image: null,
    name: '',
    interiorSize: '',
    exteriorSize: '',
    exteriorType: '',
    facingDirections: [],
    floorType: '',
  });

  const handleImageChange = (image) => {
    setFloorPlanData({ ...floorPlanData, image });
  };

  const handleSave = () => {
    // Crop the image based on safe zone
    // Submit floor plan data to backend
  };

  return (
    <>
    <div style={{ textAlign: 'left', marginBottom: '20px' }}>
        <h1>Adjust Floor Plans</h1>
      </div>
    <div style={{ display: 'flex' }}>
      
      
      <div style={{ flex: 1, paddingRight: '20px' }}>
        <ImagePanel 
          image={floorPlanData.image} 
          onImageChange={(image) => setFloorPlanData({ ...floorPlanData, image })}
          onSave={handleSave} 
        />
      </div>
      <div style={{ flex: 1 }}>
        <FloorPlanForm 
          data={floorPlanData} 
          onDataChange={(newData) => setFloorPlanData(newData)} 
        />
      </div>
    </div>
    </>
  );
};

export default App;

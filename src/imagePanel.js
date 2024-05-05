import React, { useState, useRef } from 'react';
import { useDropzone } from 'react-dropzone';
import Draggable from 'react-draggable';

const ImagePanel = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [rotation, setRotation] = useState(0);
  const imageRef = useRef(null);

  const handleFileUpload = (acceptedFiles) => {
    const file = acceptedFiles[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  const handleZoomChange = (event) => {
    setZoomLevel(parseFloat(event.target.value));
    if (imageRef.current) {
      imageRef.current.style.transform = `scale(${event.target.value}) rotate(${rotation}deg)`;
    }
  };

  const handleRotate = () => {
    setRotation((rotation + 90) % 360);
    if (imageRef.current) {
      imageRef.current.style.transform = `scale(${zoomLevel}) rotate(${rotation + 90}deg)`;
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ marginBottom: '20px' }}>
        <input type="file" accept="image/*" onChange={(e) => handleFileUpload(e.target.files)} />
      </div>
      <div
        style={{
          width: '500px', // Set your desired zone width
          height: '300px', // Set your desired zone height
          border: '2px dashed black',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {selectedImage && (
          <Draggable >
            <img
              ref={imageRef}
              src={selectedImage}
              alt="Uploaded"
              style={{
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                transformOrigin: 'center',
              }}
              
            />
          </Draggable>
        )}
      </div>
      {selectedImage && (
        <div style={{ marginTop: '20px' }}>
          <label htmlFor="zoom">Zoom:</label>
          <input
            type="range"
            id="zoom"
            name="zoom"
            min="0.1"
            max="3"
            step="0.1"
            value={zoomLevel}
            onChange={handleZoomChange}
          />
          <button onClick={handleRotate}>Rotate</button>
        </div>
      )}
    </div>
  );
};

export default ImagePanel;

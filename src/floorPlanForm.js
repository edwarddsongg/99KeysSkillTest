import React from 'react';

const FloorPlanForm = ({ data, onDataChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onDataChange({ ...data, [name]: value });
  };

  const handleFacingDirectionChange = (e) => {
    const { value } = e.target;
    const updatedDirections = [...data.facingDirections];
    if (updatedDirections.includes(value)) {
      updatedDirections.splice(updatedDirections.indexOf(value), 1);
    } else {
      updatedDirections.push(value);
    }
    onDataChange({ ...data, facingDirections: updatedDirections });
  };

  return (
    <div>
      <div>
        <div>
          <label htmlFor="name">Floor Name</label>
        </div>
        <div>
          <input
            type="text"
            id="name"
            name="name"
            value={data.name}
            onChange={handleChange}
          />
        </div>
      </div>
      <div>
        <div>
          <label htmlFor="interiorSize">Interior Size</label>
        </div>
        <div>
          <input
            type="text"
            id="interiorSize"
            name="interiorSize"
            value={data.interiorSize}
            onChange={handleChange}
          />
        </div>
      </div>
      <div>
        <div>
          <label htmlFor="exteriorSize">Exterior Size</label>
        </div>
        <div>
          <input
            type="text"
            id="exteriorSize"
            name="exteriorSize"
            value={data.exteriorSize}
            onChange={handleChange}
          />
        </div>
      </div>
      <div>
        <div>
          <label htmlFor="exteriorType">Exterior Type</label>
        </div>
        <div>
          <select
            id="exteriorType"
            name="exteriorType"
            value={data.exteriorType}
            onChange={handleChange}
          >
            <option value="">Select </option>
            <option value="balcony">Balcony</option>
          </select>
        </div>
      </div>
      <div>
        <div>
          <label htmlFor="direction">Facing Direction</label>
        </div>
        <div>
          <select
            id="direction"
            name="direction"
            value={data.direction}
            onChange={handleFacingDirectionChange}
          >
            <option value="">Select </option>
            <option value="North">North</option>
            <option value="East">East</option>
            <option value="South">South</option>
            <option value="West">West</option>
          </select>
        </div>
      </div>
      <div>
        <div>
          <label htmlFor="floorType">Floor Type</label>
        </div>
        <div>
          <select
            id="floorType"
            name="floorType"
            value={data.floorType}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="Studio">Studio</option>
            <option value="One Bed One Bath">One Bed One Bath</option>
            <option value="Two Bed One Bath">Two Bed One Bath</option>
            <option value="Three Bed 2 Bath">Three Bed 2 Bath</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FloorPlanForm;

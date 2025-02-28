import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
interface PuppyResponse {
  message: string[];
  status: string;
}

function PuppyShow() {
  const [puppyShow, setPuppyShow] = useState<string[]>([]);

  const fetchPuppyShow = async () => {
    try {
      const response = await axios.get<PuppyResponse>('https://dog.ceo/api/breeds/image/random/5');
      setPuppyShow(response.data.message);
    } catch (error) {
      console.error('Error fetching puppy show:', error);
    }
  };

  useEffect(() => {
    fetchPuppyShow();
  }, []);

  return (
    <div className="puppy-show-container">
      <h2 className="show-title">🐶 Adorable Puppy Show</h2>
      <p className="show-description">Here are some of the cutest puppies just for you!</p>
      <div className="puppy-grid">
        {puppyShow.map((imageUrl, index) => (
          <div className="puppy-card" key={index}>
            <img 
              src={imageUrl} 
              alt={`Puppy ${index + 1}`} 
              className="puppy-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PuppyShow;

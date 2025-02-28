import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
// This is to satisfy TypeScript's requirement for React
const _ = React; // Use React to avoid the unused import warning

interface PuppyResponse {
  message: string;
  status: string;
}

function PuppyShow() {
  const [puppyImage, setPuppyImage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [cooldown, setCooldown] = useState<boolean>(false);
  const COOLDOWN_TIME = 500; // milliseconds (0.5 seconds)

  const fetchPuppyImage = useCallback(async () => {
    if (isLoading || cooldown) return;
    setIsLoading(true);
    setCooldown(true);

    try {
      const response = await axios.get<PuppyResponse>('https://dog.ceo/api/breeds/image/random');
      setPuppyImage(response.data.message);
    } catch (error) {
      console.error('Error fetching puppy image:', error);
    }

    setIsLoading(false);
    setTimeout(() => {
      setCooldown(false);
    }, COOLDOWN_TIME);
  }, [isLoading, cooldown]);

  useEffect(() => {
    fetchPuppyImage();
  }, [fetchPuppyImage]);

  return (
    <div className="show-container">
      <h1 className="show-title">🐾 Welcome to Puppy Haven!</h1>
      <p className="show-description">Click the button below to unveil a cute puppy!</p>
      <button 
        className={`fetch-button ${isLoading || cooldown ? 'disabled' : ''}`}
        onClick={fetchPuppyImage}
        disabled={isLoading || cooldown}
      >
        {isLoading ? 'Loading...' : 'Fetch a Puppy!'}
      </button>

      {puppyImage && (
        <div className="image-wrapper">
          <img 
            src={puppyImage} 
            alt="Random puppy" 
            className="puppy-image"
          />
        </div>
      )}
    </div>
  );
}

export default PuppyShow; 
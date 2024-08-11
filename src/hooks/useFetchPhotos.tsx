//useFetchPhotos.tsx
import { useState, useEffect } from 'react';
import { fetchPhotos } from '../utils/api';

const useFetchPhotos = () => {
  const [photos, setPhotos] = useState<string[]>([]);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const updatePhotos = async () => {
      const newPhotos = await fetchPhotos();
      setPhotos(newPhotos); 
    };

    updatePhotos();
    const interval = setInterval(() => {
      updatePhotos();
      setTimer((prevTimer) => prevTimer + 1); // Update the timer
    }, 10000);

    return () => clearInterval(interval);
  }, [timer]);

  return photos;
};

export default useFetchPhotos;

// api.tsx
export const fetchPhotos = async (): Promise<string[]> => {
  console.log('Fetching Photos');
  const randomQuery = Math.random().toString(36).substr(2, 5); // Generate a random query term
  const response = await fetch(`https://pixabay.com/api/?key=45385556-fb5e9060a1ce74c9a7e9d45b2&q=${randomQuery}&orientation=horizontal&per_page=9`);
 const data = await response.json();
  console.log('Fetched Photos');
  return data.hits.map((image: any) => image.webformatURL);
};
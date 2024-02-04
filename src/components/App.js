// create your App component here
import React, { useState, useEffect } from 'react';

const App = () => {
  // State to store the dog image URL
  const [dogImage, setDogImage] = useState(null);
  // State to track loading status
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        // Fetching data from the API
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();

        // Updating state with the dog image URL
        setDogImage(data.message);
        // Setting loading to false as data has been received
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        // In case of an error, you may want to handle it appropriately
        setLoading(false);
      }
    };

    // Calling the fetchData function when the component mounts
    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once (on mount)

  return (
    <div>
      {/* Display "Loading..." while data is being fetched */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        // Display the dog image once data is received
        <img src={dogImage} alt="A Random Dog" />
      )}
    </div>
  );
};

export default App;

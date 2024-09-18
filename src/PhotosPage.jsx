import axios from "axios";
import { useState, useEffect } from "react";
import { PhotosIndex } from "./PhotosIndex";

export function PhotosPage() {
  const [photos, setPhotos] = useState([]);

  const handleIndex = () => {
    axios.get("http://localhost:3000/photos.json").then((response) => {
      setPhotos(response.data);
    });
  };

  useEffect(handleIndex, []);

  return (
    <main>
      <PhotosIndex photos={photos} />
    </main>
  );
}

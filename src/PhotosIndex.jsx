export function PhotosIndex({ photos }) {
  return (
    <div>
      <h1>All photos ({photos.length} total)</h1>
      {photos.map((photo) => (
        <div key={photo.id}>
          <h2>{photo.name}</h2>
        </div>
      ))}
    </div>
  );
}

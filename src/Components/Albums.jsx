const albums = [
  {
    title: "Oopsie Dasie",
    author: "Flowers",
    year: 1999,
    songs: [
      { name: "Flower 01", length: "3:33" },
      { name: "Flower 02", length: "4:44" },
      { name: "Flower 03", length: "5:55" },
    ],
  },
  {
    title: "Oopsie Dasie",
    author: "Flowers",
    year: 1999,
    songs: [
      { name: "Flower 01", length: "3:33" },
      { name: "Flower 02", length: "4:44" },
      { name: "Flower 03", length: "5:55" },
    ],
  },
];

const Albums = () => {
  return (
    <>
      <h2>Albums</h2>
      <ul>
        {albums.map(({ author, title, year, songs }, idx) => {
          return (
            <li key={idx}>
              <h3>
                {author} - {title} ({year})
              </h3>
              <ul>
                {songs.map(({ name, length }, idx2) => (
                  <li key={idx2}>
                    {name} {length}
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Albums;

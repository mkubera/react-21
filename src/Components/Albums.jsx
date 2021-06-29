import React, { useState, useEffect } from "react";

const albumsData = [
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

const Albums = ({ url }) => {
  const [quote, setQuote] = useState("");
  const [albums, setAlbums] = useState(albumsData);

  useEffect(() => {
    console.log("useFx");
    // document.title = albums[0].title;
    // const fetchQuote = () => {
    //   fetch("https://api.chucknorris.io/jokes/random")
    //     .then((d) => d.json())
    //     .then((d) => setQuote(d.value))
    //     .catch((err) => console.log(err));
    // };
    const fetchQuote = async () => {
      const response = await fetch(url);
      const data = await response.json();
      const newQuote = await data.value;
      setQuote(newQuote);
    };

    fetchQuote();
    // return function cleanup() {};
  }, [url]);

  const addAlbum = () => {
    const newAlbum = {
      title: "Perdition City",
      author: "Ulver",
      year: 2000,
      songs: [{ name: "Lost in moments", length: "7:13" }],
    };
    const newAlbums = [...albums, newAlbum];
    setAlbums(newAlbums);
  };

  const removeAblum = () => {
    const newAlbums = albums.filter((a, idx) => idx !== 0);
    setAlbums(newAlbums);
  };

  return (
    <>
      <h2>Albums</h2>
      <h3>{quote}</h3>
      <div>
        <button onClick={() => addAlbum()}>Add an album</button>
        <button onClick={() => removeAblum()}>Remove the first album</button>
      </div>
      <ul>
        {albums &&
          albums.map(({ author, title, year, songs }, idx) => {
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

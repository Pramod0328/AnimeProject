// AnimeList.js
import React, { Component } from "react";
import AnimeCard from "./AnimeCard";

// Complete the AnimeList Component
class AnimeList extends Component {
  render() {
    const { anime } = this.props;

    return (
      <div className="anime-list">
        {/* Map the anime list received through props and pass the details to the AnimeCard component */}
        {anime.map((animeItem, index) => (
          <AnimeCard key={index} name={animeItem.name} image={animeItem.image} />
        ))}
      </div>
    );
  }
}

export default AnimeList;

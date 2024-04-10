export const mapGenres = (genIds, genres) => {
  const genresMap = genres.reduce((result, current) => {
    result[current.id] = current.name;
    return result;
  }, {});

  return genIds.map((id) => genresMap[id]).join(", ");
};

export const formatRuntime = (runtime) => {
  const hours = Math.floor(runtime / 60) + "h";
  const minutes = Math.floor(runtime % 60) + "m";

  return `${hours} ${minutes}`;
};

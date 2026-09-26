export const mapGenres = (genIds: any[], genres: any) => {
  const genresMap = genres.reduce((result: any, current: any) => {
    result[current.id] = current.name;
    return result;
  }, {});

  return genIds.map((id) => genresMap[id]).join(", ");
};

export const formatRuntime = (runtime: any) => {
  const hours = Math.floor(runtime / 60) + "h";
  const minutes = Math.floor(runtime % 60) + "m";

  return `${hours} ${minutes}`;
};

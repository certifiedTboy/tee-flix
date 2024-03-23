export function mapGenres(genIds, genres) {
  const genresMap = genres.reduce((result, current) => {
    result[current.id] = current.name;
    return result;
  }, {});

  return genIds.map((id) => genresMap[id]).join(", ");
}

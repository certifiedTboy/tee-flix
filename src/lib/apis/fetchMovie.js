const url = "https://porn-xnxx-api.p.rapidapi.com/download";
const options = {
  method: "POST",
  headers: {
    "x-rapidapi-key": "de771f12famsh190ba848c382fd7p162731jsnfce7affb92da",
    "x-rapidapi-host": "porn-xnxx-api.p.rapidapi.com",
    "Content-Type": "application/json",
  },
  body: {
    video_link:
      "https://xnxx.com/video-wugb904/fucking_his_step_sister_lexxi_steele_in_high_definition",
  },
};

export const fetchMovies = async () => {
  try {
    const response = await fetch(url, options);

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

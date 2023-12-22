export const getMovies = () => {
  return fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
    .catch((error) => {
      throw error
    });
};

// export const getUpcomingMovies = () => {
//   return fetch(
//     `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
//   ).then((response) => {
//     if (!response.ok) {
//       throw new Error(response.json().message);
//     }
//     return response.json();
//   })
//     .catch((error) => {
//       throw error
//     });
// };
export const getUpcomingMovies = async () => {
  const response = await fetch(
    'http://localhost:8080/api/movies/tmdb/upcoming', {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  )
  return response.json();
};

// export const getTopRatedMovies = () => {
//   return fetch(
//     `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
//   ).then((response) => {
//     if (!response.ok) {
//       throw new Error(response.json().message);
//     }
//     return response.json();
//   })
//     .catch((error) => {
//       throw error
//     });
// };

export const getTopRatedMovies = async () => {
  const response = await fetch(
    'http://localhost:8080/api/movies/tmdb/top_rated', {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  )
  return response.json();
};

// export const getPopularMovies = () => {
//   return fetch(
//     `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
//   ).then((response) => {
//     if (!response.ok) {
//       throw new Error(response.json().message);
//     }
//     return response.json();
//   })
//     .catch((error) => {
//       throw error
//     });
// };
export const getPopularMovies = async () => {
  const response = await fetch(
    'http://localhost:8080/api/movies/tmdb/popular', {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  )
  return response.json();
};
// export const getNowPlayingMovies = () => {
//   return fetch(
//     `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
//   ).then((response) => {
//     if (!response.ok) {
//       throw new Error(response.json().message);
//     }
//     return response.json();
//   })
//     .catch((error) => {
//       throw error
//     });
// };
export const getNowPlayingMovies = async () => {
  const response = await fetch(
    'http://localhost:8080/api/movies/tmdb/now_playing', {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  )
  return response.json();
};

// export const getMovie = (args) => {
//   // console.log(args)
//   const [, idPart] = args.queryKey;
//   const { id } = idPart;
//   return fetch(
//     `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
//   ).then((response) => {
//     if (!response.ok) {
//       throw new Error(response.json().message);
//     }
//     return response.json();
//   })
//     .catch((error) => {
//       throw error
//     });
// };

export const getMovie = async (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  console.log("movieID", id);
  const response = await fetch(
    `http://localhost:8080/api/movies/tmdb/${id}`, {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  });

  return response.json();
};


export const getGenres = async () => {
  return fetch(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
    process.env.REACT_APP_TMDB_KEY +
    "&language=en-US"
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
    .catch((error) => {
      throw error
    });
};

export const getMovieImages = ({ queryKey }) => {
  const [, idPart] = queryKey;
  const { id } = idPart;
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();

  })
    .catch((error) => {
      throw error
    });
};

export const getMovieReviews = (id) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
  )
    .then((res) => res.json())
    .then((json) => {
      // console.log(json.results);
      return json.results;
    });

};

export const getMovieCredits = (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
    .catch((error) => {
      throw error
    });
};

export const getMovieRecommendations = (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.REACT_APP_TMDB_KEY}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
    .catch((error) => {
      throw error
    });
};

// export const getPerson = (args) => {
//   const [, namePart] = args.queryKey;
//   const { name } = namePart;
//   return fetch(
//     `https://api.themoviedb.org/3/person/${name}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
//   ).then((response) => {
//     if (!response.ok) {
//       throw new Error(response.json().message);
//     }
//     return response.json();
//   }).then((data) => {
//     console.log(data);
//     return data;
//   }).catch((error) => {
//     console.log(error);
//     throw error
//   });
// };

export const getPerson = async (args) => {
  const [, namePart] = args.queryKey;
  const { name } = namePart;
  const response = await fetch(
    `http://localhost:8080/api/actors/tmdb/person/${name}`, {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  });

  return response.json();
};

// export const getPersonCredits = (args) => {
//   const [, namePart] = args.queryKey;
//   const { name } = namePart;
//   return fetch(
//     `https://api.themoviedb.org/3/person/${name}/movie_credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
//   ).then((response) => {
//     if (!response.ok) {
//       throw new Error(response.json().message);
//     }
//     return response.json();
//   }).then((data) => {
//     console.log(data);
//     return data;
//   }).catch((error) => {
//     console.log(error);
//     throw error
//   });
// };

export const getPersonCredits = async (args) => {
  const [, namePart] = args.queryKey;
  const { name } = namePart;
  const response = await fetch(
    `http://localhost:8080/api/actors/tmdb/person/credits/${name}`, {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  });

  return response.json();
};

export const getPersonImages = ({ queryKey }) => {
  const [, namePart] = queryKey;
  const { name } = namePart;
  return fetch(
    `https://api.themoviedb.org/3/person/${name}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();

  })
    .catch((error) => {
      throw error
    });
};

// export const getActors = (args) => {
//   return fetch(
//     `https://api.themoviedb.org/3/trending/person/week?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
//   ).then((response) => {
//     if (!response.ok) {
//       throw new Error(response.json().message);
//     }
//     return response.json();
//   })
//     .catch((error) => {
//       throw error
//     });
// };
export const getActors = async () => {
  const response = await fetch(
    'http://localhost:8080/api/actors/tmdb/actors', {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  )
  return response.json();
};
export const getPersonPopular = async () => {
  return fetch(
    `https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  }).then((data) => {
    console.log(data);
    return data;
  }).catch((error) => {
    console.log(error);
    throw error
  });
};

// export const getTvShows = () => {
//   return fetch(
//     `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_TMDB_KEY}&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc`
//   ).then((response) => {
//     if (!response.ok) {
//       throw new Error(response.json().message);
//     }
//     return response.json();
//   })
//     .catch((error) => {
//       throw error
//     });
// };

export const getTvShows = async () => {
  const response = await fetch(
    'http://localhost:8080/api/tvShows/tmdb/discover', {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  )
  return response.json();
};
// export const getTvShows = async () => {
//   try {
//       const response = await fetch(
//           `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
//       );

//       if (!response.ok) {
//           throw new Error(response.json().message);
//       }

//       return await response.json();
//   } catch (error) {
//       throw error;
//   }
// };
// export const getTvShow = (args) => {
//   // console.log(args)
//   const [, idPart] = args.queryKey;
//   const { id } = idPart;
//   return fetch(
//     `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
//   ).then((response) => {
//     if (!response.ok) {
//       throw new Error(response.json().message);
//     }
//     return response.json();
//   })
//     .catch((error) => {
//       throw error
//     });
// };

export const getTvShow = async (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  const response = await fetch(
    `http://localhost:8080/api/tvShows/tmdb/tv/${id}`, {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  });

  return response.json();
};

export const getTvShowImages = ({ queryKey }) => {
  const [, idPart] = queryKey;
  const { id } = idPart;
  return fetch(
    `https://api.themoviedb.org/3/tv/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();

  })
    .catch((error) => {
      throw error
    });
};

export const login = async (username, password) => {
  const response = await fetch('http://localhost:8080/api/users', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify({ username: username, password: password })
  });
  return response.json();
};

export const signup = async (username, password) => {
  const response = await fetch('http://localhost:8080/api/users?action=register', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify({ username: username, password: password })
  });
  return response.json();
};

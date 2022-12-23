export const state = () => ({
    searchedData: [],
    searchedDataCount: '',
    searchPersonData: [],
    nowPlaying: [],
    popular: [],
    popularSeries: [],
    topRated: [],
    topRatedSeries: [],
    onTheAir: [],
    upcoming: [],
    upcomingMovies: [],
    trending: [],
    trendingSeries: [],
    trailers: [],
    movieTrailers: [],
    seasonalTrailers: [],
})

export const getters = {
    searchResult: state => {
        return state.searchedData
    },
    searchCount: state => {
        return state.searchedDataCount
    },
    searchPerson: state => {
        return state.searchPersonData
    },
    nowPlayingData: state => {
        return state.nowPlaying
    },
    popularData: state => {
        return state.popular
    },
    topRatedData: state => {
        return state.topRated
    },
    upcomingData: state => {
        return state.upcoming
    },
    upcomingMoviesData: state => {
        return state.upcomingMovies
    },
    trendingData: state => {
        return state.trending
    },
    trailersData: state => {
        return state.trailers
    },
    movieTrailersData: state => {
        return state.movieTrailers
    },
    seasonalTrailersData: state => {
        return state.seasonalTrailers
    },
}
export const actions = {
    async startSearch({ commit }, data) {
        try {
            await this.$axios.get(
                `${data[0]}/${data[1]}?api_key=${data[2]}&languagae=${data[3]}&query=${data[4]}&page=${data[5]}&include_adult=${data[6]}`
            ).then((response) => {
                commit('setSearchedData', response.data.results)
                commit('setSearchedDataCount', response.data.total_pages)
            })
        } catch (err) {
            console.log(err);
        }
    },
    async personSearch({ commit }, data) {
        try {
            await this.$axios.get(
                `${data[0]}/${data[1]}?api_key=${data[2]}&languagae=${data[3]}`
            ).then((response) => {
                commit('setSearchPersonData', response.data)
            })
        } catch (err) {
            console.log(err);
        }
    },
    async nowPlaying({ commit, dispatch }, data) {
        try {
            await this.$axios.get(
                `${data.media}/now_playing?api_key=${data.key}&languagae=${data.lang}&page=${data.page}`
            ).then((res) => {
                commit('setNowPlaying', res.data.results)
                commit('setTrailers', res.data.results.slice(0, 10))
                let trailerData = {
                    data: res.data.results.slice(0, 10),
                    media: data.media,
                    key: data.key,
                    lang: data.lang,
                }
                dispatch('trailers', trailerData)
            })
        } catch (err) {
            console.log(err)
        }
    },
    async popular({ commit }, data) {
        try {
            await this.$axios.get(
                `${data.media}/popular?api_key=${data.key}&languagae=${data.lang}&page=${data.page}`
            ).then((res) => {
                commit('setPopular', res.data.results)
            })
        } catch (err) {
            console.log(err)
        }
    },
    async popularSeries({ commit }, data) {
        try {
            await this.$axios.get(
                `${data.media}/popular?api_key=${data.key}&languagae=${data.lang}&page=${data.page}`
            ).then((res) => {
                commit('setPopularSeries', res.data.results)
            })
        } catch (err) {
            console.log(err)
        }
    },
    async topRated({ commit }, data) {
        try {
            await this.$axios.get(
                `${data.media}/top_rated?api_key=${data.key}&languagae=${data.lang}&page=${data.page}`
            ).then((res) => {
                commit('setTopRated', res.data.results)
            })
        } catch (err) {
            console.log(err)
        }
    },
    async topRatedSeries({ commit, dispatch }, data) {
        try {
            await this.$axios.get(
                `${data.media}/top_rated?api_key=${data.key}&languagae=${data.lang}&page=${data.page}`
            ).then((res) => {
                commit('setTopRatedSeries', res.data.results)
                commit('setSeasonalTrailers', res.data.results.slice(0, 10))
                let trailerData = {
                    data: res.data.results.slice(0, 10),
                    media: data.media,
                    key: data.key,
                    lang: data.lang,
                }
                dispatch('seasonalTrailers', trailerData)
            })
        } catch (err) {
            console.log(err)
        }
    },
    async onTheAir({ commit }, data) {
        try {
            await this.$axios.get(
                `${data.media}/on_the_air?api_key=${data.key}&languagae=${data.lang}`
            ).then((res) => {
                commit('setOnTheAir', res.data.results)
            })
        } catch (err) {
            console.log(err)
        }
    },
    async upcoming({ commit }, data) {
        try {
            await this.$axios.get(
                `${data.media}/upcoming?api_key=${data.key}&languagae=${data.lang}&page=${data.page}`
            ).then((res) => {
                commit('setUpcoming', res.data.results)
            })
        } catch (err) {
            console.log(err)
        }
    },
    async upcomingMovies({ commit, dispatch }, data) {
        try {
            await this.$axios.get(
                `${data.media}/popular?api_key=${data.key}&languagae=${data.lang}&page=${data.page}`
            ).then((res) => {
                commit('setUpcomingMovies', res.data.results)
                commit('setMovieTrailers', res.data.results.slice(0, 10))
                let trailerData = {
                    data: res.data.results.slice(0, 10),
                    media: data.media,
                    key: data.key,
                    lang: data.lang,
                }
                dispatch('movieTrailers', trailerData)
            })
        } catch (err) {
            console.log(err)
        }
    },
    async trending({ commit }, data) {
        try {
            await this.$axios.get(
                `${data.media}/${data.type}/${data.format}?api_key=${data.key}`
            ).then((res) => {
                commit('setTrending', res.data.results)
            })
        } catch (err) {
            console.log(err)
        }
    },
    async trendingSeries({ commit }, data) {
        try {
            await this.$axios.get(
                `${data.media}/${data.type}/${data.format}?api_key=${data.key}`
            ).then((res) => {
                commit('setTrendingSeries', res.data.results)
            })
        } catch (err) {
            console.log(err)
        }
    },
    async trailers({ commit }, data) {
        try {
            let newData = [];
            let totalInfo = data.data;
            let indexedItem = [];
            // loop and request videos 
            for (var i = 0; i < totalInfo.length; i++) {
                const slob = await this.$axios.get(
                    `${data.media}/${totalInfo[i].id}/videos?api_key=${data.key}&languagae=${data.lang}`
                );
                newData.push(slob.data.results);
            }
            // iteriate and get the first trailers 
            newData.forEach((element, index) => {
                element.forEach((videos) => {
                    if (videos.type == "Trailer") {
                        if (!indexedItem.includes(index)) {
                            indexedItem.push(index);
                            Object.assign(totalInfo[index], { video_link: videos });
                        }
                    }
                });
            });
            commit('setTrailers', totalInfo)

        } catch (err) {
            console.log(err)
        }
    },
    async movieTrailers({ commit }, data) {
        try {
            let newData = [];
            let totalInfo = data.data;
            let indexedItem = [];
            // loop and request videos 
            for (var i = 0; i < totalInfo.length; i++) {
                const slob = await this.$axios.get(
                    `${data.media}/${totalInfo[i].id}/videos?api_key=${data.key}&languagae=${data.lang}`
                );
                newData.push(slob.data.results);
            }
            // iteriate and get the first trailers 
            newData.forEach((element, index) => {
                element.forEach((videos) => {
                    if (videos.type == "Trailer") {
                        if (!indexedItem.includes(index)) {
                            indexedItem.push(index);
                            Object.assign(totalInfo[index], { video_link: videos });
                        }
                    }
                });
            });
            commit('setMovieTrailers', totalInfo)

        } catch (err) {
            console.log(err)
        }
    },
    async seasonalTrailers({ commit }, data) {
        try {
            let newData = [];
            let totalInfo = data.data;
            let indexedItem = [];
            // loop and request videos 
            for (var i = 0; i < totalInfo.length; i++) {
                const slob = await this.$axios.get(
                    `${data.media}/${totalInfo[i].id}/videos?api_key=${data.key}&languagae=${data.lang}`
                );
                newData.push(slob.data.results);
            }
            // iteriate and get the first trailers 
            newData.forEach((element, index) => {
                element.forEach((videos) => {
                    if (videos.type == "Trailer") {
                        if (!indexedItem.includes(index)) {
                            indexedItem.push(index);
                            Object.assign(totalInfo[index], { video_link: videos });
                        }
                    }
                });
            });
            commit('setSeasonalTrailers', totalInfo)

        } catch (err) {
            console.log(err)
        }
    },
}

export const mutations = {
    setSearchedData(state, searchedData) {
        state.searchedData = searchedData
    },
    setSearchedDataCount(state, searchedDataCount) {
        state.searchedDataCount = searchedDataCount
    },
    setSearchPersonData(state, searchPersonData) {
        state.searchPersonData = searchPersonData
    },
    setNowPlaying(state, nowPlaying) {
        state.nowPlaying = nowPlaying
    },
    setPopular(state, popular) {
        state.popular = popular
    },
    setPopularSeries(state, popularSeries) {
        state.popularSeries = popularSeries
    },
    setTopRated(state, topRated) {
        state.topRated = topRated
    },
    setTopRatedSeries(state, topRatedSeries) {
        state.topRatedSeries = topRatedSeries
    },
    setOnTheAir(state, onTheAir) {
        state.onTheAir = onTheAir
    },
    setUpcoming(state, upcoming) {
        state.upcoming = upcoming
    },
    setUpcomingMovies(state, upcomingMovies) {
        state.upcomingMovies = upcomingMovies
    },
    setTrending(state, trending) {
        state.trending = trending
    },
    setTrendingSeries(state, trendingSeries) {
        state.trendingSeries = trendingSeries
    },
    setTrailers(state, trailers) {
        state.trailers = trailers
    },
    setMovieTrailers(state, movieTrailers) {
        state.movieTrailers = movieTrailers
    },
    setSeasonalTrailers(state, seasonalTrailers) {
        state.seasonalTrailers = seasonalTrailers
    },
}

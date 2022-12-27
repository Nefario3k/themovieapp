export const state = () => ({
    searchedData: [],
    searchedDataCount: '',
    searchPersonData: [],
    nowPlaying: [],
    nowPlayingOthers: [],
    popular: [],
    popularOthers: [],
    popularSeries: [],
    popularOtherSeries: [],
    topRated: [],
    topRatedOthers: [],
    topRatedSeries: [],
    topRatedOtherSeries: [],
    onTheAir: [],
    onTheAirOthers: [],
    upcoming: [],
    upcomingOthers: [],
    upcomingMovies: [],
    trending: [],
    trendingMovies: [],
    trendingSeries: [],
    trendingPersons: [],
    trailers: [],
    movieTrailers: [],
    seasonalTrailers: [],
    allVideos: [],
    reviews: [],
    contentAmount: 4,
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
    async nowPlayingOthers({ commit }, data) {
        try {
            let initial = []
            for (var i = 2; i < this.state.contentAmount; i++) {
                await this.$axios.get(
                    `${data.media}/now_playing?api_key=${data.key}&languagae=${data.lang}&page=${i}`
                ).then((res) => {
                    initial.push(res.data.results)
                })
            }
            commit('setNowPlayingOthers', initial)
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
    async popularOthers({ commit }, data) {
        try {
            let initial = []
            for (var i = 2; i < this.state.contentAmount; i++) {
                await this.$axios.get(
                    `${data.media}/popular?api_key=${data.key}&languagae=${data.lang}&page=${i}`
                ).then((res) => {
                    initial.push(res.data.results)
                })
            }
            commit('setPopularOthers', initial)

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
    async popularOtherSeries({ commit }, data) {
        try {
            let initial = []
            for (var i = 2; i < this.state.contentAmount; i++) {
                await this.$axios.get(
                    `${data.media}/popular?api_key=${data.key}&languagae=${data.lang}&page=${i}`
                ).then((res) => {
                    initial.push(res.data.results)

                })
            }
            commit('setPopularOtherSeries', initial)
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
    async topRatedOthers({ commit }, data) {
        try {
            let initial = []
            for (var i = 2; i < this.state.contentAmount; i++) {
                await this.$axios.get(
                    `${data.media}/top_rated?api_key=${data.key}&languagae=${data.lang}&page=${i}`
                ).then((res) => {
                    initial.push(res.data.results)
                })
            }
            commit('setTopRatedOthers', initial)

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
    async topRatedOtherSeries({ commit }, data) {
        try {
            let initial = []
            for (var i = 2; i < this.state.contentAmount; i++) {
                await this.$axios.get(
                    `${data.media}/top_rated?api_key=${data.key}&languagae=${data.lang}&page=${i}`
                ).then((res) => {
                    initial.push(res.data.results)
                })
            }
            commit('setTopRatedOtherSeries', initial)

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
    async onTheAirOthers({ commit }, data) {
        try {
            let initial = []
            for (var i = 2; i < this.state.contentAmount; i++) {
                await this.$axios.get(
                    `${data.media}/on_the_air?api_key=${data.key}&languagae=${data.lang}&page=${i}`
                ).then((res) => {
                    initial.push(res.data.results)
                })
            }
            commit('setOnTheAirOthers', initial)
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
    async upcomingOthers({ commit }, data) {
        try {
            let initial = []
            for (var i = 2; i < this.state.contentAmount; i++) {
                await this.$axios.get(
                    `${data.media}/upcoming?api_key=${data.key}&languagae=${data.lang}&page=${i}`
                ).then((res) => {
                    initial.push(res.data.results)
                })
            }
            commit('setUpcomingOthers', initial)
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
    async trendingMovies({ commit }, data) {
        try {
            await this.$axios.get(
                `${data.media}/movie/${data.format}?api_key=${data.key}`
            ).then((res) => {
                commit('setTrendingMovies', res.data.results)
            })
        } catch (err) {
            console.log(err)
        }
    },
    async trendingSeries({ commit }, data) {
        try {
            await this.$axios.get(
                `${data.media}/tv/${data.format}?api_key=${data.key}`
            ).then((res) => {
                commit('setTrendingSeries', res.data.results)
            })
        } catch (err) {
            console.log(err)
        }
    },
    async trendingPersons({ commit }, data) {
        try {
            await this.$axios.get(
                `${data.media}/person/${data.format}?api_key=${data.key}`
            ).then((res) => {
                commit('setTrendingPersons', res.data.results)
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
    async allVideos({ commit }, data) {
        // https://api.themoviedb.org/3/tv/119051/videos?api_key=575e447d3c3e2de9aa3104d937ebb4f1&language=en-US

        // https://api.themoviedb.org/3/movie/436270/videos?api_key=575e447d3c3e2de9aa3104d937ebb4f1&language=en-US
        try {
            await this.$axios.get(
                `${data.media}/${data.id}/videos?api_key=${data.key}&languagae=${data.lang}`).then((res) => {
                    commit('setAllVideos', res.data.results)
                })


        } catch (err) {
            console.log(err)
        }
    },
    async reviews({ commit }, data) {
        try {
            await this.$axios.get(`${data.media}/${data.id}/reviews?api_key=${data.key}&language=${data.lang}&page=${data.page}`).then((res) => {
                commit('setReviews', res.data.results)
                return res.data.results
            })
        } catch (err) {
            console.log(err.message)
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
    setNowPlayingOthers(state, nowPlayingOthers) {
        state.nowPlayingOthers = nowPlayingOthers
    },
    setPopular(state, popular) {
        state.popular = popular
    },
    setPopularOthers(state, popularOthers) {
        state.popularOthers = popularOthers
    },
    setPopularSeries(state, popularSeries) {
        state.popularSeries = popularSeries
    },
    setPopularOtherSeries(state, popularOtherSeries) {
        state.popularOtherSeries = popularOtherSeries
    },
    setTopRated(state, topRated) {
        state.topRated = topRated
    },
    setTopRatedOthers(state, topRatedOthers) {
        state.topRatedOthers = topRatedOthers
    },
    setTopRatedSeries(state, topRatedSeries) {
        state.topRatedSeries = topRatedSeries
    },
    setTopRatedOtherSeries(state, topRatedOtherSeries) {
        state.topRatedOtherSeries = topRatedOtherSeries
    },
    setOnTheAir(state, onTheAir) {
        state.onTheAir = onTheAir
    },
    setOnTheAirOthers(state, onTheAirOthers) {
        state.onTheAirOthers = onTheAirOthers
    },
    setUpcoming(state, upcoming) {
        state.upcoming = upcoming
    },
    setUpcomingOthers(state, upcomingOthers) {
        state.upcomingOthers = upcomingOthers
    },
    setUpcomingMovies(state, upcomingMovies) {
        state.upcomingMovies = upcomingMovies
    },
    setTrending(state, trending) {
        state.trending = trending
    },
    setTrendingMovies(state, trendingMovies) {
        state.trendingMovies = trendingMovies
    },
    setTrendingSeries(state, trendingSeries) {
        state.trendingSeries = trendingSeries
    },
    setTrendingPersons(state, trendingPersons) {
        state.trendingPersons = trendingPersons
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
    setAllVideos(state, allVideos) {
        state.allVideos = allVideos
    },
    setReviews(state, reviews) {
        state.reviews = reviews
    },
}

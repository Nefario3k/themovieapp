export default (context, inject) => {
    inject('refactorRatings', (item) => {
        var variable = "";
        variable = Math.ceil(item * 10) / 10;
        return variable;
    })

    // Get search Resources
    inject('getSearchResult', () => {
        return context.store.state.searchedData;
    })

    inject('getSearchCount', () => {
        return context.store.state.searchedDataCount;
    })

    inject('getPersonSearch', () => {
        return context.store.state.searchPersonData;
    })

    inject('getNowPlaying', () => {
        return context.store.state.nowPlaying;
    })

    inject('getPopular', () => {
        return context.store.state.popular;
    })

    inject('getPopularSeries', () => {
        return context.store.state.popularSeries;
    })

    inject('getTopRated', () => {
        return context.store.state.topRated;
    })

    inject('getTopRatedSeries', () => {
        return context.store.state.topRatedSeries;
    })

    inject('getOnTheAir', () => {
        return context.store.state.onTheAir;
    })

    inject('getUpcoming', () => {
        return context.store.state.upcoming;
    })

    inject('getUpcomingMovies', () => {
        return context.store.state.upcomingMovies;
    })

    inject('getTrending', () => {
        return context.store.state.trending;
    })

    inject('getTrendingMovies', () => {
        return context.store.state.trendingMovies;
    })

    inject('getTrendingSeries', () => {
        return context.store.state.trendingSeries;
    })

    inject('getTrailers', () => {
        let trailer = context.store.state.trailers;
        trailer.forEach((element) => {
            if (element.vote_average >= 7.5) {
                Object.assign(element, { color: "#43bd84" });
            } else if (element.vote_average >= 5.5 && element.vote_average <= 7.4) {
                Object.assign(element, { color: "#e6e36b" });
            } else {
                Object.assign(element, { color: "#bf1e22" });
            }
        });
        return trailer;
    })

    inject('getMovieTrailers', () => {
        let trailer = context.store.state.movieTrailers;
        trailer.forEach((element) => {
            if (element.vote_average >= 7.5) {
                Object.assign(element, { color: "#43bd84" });
            } else if (element.vote_average >= 5.5 && element.vote_average <= 7.4) {
                Object.assign(element, { color: "#e6e36b" });
            } else {
                Object.assign(element, { color: "#bf1e22" });
            }
        });
        return trailer;
    })

    inject('getSeasonalTrailers', () => {
        let trailer = context.store.state.seasonalTrailers;
        trailer.forEach((element) => {
            if (element.vote_average >= 7.5) {
                Object.assign(element, { color: "#43bd84" });
            } else if (element.vote_average >= 5.5 && element.vote_average <= 7.4) {
                Object.assign(element, { color: "#e6e36b" });
            } else {
                Object.assign(element, { color: "#bf1e22" });
            }
        });
        return trailer;
    })

    inject('getAllVideos', () => {
        return context.store.state.allVideos;
    })

    inject('getReviews', () => {
        return context.store.state.reviews;
    })

    inject('getMovieOthers', () => {
        let extraMOvies = []
        if (context.store.state.nowPlayingOthers.length) {
            Object.assign(extraMOvies)
            extraMOvies.push({
                title: "Now Playing",
                movies: context.store.state.nowPlayingOthers
            })
        }
        if (context.store.state.popularOthers.length) {
            extraMOvies.push({
                title: "What's Popular",
                movies: context.store.state.popularOthers
            })
        }
        if (context.store.state.topRatedOthers.length) {
            extraMOvies.push({
                title: "Top Rated",
                movies: context.store.state.topRatedOthers
            })
        }
        if (context.store.state.upcomingOthers.length) {
            extraMOvies.push({
                title: "Upcoming Movies",
                movies: context.store.state.upcomingOthers
            })
        }
        return extraMOvies;
    })

    // to lazy so implemented this fix 
    inject('getMoviesOthers', () => {
        let extraMOvies = []
        if (context.store.state.upcomingOthers.length) {
            extraMOvies.push({
                title: "Upcoming Movies",
                movies: context.store.state.upcomingOthers
            })
        }

        if (context.store.state.nowPlayingOthers.length) {
            Object.assign(extraMOvies)
            extraMOvies.push({
                title: "Now Playing",
                movies: context.store.state.nowPlayingOthers
            })
        }
        if (context.store.state.popularOthers.length) {
            extraMOvies.push({
                title: "What's Popular",
                movies: context.store.state.popularOthers
            })
        }
        if (context.store.state.topRatedOthers.length) {
            extraMOvies.push({
                title: "Top Rated",
                movies: context.store.state.topRatedOthers
            })
        }
        return extraMOvies;
    })

    inject('getSeriesOthers', () => {
        let extraMOvies = []
        if (context.store.state.popularOtherSeries.length) {
            extraMOvies.push({
                title: "What's Popular",
                movies: context.store.state.popularOtherSeries
            })
        }
        if (context.store.state.topRatedOtherSeries.length) {
            extraMOvies.push({
                title: "Top Rated",
                movies: context.store.state.topRatedOtherSeries
            })
        }
        if (context.store.state.onTheAirOthers.length) {
            extraMOvies.push({
                title: "On The Air",
                movies: context.store.state.onTheAirOthers
            })
        }
        return extraMOvies;
    })

    inject('getTrendingAll', () => {
        let trendObj = {}
        if (context.store.state.trendingMovies.length) {
            if (!trendObj.hasOwnProperty('movie')) {
                Object.assign(trendObj, { movie: context.store.state.trendingMovies })
            }
        }
        if (context.store.state.trendingSeries.length) {
            if (!trendObj.hasOwnProperty('tv')) {
                Object.assign(trendObj, { tv: context.store.state.trendingSeries })
            }
        }
        if (context.store.state.trendingPersons.length) {
            if (!trendObj.hasOwnProperty('persons')) {
                Object.assign(trendObj, { persons: context.store.state.trendingPersons })
            }
        }
        return trendObj
    })
}

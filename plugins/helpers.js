export default (context, inject) => {
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

    inject('getNowPlayingOthers', () => {
        return context.store.state.nowPlayingOthers;
    })

    inject('getPopularOthers', () => {
        return context.store.state.popularOthers;
    })

    inject('getTopRatedOthers', () => {
        return context.store.state.topRatedOthers;
    })

    inject('getUpcomingOthers', () => {
        return context.store.state.upcomingOthers;
    })
}

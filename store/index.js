export const state = () => ({
    searchedData: [],
    searchedDataCount: '',
    searchPersonData: [],
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
    }
}
export const actions = {
    async startSearch({ commit }, data) {
        try {
            await this.$axios.get(
                `${data[0]}/${data[1]}?api_key=${data[2]}&languagae=${data[3]}&query=${data[4]}&page=${data[5]}&include_adult=${data[6]}`
            ).then((response) => {
                console.log("result from store:", response.data.results);
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
                console.log("person from store:", response.data);
                commit('setSearchPersonData', response.data)
            })
        } catch (err) {
            console.log(err);
        }
    }
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
}

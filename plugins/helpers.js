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
}

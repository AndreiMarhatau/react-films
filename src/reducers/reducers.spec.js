const { setMovieDetailsAction } = require("../actions/movie-details-page.action");
const { default: movieDetailsPageReducer } = require("./movie-details-page.reducer");
const { default: moviesListReducer } = require("./movies-list.reducer");

describe('movie-details.reducer', () => {
    it('should return payload anyhow', () => {
        const init = {test1: 'test1'};
        const payload = {test2: 'test2'};
        const action = setMovieDetailsAction(payload);
        const returned = movieDetailsPageReducer(init, action);
        expect(returned).toEqual(payload);
    });
});
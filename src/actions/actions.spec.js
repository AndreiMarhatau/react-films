import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const { default: consts } = require("../constants/consts");
const { setMovieDetails, setMovieDetailsAction } = require("./movie-details-page.action");

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('movieDetails', () => {
    it('should fetch data of movie and dispatch json through action creator call', () => {
        const movie = {id: 1};
        global.fetch = jest.fn(url => Promise.resolve({json: () => movie}));
        const dispatch = jest.fn();
        const expectedActions = [setMovieDetailsAction(movie)];

        const store = mockStore({})

        return store.dispatch(setMovieDetails(movie.id)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
            expect(fetch).toHaveBeenCalledWith(`${consts.apiUrl}/movies/${movie.id}`);
        });

    });
});
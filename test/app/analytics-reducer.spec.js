import { expect } from 'chai';
import { reducer, actions } from 'app/analytics-reducer';

describe('Analytics Reducer', function() {
  let state;
  let newState;

  describe('when clearing URL information', function() {
    beforeEach(function() {
      state = Object.assign({}, {
        url: 'http://mysampleurl.com',
        info: [{ ip: '111.111.111.111', os: 'myOS', date: 'date' }],
      });
      newState = reducer(state, actions.clearUrl());
    });

    it('clears the url property', function() {
      expect(newState.url).to.equal('');
    });

    it('empties information object list', function() {
      expect(newState.info).to.be.empty;
    });
  });

  describe('when fetching URL information', function() {
    beforeEach(function () {
      state = Object.assign({}, { url: '', info: [] });
      newState = reducer(state, actions.fetchUrlInfo('http://www.my.url'));
    });

    it('returns a new instance of the information list', function() {
      expect(newState.info).to.not.equal(state.info);
    });

    it('returns a new instance of the url field', function() {
      expect(newState.url).to.not.equal(state.url);
    });
  });
});
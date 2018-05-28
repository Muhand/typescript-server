import * as mocha from 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import app from '../src/app';

chai.use(chaiHttp);
const expect = chai.expect;

describe('/', () => {
  it('should redirect `\\` request to home', () => {
    return chai.request(app).get('/').redirects(0)
    .then(res => {
        expect(res).to.redirectTo('/home')
    });
  });
});

process.env.NODE_ENV = 'test';
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
chai.use(chaiHttp);

const server = require("../index");

describe('test', () => {
    describe('/GET test', () => {
        it('/test should give 404', (done) => {
          chai.request(server)
              .get('/test')
              .end((err, res) => {
                res.should.have.status(404);
                done();
              });
        });
    });
});
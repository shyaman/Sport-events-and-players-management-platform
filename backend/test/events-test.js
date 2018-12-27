process.env.NODE_ENV = 'test';
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
chai.use(chaiHttp);

const server = require("../server");
let event = require('../models/event');


describe('Event endpoint', () => {
    beforeEach((done) => { //Before each test we empty the database
        event.deleteMany({}, (err) => { 
           done();         
        });     
    });

    describe('/GET events', () => {
        it('it should GET empty response', (done) => {
          chai.request(server)
              .get('/api/events')
              .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(0);
                done();
              });
        });
    });

    describe('/POST events', () => {

        it('it should not POST a event without a required field', (done) => {
            let event = {
                name: "Inter-university Rugby" ,
                venue: "University ground, Peradeniya",
                team1: "Mora",
                team2: "Pera",
                time: new Date("2018-12-12")
            }
          chai.request(server)
              .post('/api/events')
              .send(event)
              .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('errors');
                    res.body.errors.should.have.property('sport');
                    res.body.errors.sport.should.have.property('kind').eql('required');
                done();
              });
        });

        it('it should POST a event ', (done) => {
            let event = {
                name: "Inter-university Rugby" ,
                sport: "Rugby",
                venue: "University ground, Peradeniya",
                team1: "Mora",
                team2: "Pera",
                time: new Date("2018-12-12")
            }
          chai.request(server)
              .post('/api/events')
              .send(event)
              .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').eql('Event successfully added!');
                    res.body.event.should.have.property('name');
                    res.body.event.should.have.property('sport');
                    res.body.event.should.have.property('venue');
                    res.body.event.should.have.property('team1');
                    res.body.event.should.have.property('team2');
                    res.body.event.should.have.property('time');
                done();
              });
        });

    });
});
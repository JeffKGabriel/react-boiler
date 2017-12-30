process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server.js');
var should = chai.should();

chai.use(chaiHttp);


var Bear = require('../api/models/bears');


describe('Api', function() {


  //Bear.collection.drop();

  beforeEach(function(done){
    var newBear = new Bear({
      name: 'Ringo',
    });
    newBear.save(function(err) {
      done();
    });
  });
  afterEach(function(done){
    Bear.collection.drop();
    done();
  });





  it('should list ALL blobs on /api GET', function(done){
    chai.request(server)
    .get('/api')
    .end(function(err, res){
      res.should.have.status(200);
      res.should.be.json;
      done();
    });
  });
  it('should list a SINGLE bear on /api/bears/<id> GET');
  it('should add a SINGLE bear on /api/bears POST', function(done){
    chai.request(server)
    .post('/api/bears')
    .send({'name': 'Thomas'})
    .end(function(err, res){
      res.should.have.status(200);
      res.should.be.json;
      done();
    });
  });
  it('should update a SINGLE blob on /blob/<id> PUT');
  it('should delete a SINGLE blob on /blob/<id> DELETE');
});

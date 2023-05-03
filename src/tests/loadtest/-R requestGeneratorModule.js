/*
import axios from 'axios'


describe('hello', () => {
    it('a', async () => {
        expect("hi").toEqual("hi")
    })
})

describe('Test', () => {

    it('s', async () => {
        const {body: data} = await axios.get('http://localhost:4200/api/AllPosts').expect(200)
        expect(data?.length).toEqual({ info: `hello` })
    })

})
*/

// yarn loadtest -n 20 -c 1 -n http://localhost:3000 -R requestGeneratorModule.js

// https://www.npmjs.com/package/loadtest

// const loadtest = require('loadtest');

module.exports = function(params, options, client, callback) {
    generateMessageAsync(function(message) {
  
      if (message)
      {
        options.headers['Content-Length'] = message.length;
        options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
      }
      request = client(options, callback);
      if (message){
        request.write(message);
      }
  
      return request;
    }
  }

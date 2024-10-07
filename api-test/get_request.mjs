import axios from 'axios';
import { expect } from 'chai';

describe('API CRUD Operations Test', function () {
    
    // GET Request Test
    it('GET: should fetch a post by ID', async function () {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
            expect(response.status).to.equal(200);
            expect(response.data).to.be.an('object');
            expect(response.data).to.have.property('id', 1);
            expect(response.data).to.have.property('title');
            expect(response.data).to.have.property('body');
        } catch (error) {
            throw new Error('GET request failed');
        }
    })
})
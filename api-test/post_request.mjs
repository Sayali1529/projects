import axios from 'axios';
import { expect } from 'chai';

it('POST: should create a new post', async function () {
    const postData = {
        title: 'foo',
        body: 'bar',
        userId: 1
    };
    try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', postData);
        expect(response.status).to.equal(201);
        expect(response.data).to.be.an('object');
        expect(response.data).to.have.property('id'); // New ID created
        expect(response.data).to.have.property('title', 'foo');
        expect(response.data).to.have.property('body', 'bar');
        expect(response.data).to.have.property('userId', 1);
    } catch (error) {
        throw new Error('POST request failed');
    }
});
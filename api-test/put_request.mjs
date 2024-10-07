import axios from 'axios';
import { expect } from 'chai';

it('PUT: should update an existing post', async function () {
    const updateData = {
        title: 'updated title',
        body: 'updated body',
        userId: 1
    };
    try {
        const response = await axios.put('https://jsonplaceholder.typicode.com/posts/1', updateData);
        expect(response.status).to.equal(200);
        expect(response.data).to.be.an('object');
        expect(response.data).to.have.property('id', 1);
        expect(response.data).to.have.property('title', 'updated title');
        expect(response.data).to.have.property('body', 'updated body');
    } catch (error) {
        throw new Error('PUT request failed');
    }
});

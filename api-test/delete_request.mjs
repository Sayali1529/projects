import axios from 'axios';
import { expect } from 'chai';

it('DELETE: should delete a post by ID', async function () {
    try {
        const response = await axios.delete('https://jsonplaceholder.typicode.com/posts/1');
        expect(response.status).to.equal(200);
        expect(response.data).to.be.empty; // JSONPlaceholder returns an empty object on deletion
    } catch (error) {
        throw new Error('DELETE request failed');
    }
});
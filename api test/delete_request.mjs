import axios from 'axios';
import { expect } from 'chai';

describe("DELETE API Request Tests", () => {
    it("should be able to delete a user details", async () => {
        const res = await axios.delete("https://reqres.in/api/users/2")
        console.log(res.data);
        expect(res.status).equal(204); // Example assertion
    });
});

import axios from 'axios';
import { expect } from 'chai';

describe("GET API Request Tests", () => {
    it("should be able to get user list", async () => {
        const res = await axios.get("https://reqres.in/api/users?page=2");
        console.log(res.data);
        expect(res.status).to.equal(200); // Example assertion
    });
});

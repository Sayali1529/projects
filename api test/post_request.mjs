import axios from 'axios';
import { expect } from 'chai';

describe("POST API Request Tests", () => {
    it("should be able to get a user details", async () => {
        const res = await axios.post("https://reqres.in/api/users",
            {
                "name": "morpheus",
    "job": "leader"
            });
        console.log(res.data);
        expect(res.data.name).equal("morpheus"); // Example assertion
        expect(res.data.job).equal("leader"); // Example assertion
    });
});

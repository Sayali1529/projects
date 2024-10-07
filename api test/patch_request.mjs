import axios from 'axios';
import { expect } from 'chai';

describe("PATCH API Request Tests", () => {
    it("should be able to patch a user details", async () => {
        const res = await axios.patch("https://reqres.in/api/users/2",
            {
                "name": "Sayali",
            });
        console.log(res.data);
        expect(res.data.name).equal("Sayali"); // Example assertion
    });
});

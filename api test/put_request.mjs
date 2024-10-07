import axios from 'axios';
import { expect } from 'chai';

describe("PUT API Request Tests", () => {
    it("should be able to put a user details", async () => {
        const res = await axios.put("https://reqres.in/api/users/2",
            {
                "name": "morpheus",
                "job": "zion resident"
            });
        console.log(res.data);
        expect(res.data.name).equal("morpheus"); // Example assertion
        expect(res.data.job).equal("zion resident"); // Example assertion
    });
});

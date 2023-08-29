const { assert } = require("chai")
const { ethers } = require("hardhat")

describe("SimpleStorage", function () {
    let simpleStorageFactory
    let simpleStorage

    beforeEach(async function () {
        simpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
        simpleStorage = await simpleStorageFactory.deploy()
    })

    it("Should start with a favorite number 0", async function () {
        const currentValue = await simpleStorage.retrieve()
        const expectedValue = "0"
        // assert
        // expected
        assert.equal(currentValue.toString(), expectedValue)
    })

    it("Should update when we call store", async function () {
        const expectedValue = "7"
        const transactionResponse = await simpleStorage.store(7)
        await transactionResponse.wait(1)

        const currentValue = await simpleStorage.retrieve()
        assert.equal(currentValue.toString(), expectedValue)
    })
})

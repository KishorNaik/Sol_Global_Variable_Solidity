import { expect } from "chai";
import { ethers } from "hardhat";

// describe("Greeter", function () {
//   it("Should return the new greeting once it's changed", async function () {
//     const Greeter = await ethers.getContractFactory("Greeter");
//     const greeter = await Greeter.deploy("Hello, world!");
//     await greeter.deployed();

//     expect(await greeter.greet()).to.equal("Hello, world!");

//     const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

//     // wait until the transaction is mined
//     await setGreetingTx.wait();

//     expect(await greeter.greet()).to.equal("Hola, mundo!");
//   });
// });


describe("Global-Variable-Example", function () {
  it("#Test1 - Get Sender Address", async function () {
    const Contract = await ethers.getContractFactory("GlobalVariableCon");
    const contract = await Contract.deploy();
    await contract.deployed();

    let senderAddress:any =await contract.getSenderAddress();
    console.log(`Sender Address => ${JSON.stringify(senderAddress)}`);

    if(senderAddress!==undefined){
      expect(senderAddress.from).to.equal("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266");
    }
    else
    {
      expect(false).to.equal(true);
    }
  });

  it("#Test2 - Get Time Stamp", async function () {
    const Contract = await ethers.getContractFactory("GlobalVariableCon");
    const contract = await Contract.deploy();
    await contract.deployed();

    let timeStamp:any =await contract.getTimeStamp();
    console.log(`Time Stamp => ${JSON.stringify(timeStamp)}`);

    if(timeStamp!==undefined){
      expect(true).to.equal(true);
    }
    else
    {
      expect(false).to.equal(true);
    }
  });

  it.only("#Test3 - Get Gas Price", async function () {
    const Contract = await ethers.getContractFactory("GlobalVariableCon");
    const contract = await Contract.deploy();
    await contract.deployed();

    let gasPrice:any =await contract.getGasPrice();
    console.log(`Time Stamp => ${JSON.stringify(gasPrice)}`);

    if(gasPrice!==undefined){
      expect(true).to.equal(true);
    }
    else
    {
      expect(false).to.equal(true);
    }
  });

});
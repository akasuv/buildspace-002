const main = async () => {
    const nftContractFactory = await hre.ethers.getContractFactory('MyAwesomeNFT');
    const nftContract = await nftContractFactory.deploy();
    await nftContract.deployed();
    console.log('Contract deployed to', nftContract.address);

    let txn = await nftContract.makeAnAwesomeNFT();

    await txn.wait();
}

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log("Error", error);
        process.exit(1);
    }
}

runMain();
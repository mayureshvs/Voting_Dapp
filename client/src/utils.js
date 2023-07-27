const getWeb3 = () => {
    return new Promise((resolve, reject) => {
        window.addEventListener("load", async () => {
            if (window.ethereum) {
                const web3 = new Web3(window.ethereum);
                try {
                    // ask user permission to access his accounts
                    await window.ethereum.request({ method: "eth_requestAccounts" });
                    console.log("accounts fetched")
                    resolve(web3);
                } catch (error) {
                    console.log("Unable to get accounts")
                    reject(error);
                }
            } else {
               reject("Metamask Not installed");
                
            }
        });
    });
};

const getContract = async (web3) => {
    const data = await $.getJSON("./contracts/Election.json");
  
    const netId = await web3.eth.net.getId();
    const deployedNetwork = data.networks[netId];
    const DesignedContract = new web3.eth.Contract(
      data.abi,
      deployedNetwork.address
      //deployedNetwork && deployedNetwork.address
    );
    return DesignedContract;
  };
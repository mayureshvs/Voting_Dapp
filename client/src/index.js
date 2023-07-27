
App = {
    web3: null,
    contract: null,
    account: null,
    candiCount: null,


    init: function () {
        return App.initWeb3();
    },

    initWeb3: async function () {
        App.web3 = await getWeb3();
        return App.initContract();
    },

    initContract: async function () {
        App.contract = await getContract(App.web3);

        // elec = await App.contract.methods.candidatesCount().call();
        //console.log(elec)
        await App.onInit();
        return App.render();
    },

    onInit: async function () {

        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        console.log("Accounts:" + accounts);
        App.account = accounts[0];
        console.log(App.account)

        //App.getCandidates();

        App.listenForEvents();
        window.ethereum.on('accountsChanged', function (accounts) {
            App.account = accounts[0];
            console.log("Accounts changed to: " + accounts[0])
            App.render();
        });
    },

    // Listen for events emitted from the contract
    listenForEvents: function () {

        console.log("Hey" + App.contract.events);

        try {
            App.contract.events.votedEvent({
                fromBlock: 0
            }, function (error, event) {
                console.log(event);
            }).on("data", function (data) {
                console.log(data);
               
            });
        } catch (e) {
            console.log(e);
        }
    },


    render: async function () {
        var electionInstance;
        var loader = $("#loader");
        var content = $("#content");

        loader.show();
        content.hide();

        App.candiCount = await App.contract.methods.candidatesCount().call();
        console.log(App.candiCount);

        console.log("in render func")
        $("#accountAddress").html("Your Account: " + App.account);
        var candidatesResults = $("#candidatesResults tr");
        candidatesResults.remove();
        console.log("rows removed");

        var candidatesSelect = $('#candidatesSelect option');
        candidatesSelect.remove();
        console.log("options removed");


        var candidatesResults = $('#candidatesResults');
        var candidatesSelect = $('#candidatesSelect');

        //cand = await 
        // console.log(App.contract.methods.candidates(1).call());
        for (var i = 1; i <= App.candiCount; i++) {
            // var candidatesResults = $('#candidatesResults:nth-child(' + i + ')');
            // var candidatesSelect = $('#candidatesSelect:nth-child(' + i + ')');

            App.contract.methods.candidates(i).call().then(function (candidate) {
                var id = candidate[0];
                var name = candidate[1];
                var voteCount = candidate[2];

                // Render candidate Result
                var candidateTemplate = "<tr><td>" + id + "</td><td>" + name + "</td><td>" + voteCount + "</td></tr>";
                candidatesResults.append(candidateTemplate);
                console.log("candidate row added");
                // Render candidate ballot option
                var candidateOption = "<option value='" + id + "' >" + name + "</ option>";
                candidatesSelect.append(candidateOption);
                console.log("candidate option added");
            });
        }

        App.contract.methods.voters(App.account).call().then(function (hasVoted) {
            console.log(hasVoted);
            if (hasVoted) {
                console.log("has voted");
                $('form').hide();
            } else {
                console.log("has not voted");
                $('form').show();
            }
        });

        loader.hide();
        content.show();

    },

    castVote: async function () {
        console.log("yet to be Voted: ");
        // console.log("hey I am here"); 
        var candidateId = await $('#candidatesSelect').val();
        console.log("cand: " + candidateId);
        voted = await App.contract.methods.vote(candidateId).send({ from: App.account });
        console.log(voted);
        App.render();
    },

    testContract: async function (contract) {
        election = await contract.methods.candidatesCount().call();
        console.log(election);
        $("h1").html("Election Results Ready!");
    }
}
App.init();
# Truffle Badge & Gas Stations Network 👋

In this step we explore adding [Gas Stations Network](https://github.com/opengsn/gsn) support to the Truffle Badge project enabling users to *gaslessly* claim badges. If you're not already familiar "GSN abstracts away gas to minimize onboarding & UX friction for dapps" thus allowing users to interact with contracts without the need for ETH (or more specifically the need to submit gas with a given a transactions). 

This is achieved via a network of relayers that serve as a proxy to the underlying contracts and actually send the transactions, along with the necessary gas costs, thus absorbing it from the originating user. The contracts are made "GSN-capable" with a few [small extensions](https://docs.opengsn.org/contracts/index.html).

## Getting Started

Once you've checkout out this branch (`step-5`), you'll need to install the additional GSN dependencies added to the `package.json` via Yarn or NPM. Note that the `@opengsn/gsn` package requires Node `>=11.0`.

```
yarn
npm i
```

## Creating a Teams Sandbox

While the GSN can be run in a locally running Ganache instance, in this case we're going to use a [Teams sandbox](https://www.trufflesuite.com/docs/teams/sandboxes/sandboxes-overview). This will allow us to test workflow with a wider team.

> Note that more detailed steps on creating a Sandbox are available in the Teams Sandbox [documentation](https://www.trufflesuite.com/docs/teams/sandboxes/creating-a-sandbox).

## Starting the GSN Relayer

Once your sandbox is created, copy / paste the provided RPC URL as per the example below. Note that this command needs to be run in the root of this project. 

```
> npx gsn start --network https://sandbox.truffleteams.com/c9947d19-cb58-4252-8b3e-fbbd321dac3d
```

This will both generate and deploy the necessary contracts to the sandbox instance provided and start the relayer, e.g. `http://127.0.0.1:65402`. Note that the you'll find the generated addresses in `build/gsn`:

- Forwarder.json
- Paymaster.json
- Penalizer.json
- RelayHub.json
- StakeManager.json
- VersionRegistry.json

## Deploying you GSN-capable Contracts

You're now ready to deploy your GSN-capable to the sandbox. In this case we'll commit the newly added files to our (forked copy of this) repo which should already be added to Teams. If it's not already added steps are available [here](https://www.trufflesuite.com/docs/teams/getting-started/adding-repositories).

This will trigger a build, and we'll use this to deploy to our sandbox. Steps on how to do a deploy [here](https://www.trufflesuite.com/docs/teams/deployments/deploying-to-a-sandbox).

## Sending a "Gasful" transaction

Let's start by sending a "gasful" transaction. This could be done via the Teams Contract Manager of the `truffle console`, as follows (note that you'll need to update the `dev` network in `truffle-config.js` to point to your sandbox first): 

```
> truffle console --network dev
> truffle(dev)> let i = await TruffleBadge.deployed()
> truffle(dev)> i.claimBadgeNoGas()
```

All going well this will return with a successful transaction receipt.

## Sending a "Gasless" transaction

Now onto the fun stuff! There's a few ways we can send a "gasless" transaction. Firstly, via a provided script as follows. Note that you'll just need to update the `paymaster` address first to the contract address in `build/gsn/Paymaster.json`.

```
> truffle exec scripts/metatxn.js --network dev
```

If successful this will be sent via the relayer.

### Sending via the browser

Lastly, a lightweight web UI is provided to allow you to send via MetaMask in the browser. You can start this via the following...

```
yarn start dev
```

Open the URL provided. Before clicking "Claim your Truffle Badge" you'll need to update your MetaMask RPC URL to that of your sandbox instance. Be sure the ChainId is set to `1337`.

Now click "Claim your Truffle Badge", this will lauch a dialog that allows you to sign the transaction that is submitted to the relayer.

## Questions

Any questions you can reach us at the [Truffle Slack community](https://truffle-community.slack.com).

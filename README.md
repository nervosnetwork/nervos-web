# nervos-web

Nervos is a suite of scalable and interoperable protocols and an open blockchain "Trustware" platform for decentralized applications. Trustware is a new decentralized computing paradigm that goes beyond distributed ledgers and smart contracts, to bring general expression of trust to meet the demand of today's real world applications.

In contrast to smart contract platforms, Nervos uses the "Common Knowledge Base", a simpler state machine with uniform state transition semantics for superior scalability, interoperability and better aligned incentives for all participants of the network.

## Features

* A New Decentralized Application Paradigm

  NERVOS designed a radically decoupled decentralized platform to allow multiple paths of scalability, transaction certainty and low local latency. This brings superior user experience to mobile and web DApps.

* Ready for Real World Applications

  Nervos comes with built-in identity support with flexible trust models for DApps to build real world trust based transactions.

* Interoperable with Existing Systems

      Nervos provides a standardized client interface with a small set of state transition semantics. Existing systems don't have to change their programming language, move their business rules, or break their engineering best practices to integrate with a world class public blockchain.

# Working on this page

## 0. Clone the repo

```bash
git clone https://github.com/NervosFoundation/nervos-web && cd nervos-web
```

## 1. Install Dependencies

```bash
yarn install
```

## 2. Build DLL Dependencies

```bash
yarn run dll
```

# Working on Develop Mode

```bash
yarn start
```

# 4. Build Pages to Dist

```bash
yarn run build:prod
```

# 5. Deploy to Github Pages

## 1. Specify `homepage` of your project

```json
// package.json
{
  ...
  "homepage": "https://nervosfoundation.github.io/nervos-web",
}
```

## 2. Auto deploy

```bash
yarn run deploy
```

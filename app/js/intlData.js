module.exports = {
  "locales": "en-US",
  "formats": {
    "date": {
      "short": {
        "day": "numeric",
        "month": "long",
        "year": "numeric"
      },
      "long": {
        "day": "numeric",
        "month": "short",
        "year": "numeric",
        "hour": "numeric",
        "minute": "numeric",
        "second": "numeric"
      }
    },
    "number": {
      "USD": {
        "style": "currency",
        "currency": "USD",
        "minimumFractionDigits": 2
      },
      "btc": {
        "maximumFractionDigits": 8
      },
      "ether": {
        "maximumFractionDigits": 18
      }
    }
  },
  "messages": {
    "loading": "loading",
    "error": "Error!",
    "slogan": "LaunchPAD Services",
    "balance": "Balance",
    "available": "Available",
    "trading": "Trading",
    "last": "Last Price",
    "price": "{price, number} {currency}/ETH",
    "trades": "Trades",
    "markets": "Markets",
    "amount": "Amount",
    "total": "Total",
    "by": "By",
    "network": "Network",
    "blocktime": "{time, number} s",
    "ether": "{value, number} {unit}",
    "init": {
      "loading": "Ethereum loading...",
      "ready": "The Ethereum block chain is current. Just a few more seconds...",
      "not_ready": `The Ethereum block chain is not current and
                    {peers, plural,
                      =0 {we're looking for peers}
                      =1 {is fetching blocks from # peer}
                      other {is fetching blocks from # peers}}.`,
      "force": "Load it anyway",
      "failed": {
        "header": "LNCH DEX failed to load",
        "explain": "There was a problem loading LNCH DEX.",
        "assistance": "Visit #lnch on IRC for assitance."
      },
      "connect": {
        "failed": "Ethereum network not found",
        "explain": `LNCH DEX requires an Ethereum connection to be running and current.
                    LNCH DEX could not detect the Ethereum network running which probably means
                    it's not installed, running or is misconfigured. All smart contracts have not yet been audited carefully multiple times. However, all contracts are WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.

Use at your own risk! By proceeding you confirm all terms and conditions.`,
        "assistance": `Get help!`
      },
      "install": {
        "title": "Installing and configuring Ethereum on your machine:",
        "OSX": {
          "brew": `<a target="_blank" href="http://brew.sh/">Install Homebrew</a> for Mac OS, then:`,
          "install": `brew tap ethereum/ethereum\nbrew install ethereum`,
          "link": `See also the <a href="{wiki}" target="_blank">Wiki page</a>
                  and the <a href="{brew}" target="_blank">homebrew-ethereum README</a>.`
        },
        "Ubuntu": {
          "PPA": `sudo apt-get install software-properties-common\nsudo add-apt-repository ppa:ethereum/ethereum\nsudo apt-get update\nsudo apt-get install ethereum`,
          "link": `See also the <a href="{wiki}" target="_blank">Wiki page</a>
                  and the <a href="{ppa}" target="_blank">PPA repository</a>.`
        },
        "Win": {
          "install": `Download the
                        <a href="https://build.ethdev.com/builds/Windows%20Go%20develop%20branch/Geth-Win64-latest.zip">
                          lastest geth build
                        </a>
                      for Windows`,
          "link": `See also the <a href="{wiki}" target="_blank">Wiki page</a>
                  and the <a href="{choco}" target="_blank">Chocolatery package</a>.`
        },
        "Others": {
          "build": `Follow the Ethereum
                      <a href="https://github.com/ethereum/go-ethereum/wiki/Building-Ethereum">
                        install guide
                      </a>
                    on GitHub`
        },
        "installed": `Once <pre className="small">geth</pre> is installed:`,
        "account": `Add a new account using: { geth }`,
        "start": `Start geth with: { geth }`
      },
      "block": {
        "age": "Last block was {age}.",
        "left": "Approximately {left, number} blocks left to go.",
        "genesis": "No block mined. This is the genesis."
      }
    },
    "demo": {
      "proceed": "Proceed in the pre-launch demo mode"
    },
    "nav": {
      "toggle": "Toggle navigation",
      "categories": "Categories",
      "trades": "Trades",
      "markets": "Markets",
      "wallet": "Wallets",
      "services": "Services",
      "help": "FAQ"
    },
    "sections": {
      "sub": "Services",
      "xchain": "SideChains",
      "assets": "Tokens",
      "currencies": "Currencies"
    },
    "wallet": {
      "balance": "In {currency} wallet: {balance, number}",
      "available": "Available {currency} balance: {balance, number}",
      "trading": "Currently trading {balance, number} {currency}",
      "sub": `{balance, plural,
                =0 {0 {currency}}
                other {# {currency}}
              }`,
      "pending": `{currency} balance: {balance, number}
                  {pending, plural,
                    =0 {}
                    other {(# pending)}
                  }`
    },
    "confirm": {
      "required": "Please Confirm",
      "estimate": "Gas Estimate",
      "no": "No",
      "yes": "Yes"
    },
    "form": {
      "buy": "Buy",
      "sell": "Sell",
      "buyorsell": "Buy or Sell",
      "amount": "Amount",
      "price": "Price",
      "total": "Total",
      "trade": "Place Trade",
      "new": "New Trade Commence",
      "deposit": "Deposit",
      "withdraw": "Withdraw",
      "recipient": "Recipient",
      "address": "Address",
      "market": "Market",
      "empty": "Please fill your tank!",
      "cheap": "Please don't be cheap!",
      "warning": "Warning!",
      "yours": "Your Trades"
    },
    "config": {
      "title": "Configure",
      "current": "LNCH wallet",
      "new": "New wallet",
      "blockfee": "BTC relay block fee",
      "blockfeehelp": "Amount of wei you would charge to other users for the BTC block headers you would successfully store to btcrelay.",
      "timeout": "Network timeout (seconds)",
      "update": "Update",
      "refresh": "Refresh",
      "debug_mode": "Debug mode",
      "debug_warning": "This will print logs to the console which slow down the UI considerably.",
      "address": "Please confirm change the exchange's address to {address} .",
      "si": "Use named large numbers for balances"
    },
    "address": {
      "size": `Address too {size, select,
                short {short}
                long {long}
              } .`
    },
    "deposit": {
      "currency": "Deposit {currency}",
      "confirm": "Please confirm deposit {amount, number} {currency} .",
      "not_enough": "Not enough {currency} for a deposit of {amount, number}, you have {balance, number}"
    },
    "sub": {
      "send": "Please confirm send {amount, number} {currency} to {recipient} .",
      "not_enough": "Not enough {currency} available to send, got {balance, number}",
      "register": "Services Registration",
      "code": "Services Code",
      "contract": "Contract Address",
      "minimum": "Minimum LNCH amount tethered",
      "decimals": "Decimals",
      "precision": "Price Precision",
      "confirm": `Please confirm register {code} at address {address}
        in the {category} section, with a minimum trade amount of {minimum} ETH,
        {decimals} decimals against the services and a price precision of {precision} .`
    },
    "withdraw": {
      "currency": "Withdraw {currency}",
      "confirm": "Please confirm withdraw {amount, number} {currency} .",
      "not_enough": "Not enough {currency} available for withdrawal, got {balance, number}, needs {amount, number}",
      "empty": "Please don't be cheap!"
    },
    "send": {
      "send": "Send",
      "currency": "Send {currency}"
    },
    "market": {
      "favorite": "Favorite",
      "pair": "Currency Pair",
      "change": "% change in<br />1w/3d/1d/1h/5m/2m/1m"
    },
    "trade": {
      "asks": "Asks",
      "bids": "Bids",
      "cancel": "Please confirm trade cancellation.",
      "confirm": `Please confirm {type, select,
                    buy {buy}
                    sell {sell}
                  } {amount, number} {currency} at {price, number} {currency}/ETH for a maximum of {total, number} ETH.`,
      "adding": `You will be adding a new trade of {amount, number} {currency}
                  at {price, number} {currency}/ETH for {total, number} ETH.`,
      "filling": `You will be filling
                  {numTrades, plural, =1 {one trade} other {# trades}}
                  for a total of {total, number} ETH
                  {left, plural,
                    =0 {}
                    other {({balance, number} ETH left)}} .`,
      "also_adding": `You will also be adding a new trade of {amount, number} {currency}
                      at {price, number} {currency}/ETH for {total, number} ETH.`,
      "not_left": `Not enough left for a new trade with {amount, number} for {total, number} ETH.`,
      "minimum": `Minimum total is {minimum, number} ETH`,
      "not_total": `Not enough ETH for this trade, {minimum, number} ETH required.`,
      "not_enough": `Not enough {currency} for this trade, {amount, number} {currency} required.`
    },
    "txs": {
      "block": "Block #",
      "inout": "In / Out",
      "type": "Type",
      "fromto": "From / To",
      "price": "Price",
      "amount": "Amount",
      "totaleth": "Total ETH",
      "details": "Details",
      "hash": "Hash",
      "id": "Trade ID"
    },
    "user": {
      "account": "My Account",
      "balances": "Balances",
      "not_found": "User not found",
      "address": "Current address",
      "total": "Total value (ETH)",
      "trades": "Open trades",
      "balance": `{balance, number} {currency}
                  {pending, plural,
                    =0 {}
                    other {(# pending)}
                  }`
    },
    "btc": {
      "sell": `Please confirm sell {amount} {unit}
               for {total} BTC at a price of {price} ETH/BTC,
               paid to {address} .`,
      "reserve": `Please confirm the reserve ticket # {id, number} at
                  {amount} {unit} for {total} BTC at a price of
                  {price} ETH/BTC, paid to {address} .`,
      "claim": `Please confirm claim ticket # {id, number} at
                  {amount} {unit} for {total} BTC at a price of
                  {price} ETH/BTC, paid to {address} .`,
      "behind": `BTC relay headers are behind by
                {behind, plural,
                  =1 {# block}
                  other {# blocks}}`,
      "update": "Update block headers"
    },
    "hashrate": "{hashrate, number} H/s"
  }
};

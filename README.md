# Token Circulating Supply REST API

This API provides the circulating supply for tokens, which can be useful for CoinGecko listings and other purposes.

## Usage

To use this API, add the tokens you want to track to the `tokens.json` file and deploy the application.

## Endpoints

### 1. Get Token Circulating Supply

Retrieves the circulating supply of a specific token.

- **URL:** `/:ticker/circulating`
- **Method:** GET
- **Path Parameters:**
  - `ticker` (string, required): The ticker symbol of the token, as specified in `tokens.json`.
- **Response:**
  - Status Code: 200 (OK)
  - Body:
    ```json
    {
      "circulating_supply": 1272.4545
    }
    ```
### 2. Get Total Supply
- **URL:** `/:ticker/total-supply`
- **Method:** GET
- **Path Parameters:**
  - `ticker` (string, required): The ticker symbol of the token, as specified in `tokens.json`.
- **Response:**
  - Status Code: 200 (OK)
  - Body:
    ```json
    {
      "total_supply": 200000000
    }
    ```

## `tokens.json` Format

The `tokens.json` file contains the token configuration. For each token, you can provide the following information:

`watch` specifies the address to sub from total supply
`flexible_supply` __`false`__ by default is used if token has flexible supply.
if brc20-token is not fully minted set to __`true`__ .Will automaticaly be flagged false internally if fully minted
`burn_or_bridge` address where certain funds were burned to or locked permanently in bridge as funds. Is optional 
```json
{
  "O4DX": {
    "name":"O4DX(Orangedx)",
    "chains": ["56", "btc"],
    "address": {
      "56": "0x062ca2d2F1aF8C203FA3Ad5298FD6fAa4E44E897",
      "btc": "O4DX"
    },
    "watch": {
      "56": ["..."],
      "btc": ["..."]
    },
    "flexible_supply":{
            "56":false,
            "btc":false
      },
    "burn_or_bridge":{
      "56":["0x135F5fA613330f444EDB51A29A25288086F37cf9"],
      "btc":[ "bc1ps0d9d5gw3tg6pz3pzqyj6u3w3j33suynvksmvu393x0vx5j2xvkq95ff5k"]       
    }
  }
}
```
## rate limit
default set at 15 req in 15 min.
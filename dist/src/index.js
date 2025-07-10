"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tokens_json_1 = __importDefault(require("../tokens.json"));
const express_rate_limit_1 = require("express-rate-limit");
const token_1 = require("./token");
const ethers_1 = require("ethers");
const app = (0, express_1.default)();
const port = 8080;
const limiter = (0, express_rate_limit_1.rateLimit)({
    windowMs: 15 * 60 * 1000, // 15 minutes
    limit: 15, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
    standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
    // store: ... , // Redis, Memcached, etc. See below.
});
app.use(limiter);
app.get('/', (req, res) => {
    res.send('Hello, TypeScript Express!');
});
// get circulating supply
app.get('/:ticker/circulating', async (req, res) => {
    try {
        let { ticker } = req.params;
        let token = tokens_json_1.default[ticker];
        if (!token)
            return res.status(400).json({ error: "400",
                message: "token ticker not support.Is case sensitive make sure is match"
            });
        let _circulating = await (0, token_1.circulating_supply)(token);
        return res.status(200).json({ "circulating_supply": ethers_1.ethers.formatEther(_circulating) });
    }
    catch (err) {
        return res.status(400).json({ error: "400",
            message: `ERROR: ${err}`
        });
    }
});
app.get('/:ticker/total-supply', async (req, res) => {
    try {
        let { ticker } = req.params;
        let token = tokens_json_1.default[ticker];
        if (!token)
            return res.status(400).json({ error: "400",
                message: "token ticker not support.Is case sensitive make sure is match"
            });
        let _total = await (0, token_1.total_supply)(token);
        return res.status(200).json({ "total_supply": ethers_1.ethers.formatEther(_total) });
    }
    catch (err) {
        return res.status(400).json({ error: "400",
            message: `ERROR: ${err}`
        });
    }
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

import express, { Application, Request, Response } from "express";
import tokens from "../tokens.json";
import { rateLimit } from "express-rate-limit";
import { circulating_supply, Token } from "./token";
import { ethers } from "ethers";
import "dotenv/config";

const app: Application = express();
const port = process.env.port;

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 15, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
  standardHeaders: "draft-7", // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
  // store: ... , // Redis, Memcached, etc. See below.
});

app.use(limiter);
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript Express!");
});

// get circulating supply
app.get("/:ticker/circulating", async (req: Request, res: Response) => {
  try {
    let { ticker } = req.params;
    let token: Token | undefined = tokens[
      ticker as keyof typeof tokens
    ] as unknown as Token;
    if (!token)
      return res.status(400).json({
        error: "400",
        message:
          "token ticker not support.Is case sensitive make sure is match",
      });
    let _circulating = await circulating_supply(token);

    return res
      .status(200)
      .json({ circulating_supply: ethers.formatEther(_circulating) });
  } catch (err) {
    return res.status(400).json({ error: "400", message: `ERROR: ${err}` });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

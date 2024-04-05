import express, { Application, Request, Response } from 'express';
import tokens from "../tokens.json";
import { Token, totalSupplpy } from './token';
const app: Application = express();
const port = 8080;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript Express!');
});

// get circulating supply
app.get('/:ticker/circulating',async(req:Request,res:Response)=>{
  try{
    let {ticker} = req.params
    let token:Token | undefined = tokens[ticker as keyof typeof tokens] as unknown as Token
    if(!token) return res.status(400).json(
        {error:"400",
         message:"token ticker not support.Is case sensitive make sure is match"   
        })
    let _totalSupplpy = await totalSupplpy(token);
    return res.status(200).json({"circulating_supply":_totalSupplpy.toString()})
  }catch(err){
    return res.status(400).json(
      {error:"400",
       message:`ERROR: ${err}`   
      })
  }

})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
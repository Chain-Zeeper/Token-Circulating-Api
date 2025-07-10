import { z } from 'zod';
import dotenv from 'dotenv';

const envSchema = z.object({
  PORT: z.string().default('3000'),
  MONGODB_URI: z.string(),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
});
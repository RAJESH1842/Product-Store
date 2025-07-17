import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";

dotenv.config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD} = process.env;

export const sql = neon(
    `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require&channel_binding=require`
)

// postgresql://neondb_owner:npg_W5TFeKHfAy7R@ep-wild-paper-a8q8pwqa-pooler.eastus2.azure.neon.tech/neondb?sslmode=require&channel_binding=require

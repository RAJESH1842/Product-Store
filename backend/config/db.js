import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";

dotenv.config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD} = process.env;

// creates a sql connection using our env variables 
export const sql = neon(
    `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require&channel_binding=require`
)

//this sql function we export is used to query as a tagged template literal, which allows us to write SQL queries safely

// postgresql://neondb_owner:npg_W5TFeKHfAy7R@ep-wild-paper-a8q8pwqa-pooler.eastus2.azure.neon.tech/neondb?sslmode=require&channel_binding=require

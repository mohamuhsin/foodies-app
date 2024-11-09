// importing sql
import sql from "better-sqlite3";

// starting the db
const db = sql("meals.db");

// fetching all meals and all() is used to fetch data with all rows or multiple rows

export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    //throw new Error("Loading meals failed");
    return db.prepare("SELECT * FROM meals").all();
}

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

export function getMeal(slug) {
    // we dont enter the slug directly as a value like  return db.prepare("SELECT * FROM meals WHERE slug = + slug")
    // to protect us against sql attacks
    return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug); // no attacks
} // this can now return a meal

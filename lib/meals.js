import fs from "node:fs";

// importing sql
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

// starting the db
const db = sql("meals.db");

// fetching all meals and all() is used to fetch data with all rows or multiple rows

export function getMeals() {
    // await new Promise((resolve) => setTimeout(resolve, 2000));
    //throw new Error("Loading meals failed");
    return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
    // we dont enter the slug directly as a value like  return db.prepare("SELECT * FROM meals WHERE slug = + slug")
    // to protect us against sql attacks
    return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug); // no attacks
} // this can now return a meal

export async function saveMeal(meal) {
    meal.slug = slugify(meal.title, { lower: true });
    meal.instructions = xss(meal.instructions);

    const extension = meal.image.name.split(".").pop();
    const fileName = `${meal.slug}.${extension}`;

    const stream = fs.createWriteStream(`public/images/${fileName}`);
    const bufferedImage = await meal.image.arrayBuffer();

    stream.write(Buffer.from(bufferedImage), (error) => {
        if (error) {
            throw new Error("Saving image failed");
        }
    });

    meal.image = `/images/${fileName}`;

    db.prepare(
        `
        INSERT INTO MEALS
        (title, summary, instructions, creator, creator_email, image, slug)
        VALUES (
        @title,
        @summary,
        @instructions,
        @creator,
        @creator_email,
        @image,
        @slug
        )`
    ).run(meal);
}

import sql from 'better-sqlite3';
import slugify from "slugify";
import xss from "xss";
import fs from 'node:fs'

const db = sql('meals.db', { verbose: console.log });

const isProduction = process.env.NODE_ENV === "production";

export async function getMeals() {
    return new Promise((resolve, reject) => {
        const meals = db.prepare('SELECT * FROM meals').all();
        if (isProduction) {
            resolve(meals)
        }
        setTimeout(() => {
            Math.random() < 0.9 ? resolve(meals) : reject(new Error('Failed to fetch meals'))

        }, 2400)
    })
}

export function getMeal(slug) {
    return db.prepare(`SELECT * FROM meals WHERE slug = ?`).get(slug);
}

export async function saveMeal(mealData) {
    const slug = slugify(mealData.title, { lower: true, strict: true });
    const instructions = xss(mealData.instructions);

    const imgPath = await uploadImage(slug, mealData.image);

    const data = {
        slug,
        title: mealData.title,
        summary: mealData.summary,
        instructions,
        image: imgPath,
        creator: mealData.name,
        creator_email: mealData.email
    }

    db.prepare(
        'INSERT INTO meals (slug, title, summary, instructions, image, creator, creator_email) '  +
        ' VALUES (@slug, @title, @summary, @instructions, @image, @creator, @creator_email)'
    ).run(data);
}

async function uploadImage(slug, img) {
    const ext = img.name.split('.').pop();
    const fileName = `${slug}-${Date.now()}.${ext}`;

    const path = `./public/images/${fileName}`;
    return new Promise(async (resolve, reject) => {
        const rs = fs.createWriteStream(path);

        const imgBuffer = await img.arrayBuffer()
        rs.write(Buffer.from(imgBuffer),
            (err) => err ? reject(err) : resolve(`/images/${fileName}`)
        );
        rs.end();
    })
}
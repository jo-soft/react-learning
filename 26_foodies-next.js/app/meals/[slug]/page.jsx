import  classes  from './page.module.css';
import {getMeal} from "@/lib/meals.gateway";
import Image from "next/image";
import {notFound} from "next/navigation";

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const meal = getMeal(slug);
    if (!meal) {
        return {
            title: 'Foodies - Meal not found',
            description: 'Meal not found',
        }
    }
    return {
        title: `Foodies - ${meal.title}`,
        description: meal.summary,
    }
}

export default async function Meal ({ params }) {

    const { slug } = await params;
    const meal = getMeal(slug);
    if (!meal) {
        notFound()
    }

    return (
        <>
            <header className={classes.header}>
                <div className={classes.image}>
                    <Image src={meal.image} alt={meal.title} fill/>
                </div>
                <div className={classes.headerText}>
                    <h1> { meal.title }</h1>
                    <p className={classes.creator}>
                        by <a href={`mailTo:${meal.creator_email}`}>{ meal.creator }</a>
                    </p>
                    <p className={classes.summary}> { meal.summary }</p>
                </div>
            </header>
            <main>
                <p
                    className={classes.instructions}
                    dangerouslySetInnerHTML={{__html: meal.instructions}}
                ></p>
            </main>
        </>
    )
}
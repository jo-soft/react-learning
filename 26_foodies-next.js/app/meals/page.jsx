import Link from 'next/link';
import {  Suspense } from 'react';
import classes from './page.module.css';
import MealGrid from "@/components/meals/grid/meal-grid";
import {getMeals} from "@/lib/meals.gateway";

export const metadata = {
    title: 'Foodies - Meals',
    description: 'Meals page',
}
async function Meals() {

    const meals = await getMeals();
    return <MealGrid meals={meals}></MealGrid>
}

export default function Home() {

    const loadingFallback = (
            <p className={classes.loading}>Fetching meals</p>
        )
    return (
        <>
            <header className={classes.header}>
                <h1>
                    Delicious Meals, created{' '}
                    <span className={classes.highlight}> by you </span>
                </h1>
                <p>
                    Chose your favorite recipie and cook it yourself.
                </p>
                <p className={classes.cta}>
                    <Link href='/meals/share'>
                        Share your favorite meal
                    </Link>
                </p>
            </header>
            <main className={classes.main}>
                <Suspense fallback={loadingFallback}>
                    <Meals/>
                </Suspense>
            </main>
       </>
    );
}
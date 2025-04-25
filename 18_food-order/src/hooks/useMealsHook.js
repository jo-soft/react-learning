import {useEffect, useState} from "react";
import {loadMeals} from "../services/http.gateway.js";

export default function useMeals(){

    const [meals, setMeals] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    async function innerLoadMeals() {
        setIsLoading(true)
        setError(null)
        try {
            const meals =  await loadMeals();
            setMeals(meals)
        } catch (error) {
            setError(error.message)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        innerLoadMeals()
    }, []);

    return {
        meals,
        isLoading,
        error,
    }

}
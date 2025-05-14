'use server';
import { redirect } from "next/navigation";
import {saveMeal} from "@/lib/meals.gateway";
import {revalidatePath} from "next/cache";
1
export async function shareMealAction(_prev, formData) {

    const formDataObj = {
        name: formData.get('name'),
        email: formData.get('email'),
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: formData.get('image')
    }

    const invalidFields = Object.entries(formDataObj).filter(([_, value]) => {
        return !value || value.trim? value.trim() === '' : false;
    });

    if(invalidFields.length || !formData.email.includes('@') || !formData.image.size ) {
        return { invalidFields: invalidFields.map(([key]) => key)};
    }

    await saveMeal(formDataObj);
    revalidatePath('/meals');
    redirect('/meals')
}
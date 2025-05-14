'use client'

export  default function ErrorPage({error}) {

    const errorJson = JSON.stringify(error, Object.getOwnPropertyNames(error));

    return (
        <main className='error'>
            <h1>Something went wrong</h1>
            <p> { errorJson }</p>
        </main>
    )
}
export async function loadMeals() {
    const res = await fetch('http://localhost:3000/meals')
    if (!res.ok) {
        throw new Error('Failed to fetch meals')
    }
    return  res.json()
}

export async function order (customer, items) {
    const resp = await fetch('http://localhost:3000/orders', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ order: {
            items, customer
            }})
    })
    if (!resp.ok) {
        throw new Error('Failed to send order')
    }
    return resp.json()
}
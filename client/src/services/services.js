const baseURL = 'http://localhost:9000/api/dinosaurs'

export const getDinosaurs = () => {
    return fetch(baseURL)
        .then(res => res.json())
}

export const postDinosaur = (payload) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(res => res.json())
}

export const deleteDinosaur = (id) => {
    return fetch(baseURL + id, {
        method: 'DELETE'
    })
}
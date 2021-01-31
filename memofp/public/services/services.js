
export async function getNote() {

    const response = await fetch('/api/getnote');
    return await response.json();
}

export async function updateNote(content) {
    const response = await fetch(`/api/savenote`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({note: content})
      })
    return await response;
}
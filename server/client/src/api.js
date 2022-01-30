const APIURL = 'https://insta-groom.herokuapp.com/api/message'

export const createMessage = async (message) => {
    const response = await fetch(APIURL, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(message),
    });
    return response.json()
}
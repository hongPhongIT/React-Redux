const url = "http://5b1a5a9483b6190014ca3a86.mockapi.io/";

const data = async () => {
    let result = await fetch(url + "users", {
        method: 'GET',
        headers: {}
    });

    if (result.ok) {
        return await result.json();
    }
}

export default data
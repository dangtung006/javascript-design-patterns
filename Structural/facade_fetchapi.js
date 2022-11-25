//https://jsonplaceholder.typicode.com/users  api user
//https://jsonplaceholder.typicode.com/posts  api post param : { userId : 1}

async function getFetch(url, params = {}){
    const queryString = Object.entries(params).map(param => `${param[0]}=${param[1]}`).join('&');
    return  await fetch(`${url}?${queryString}`, {
                method : "GET",
                headers: { "Content-Type": "application/json" }
            }).then(_r=> _r.json());
}

async function fetchUser(){
    return await getFetch("https://jsonplaceholder.typicode.com/users");
}

async function fetchPost(params){
    return await getFetch("/https://jsonplaceholder.typicode.com/posts", params);
}

async function loadUserAdPost(){
    let user = await fetchUser();
    let postOfFirstUser = await fetchPost({ userId : user[0].id});
}

loadUserAdPost();

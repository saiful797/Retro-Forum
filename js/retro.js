const latestPost = async () =>{
    const url = 'https://openapi.programming-hero.com/api/retro-forum/latest-posts';
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
}

latestPost();
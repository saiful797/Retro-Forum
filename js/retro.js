const latestPost = async () =>{
    const url = 'https://openapi.programming-hero.com/api/retro-forum/latest-posts';
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data);

    data.forEach(postData => {
        // console.log(postData);
        const latestPostCard = document.getElementById('latest-post-card');
        
        const createLatestCard = document.createElement('div');

        createLatestCard.classList = `card w-96 bg-base-100 shadow-xl`;
        createLatestCard.innerHTML =`
        <figure class="px-10 pt-10">
            <img src="${postData.cover_image}" alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body space-y-3">
            <h2 class="flex gap-1"> 
                <span><img src="images/icons/calender.svg" alt=""></span>29 January 2024
            </h2>
            <p class="text-xl font-medium">Gaming Enthusiast Expert in Play</p>
            <p>Leading gaming expert with a wealth of knowledge and passion for all things gaming</p>
            <div class="flex gap-5">
                <div>
                    <img src="images/profile.png" alt="">
                </div>
                <div>
                    <h2 class="text-xl font-bold">Cameron Williamson</h2>
                    <p>Unknown</p>
                </div>
            </div>
        </div>
        `
        latestPostCard.appendChild(createLatestCard);
    })
}

latestPost();
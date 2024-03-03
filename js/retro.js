// Discussion Cards
const discussionCardMusic = async () => {
    const url = 'https://openapi.programming-hero.com/api/retro-forum/posts';
    const res = await fetch(url);
    const posts = await res.json();
    const postsCards = posts.posts;
    console.log(postsCards);

    postsCards.forEach(post =>{
        // console.log(post);
        
    })
}

discussionCardMusic();

// Latest Post Cards
const latestPost = async () =>{
    const url = 'https://openapi.programming-hero.com/api/retro-forum/latest-posts';
    const res = await fetch(url);
    const data = await res.json();

    data.forEach(postData => {
        let latestPostDate = '';
        let authorDesignation = '';

        const latestPostCard = document.getElementById('latest-post-card');

        //Published Date
        const postDate = postData.author.posted_date;
        if(!!postDate){
            latestPostDate = postData.author.posted_date;
        }
        else{
            latestPostDate = 'No publish date';
        }

        //Author Designation
        authorDesignation = postData.author.designation;
        if(!!authorDesignation){
            authorDesignation = postData.author.designation;
        }
        else{
            authorDesignation = 'Unknown';
        }
        
        // Create div for Latest Post Cards
        const createLatestCard = document.createElement('div');

        createLatestCard.classList = `card w-96 h-[600px] bg-base-100 shadow-2xl`;
        createLatestCard.innerHTML =`
        <figure class="px-10 pt-10">
            <img src="${postData.cover_image}" alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body space-y-3">
            <h2 class="flex gap-1"> 
                <span><img src="images/icons/calender.svg" alt=""></span>${latestPostDate}
            </h2>
            <p class="text-xl font-medium">${postData.title}</p>
            <p>${postData.description}</p>
            <div class="flex gap-5">
                <div>
                    <img class="rounded-full h-16 w-16" src="${postData.profile_image}" alt="">
                </div>
                <div>
                    <h2 class="text-xl font-bold">${postData.author.name}</h2>
                    <p>${authorDesignation}</p>
                </div>
            </div>
        </div>
        `
        //AppendChild div (latestPostCard is a div)
        latestPostCard.appendChild(createLatestCard);
    })
}

latestPost();
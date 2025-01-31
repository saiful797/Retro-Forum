// search input
const searchBtn = document.getElementById('search-btn');

searchBtn.addEventListener('click',function(){
    const searchInputField = document.getElementById('search-input');
    const searchValue = searchInputField.value;
    searchAll(searchValue);
});

const loadingToggleSpinner = () =>{
    const toggleSpinner = document.getElementById('toggle-spinner');
    toggleSpinner.classList.remove('hidden');

    setTimeout(function(){
        toggleSpinner.classList.add('hidden');
    },2000);
    
}

const searchAll =async (searchValue) => {
    
    const url = `https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchValue}`
    const res = await fetch(url);
    const searchData = await res.json();

    const searchCards = searchData.posts;

    let id1 = 0;
    const allPostsCards = document.getElementById('all-posts-cards');
    allPostsCards.innerHTML = '';

    searchCards.forEach(post =>{
        const postsCard = document.createElement('div');
        postsCard.classList =`search-button flex gap-10 bg-slate-200 p-5 rounded-2xl`;
        postsCard.innerHTML = `
        <div id="card${id1}" class=" h-20 w-20 flex justify-center items-center relative rounded-xl">
            <img class="rounded-2xl" src="${post.image}" alt="">
        </div>
        <div class="space-y-4 w-full">
            <div class="flex gap-x-20">
                <p>#${post.category}</p>
                <p>Author : ${post.author.name}</p>
            </div>
            <h2 id="post-title${id1}" class="text-2xl font-bold">${post.title}</h2>
            <p class="text-lg font-medium">${post.description}</p>
            <hr class="w-full h-[2px] bg-[#949393]">
            <div class="flex justify-between">
                <div class="flex justify-between gap-x-10">
                    <div class="gap-2 flex">
                        <h5><i class="fa-regular fa-message"></i></h5>
                        <p>${post.comment_count}</p>
                    </div>
                    <div class="gap-2 flex">
                        <h5><i class="fa-regular fa-eye"></i></h5>
                        <p>${post.view_count}</p>
                    </div>
                    <div class="gap-2 flex">
                        <h5><i class="fa-regular fa-clock"></i></h5>
                        <p id='post${id1}'>${post.posted_time} min</p>
                    </div>
                </div>
                <div onclick="markAsRead()" class="btn w-12 h-12 rounded-full bg-[#10B981] flex justify-center items-center">
                    <div class="text-white w-10"><i class="fa-solid fa-envelope-open-text"></i></div>
                </div>
            </div>
        </div>
             
        `
        id1 +=1 ;
        allPostsCards.appendChild(postsCard);
    })

    let id2 = 0;
    searchCards.forEach(post => {
        let cardId = 'card' + id2;
        // console.log(post.isActive);
        if(!!post.isActive){
            const isActiveStatus = document.getElementById(cardId);
            const div = document.createElement('div');

            div.classList = `absolute h-5 w-5 bg-[#10B981] -top-1 -right-1 rounded-full border-2 border-white`;

            isActiveStatus.appendChild(div);
        }

        else{
            const isActiveStatus = document.getElementById(cardId);
            const div = document.createElement('div');

            div.classList = `absolute h-5 w-5 bg-[#ff3535] -top-1 -right-1 rounded-full border-2 border-white`;

            isActiveStatus.appendChild(div);
        }

        id2 += 1;
    })
}


// Discussion Cards
const discussionCardMusic = async () => {
    const url = 'https://openapi.programming-hero.com/api/retro-forum/posts';
    const res = await fetch(url);
    const posts = await res.json();
    const postsCards = posts.posts;

    let id1 = 0;
    postsCards.forEach(post =>{
        const allPostsCards = document.getElementById('all-posts-cards');
        const postsCard = document.createElement('div');
        postsCard.classList =`search-button flex gap-10 bg-slate-200 p-5 rounded-2xl`;
        postsCard.innerHTML = `
        <div id="card${id1}" class="h-20 w-20 flex justify-center items-center relative rounded-xl">
            <img class="rounded-2xl" src="${post.image}" alt="">
        </div>
        <div class="space-y-4 w-full">
            <div class="flex gap-x-20">
                <p>#${post.category}</p>
                <p>Author : ${post.author.name}</p>
            </div>
            <h2 id="post-title${id1}" class="text-2xl font-bold">${post.title}</h2>
            <p class="text-lg font-medium">${post.description}</p>
            <hr class="w-full h-[2px] bg-[#949393]">
            <div class="flex justify-between">
                <div class="flex justify-between gap-x-10">
                    <div class="gap-2 flex">
                        <h5><i class="fa-regular fa-message"></i></h5>
                        <p>${post.comment_count}</p>
                    </div>
                    <div class="gap-2 flex">
                        <h5><i class="fa-regular fa-eye"></i></h5>
                        <p>${post.view_count}</p>
                    </div>
                    <div class="gap-2 flex">
                        <h5><i class="fa-regular fa-clock"></i></h5>
                        <p id='post${id1}'>${post.posted_time} min</p>
                    </div>
                </div>
                <div onclick="markAsRead()" class="btn w-12 h-12 rounded-full bg-[#10B981] flex justify-center items-center">
                    <div class="text-white w-10"><i class="fa-solid fa-envelope-open-text"></i></div>
                </div>
            </div>
        </div>
             
        `
        id1 +=1 ;
        allPostsCards.appendChild(postsCard);

    })

    let id2 = 0;
    postsCards.forEach(post => {
        let cardId = 'card' + id2;
        // console.log(post.isActive);
        if(!!post.isActive){
            const isActiveStatus = document.getElementById(cardId);
            const div = document.createElement('div');

            div.classList = `absolute h-5 w-5 bg-[#10B981] -top-1 -right-1 rounded-full border-2 border-white`;

            isActiveStatus.appendChild(div);
        }

        else{
            const isActiveStatus = document.getElementById(cardId);
            const div = document.createElement('div');

            div.classList = `absolute h-5 w-5 bg-[#ff3535] -top-1 -right-1 rounded-full border-2 border-white`;

            isActiveStatus.appendChild(div);
        }

        id2 += 1;
    })
}

discussionCardMusic();

// Message Read Marks
const markAsRead = () =>{
    
    const readMarks = document.getElementById('show-read-marks');
    const getSearchButtonByClassName = document.querySelectorAll('.search-button');
    // console.log(getSearchButtonByClassName);
    
    let count =1;
    for(const i=0; i<getSearchButtonByClassName.length; i++){
        const postTitleId ='post-title'+ i;
        const postId = 'post'+i;
        const postTitle = document.getElementById(postTitleId).innerText;
        const postViews = document.getElementById(postId).innerText;
        const readCunt = document.getElementById('read-count');

        const div = document.createElement('div');

        div.classList = `flex justify-between  items-center gap-3 h-24 bg-slate-200 p-2 rounded-lg shadow-sm shadow-black`;
        div.innerHTML = `
        <h1>${postTitle}</h1>
        <div class="gap-2 flex">
            <h5><i class="fa-regular fa-eye"></i></h5>
            <p>${postViews}</p>
        </div>
        `
        readCunt.innerText = count;
        readMarks.appendChild(div);
        count += 1;
    }
    
}

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
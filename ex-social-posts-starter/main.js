const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://fastly.picsum.photos/id/586/300/300.jpg?hmac=OEMqoT0vc--kdxhsBH98bGiIZXECex_Z-enrJzb_zKE",
        "author": {
            "name": "Phil Mangione",
            "image": "https://fastly.picsum.photos/id/229/300/300.jpg?hmac=86qAOpgBd7yEGRanbjRwsDZOToG5OB1K-q8V0D2K1tw"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://fastly.picsum.photos/id/981/300/300.jpg?hmac=AWoJvVfsEsA0MJ52EdwYSOj0s2eXvpAfQ6Sexz18nt4",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://fastly.picsum.photos/id/95/300/300.jpg?hmac=UxnATRiKTaz00swb6N_RqMvNTIDcPQlWSitj1IW3MSY"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://fastly.picsum.photos/id/458/300/300.jpg?hmac=G31AwQ4RMKNwOc7MQTynn6tY20NAuQJEP9xvoW92h_A",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://fastly.picsum.photos/id/721/300/300.jpg?hmac=YZ_QsMBbiNc-1eFoGWJ3xMZm8F0I0uP3Oz95l-2qhA0"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://fastly.picsum.photos/id/160/300/300.jpg?hmac=P-rqJqfqiNLynO0VgrMpPtcTuCPhjF-hRwM_JK3LenQ",
        "author": {
            "name": "Luca Formicola",
            "image": "https://fastly.picsum.photos/id/866/300/300.jpg?hmac=9qmLpcaT9TgKd6PD37aZJZ_7QvgrVFMcvI3JQKWVUIQ"
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://fastly.picsum.photos/id/532/300/300.jpg?hmac=dhdWLxwBjf3qgG4Tb2zomR-Bk5DLo3f69KkoM1MbDiE",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://fastly.picsum.photos/id/390/300/300.jpg?hmac=vIwFiXdW16lazu7WfEtZYsQ3UJSXWKISG7tOiTT-nhc"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

const postContainer = document.getElementById('container');
for (let i = 0 ; i < posts.length ; i = i + 1){
    const postElement = posts[i];
    postContainer.innerHTML += 

  ` <div class="post">
       <div class="post__header">
           <div class="post-meta">                    
               <div class="post-meta__icon">
                   <img class="profile-pic" src="${postElement.author.image}" alt="${postElement.author.name}">                    
               </div>
               <div class="post-meta__data">
                   <div class="post-meta__author">${postElement.author.name}</div>
                   <div class="post-meta__time">${postElement.created}</div>
               </div>                    
           </div>
       </div>
       <div class="post__text">Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.</div>
       <div class="post__image">
           <img src="${postElement.media}" alt="">
       </div>
       <div class="post__footer">
           <div class="likes js-likes">
               <div class="likes__cta">
                   <div class="like-button  js-like-button" href="#" data-postid="1">
                       <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                       <span class="like-button__label">Mi Piace</span>
                   </div>
               </div>
               <div class="likes__counter">
                   Piace a <b id="like-counter-1" class="js-likes-counter">${postElement.likes}</b> persone
               </div>
           </div> 
       </div>            
   </div> `
}

 const likeButton = document.querySelectorAll('span.like-button__label');
 const numberOfLikes = document.getElementById('like-counter-1');
 for (let i = 0 ; i < likeButton.length ; i++){
    likeButton[i].addEventListener('click' , function(){
        console.log(likeButton[i]);
        likeButton[i].classList.toggle('like-button--liked');
        const postElement = posts[i];
        const likes = postElement.likes;
        console.log(likes);
        const totaLikes = likes + 1 ;
        console.log(totaLikes);
    })
 }
 

 for (let i = 0 ; i < numberOfLikes.length ; i++){
    likeButton[i].addEventListener('click' , function(){
        const postElement = posts[i];
        const likes = postElement.likes;
        const totaLikes = likes + 1 ;
        console.log(totaLikes);
        numberOfLikes.appendChild(totaLikes)
    })

 }
 

/* 
const likeButton = document.getElementsByClassName('likes__cta');
likeButton.addEventListener('click', function(){
    likeButton.classList.add('like-button--liked');
    postElement.like = postElement.like + 1 ;
    for (let i = 0 ; i < posts.length ; i = i + 1){
        const postElement = posts[i];
        postContainer.innerHTML = '';
        postContainer.innerHTML = 
    
      ` <div class="post">
           <div class="post__header">
               <div class="post-meta">                    
                   <div class="post-meta__icon">
                       <img class="profile-pic" src="${postElement.author.image}" alt="${postElement.author.name}">                    
                   </div>
                   <div class="post-meta__data">
                       <div class="post-meta__author">${postElement.author.name}</div>
                       <div class="post-meta__time">${postElement.created}</div>
                   </div>                    
               </div>
           </div>
           <div class="post__text">Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.</div>
           <div class="post__image">
               <img src="${postElement.media}" alt="">
           </div>
           <div class="post__footer">
               <div class="likes js-likes">
                   <div class="likes__cta">
                       <a class="like-button  js-like-button" href="#" data-postid="1">
                           <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                           <span class="like-button__label">Mi Piace</span>
                       </a>
                   </div>
                   <div class="likes__counter">
                       Piace a <b id="like-counter-1" class="js-likes-counter">${postElement.likes}</b> persone
                   </div>
               </div> 
           </div>            
       </div> `
    }
     
});

*/
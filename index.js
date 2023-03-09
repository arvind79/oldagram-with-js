let posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        caption: "just took a few mushrooms lol",
        likes: 100
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        caption: "i'm feeling a bit stressed tbh",
        likes: 100
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        caption: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 100
    }
]

const nextBtn = document.getElementById("next-btn")
const heartEl = document.getElementById("heart-el")

const userAvatarEl = document.getElementById("user-avatar-el")
const userNameEl = document.getElementById("user-name-el")
const userLocationEl = document.getElementById("user-location-el")
const userPostEl = document.getElementById("user-post-el")
const userLikesEl = document.getElementById("user-likes-el")
const userIdEl = document.getElementById("user-id-el")
const userCaptionEl = document.getElementById("user-caption-el")

const postsFromLocalStorage = JSON.parse( localStorage.getItem("posts") )
posts = Object.assign(posts, postsFromLocalStorage)

let nextIndex = 2
let currentIndex = nextIndex

function initialRender() {
    if(currentIndex>0) {currentIndex = currentIndex-1}
    else {currentIndex=posts.length-1}

    render(currentIndex)
}

initialRender()

nextBtn.addEventListener("click", function() {

    render(nextIndex)    

    nextIndex = (nextIndex+1)%3;
})

heartEl.addEventListener("click", function() {
    currentIndex = nextIndex

    if(currentIndex>0) {currentIndex = currentIndex-1}
    else {currentIndex=posts.length-1}

    posts[currentIndex].likes++;
    changeUserLikes(posts[currentIndex].likes)

    localStorage.setItem("posts", JSON.stringify(posts))
})


function render(nextIndex) {
    changeUserAvatar(posts[nextIndex].avatar)

    changeUserName(posts[nextIndex].name)

    changeUserLocation(posts[nextIndex].location)

    changeUserPost(posts[nextIndex].post)

    changeUserLikes(posts[nextIndex].likes)

    changeUserID(posts[nextIndex].username) 

    changeUserCaption(posts[nextIndex].caption)
}


function changeUserAvatar(imgAddress) {
    userAvatarEl.src = imgAddress
}

function changeUserName(name) {
    userNameEl.textContent = name;
}

function changeUserLocation(location) {
    userLocationEl.textContent = location
}

function changeUserPost(postAddress) {
    userPostEl.src = postAddress
}

function changeUserLikes(num) {
    userLikesEl.textContent = num + " likes"
}

function changeUserID(userName) {
    userIdEl.textContent = userName
}

function changeUserCaption(caption) {
    userCaptionEl.textContent = caption
}
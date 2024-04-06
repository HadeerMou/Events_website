// comment container
/*var feild = document.querySelector('.form_info');
var backUp = feild.getAttribute('placeholder');
var btn = document.querySelector('.btn');
var clear = document.getElementById('cancel')

feild.onfocus = function(){
    this.setAttribute('placeholder', '');
    this.style.borderColor = '#333';
    btn.style.display = 'block'
}

feild.onblur = function(){
    this.setAttribute('placeholder',backUp);
    this.style.borderColor = '#aaa'
}

clear.onclick = function(){
    btn.style.display = 'none';
    feild.value = '';
}*/

//card
const submitBtn = document.querySelector('.submit')
const userName = document.querySelector('#user')
const comment = document.querySelector('#comment')
const likeIcon = document.querySelector('.like')
const count = document.querySelector('.count')
const commentsCont = document.querySelector('.commentcontainer')

likeIcon.addEventListener('click', likeVideo)
submitBtn.addEventListener('click', submitFeedback)


feedbackArr = []
let positiveFeedback = false
let likesCount = 0

function submitFeedback(e){
    // get user name
    const userForm = userName.value 
    // get feedback
    const commentForm = comment.value 
    // if inputs are not empty
    if(userForm && commentForm !== ''){
        // create new feedback
        newFeedback = {
            "id": Math.floor((Math.random() * 1000)+ 1),
            "userName": userForm,
            "userComment": commentForm,
            "typeOfFeedback": positiveFeedback
        }
        // add new feedback to array
        feedbackArr.push(newFeedback)
        // if liked add to count
        if(positiveFeedback === true){
            addLikes()
        }
        // clear inputs 
        resetForm()
        // add feedback to list
        addFeedback(newFeedback)
    }


    e.preventDefault()
}

function likeVideo(){
    likeIcon.classList.toggle('liked')

    if(likeIcon.classList.contains('liked')){
        likeIcon.innerHTML = `<i class="heart"></i>`
        // set feedback to liked
        positiveFeedback = true
    } else {
        likeIcon.innerHTML = `<i class="heart"></i>`
        // set feedback to not liked
        positiveFeedback = false
    }
}

function addLikes(){
    likesCount++
    count.innerHTML = likesCount
}

function resetForm(){
    userName.value = ''
    comment.value = ''
    likeIcon.innerHTML = `<i class="far fa-heart"></i>`
    positiveFeedback = false
}

function addFeedback(item){
    // select first letter of the user name
    const letter = (item.userName).charAt(0)
    // create new div
    const div = document.createElement('div')
    // add class
    div.classList = 'commentcard'
    // add id
    div.id = item.id 
    // add html
    div.innerHTML = `
                <div class="comment__info">
                    <small class="username">
                        ${item.userName}
                    </small>
                    <p class="comment">
                        ${item.userComment}
                    </p>
                    <div class="comment_bottom">
                        <div class="like">
                            ${item.typeOfFeedback ? `<i class="fas fa-heart"></i>` : `<i class="fas fa-heart"></i>`}
                        </div>
                        <div class="time">1h</div>
                    </div>
                </div>
    `
    // insert feedback into the list
    commentsCont.insertAdjacentElement('beforeend', div)
}


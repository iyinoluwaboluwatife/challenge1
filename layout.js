
let share = document.querySelector('.share');
let shareActive = document.querySelector('.shareactive');
let socialMedia = document.querySelector('.socialmedia');
let avatar = document.querySelector('.avatar');

function shareActiveHandler(e){
    e.preventDefault();
     shareActive.style.visibility = 'hidden';
     share.style.visibility = 'visible';
     socialMedia.style.visibility = 'hidden';
     avatar.style.visibility = 'visible';
     //if (window.innerWidth > 1000){
     // avatar.style.visibility = 'visible';
     //}else{
     // avatar.style.visibility = 'hidden';
    // }
}    
function shareHandler(e){
    e.preventDefault();
    share.style.visibility = 'hidden';
    shareActive.style.visibility = 'visible';
    socialMedia.style.visibility = 'visible';
    if (window.innerWidth > 1000){
        avatar.style.visibility = 'visible';
    }else{
        avatar.style.visibility = 'hidden';
    }
}
if(shareActiveHandler){
    shareActive.addEventListener('click', shareActiveHandler);
}
if(shareActiveHandler){
    share.addEventListener('click', shareHandler);
}

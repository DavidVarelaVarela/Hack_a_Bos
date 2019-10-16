
const url = 'https://randomuser.me/api/';

const showUser =user =>{ 
    const img =document.createElement('img');
    img.setAttribute('src', user.picture.large);
    document.body.appendChild(img);
}


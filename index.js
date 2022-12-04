const Hamburger = document.querySelector('#jiji');
const MobileListID = document.querySelector('#MobileListID');

Hamburger.addEventListener('click', ShowList);

function ShowList(){
    // console.log('lo')
    if(MobileListID.classList.contains('gygy') ){
        MobileListID.classList.remove('gygy')
    }else{
        MobileListID.classList.add('gygy')
    }
    
}
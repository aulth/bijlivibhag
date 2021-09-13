// dark mode script start 
function $(el){
    return document.querySelector(el);
    }
    let container = $('.container');
    let toggle = $('#toggle-theme');
    const dark_icon = document.getElementById("dark_icon");
    const light_icon = document.getElementById("light_icon");
    toggle.addEventListener('click', () =>{
        let list = container.classList;
        if(list.contains('default'))
        {
            list.replace('default', 'dark');    //dark
            toggle.textContent = 'Light';
        }
        else
        {
            list.replace('dark', 'default');
            toggle.textContent = 'Dark';
        }
    })
// dark mode script end 
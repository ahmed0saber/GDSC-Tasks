/*     DETERMINE THE BLOG     */
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const num = urlParams.get('blog')
console.log(num);
/*     BUILD THE PAGE     */
fetch('blog-data.json')
    .then(response => response.json())
    .then(data =>
        {
            var blog = data[num];
            document.getElementById("blog-container").innerHTML+=`<div class="container-fluid rounded p-3 mt-3 semi-transparent">
            <img src="${blog.img}" class="img-responsive w-100 rounded">
            <h1>${blog.title}</h1>
            ${blog.description}
            ${blog.content}
        </div>`;
        }
    );
/*     BUILD ALL BLOGS     */
fetch('blog-data.json')
.then(response => response.json())
.then(data =>
    {
        var blogs = data;
        for(var i=0; i<blogs.length; i++){
            if(i!=num)
            {
                document.getElementById("all-blogs").innerHTML+=`<div class="col-sm-12 col-md-6 col-lg-4 d-flex">
                <div class="container-fluid rounded mb-3 p-3 goals semi-transparent">
                    <div>
                        <img src="${blogs[i].img}" class="w-100 rounded">
                        <h3 class="p-1">${blogs[i].title}</h3>
                    </div>
                    <div>
                        ${blogs[i].description}
                    </div>
                    <div>
                        <a class="btn btn-primary px-4" href="${blogs[i].url}" target="_blank">Read More</a>
                    </div>
                </div>
            </div>`;
            }
            
        }
    }
);
/*     THEMES     */
var nav = document.getElementById("nav");
var current = 0;
var themes = [{
    "id": "0",
    "pri": "#f2f2f2",
    "sec": "#08080822",
    "font": "#080808"
},
{
    "id": "1",
    "pri": "#080808",
    "sec": "#f7f7f722",
    "font": "#e3e3e3"
}
];
if(localStorage.getItem("theme")){current = parseInt(localStorage.getItem("theme"));}else{current = 0;}
theme();
function theme(){
    document.querySelector(':root').style.setProperty('--pri',themes[current].pri);
    document.querySelector(':root').style.setProperty('--sec',themes[current].sec);
    document.querySelector(':root').style.setProperty('--font',themes[current].font);
    if(current>=themes.length-1){
        nav.classList.remove("navbar-light");
        nav.classList.remove("bg-light");
        nav.classList.add("navbar-dark");
        nav.classList.add("bg-dark");
    }else
    {
        nav.classList.add("navbar-light");
        nav.classList.add("bg-light");
        nav.classList.remove("navbar-dark");
        nav.classList.remove("bg-dark");
    }
}
function changeTheme(){
    if(current>=themes.length-1){
        current=0;
    }else
    {
        current+=1;
    }
    localStorage.setItem("theme", current);
    theme();
}

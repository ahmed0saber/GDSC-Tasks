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
            document.getElementById("blog-container").innerHTML+=`<div class="container-fluid border rounded bg-light p-3 mt-3">
            <img src="${blog.img}" class="img-responsive w-100 rounded border">
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
                <div class="container-fluid rounded mb-3 p-3 goals">
                    <img src="${blogs[i].img}" class="w-100 border rounded">
                    <h3 class="border-bottom p-1">${blogs[i].title}</h3>
                    ${blogs[i].description}
                    <a class="btn btn-primary px-4" href="${blogs[i].url}" target="_blank">Read More</a>
                </div>
            </div>`;
            }
            
        }
    }
);
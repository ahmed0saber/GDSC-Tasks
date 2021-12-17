/*     BUILD PROJECTS SECTION     */
fetch('data.json')
    .then(response => response.json())
    .then(data =>
        {
            var projects = data[0];
            for(var i=0; i<projects.length; i++){
                document.getElementById("all_projects").innerHTML+=`<div class="col-sm-12 col-md-6 col-lg-4 container-md p-1">
                <div class="project-container">
                    <div class="p-4 bg-light text-dark project d-flex align-items-end" style="background-image: url('${projects[i].img}')">
                        <div class="container-fluid bg-light p-2 rounded border hidden">
                            <h1>${projects[i].title}</h1>
                            <p>${projects[i].description}</p>
                            <a href="${projects[i].url}" target="_blank" class="btn btn-success">Try Now</a>
                        </div>
                    </div>
                </div>
                </div>`;
            }
        }
    );
/*     SEND TO WHATSAPP     */
function send(){
    var name = document.getElementById("name").value;
    var msg = document.getElementById("msg").value;
    window.open("https://api.whatsapp.com/send?phone=+201208611892&text=Hi, Ahmed! My name is "+name+", I want to tell you that '"+msg+"'");
    document.getElementById("name").value = "";
    document.getElementById("msg").value = "";
}
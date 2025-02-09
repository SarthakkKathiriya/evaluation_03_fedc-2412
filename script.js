document.addEventListener('DOMContentLoaded',()=>{
    getData();
    loadData();
});
//if local stroage is empty we will fetch the data first.
function getData(){
    if (!localStorage.getItem('data')){
        fetch('data.json')
            .then(Response => Response.json())
            .then(data => {
                localStorage.setItem('data' , JSON.stringify(data))
                loadData()
            })
    }
}
function getRecipes(){
    return JSON.parse(localStorage.getItem('data')) || []
}
function save(){
    localStorage.setItem('recipes',JSON.stringify(data))
}

function loadData(){
    let data=getRecipes()
    
    document.getElementById('recipe_list').innerHTML = data.map( recipe => `
        <div class="card">
        <h3>${data.title} </h3>
        <p>Category: ${data.category}</p>
        <p>Ingredients: ${data.ingredients}</p>
        <p>Instructions: ${data.instructions}</p>
        <div>
            <button >Edit</button>
            <button >Delete</button>
        </div>
        </div>
    `).join('')
}

getData();
loadData();
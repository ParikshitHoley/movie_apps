// function nav()
// {
//     return `<div id="middle">
//     <h3>Home</h3>
//     <h3>Movies</h3>
//     <h3>Series</h3>
//     <h3><a href="register.html">Register</a></h3>
//     <h3><a href="login.html">Login</a></h3>
// </div>
// <div id="searchbox">
//     <input type="text" id="search">
//     <div id="basket"></div>
// </div>`
// }
// export default nav;





document.getElementById("search").addEventListener("input",findmovie);

async function findmovie()
{
    try{
        let input = document.getElementById("search").value;
        if(input.length<=2)
        {
            document.getElementById("basket").style.display="none"
            return false;
        }
        let resp = await fetch(`http://www.omdbapi.com/?apikey=12201ab4&s=${input}`);
        let data = await resp.json();
        console.log(data)
        let newdata =data.Search;
        basket.innerHTML=null;
        find(newdata);
    }
    catch(err)
    {
        console.log(err);
    }
}

function find(newdata)
{
    newdata.forEach(({Poster,Title,Year},index)=>{
        document.querySelector("#basket").style.display="none";
        let basket=document.getElementById("basket");
        let div=document.createElement("div");
        div.setAttribute("id","poster");
        let img = document.createElement("img");
        img.setAttribute("id","img")
        img.src=Poster;
        let title=document.createElement("h5");
        title.innerHTML=Title;
        let year = document.createElement("p");
        year.innerHTML=Year;
        let div2 = document.createElement("div");
        div2.setAttribute("id","div2")
        div.addEventListener("click",function show()
        {
            showagain(Title);
        })
        div2.append(title,year);
        div.append(img,div2);
        basket.append(div);
    })
    document.querySelector("#basket").style.display="block";

}

jay();
async function jay()
{

try{
      
      let resp =  await fetch(`http://www.omdbapi.com/?apikey=12201ab4&s=avengers`);
      let data =  await resp.json();
      let newdata =data.Search;
      trend(newdata);
  }
  catch(err)
  {
      console.log(err);
  }

}

function trend(newdata)
{
newdata.forEach(({Poster,Title,Year})=>{

    let div1 = document.createElement("div");
    div1.setAttribute("id","div1");
    let img1= document.createElement("img");
    img1.src=Poster;
    img1.setAttribute("id","trendimg")
    let tit = document.createElement("h3");
    tit.innerHTML=Title;
    let yer = document.createElement("p");
    yer.innerHTML=Year;
    let div3 = document.createElement("div");
    div3.setAttribute("id","text")
    div3.append(tit,yer);
    div1.append(img1,div3);
    let bhara = document.getElementById("bhara");
    bhara.append(div1);
})
}

async function showagain(title)
{

let repo = await fetch(`http://www.omdbapi.com/?apikey=12201ab4&t=${title}`);
let deto = await repo.json();
ghenmgata(deto);
}


function ghenmgata(deto){
document.getElementById("searchclick").innerHTML=null;
divS1= document.createElement("div");
divS1.setAttribute("id","searchkelyavr");
let imgS = document.createElement("img");
imgS.setAttribute("id","imgS");
imgS.src=deto.Poster;
let titleS = document.createElement("h2");
titleS.innerHTML="Title :  "+deto.Title;
let actors = document.createElement("p");
actors.innerHTML="Actors : "+deto.Actors;
let director = document.createElement("p");
director.innerHTML="Director : "+deto.Director;
let award = document.createElement("p");
award.innerHTML="Awards : "+deto.Awards;
let box = document.createElement("p");
box.innerHTML="Box office price : "+deto.BoxOffice;
let divS = document.createElement("div");
divS.setAttribute("id","divS")
divS.append(titleS,actors,director,award,box);
divS1.append(imgS,divS);
let searchclick = document.getElementById("searchclick");

searchclick.append(divS1);


}



// ----------------------------------------------------------------------------------------------------------------------

// async function login(e)
// {
//    try{
//     e.preventDefault();
//     var log_data = {
//         username:document.getElementById("username_log").value,
//         password:document.getElementById("password_log").value
//     }

//     log_data=JSON.stringify(log_data);
//    }

//    catch(err)
//    {
//        alert("Login Failed")
//        console.log(err);
       
//    }

//    let login_api=`https://masai-api-mocker.herokuapp.com/auth/login`;
//    let responce =await fetch(login_api,{
//        method:"POST",
//        body:log_data,
//        headers:{
//            "Content-Type":"application/json",
//        },
//    })
//    let data = await responce.json();
//    console.log(data);
//    let user= document.getElementById("username_log").value;
//    let tok = data.token;
//    getuser(user,tok);
//    if(data=true)
//    {
//        alert("Login Sucess");
//        setTimeout(()=>{
//            window.location.href="landing.html"

//        },2000)
      
//    }
//    async function getuser(use,toke)
//    {
//       try{
//         let user_api =`https://masai-api-mocker.herokuapp.com/user/${use}`;
    
//         let repo = await fetch(user_api,{
//             headers:{
//                 "Content-Type":"application/json",
//                 Authorization:`Bearer ${toke}`,
//             },
           
//         });
//         let deto = await repo.json();
//         console.log(deto);

        
        
        
//       }
//       catch(err)
//       {
//           console.log(err);
//       }
//    }
// }

let humBurger=document.querySelector(".humburger");
const navbar=document.querySelector(".navBar>ul");
const dropHeader=document.querySelectorAll(".drop-header");
const dropDetails=document.querySelectorAll(".drop-details");

humBurger.addEventListener("click",()=>{
    navbar.classList.toggle("menuBar");
})

dropHeader.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        dropDetails[index].classList.toggle("drop");
    })
})

//portfolio
const imgurl=[
    "images/Portfolio/portfolio-1.jpg",
    "images/Portfolio/portfolio-2.jpg",
    "images/Portfolio/portfolio-3.jpg",
    "images/Portfolio/portfolio-4.jpg",
    "images/Portfolio/portfolio-5.jpg",
    "images/Portfolio/portfolio-6.jpg",
    "images/Portfolio/portfolio-7.jpg",
    "images/Portfolio/portfolio-8.jpg",
    "images/Portfolio/portfolio-9.jpg",
]

let txt='';
for( i=1;i<=9;i++){
    txt+=`
    <div>
        <div class="pic">
            <h2>
                Portfolio -${i}<br>

            </h2>
        </div>
    </div>
    `
}

const showMyWork=(galery)=>{
    document.querySelector(".my-work").innerHTML=galery;
}

const showImg=()=>{
    const pic=document.querySelectorAll("#portfolio .my-work .pic");
    pic.forEach((item,index)=>{
        item.style.backgroundImage='url('+imgurl[index]+ ')';
        item.querySelector("i").addEventListener("click",()=>{
            document.querySelector(".pop-up").style.display='block';
            document.querySelector("pop-up img").setAttribute('src',imgurl[index]);
        })
    })
}

const active =(index)=>{
    for(i=0;i<3;i++){
        if(i==index){
            document.querySelectorAll('#portfolio .category a')[i].classList.add('active');
        }else{
            document.querySelectorAll('#portfolio .category a')[i].classList.remove('active');
        }
    }
}

showMyWork(txt);
showImg();
active(0);

const pbtn=document.querySelectorAll("#portfolio .category a");
pbtn.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        active(index);
        if(index==1){
            txt="";
            for(i=1;i<=9;i+=2){
                txt+=`
                <div>
        <div class="pic">
            <h2>
                Portfolio -${i}<br>

            </h2>
        </div>
    </div>
                `
            }
        }else if(index==2){
            txt="";
             for(i=2;i<=9;i+=2){
                txt+=`
                <div>
        <div class="pic">
            <h2>
                Portfolio -${i}<br>

            </h2>
        </div>
    </div>
                `
            }
        }else if(index==3){
            txt="";
             for(i=3;i<=9;i+=2){
                txt+=`
                <div>
        <div class="pic">
            <h2>
                Portfolio -${i}<br>

            </h2>
        </div>
    </div>
                `
            }
        }else{
            txt="";
            for(i=1;i<=9;i++){
                txt+=`
                <div>
        <div class="pic">
            <h2>
                Portfolio -${i}<br>

            </h2>
        </div>
    </div>
                `
        }
    }
    showMyWork(txt);
showImg();

    })
})
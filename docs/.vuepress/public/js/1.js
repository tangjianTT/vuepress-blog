function sj(){
    var time=new Date().getHours(); 
    const root = document.documentElement;
    if(time>=6 && time <16){
        console.log("早上好");
               root.style.setProperty('--sj','url(https://ae01.alicdn.com/kf/U97bbc76ed57d4a0eb5cda490415884b1i.jpg) center center/cover no-repeat');
    }
            else if(time>=16 && time <=19){
    console.log("下午好");
                root.style.setProperty('--sj','url(https://ae01.alicdn.com/kf/U50ff13e135cb4b7cbd7792440c4c5d8eG.jpg) center center/cover no-repeat');
            }else if(time>=19 && time <24){
    console.log("晚上好");
                root.style.setProperty('--sj','url(https://ae01.alicdn.com/kf/U7ec56ee77d304e0b99f55dcd976ec92fv.jpg) center center/cover no-repeat');
            }
        else if(time>=0 && time <6){
    console.log("晚安");
                 root.style.setProperty('--sj','url(https://ae01.alicdn.com/kf/U7ec56ee77d304e0b99f55dcd976ec92fv.jpg) center center/cover no-repeat');
            }
}    
sj();
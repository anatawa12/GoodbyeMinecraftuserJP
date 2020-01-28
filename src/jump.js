const rootDiv = document.createElement("div");
rootDiv.style.setProperty('background-color', 'gray');
rootDiv.style.setProperty('position', 'absolute');
rootDiv.style.setProperty('left', '30%');
rootDiv.style.setProperty('top', '30%');
rootDiv.style.setProperty('right', '30%');
rootDiv.style.setProperty('bottom', '30%');
rootDiv.style.setProperty('margin', 'auto');
rootDiv.style.setProperty('text-align', 'center');
rootDiv.style.setProperty('color', 'white');
rootDiv.style.setProperty('z-index', '30');
rootDiv.style.setProperty('font-size', 'calc(18px + 0.25vw)');
const childDiv = document.createElement("div");
childDiv.style.setProperty('position', 'absolute');
childDiv.style.setProperty('top', '50%');
childDiv.style.setProperty('left', '50%');
childDiv.style.setProperty('transform', 'translateY(-50%) translateX(-50%)');
childDiv.style.setProperty('-webkit-transform', 'translateY(-50%) translateX(-50%)');
const p1 = document.createElement('p');
const p2 = document.createElement('p');
p1.textContent = 'minecraftuser.jpは終わってしまった！';
p2.textContent = 'Web Archiveに自動で飛ぶよ！！';

childDiv.appendChild(p1);
childDiv.appendChild(p2);
rootDiv.appendChild(childDiv);


setTimeout(function () {
    var url = "https://web.archive.org/web/20181230204000/"+location.href;
    
    var doc = rootDiv;
        
    document.body.appendChild(rootDiv);
        console.log("extension:");
        console.log(document.body);
        console.log(doc);

    setInterval(function () {    
        // URL書き換える
        location.replace(url);
    },1000);
},1000);

for(var deadGoblin=document.getElementById("dead"),lostGoblin=document.getElementById("lost"),getHoleClass=function(t){return document.getElementById("hole".concat(t))},_loop=function(){var t=document.getElementById(getHoleClass(i).id);t.onclick=function(){"hole hole_has-goblin"==t.className?(deadGoblin.textContent=Number(deadGoblin.textContent)+1,10==deadGoblin.textContent&&(alert("Вы победили!"),deadGoblin.textContent=0,lostGoblin.textContent=0)):(lostGoblin.textContent=Number(lostGoblin.textContent)+1,5==lostGoblin.textContent&&(alert("Вы проиграли :-("),deadGoblin.textContent=0,lostGoblin.textContent=0))}},i=1;i<=16;i++)_loop();
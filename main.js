
            

            function psych(){
                document.body.style.backgroundColor = '#ff00ff';
                document.body.style.color = 'rgb(0,0,255)';
                document.body.style.fontFamily = 'fantasy';
            }
            function inversion()
            {
                document.body.style.color='#ffffff';
                document.body.style.backgroundColor='#000000';
            }
            function normal()
            {
                document.body.style = null;
            }
           //je sais c'est ultra moche le code des fonctions qui changent de mode, surtout le nom des variables
            var inv = document.querySelector(".inv");
            inv.addEventListener("click",inversionl);
            function inversionl()
            {
                if (inv.textContent === "Mode inversé")
                {
                inversion();
                inv.textContent = "Mode normal";
                }
                else
                {  
                normal();
                inv.textContent = "Mode inversé";
                }
            }
            var inpbutotxt = document.querySelector(".bott");
            inpbutotxt.addEventListener("click",nvup2);
            function nvup2()
            {
                if (inpbutotxt.textContent === "Mode psych"){
                    psych();
                    inpbutotxt.textContent = "Mode normal";
                }
                else{
                    normal();
                    inpbutotxt.textContent = "Mode psych";
                }

            }
            var truc = document.querySelector(".wof");
            truc.addEventListener("click",jenaimar);
            function jenaimar()
            {
                if (truc.textContent === "Mode contraste faible"){
                    document.body.style.color='#464646';
                    truc.textContent = "Mode normal";
                }
                else{
                    normal();
                    truc.textContent = "Mode contraste faible";
                }
            }
// essai pour faire un truc plus stylé mais ki marche pa     
 /*function changeMode(classname,changestyle,dechangestyle,nomMode)
            {
                var boutonInt = document.querySelector(`.${classname}`);
                boutonInt.addEventListener("click",function superfonction(){
                    if (boutonInt.textContent === nomMode){
                        changestyle;
                        boutonInt.textContent = "Mode normal"
                    }
                    else
                    {
                        dechangestyle;
                        boutonInt.textContent = nomMode;
                    }
                })
            }
            changeMode(inv,inversion,deinversion,"Mode inversé")
            
*/




            var lienInverse = document.querySelector(".invertedMode")
            lienInverse.addEventListener("click",inversefct)
            function inversefct()
            {
             if (lienInverse.textContent === "Inverted Mode")
             {
                
             }   
            }

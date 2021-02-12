const container=document.querySelector(".app");

const myApp=[
              { 
               type:" INICIAIS ",
               msg:" ",
               path:"images/letraD",
               structure:[
                              {question:"DA",options:['DADOS.jpg','DIAMANTES.jpg','DUVIDAS.jpg','DENTADURA.jpg'],key:0},

                              {question:"DE",options:['DARDO.jpg','DENTADURA.jpg','DIA.jpg','DALMATA.jpg'],key:1},
                              
                              {question:"DÁ",options:['DOIS.jpg','DESCANSO.jpg','DALMATA.jpg','DOENTE.jpg'],key:2},

                              {question:"DE",options:['DOCES.jpg','DOMINO.jpg','DAMA.jpg','DEZEMBRO.jpg'],key:3},

                              {question:"DA",options:['DEDOS.jpg','DAMA.jpg','DIGITAL.jpg','DIGITAR.jpg'],key:1},                                                                           
                              
                              {question:"DÚ",options:['DUVIDAS.jpg','DOBRADURA.jpg','DEGRAUS.jpg','DESERTO.jpg'],key:0},
                              
                              {question:"DO",options:['DUENDE.jpg','DANCA.jpg','DOIS.jpg','DESTRUIDA.jpg'],key:2},
                              
                              {question:"DA",options:['DEZ.jpg','DESERTO.jpg','DESENHO.jpg','DANCA.jpg'],key:3},
                              
                              {question:"DE",options:['DESCANSO.jpg','DARDO.jpg','DIA.jpg','DANONE.jpg'],key:0},
                              
                              {question:"DA",options:['DOMADOR.jpg','DANONE.jpg','DOZE.jpg','DIRIGIR.jpg'],key:1},
                              
                              {question:"DE",options:['DUELO.jpg','DINOSSAURO.jpg','DETERGENTE.jpg','DOCES.jpg'],key:2},
                              
                              {question:"DU",options:['DINHEIRO.jpg','DURA.jpg','DESPERDICAR.jpg','DEPRESSA.jpg'],key:1},
                              
                              {question:"DE",options:['DOUTORA.jpg','DOMADOR.jpg','DETETIVE.jpg','DOENTE.jpg'],key:2},
                              
                              {question:"DI",options:['DANCA.jpg','DADOS.jpg','DESCANSO.jpg','DINHEIRO.jpg'],key:3},
                              
                              {question:"DE",options:['DESPERDICAR.jpg','DOZE.jpg','DOMADOR.jpg','DIGITAL.jpg'],key:0},
                              
                              {question:"DI",options:['DOZE.jpg','DINOSSAURO.jpg','DEZ.jpg','DURA.jpg'],key:1},
                              
                              {question:"DE",options:['DOIS.jpg','DUELO.jpg','DIVERTIDA.jpg','DESTRUIDA.jpg'],key:3},
                              
                              {question:"DI",options:['DIAMANTES.jpg','DESCANSO.jpg','DENTE.jpg','DAMA.jpg'],key:0},
                              
                              {question:"DI",options:['DIVERTIDA.jpg','DOBERMAN.jpg','DESCANSO.jpg','DESENHO.jpg'],key:0},

                              {question:"DE",options:['DIPLOMA.jpg','DANONE.jpg','DESPENSA.jpg','DOBRADURA.jpg'],key:2}
                   ]
              },

              {

               type:" PALAVRAS ",
               msg:" ",
               path:"images/letraD",
               structure:[
                              {question:"DIPLOMA",options:['DIPLOMA.jpg','DEGRAUS.jpg','DESPERDICAR.jpg','DETERGENTE.jpg'],key:0}, 
                              
                              {question:"DUENDE",options:['DENTISTA.jpg','DENTE.jpg','DIAMANTES.jpg','DUENDE.jpg'],key:3},
                              
                              {question:"DEGRAUS",options:['DIAMANTES.jpg','DEGRAUS.jpg','DIRIGIR.jpg','DIGITAL.jpg'],key:1},
                              
                              {question:"DIA",options:['DIA.jpg','DENTE.jpg','DOCES.jpg','DESTRUIDA.jpg'],key:0},
                              
                              {question:"DÁLMATA",options:['DOIS.jpg','DESCANSO.jpg','DALMATA.jpg','DOENTE.jpg'],key:2},
                              
                              {question:"DESCANSO",options:['DESCANSO.jpg','DARDO.jpg','DIA.jpg','DANONE.jpg'],key:0},
                              
                              {question:"DEZEMBRO",options:['DOCES.jpg','DOMINO.jpg','DAMA.jpg','DEZEMBRO.jpg'],key:3},
                              
                              {question:"DAMA",options:['DEDOS.jpg','DAMA.jpg','DIGITAL.jpg','DIGITAR.jpg'],key:1},
                              
                              {question:"DADOS",options:['DADOS.jpg','DIAMANTES.jpg','DUVIDAS.jpg','DENTADURA.jpg'],key:0},
                              
                              {question:"DENTADURA",options:['DARDO.jpg','DENTADURA.jpg','DIA.jpg','DALMATA.jpg'],key:1},
                              
                              {question:"DOMINÓ ",options:['DIRIGIR.jpg','DARDO.jpg','DOMINO.jpg','DENTISTA.jpg'],key:2},
                              
                              {question:"DANÇA",options:['DEZ.jpg','DESERTO.jpg','DESENHO.jpg','DANCA.jpg'],key:3},
                              
                              {question:"DOMADOR",options:['DESPERDICAR.jpg','DOMADOR.jpg','DUENDE.jpg','DADOS.jpg'],key:1},                       
                              
                              {question:"DESENHO",options:['DALMATA.jpg','DUELO.jpg','DIA.jpg','DESENHO.jpg'],key:3},
                              
                              {question:"DOUTORA",options:['DENTE.jpg','DESPERDICAR.jpg','DOUTORA.jpg','DANONE.jpg'],key:2},
                              
                              {question:"DEPRESSA",options:['DOCES.jpg','DEPRESSA.jpg','DOMINGO.jpg','DIPLOMA.jpg'],key:1},
                              
                              {question:"DÚVIDAS",options:['DUVIDAS.jpg','DOBRADURA.jpg','DEGRAUS.jpg','DESERTO.jpg'],key:0},
                              
                              {question:"DOIS",options:['DENTE.jpg','DANCA.jpg','DOIS.jpg','DESTRUIDA.jpg'],key:2},
                              
                              {question:"DANONE",options:['DOMADOR.jpg','DANONE.jpg','DOZE.jpg','DIRIGIR.jpg'],key:1},
                              
                              {question:"DARDO",options:['DOUTORA.jpg','DENTADURA.jpg','DEPRESSA.jpg','DARDO.jpg'],key:3},
                              
                              {question:"DOENTE",options:['DURA.jpg','DEZ.jpg','DOENTE.jpg','DEPRESSA.jpg'],key:2},       
                              
                              {question:"DESINFETANTE",options:['DOBRADURA.jpg','DOCES.jpg','DOUTORA.jpg','DESINFETANTE.jpg'],key:3},
                              
                              {question:"DOCES",options:['DENTE.jpg','DIPLOMA.jpg','DOCES.jpg','DINHEIRO.jpg'],key:2},
                              
                              {question:"DEDOS",options:['DEDOS.jpg','DINHEIRO.jpg','DOBRADURA.jpg','DOBERMAN.jpg'],key:0},
                              
                              {question:"DOBERMAN",options:['DESINFETANTE.jpg','DESINTUPIDOR.jpg','DUENDE.jpg','DOBERMAN.jpg'],key:3},
                              
                              {question:"DESERTO",options:['DALMATA.jpg','DESERTO.jpg','DOBERMAN.jpg','DIGITAR.jpg'],key:1},
                              
                              {question:"DOBRADURA",options:['DOBRADURA.jpg','DESANIMADA.jpg','DIRIGIR.jpg','DESCER.jpg'],key:0},
                              
                              {question:"DESINTUPIDOR",options:['DIA.jpg','DIAMANTES.jpg','DESINTUPIDOR.jpg','DOMINO.jpg'],key:2},
                              
                              {question:"DEZ",options:['DETERGENTE.jpg','DOUTORA.jpg','DUVIDAS.jpg','DEZ.jpg'],key:3},
                              
                              {question:"DUELO",options:['DUELO.jpg','DEVAGAR.jpg','DEPRESSA.jpg','DESINTUPIDOR.jpg'],key:0},
                              
                              {question:"DOZE",options:['DEZ.jpg','DEDOS.jpg','DOZE.jpg','DADOS.jpg'],key:2},
                              
                              {question:"DEVAGAR",options:['DESPERTADOR.jpg','DEVAGAR.jpg','DINOSSAURO.jpg','DIA.jpg'],key:1},
                              
                              {question:"DIVERTIDA",options:['DIVERTIDA.jpg','DESPENSA.jpg','DESCANSO.jpg','DESENHO.jpg'],key:0},
                              
                              {question:"DENTISTA",options:['DINOSSAURO.jpg','DIGITAR.jpg','DENTISTA.jpg','DESCER.jpg'],key:2},
                              
                              {question:"DIGITAL",options:['DOCES.jpg','DIGITAL.jpg','DESANIMADA.jpg','DESERTO.jpg'],key:1},
                              
                              {question:"DOMINGO",options:['DETETIVE.jpg','DADOS.jpg','DAMA.jpg','DOMINGO.jpg'],key:3},
                              
                              {question:"DESANIMADA",options:['DURA.jpg','DINHEIRO.jpg','DESANIMADA.jpg','DIAMANTES.jpg'],key:2},
                              
                              {question:"DIRIGIR",options:['DIRIGIR.jpg','DALMATA.jpg','DANONE.jpg','DOBRADURA.jpg'],key:0},
                              
                              {question:"DETERGENTE",options:['DETETIVE.jpg','DEGRAUS.jpg','DETERGENTE.jpg','DOCES.jpg'],key:2},
                              
                              {question:"DURA",options:['DINHEIRO.jpg','DURA.jpg','DESPERDICAR.jpg','DEPRESSA.jpg'],key:1},
                              
                              {question:"DETETIVE",options:['DOUTORA.jpg','DOMADOR.jpg','DETETIVE.jpg','DOENTE.jpg'],key:2},
                              
                              {question:"DINHEIRO",options:['DANCA.jpg','DADOS.jpg','DESCANSO.jpg','DINHEIRO.jpg'],key:3},
                              
                              {question:"DESPERDÍÇAR",options:['DESPERDICAR.jpg','DESENHO.jpg','DOMADOR.jpg','DIGITAL.jpg'],key:0},
                              
                              {question:"DINOSSAURO",options:['DOZE.jpg','DINOSSAURO.jpg','DEZ.jpg','DURA.jpg'],key:1},
                              
                              {question:"DESPENSA",options:['DIPLOMA.jpg','DANONE.jpg','DESPENSA.jpg','DOBRADURA.jpg'],key:2},
                              
                              {question:"DESTRUÍDA",options:['DOIS.jpg','DUELO.jpg','DIVERTIDA.jpg','DESTRUIDA.jpg'],key:3},
                              
                              {question:"DIAMANTES",options:['DIAMANTES.jpg','DESCANSO.jpg','DENTE.jpg','DESINFETANTE.jpg'],key:0},
                              
                              {question:"DENTE",options:['DUVIDAS.jpg','DENTE.jpg','DEZEMBRO.jpg','DESANIMADA.jpg'],key:1},
                              
                              {question:"DIGITAR",options:['DESPENSA.jpg','DEGRAUS.jpg','DIGITAL.jpg','DIGITAR.jpg'],key:3},
                              
                              {question:"DESPERTADOR",options: ['DESANIMADA.jpg','DESPERTADOR.jpg','DIVERTIDA.jpg','DINOSSAURO.jpg'],key:1}


                              

                              
 
                              

                        ]
              }

    ] 



     // create select element
     const select=document.createElement("select");
           select.setAttribute("onchange","load(this)") 
      for (let j=0;j<myApp.length;j++){
          const option=document.createElement("option");
                option.value=j;
                option.innerHTML=myApp[j].type;
                select.appendChild(option)
      }
     document.querySelector(".quiz-box").appendChild(select)

     //create class
     class App{
           constructor(myApp,container){
                this.app=myApp;
                this.container=container;
                this.index=0;
                this.score=0;
                this.quizSize=this.app.structure.length
                this.optionSize=this.app.structure[0].options.length;
                this.msgEle=this.container.querySelector(".msg"); 
                this.quizEle=this.container.querySelector(".quiz")
                this.optionEle=this.container.querySelector(".option-box");
                this.questionNumber=this.container.querySelector(".question-number");
                this.scoreEle=this.container.querySelector(".score-board"); 
                this.setQuestion();
                this.setOptions();
                this.scoreBoard();

           }

           setQuestion(){ 
               this.msgEle.innerHTML=this.app.msg;
               this.quizEle.innerHTML=this.app.structure[this.index].question;
               this.questionNumber.innerHTML=(this.index+1)+"/"+this.quizSize;
         }

           setOptions(){
                this.optionEle.innerHTML="";
                for(let i=0; i<this.optionSize; i++){
                  const button=document.createElement("button")
                        button.type="button";
                        button.id=i;
                  const img=document.createElement("img");
                        img.src=this.app.path+"/"+this.app.structure[this.index].options[i];
                        button.appendChild(img)
                    this.optionEle.appendChild(button)     
                }
                this.optionClick();
                

           }

           scoreBoard(){
              this.scoreEle.innerHTML=this.score;
           }

           optionClick(){
               const that=this;
              var options=this.optionEle.children;
              for (let i=0; i<options.length; i++) {
                   options[i].addEventListener("click",function(){
                      const span=document.createElement("span");
                     if(this.id==that.app.structure[that.index].key){
                         span.innerHTML="CORRETA";
                         this.classList.add("correta");
                         that.score++;
                         that.scoreBoard();
                      }
                      else{
                          span.innerHTML="ERRADA";
                          this.classList.add("errada");
                      }
                      this.appendChild(span);

                      
                     for (let j=0; j<that.optionEle.children.length; j++) {
                         
                          if(this.id==that.optionEle.children[j].id) {

                          }
                           // you can also show the correct answer when you click on wrong option
                           else if (that.optionEle.children[j].id==that.app.structure[that.index].key){
                                var span2=document.createElement("span")
                                span2.innerHTML="CORRETA";
                                that.optionEle.children[j].appendChild(span2)
                               that.optionEle.children[j].classList.add("correta");
                          }
                          else{
                               that.optionEle.children[j].classList.add("hide"); 

                          }
                    
                    }
                    this.style.pointerEvents="none";
                    that.index++;
                    if(that.index>that.quizSize-1){
                        setTimeout(function(){
                          that.quizOver();
                        },2000);
                        that.quizOver();
                    }
                    else{
                    // next quiz update
                    setTimeout(function(){
                      that.setQuestion()
                      that.setOptions()
                    },2000)
                    }

                    })

                }

           }

           
           quizOver()
           {
              //TAMBÉM NÃO FUNCIONA O CONFETTI AQUI

              this.msgEle.innerHTML="";
              //TAMBÉM NÃO FUNCIONA O CONFETTI AQUI
              this.quizEle.innerHTML="";
              //TAMBÉM NÃO
              
              if (this.score > this.quizSize/2){
                function r(min, max) {
    return Math.random() * (max - min) + min;
}


                //QUASE QUE DEU CERTO MAS FICÁ FORÁ DA CAIXA
                
              //NÃO FUNCIONOU AQUI  
                   
                   this.optionEle.innerHTML="<h1><img src='images/over.png'/><br> </h1>";
               
              }

              else{
                this.optionEle.innerHTML="<h1><img src='images/game.png'/><br> </h1>";
              
              



              }
              //AQUI TAMBÉM NÃO
           }


          
           //AQUI TAMBÉM NÃO FUNCIONA

     }
/*confetti({
    angle: r(55, 125),
    spread: r(50, 70),
    particleCount: r(50, 100)
});*/
let i = 0;
setInterval(function(){
  confetti({
    angle: i,
    spread: r(50, 70),
    particleCount: r(50, 100)
  });
  i += 10;
  i = i % 360;
}, 2000)

     // Aqui o Confetti funcionou, mas desde o ínicio
     
       // create object without onchange of select
       const app1=new App(myApp[0],container) 
            
      function load(ele) {
        const app1=new App(myApp[ele.value],container)
      }


      

     



  
   
   
 



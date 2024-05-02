const perguntasERespostas = document.querySelectorAll(".item");
perguntasERespostas.forEach(function(item){
  item.addEventListener("click", function(){
     const perguntaAtual = document.querySelector(".ativo");
     perguntaAtual.classList.remove("ativo");
    
    item.classList.add("ativo")
  });
});

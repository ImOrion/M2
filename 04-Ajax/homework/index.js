

 $("#boton").click(function(){
  $.get("http://localhost:5000/amigos/", function(panas){
    $("#lista").empty()
    for (const jueputa of panas){
        let li = document.createElement("li");
            li.innerHTML = jueputa.name
            $("#lista").append(li);}
  });
});
 


$("#search").click(function(){
    $.get("http://localhost:5000/amigos/",function(todoSeConecta){
        let contenido = parseInt($("#input")[0].value);//1
        for (const elPepe of todoSeConecta) {
            if(elPepe.id === contenido){
                let elemento = document.createElement("li");
                elemento.innerHTML= elPepe.name;
                $("#amigo").append(elemento)
            }
        }
    })
 }
 )



 
$("#delete").click(()=>{
    $.ajax({
        ss: 3,
        method: "DELETE",
        url: `http://localhost:5000/amigos/${$("#inputDelete").val()}`,
    
      }).done((data) =>{
        console.log(data)
        let amigo=document.querySelector("#success");

        for(const user of data){
            if(user.id){
                console.log("a")
            }
        }
        let input=document.querySelector("#inputDelete")
        amigo.innerHTML="Tu amigo fue eliminado correctamente"
        input.value="";
        listaDeAmigos(data);
        console.log("OK")
    })
})


/*let listaClickHandler = () => {
    $.get('http://localhost:5000/amigos/',function(res){
      for(const user of res){
        let friendList = document.createElement('li');
        friendList.innerHTML = user.name
        $('#lista').append(friendList)
      }
    })
  }



  $('#boton').click(listaClickHandler());*/
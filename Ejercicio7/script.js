let arr = [0,0,0,0,0,0,0,0,0,0,0];
fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then((res) => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(tar => tar.json())
    .then((tar) => {
        document.write("<div>TEST</div>")
        console.log(tar)
    
    console.log(res);
    res.forEach(element => {
        document.write('ID: '+element.id);  
        document.write('<br>')
        document.write('Nombre: '+element.name); 
        document.write('<br>')
        document.write('Usuario: '+element.username); 
        document.write('<br>')
        document.write('Correo: '+element.email); 
        document.write('<br>')
        document.write('Sitio Web: '+element.website); 
        document.write('<br>')
        document.write('<button onclick="toggleTareas('+element.id+')">Ver Tareas</button>')
        document.write('<div style="display:none;" id="tareas'+element.id+'">');
        tar.forEach(tarea => {
            if(tarea.userId==element.id){
                document.write('<div style="display:flex;">')
                if(tarea.completed){
                    document.write('<div style="display:block;color:green;">'+tarea.id+'. '+tarea.title+'</div>')
                }else{
                    document.write('<div style="display:block;color:red;">'+tarea.id+'. '+tarea.title+'</div>')
                }
                document.write('</div>')
            }
        })
        document.write('</div>');
        document.write('<hr>')       
    });});
});
function toggleTareas(id){
    if(arr[id]==0){
        document.getElementById('tareas'+id).style="display:block";
        arr[id]=1;
    }else{
        document.getElementById('tareas'+id).style="display:none";
        arr[id]=0;
    }    
}

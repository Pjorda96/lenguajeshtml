document.writeln("<h2>Pregunta 1 JSON</h2>");

var cine = { "salas" : [
        { "sala"  : "A", "capacidad" : "300", "Peliculas" : [
                { "titulo"  : "El Resplandor", "genero" : "Terror", "duracion" : "180" },
                { "titulo"  : "Psicosis", "genero" : "Terror", "duracion" : "140" }
            ]},
        { "sala"  : "B", "capacidad" : "150", "Peliculas" : [
                { "titulo"  : "Cars", "genero" : "Infantil", "duracion" : "95" },
                { "titulo"  : "Toy Story", "genero" : "Infantil", "duracion" : "100" }
            ]},
        { "sala"  : "C", "capacidad" : "250", "Peliculas" : [
                { "titulo"  : "Dunquerque", "genero" : "Bélico", "duracion" : "105" },
                { "titulo"  : "Stalingrado", "genero" : "Bélico", "duracion" : "100" }
            ]}
    ]
}

document.writeln("<table border = '2'><tr>");

for(i = 0;i<cine.salas.length;i++){
    document.writeln("<td>");
    document.writeln("<table border = '1' width = 300 >");
    document.writeln("<tr><td><b>Sala</b></td><td width = 300>" + cine.salas[i].sala +"</td></tr>");
    document.writeln("<tr><td><b>Capacidad</b></td><td width = 300>" + cine.salas[i].capacidad +"</td></tr>");
    document.writeln("<tr><td><b>Películas</b></td><td width = 300>" + " " + "</td></tr>");
    document.writeln("<tr><td><b> </b></td><td width = 300>" + " " + "</td></tr>");
    for(j = 0;j<cine.salas[i].Peliculas.length;j++){
        document.writeln("<tr><td><b>Título</b></td><td width = 300>" + cine.salas[i].Peliculas[j].titulo +"</td></tr>");
        document.writeln("<tr><td><b>Género</b></td><td width = 300>" + cine.salas[i].Peliculas[j].genero +"</td></tr>");
        document.writeln("<tr><td><b>Duración</b></td><td width = 300>" + cine.salas[i].Peliculas[j].duracion +"</td></tr>");
        document.writeln("<tr><td><b> </b></td><td width = 300>" + " " + "</td></tr>");
    }
    document.writeln("</table>");
    document.writeln("</td>");
}

document.writeln("</tr></table>");
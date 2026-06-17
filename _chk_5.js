
// ============================================================
// EQUIPOS: nombre, bandera, grupo, rating de fuerza (0-100), puntos proyectados
// La tarea diaria puede ajustar "r" (forma) y "proy" tras cada jornada.
// ============================================================
const T = {
 MEX:{n:"México",f:"🇲🇽",g:"A",r:78,proy:7}, KOR:{n:"Corea del Sur",f:"🇰🇷",g:"A",r:74,proy:5}, CZE:{n:"Chequia",f:"🇨🇿",g:"A",r:69,proy:3}, RSA:{n:"Sudáfrica",f:"🇿🇦",g:"A",r:62,proy:1},
 SUI:{n:"Suiza",f:"🇨🇭",g:"B",r:77,proy:7}, CAN:{n:"Canadá",f:"🇨🇦",g:"B",r:74,proy:6}, BIH:{n:"Bosnia y Herz.",f:"🇧🇦",g:"B",r:66,proy:3}, QAT:{n:"Qatar",f:"🇶🇦",g:"B",r:61,proy:1},
 BRA:{n:"Brasil",f:"🇧🇷",g:"C",r:85,proy:7}, MAR:{n:"Marruecos",f:"🇲🇦",g:"C",r:85,proy:6}, SCO:{n:"Escocia",f:"🏴󠁧󠁢󠁳󠁣󠁴󠁿",g:"C",r:72,proy:3}, HAI:{n:"Haití",f:"🇭🇹",g:"C",r:61,proy:1},
 USA:{n:"Estados Unidos",f:"🇺🇸",g:"D",r:75,proy:6}, TUR:{n:"Turquía",f:"🇹🇷",g:"D",r:74,proy:4}, PAR:{n:"Paraguay",f:"🇵🇾",g:"D",r:71,proy:3}, AUS:{n:"Australia",f:"🇦🇺",g:"D",r:71,proy:4},
 GER:{n:"Alemania",f:"🇩🇪",g:"E",r:87,proy:9}, ECU:{n:"Ecuador",f:"🇪🇨",g:"E",r:74,proy:4}, CIV:{n:"Costa de Marfil",f:"🇨🇮",g:"E",r:77,proy:5}, CUW:{n:"Curazao",f:"🇨🇼",g:"E",r:54,proy:0},
 NED:{n:"Países Bajos",f:"🇳🇱",g:"F",r:81,proy:5}, JPN:{n:"Japón",f:"🇯🇵",g:"F",r:77,proy:5}, SWE:{n:"Suecia",f:"🇸🇪",g:"F",r:72,proy:5}, TUN:{n:"Túnez",f:"🇹🇳",g:"F",r:62,proy:1},
 BEL:{n:"Bélgica",f:"🇧🇪",g:"G",r:80,proy:6}, IRN:{n:"Irán",f:"🇮🇷",g:"G",r:72,proy:5}, EGY:{n:"Egipto",f:"🇪🇬",g:"G",r:71,proy:4}, NZL:{n:"Nueva Zelanda",f:"🇳🇿",g:"G",r:59,proy:2},
 ESP:{n:"España",f:"🇪🇸",g:"H",r:90,proy:7}, URU:{n:"Uruguay",f:"🇺🇾",g:"H",r:78,proy:5}, CPV:{n:"Cabo Verde",f:"🇨🇻",g:"H",r:68,proy:3}, KSA:{n:"Arabia Saudita",f:"🇸🇦",g:"H",r:65,proy:2},
 FRA:{n:"Francia",f:"🇫🇷",g:"I",r:89,proy:7}, NOR:{n:"Noruega",f:"🇳🇴",g:"I",r:77,proy:5}, SEN:{n:"Senegal",f:"🇸🇳",g:"I",r:74,proy:4}, IRQ:{n:"Irak",f:"🇮🇶",g:"I",r:61,proy:1},
 ARG:{n:"Argentina",f:"🇦🇷",g:"J",r:92,proy:9}, AUT:{n:"Austria",f:"🇦🇹",g:"J",r:74,proy:4}, ALG:{n:"Argelia",f:"🇩🇿",g:"J",r:73,proy:4}, JOR:{n:"Jordania",f:"🇯🇴",g:"J",r:58,proy:0},
 POR:{n:"Portugal",f:"🇵🇹",g:"K",r:86,proy:9}, COL:{n:"Colombia",f:"🇨🇴",g:"K",r:78,proy:6}, UZB:{n:"Uzbekistán",f:"🇺🇿",g:"K",r:64,proy:2}, COD:{n:"RD Congo",f:"🇨🇩",g:"K",r:63,proy:1},
 ENG:{n:"Inglaterra",f:"🏴󠁧󠁢󠁥󠁮󠁧󠁿",g:"L",r:87,proy:7}, CRO:{n:"Croacia",f:"🇭🇷",g:"L",r:78,proy:5}, GHA:{n:"Ghana",f:"🇬🇭",g:"L",r:68,proy:2}, PAN:{n:"Panamá",f:"🇵🇦",g:"L",r:66,proy:2}
};
// Banderas reales (los emojis de bandera no se renderizan en Windows)
const FLAGCODE={MEX:"mx",RSA:"za",KOR:"kr",CZE:"cz",SUI:"ch",CAN:"ca",BIH:"ba",QAT:"qa",BRA:"br",MAR:"ma",SCO:"gb-sct",HAI:"ht",USA:"us",TUR:"tr",PAR:"py",AUS:"au",GER:"de",ECU:"ec",CIV:"ci",CUW:"cw",NED:"nl",JPN:"jp",SWE:"se",TUN:"tn",BEL:"be",IRN:"ir",EGY:"eg",NZL:"nz",ESP:"es",URU:"uy",CPV:"cv",KSA:"sa",FRA:"fr",NOR:"no",SEN:"sn",IRQ:"iq",ARG:"ar",AUT:"at",ALG:"dz",JOR:"jo",POR:"pt",COL:"co",UZB:"uz",COD:"cd",ENG:"gb-eng",CRO:"hr",GHA:"gh",PAN:"pa"};
const fl=c=>FLAGCODE[c]?`<img class="flg" src="https://flagcdn.com/h24/${FLAGCODE[c]}.png" alt="">`:'';
const codeDe=nombre=>Object.keys(T).find(c=>T[c].n===nombre)||Object.keys(T).find(c=>nombre.startsWith(T[c].n.replace(/\./g,'')));
const name=c=>fl(c)+" "+T[c].n;
// Convierte "🇲🇽 México" (emoji que Windows no dibuja) en bandera real + nombre
const equipo=str=>{const n=str.split(' ').slice(1).join(' ');const c=codeDe(n);return (c?fl(c)+' ':'')+n;};
// URL pública del sitio (marca de agua y botones de compartir; cambiar aquí si migra de dominio)
const SITE_HOST='sociogmz-ai.github.io/mundial2026';
const SITE_URL='https://'+SITE_HOST+'/';
function compartir(i,red){
  const x=J1[i];
  const n1=x.e1.split(' ').slice(1).join(' '), n2=x.e2.split(' ').slice(1).join(' ');
  const msg=`⚽ PRONÓSTICO MUNDIAL 2026\n${n1} vs ${n2} · ${x.f} · ${x.h}\n📊 Marcador probable: ${x.m} · ${x.p[0]}% V / ${x.p[1]}% E / ${x.p[2]}% V\n🏟 ${x.sede}\n👉 ${SITE_URL}`;
  const u=encodeURIComponent(msg);
  window.open(red==='wa'?`https://wa.me/?text=${u}`:`https://twitter.com/intent/tweet?text=${u}`,'_blank');
}
function compartirSitio(red){
  if(red==='copy'){ navigator.clipboard.writeText(SITE_URL).then(()=>alert('✔ Link copiado: '+SITE_URL)); return; }
  const msg=`⚽ Tablero Mundial 2026: pronósticos diarios con probabilidades, simulador del torneo, estadísticas y fichas por selección.\n👉 ${SITE_URL}`;
  const u=encodeURIComponent(msg);
  window.open(red==='wa'?`https://wa.me/?text=${u}`:`https://twitter.com/intent/tweet?text=${u}`,'_blank');
}

// ============================================================
// RESULTADOS OFICIALES — la tarea diaria agrega aquí cada marcador final.
// FORMATO: {f:"11 jun", g:"A", h:"MEX", a:"RSA", hg:2, ag:0}
// ============================================================
const RESULTADOS = [
 {f:"11 jun", g:"A", h:"MEX", a:"RSA", hg:2, ag:0},
 {f:"11 jun", g:"A", h:"KOR", a:"CZE", hg:2, ag:1},
 {f:"12 jun", g:"B", h:"CAN", a:"BIH", hg:1, ag:1},
 {f:"12 jun", g:"D", h:"USA", a:"PAR", hg:4, ag:1},
 {f:"13 jun", g:"B", h:"QAT", a:"SUI", hg:1, ag:1},
 {f:"13 jun", g:"C", h:"BRA", a:"MAR", hg:1, ag:1},
 {f:"13 jun", g:"C", h:"HAI", a:"SCO", hg:0, ag:1},
 {f:"13 jun", g:"D", h:"AUS", a:"TUR", hg:2, ag:0},
 {f:"14 jun", g:"E", h:"GER", a:"CUW", hg:7, ag:1},
 {f:"14 jun", g:"F", h:"NED", a:"JPN", hg:2, ag:2},
 {f:"14 jun", g:"E", h:"CIV", a:"ECU", hg:1, ag:0},
 {f:"14 jun", g:"F", h:"SWE", a:"TUN", hg:5, ag:1},
 {f:"15 jun", g:"H", h:"ESP", a:"CPV", hg:0, ag:0},
 {f:"15 jun", g:"G", h:"BEL", a:"EGY", hg:1, ag:1},
 {f:"15 jun", g:"H", h:"KSA", a:"URU", hg:1, ag:1},
 {f:"15 jun", g:"G", h:"IRN", a:"NZL", hg:2, ag:2}
];

// ============================================================
// FAVORITOS AL TÍTULO (recalculados a diario)
// ============================================================
const FAVORITOS = [
 {c:"ARG",p:17,pro:"Campeona vigente y 1.ª del ranking; bloque consolidado desde 2021; Messi en su último Mundial; llega sin lesionados y con el Dibu Martínez a punto para debutar hoy ante Argelia.",con:"Baja de Balerdi (desgarro); edad de varios referentes; Argelia, que viene de ganarle a Países Bajos, no será trámite."},
 {c:"ESP",p:13,pro:"2.ª del ranking y sigue invicta en 2026; Lamine Yamal en su pico y la plantilla más profunda del torneo; margen de sobra para crecer.",con:"Tropezó en el debut: 0-0 ante el debutante Cabo Verde, con Vozinha (40) tapándole todo; ahora obligada a ganar a Arabia."},
 {c:"FRA",p:11,pro:"3.ª del ranking; talento de élite en cada línea; Olise encendido (triplete a Irlanda del Norte); experiencia en finales (2018, 2022).",con:"Perdió 1-2 con Costa de Marfil; dudas defensivas; grupo I exigente con Senegal y Noruega."},
 {c:"ENG",p:10,pro:"4.ª del ranking; Kane + Bellingham; jugará con techo y clima controlado en Dallas (sin factor calor); plantel profundo.",con:"Victorias discretas en la previa (1-0 a NZ); historial de quedarse corta en cruces grandes."},
 {c:"BRA",p:8,pro:"6.º del ranking; Vinícius rescató el 1-1 ante Marruecos (su gol 10 con Brasil); margen para crecer con Ancelotti.",con:"Decepcionó en el debut sin Neymar de inicio; le faltó pegada y debe golear a Haití para liderar el grupo C."},
 {c:"GER",p:9,pro:"Arrancó con una exhibición: 7-1 a Curazao con seis goleadores distintos (doblete de Havertz); la mejor ofensiva de la fase y líder del grupo E.",con:"Encajó el gol histórico de Curazao; el 10.º del ranking aún arrastra la duda de su irregularidad ante rivales de peso."},
 {c:"POR",p:8,pro:"5.º del ranking; generación dorada en plenitud + CR7 a su sexto Mundial; grupo K manejable.",con:"Dependencia emocional de veteranos; Colombia al cierre del grupo puede costarle el 1.er puesto."},
 {c:"MAR",p:5,pro:"7.º del ranking; le sacó un punto a Brasil en el debut (gol de Saibari); el bloque africano más sólido del torneo.",con:"Le costó generar ante la zaga brasileña; ahora debe ganar a una Escocia envalentonada para no complicarse."},
 {c:"NED",p:3,pro:"8.ª del ranking; plantel de élite y oficio en Mundiales; se adelantó dos veces ante Japón.",con:"Empató 2-2 con Japón tras dos ventajas desperdiciadas; la zaga concede en cada partido y el margen en el grupo F se estrechó."},
 {c:"MEX",p:4,pro:"Debut ganador 2-0 a Sudáfrica en el Azteca (primera victoria mexicana en partido inaugural); 4 triunfos al hilo sin recibir gol; dominó con 16 remates y 58 % de posesión.",con:"Techo histórico de octavos; pierde a Montes por suspensión para el duelo clave ante Corea; aún no enfrenta a un rival de élite."},
 {c:"BEL",p:3,pro:"De Bruyne sigue marcando los tiempos y la nueva camada tiene hambre; Doku y Openda dan profundidad.",con:"Debut mundialista flojo: solo 1-1 ante Egipto pese a las buenas señales de la previa; la zaga sigue lenta."},
 {c:"URU",p:2,pro:"El Uruguay de Bielsa compite contra cualquiera; Valverde y Núñez en plenitud; oficio copero.",con:"Arrancó con un 1-1 ante Arabia Saudita: le costó generar y dependió de Araújo sobre el final."}
];

// hero chips (top 6)
document.getElementById('heroChips').innerHTML = FAVORITOS.slice(0,6).map((x,i)=>
 `<div class="chip ${i==0?'c1':''}" onclick="document.querySelector('[data-v=favoritos]').click()"><div class="pc">${x.p}%</div><div class="nm">${name(x.c)}</div></div>`).join('')
 + `<div class="chip"><div class="pc">${100-FAVORITOS.reduce((s,x)=>s+x.p,0)}%</div><div class="nm">🌍 Resto del campo</div></div>`;

// favoritos tab
document.getElementById('favList').innerHTML = FAVORITOS.map((x,i)=>
 `<div class="favrow">
   <div class="pct">${x.p}%</div>
   <div class="tm">${i+1}. ${name(x.c)}<small>Grupo ${T[x.c].g} · Rating ${T[x.c].r}</small></div>
   <div class="pro"><b>✔ A favor</b>${x.pro}</div>
   <div class="con"><b>✖ En contra</b>${x.con}</div>
 </div>`).join('') +
 `<p class="leyenda">El ${100-FAVORITOS.reduce((s,x)=>s+x.p,0)}% restante se reparte entre las otras 36 selecciones (ninguna supera el 1 % individual hoy).</p>`;

// ============================================================
// TABLAS DE GRUPO calculadas desde RESULTADOS
// ============================================================
const GL = "ABCDEFGHIJKL".split("");
function tablaGrupo(g){
  const eqs = Object.keys(T).filter(c=>T[c].g===g);
  const st = {}; eqs.forEach(c=>st[c]={c,pj:0,w:0,e:0,l:0,gf:0,gc:0,pts:0});
  RESULTADOS.filter(r=>r.g===g && r.hg!=null).forEach(r=>{
    const H=st[r.h], A=st[r.a];
    H.pj++;A.pj++; H.gf+=r.hg;H.gc+=r.ag; A.gf+=r.ag;A.gc+=r.hg;
    if(r.hg>r.ag){H.w++;H.pts+=3;A.l++;}
    else if(r.hg<r.ag){A.w++;A.pts+=3;H.l++;}
    else {H.e++;A.e++;H.pts++;A.pts++;}
  });
  return Object.values(st).sort((a,b)=> b.pts-a.pts || (b.gf-b.gc)-(a.gf-a.gc) || b.gf-a.gf || T[b.c].proy-T[a.c].proy || T[b.c].r-T[a.c].r);
}
document.getElementById('gridGrupos').innerHTML = GL.map(g=>{
  const rows = tablaGrupo(g).map((s,i)=>`<tr class="${i<2?'q1':(i==2?'q3':'q4')}">
    <td>${i+1}</td><td class="eq clickeq" onclick="verEquipo('${s.c}')" title="Ver ficha de ${T[s.c].n}">${name(s.c)}</td><td>${s.pj}</td><td>${s.w}</td><td>${s.e}</td><td>${s.l}</td><td>${s.gf}</td><td>${s.gc}</td><td>${s.gf-s.gc}</td><td class="pts">${s.pts}</td><td class="proy">${T[s.c].proy}</td></tr>`).join('');
  return `<div class="gcard"><h3>GRUPO ${g} <button class="btnimg" style="float:right" onclick="imgGrupo('${g}')">📷 Imagen</button></h3>
  <table><thead><tr><th>#</th><th style="text-align:left;padding-left:12px">Equipo</th><th>PJ</th><th>G</th><th>E</th><th>P</th><th>GF</th><th>GC</th><th>DIF</th><th>PTS</th><th>PROY</th></tr></thead><tbody>${rows}</tbody></table></div>`;
}).join('');

// ============================================================
// JORNADA 1 — fichas con pronóstico (la tarea diaria reemplaza por la jornada vigente)
// ============================================================
const J1 = [
 {g:"A",f:"Jue 18 jun",h:"21:00 ET (19:00 GDL)",e1:"🇲🇽 México",e2:"🇰🇷 Corea del Sur",sede:"Estadio Akron, Guadalajara",
  p:[45,29,26],m:"2-1",alt:"1 566 m — altitud moderada; México llega de jugar a 2 240 m, ventaja de aclimatación",
  clima:"28–30 °C de día con UV muy alta; chubascos vespertinos posibles, cancha rápida de noche",
  arb:"Por confirmar (FIFA designa ~48 h antes)",
  f1:"V. 2-0 Sudáfrica — debut ganador en el Azteca (16 remates, 58 % posesión), pero con roja a César Montes",
  f2:"V. 2-1 Chequia — remontada de carácter con goles de Hwang In-beom (67') y Oh Hyeon-gyu (80')",
  news:["Baja confirmada en México: César Montes, suspendido por la roja ante Sudáfrica; Aguirre define entre Vásquez y el juvenil del Feyenoord.","Corea salió entera del debut; Son fue el más peligroso aunque no marcó (1 remate a puerta de 8 totales del equipo).","Duelo de líderes del grupo A: el ganador queda con un pie en la siguiente ronda."],
  an:"México llegó mejor de lo esperado y Corea mostró fondo físico en el segundo tiempo. Sin Montes, la zaga del Tri pierde su mejor cabeceador: el empate también deja a ambos vivos y es escenario real."},
 {g:"A",f:"Jue 18 jun",h:"12:00 ET",e1:"🇨🇿 Chequia",e2:"🇿🇦 Sudáfrica",sede:"Mercedes-Benz Stadium, Atlanta",
  p:[50,28,22],m:"1-0",alt:"320 m — sin efecto; techo retráctil con clima controlado",
  clima:"Clima controlado (~22 °C); mediodía sin factor exterior",
  arb:"Por confirmar (FIFA designa ~48 h antes)",
  f1:"D. 1-2 Corea del Sur — golpeó primero con Krejčí (59') de córner, pero se desfondó en el último tercio",
  f2:"D. 0-2 México — solo 3 remates en todo el partido y terminó con 9 por las rojas de Sithole y Zwane",
  news:["Doble baja por suspensión en Sudáfrica: Sithole y Themba Zwane, expulsados en el debut.","Chequia generó poco (3 remates, 0 a puerta) pero su gol llegó de pelota parada: su mejor arma.","Partido de urgencias: el perdedor queda virtualmente eliminado del grupo A."],
  an:"Chequia favorita pese a su pobre debut: Sudáfrica mostró aún menos fútbol y pierde dos titulares por roja. Un 0-0 espeso es el riesgo principal; la pelota parada checa, el diferencial."},
 {g:"B",f:"Jue 18 jun",h:"15:00 ET (12:00 PT)",e1:"🇨🇭 Suiza",e2:"🇧🇦 Bosnia y Herz.",sede:"SoFi Stadium, Inglewood",
  p:[56,26,18],m:"2-0",alt:"30 m — sin efecto; estadio techado",
  clima:"Estadio techado, clima controlado (~22 °C)",
  arb:"Por confirmar (FIFA designa ~48 h antes)",
  f1:"E. 1-1 Qatar — perdonó en ataque y encajó un autogol en el descuento; obligada a ganar",
  f2:"E. 1-1 Canadá — se adelantó pero le empataron al 79'; punto válido de visita",
  news:["Suiza dejó escapar dos puntos ante Qatar y necesita reaccionar para no complicar el grupo B.","Bosnia rescató un empate ante el anfitrión Canadá y llega con moral.","Ambas llegan igualadas a 1 punto: el ganador da un salto enorme hacia octavos."],
  an:"Suiza es netamente superior y juega una final anticipada tras su tropiezo. Bosnia se cierra bien y tiene a Džeko para los duelos; el orden suizo debería pesar."},
 {g:"B",f:"Jue 18 jun",h:"18:00 ET (15:00 PT)",e1:"🇨🇦 Canadá",e2:"🇶🇦 Qatar",sede:"BC Place, Vancouver",
  p:[60,25,15],m:"2-0",alt:"0 m — nivel del mar; techo retráctil",
  clima:"Techo retráctil, clima controlado (~20 °C)",
  arb:"Por confirmar (FIFA designa ~48 h antes)",
  f1:"E. 1-1 Bosnia — rescató un punto como local con gol de Larin al 79'",
  f2:"E. 1-1 Suiza — primer punto mundialista de su historia, con autogol en el descuento",
  news:["Canadá busca su primera victoria como anfitrión ante un rival a su alcance.","Qatar llega entonado tras arañar un histórico punto ante Suiza.","Duelo clave del grupo B: el ganador queda a tiro de la siguiente ronda."],
  an:"Canadá tiene más fondo y juega en casa; Qatar mostró orden y aguante ante Suiza. Si el anfitrión mueve rápido el balón, su mayor pegada debería decidir."},
 {g:"C",f:"Vie 19 jun",h:"21:00 ET",e1:"🇧🇷 Brasil",e2:"🇭🇹 Haití",sede:"Lincoln Financial Field, Filadelfia",
  p:[78,15,7],m:"3-0",alt:"12 m — sin efecto",
  clima:"~26 °C al atardecer, estadio abierto",
  arb:"Por confirmar (FIFA designa ~48 h antes)",
  f1:"E. 1-1 Marruecos — Vinícius rescató el empate (su gol 10 con Brasil); obligado a ganar para liderar",
  f2:"D. 0-1 Escocia — compitió pero no marcó; necesita puntuar para seguir con vida",
  news:["Brasil no puede repetir tropiezos: quiere golear para tomar el liderato del grupo C.","Haití cayó con honor ante Escocia pero sigue sin marcar en el torneo.","Ancelotti pediría más contundencia tras el 1-1 ante Marruecos."],
  an:"Brecha enorme de nivel. Brasil buscará resolver pronto y cuidar la diferencia de gol; a Haití solo le sirve un partido perfecto de bloque bajo."},
 {g:"C",f:"Vie 19 jun",h:"18:00 ET",e1:"🏴󠁧󠁢󠁳󠁣󠁴󠁿 Escocia",e2:"🇲🇦 Marruecos",sede:"Gillette Stadium, Foxborough",
  p:[28,30,42],m:"1-1",alt:"90 m — sin efecto",
  clima:"~22 °C nocturno, fresco; condiciones cómodas",
  arb:"Por confirmar (FIFA designa ~48 h antes)",
  f1:"V. 1-0 Haití — primer triunfo mundialista en 36 años (gol de McGinn); líder del grupo C",
  f2:"E. 1-1 Brasil — le aguantó el ritmo al pentacampeón (gol de Saibari); 7.º del ranking",
  news:["Escocia sueña tras ganar su primer partido mundialista desde 1990 y liderar el grupo.","Marruecos sacó un punto valioso ante Brasil y va por su primera victoria.","Un triunfo escocés lo dejaría con un pie en la siguiente ronda."],
  an:"Marruecos es mejor en el papel y necesita ganar; Escocia, envalentonada y ordenada, defenderá su liderato con uñas y dientes. El empate es escenario muy plausible."},
 {g:"D",f:"Vie 19 jun",h:"15:00 ET (12:00 PT)",e1:"🇺🇸 Estados Unidos",e2:"🇦🇺 Australia",sede:"Lumen Field, Seattle",
  p:[50,28,22],m:"2-1",alt:"5 m — sin efecto",
  clima:"~21 °C, clima templado de Seattle; ideal para ritmo alto",
  arb:"Por confirmar (FIFA designa ~48 h antes)",
  f1:"V. 4-1 Paraguay — debut arrollador con doblete de Balogun, más Reyna; líder del grupo D",
  f2:"V. 2-0 Turquía — sorpresón con goles de Irankunda y Metcalfe; Beach atajó todo (8 paradas, valla invicta)",
  news:["Choque por el liderato del grupo D entre los dos ganadores de la jornada 1.","EE. UU. llega entonado tras golear a Paraguay; Pulisic y Balogun, en racha.","Australia revalida ilusión tras vencer a Turquía: el ganador queda casi clasificado a octavos."],
  an:"EE. UU. es favorito por localía y pegada, pero Australia demostró ante Turquía que defiende con orden y golpea de contra. Beach, en racha, puede sostener a los Socceroos; un partido cerrado de jerarquía anfitriona."},
 {g:"F",f:"Sáb 20 jun",h:"13:00 ET (12:00 CT)",e1:"🇳🇱 Países Bajos",e2:"🇸🇪 Suecia",sede:"NRG Stadium, Houston",
  p:[48,27,25],m:"2-1",alt:"15 m — sin efecto; techo cerrado, clima controlado",
  clima:"Techo cerrado (~22 °C); fuera, calor húmedo de Houston",
  arb:"Por confirmar (FIFA designa ~48 h antes)",
  f1:"E. 2-2 Japón — se adelantó dos veces (Van Dijk, Summerville) y dos veces lo empataron; zaga frágil",
  f2:"V. 5-1 Túnez — goleada con doblete de Ayari y goles de Isak y Gyökeres; líder del grupo F",
  news:["Países Bajos volvió a dejar dudas defensivas pese a adelantarse dos veces ante Japón.","Suecia llega líder y enchufada tras golear 5-1 a Túnez con Isak y Gyökeres finos.","Duelo por la cima del grupo F: el ganador queda a un paso de octavos."],
  an:"Choque clave del grupo F. Países Bajos tiene más nivel individual pero su zaga concede; Suecia llega con confianza y delantera de élite. Partido abierto, con goles probables en ambos arcos."},
 {g:"E",f:"Sáb 20 jun",h:"16:00 ET",e1:"🇩🇪 Alemania",e2:"🇨🇮 Costa de Marfil",sede:"BMO Field, Toronto",
  p:[64,22,14],m:"2-0",alt:"76 m — sin efecto; estadio abierto",
  clima:"~23 °C, tarde templada en Toronto",
  arb:"Por confirmar (FIFA designa ~48 h antes)",
  f1:"V. 7-1 Curazao — exhibición ofensiva (doblete de Havertz, más Musiala, Nmecha, Schlotterbeck...); líder del grupo E",
  f2:"V. 1-0 Ecuador — gol de Amad Diallo al 90' y valla invicta de Yahia Fofana",
  news:["Alemania llega lanzada tras golear 7-1 a Curazao; Nagelsmann tiene la mejor ofensiva de la fase.","Costa de Marfil venció 1-0 a Ecuador con solidez defensiva y físico.","El liderato del grupo E se define aquí: Alemania manda por diferencia de gol."],
  an:"Alemania es favorita clara por plantel y momento, pero Costa de Marfil ya mostró orden atrás y verticalidad. Si los marfileños aguantan el cero un rato pueden incomodar; la pegada alemana debería pesar."},
 {g:"E",f:"Sáb 20 jun",h:"19:00 ET (18:00 CT)",e1:"🇪🇨 Ecuador",e2:"🇨🇼 Curazao",sede:"GEHA Field at Arrowhead, Kansas City",
  p:[72,19,9],m:"2-0",alt:"270 m — sin efecto",
  clima:"~30 °C y húmedo en Kansas City; tarde calurosa del medio oeste",
  arb:"Por confirmar (FIFA designa ~48 h antes)",
  f1:"D. 0-1 Costa de Marfil — generó poco y cayó sobre la hora; obligado a sumar",
  f2:"D. 1-7 Alemania — histórico primer gol mundialista de Comenencia, pero goleada severa",
  news:["Ecuador necesita ganar tras caer 0-1 con Costa de Marfil en el debut.","Curazao hizo historia con su primer gol mundial (Comenencia) pese al 1-7 ante Alemania.","Para Ecuador es una final: solo la victoria lo mantiene con opciones reales de avanzar."],
  an:"Ecuador es muy superior y juega obligado tras su derrota inicial. Curazao se cierra pero ya mostró fragilidad atrás; el orden y la pegada ecuatorianos deberían imponerse."},
 {g:"F",f:"Sáb 20 jun",h:"23:00 ET (22:00 MTY)",e1:"🇹🇳 Túnez",e2:"🇯🇵 Japón",sede:"Estadio BBVA, Monterrey",
  p:[24,28,48],m:"1-2",alt:"540 m — leve, no determinante",
  clima:"Monterrey muy caluroso de día; de noche ~28 °C, bochorno",
  arb:"Por confirmar (FIFA designa ~48 h antes)",
  f1:"D. 1-5 Suecia — descalabro defensivo; solo el gol de Rekik evitó el cero",
  f2:"E. 2-2 Países Bajos — empató dos veces (Nakamura, Kamada al 88') y sacó un punto de oro",
  news:["Túnez quedó tocado tras el 1-5 ante Suecia: necesita reacción defensiva inmediata.","Japón llega con moral tras empatar 2-2 a Países Bajos con carácter.","Túnez está obligado a puntuar para no quedar virtualmente eliminado."],
  an:"Japón es favorito por fútbol y momento; Túnez vive de la urgencia y del calor regio. Si los nipones manejan la posesión, su calidad técnica debería decidir, aunque Túnez apretará por necesidad."},
 {g:"H",f:"Dom 21 jun",h:"12:00 ET",e1:"🇪🇸 España",e2:"🇸🇦 Arabia Saudita",sede:"Mercedes-Benz Stadium, Atlanta",
  p:[72,20,8],m:"2-0",alt:"320 m — sin efecto",
  clima:"Techo retráctil, clima controlado; mediodía sin factor",
  arb:"Por confirmar (FIFA designa ~48 h antes)",
  f1:"E. 0-0 Cabo Verde — dominó (posesión y remates) pero Vozinha (40) le tapó todo; ahora obligada a ganar",
  f2:"E. 1-1 Uruguay — aguantó y se adelantó con Al-Amri (41'); le empataron al 80'",
  news:["España tropezó en el debut y necesita los tres puntos para no complicar el grupo H.","Arabia sacó un punto valioso ante Uruguay y se siente cómoda en bloque bajo.","De la Fuente analiza retoques en ataque tras el 0-0 ante Cabo Verde."],
  an:"España es muy superior y juega con la urgencia de quien dejó puntos. Arabia se cierra bien y ya frustró a Uruguay; el reto de la Roja es romper el muro pronto."},
 {g:"G",f:"Dom 21 jun",h:"15:00 ET (12:00 PT)",e1:"🇧🇪 Bélgica",e2:"🇮🇷 Irán",sede:"SoFi Stadium, Inglewood",
  p:[55,27,18],m:"2-1",alt:"30 m — sin efecto; estadio techado",
  clima:"Estadio techado, clima controlado (~22 °C)",
  arb:"Por confirmar (FIFA designa ~48 h antes)",
  f1:"E. 1-1 Egipto — Lukaku rescató el empate desde el banco; faltó contundencia ante el repliegue",
  f2:"E. 2-2 Nueva Zelanda — remontó dos veces (Rezaeian, Mohebi) pero su zaga concedió de más",
  news:["Bélgica no pasó del 1-1 ante Egipto y busca su primera victoria del Mundial.","Irán mostró carácter para empatar dos veces a Nueva Zelanda, aunque sufrió atrás.","Duelo clave del grupo G: el ganador toma el control de la llave."],
  an:"Bélgica tiene más nivel individual y debería imponer su juego asociado; Irán es físico y aguerrido. Si los belgas evitan la transición iraní, su pegada manda."},
 {g:"H",f:"Dom 21 jun",h:"18:00 ET",e1:"🇺🇾 Uruguay",e2:"🇨🇻 Cabo Verde",sede:"Hard Rock Stadium, Miami",
  p:[55,28,17],m:"1-0",alt:"3 m — sin efecto",
  clima:"~31 °C y humedad alta de Miami; la cancha queda al aire — desgaste real",
  arb:"Por confirmar (FIFA designa ~48 h antes)",
  f1:"E. 1-1 Arabia Saudita — Araújo rescató el empate al 80'; le costó generar ante el bloque saudí",
  f2:"E. 0-0 España — frenó a la favorita con un Vozinha gigantesco; defensa heroica",
  news:["Uruguay necesita ganar tras el 1-1 ante Arabia para no quedar contra las cuerdas.","Cabo Verde llega entonado: le sacó un punto histórico a España.","El calor-humedad de Miami vuelve a ser un factor de desgaste."],
  an:"Uruguay es superior en plantel y jerarquía, pero Cabo Verde ya demostró orden y un portero inspirado. La Celeste deberá tener paciencia ante un rival que se cierra bien."},
 {g:"G",f:"Dom 21 jun",h:"21:00 ET (18:00 PT)",e1:"🇳🇿 Nueva Zelanda",e2:"🇪🇬 Egipto",sede:"BC Place, Vancouver",
  p:[30,28,42],m:"1-1",alt:"0 m — nivel del mar; techo retráctil",
  clima:"Techo retráctil, clima controlado (~21 °C)",
  arb:"Por confirmar (FIFA designa ~48 h antes)",
  f1:"E. 2-2 Irán — Elijah Just firmó un doblete; competitiva y con gol, pero frágil atrás",
  f2:"E. 1-1 Bélgica — le aguantó el ritmo a Bélgica con Ashour y Salah de bandera",
  news:["Nueva Zelanda sorprendió con su pegada (doblete de Just) y va por su primer triunfo.","Egipto, con Salah, quiere los tres puntos tras frenar a Bélgica.","El ganador da un salto enorme hacia la siguiente ronda en un grupo G parejo."],
  an:"Egipto es ligeramente favorito por la jerarquía de Salah, pero Nueva Zelanda llega envalentonada tras su 2-2. Partido abierto: ambos ya mostraron que marcan."},
 {g:"I",f:"Mar 16 jun",h:"15:00 ET",e1:"🇫🇷 Francia",e2:"🇸🇳 Senegal",sede:"MetLife Stadium, East Rutherford",
  p:[52,26,22],m:"2-1",alt:"3 m — sin efecto",
  clima:"~27 °C, estadio abierto; tarde calurosa posible",
  arb:"Alireza Faghani (Australia)",
  f1:"D. 1-2 Costa de Marfil, V. 3-1 Irlanda del Norte (triplete de Olise) — talento intacto, defensa con dudas",
  f2:"D. 2-3 EE. UU. (cerró ante Arabia el 9-jun) — físico, pero cedió terreno en el ranking",
  news:["Olise firmó triplete en la despedida francesa: candidato a figura del grupo.","Francia perdió con Costa de Marfil: aviso serio sobre su solidez.","Senegal cayó ante EE. UU. y bajó posiciones en el ranking; Mané y Jackson lideran el ataque."],
  an:"Choque de potencias francófonas. Francia (3.ª) es favorita pero su zaga concede; Senegal tiene físico y velocidad para explotarlo. Goles en ambos arcos como escenario probable."},
 {g:"I",f:"Mar 16 jun",h:"18:00 ET",e1:"🇮🇶 Irak",e2:"🇳🇴 Noruega",sede:"Gillette Stadium, Foxborough",
  p:[20,27,53],m:"1-2",alt:"90 m — sin efecto",
  clima:"~23 °C, sin factor",
  arb:"Por confirmar",
  f1:"V. 1-0 Andorra, E. 1-1 España — el empate ante La Roja (con rotaciones) infló la moral iraquí",
  f2:"V. 3-1 Suecia, E. 1-1 Marruecos — Haaland y compañía, con la mejor delantera 'no top-5' del torneo",
  news:["Irak vuelve a un Mundial 40 años después (México 86).","Noruega invicta en la previa; Haaland llega descansado y enchufado.","El bloque bajo iraquí vs el juego directo noruego: partido de área."],
  an:"Noruega tiene con Haaland el diferencial absoluto del cruce. Irak compite y se cierra bien, pero sufrirá el juego aéreo y la pelota parada."},
 {g:"J",f:"Mar 16 jun",h:"21:00 ET (20:00 CT)",e1:"🇦🇷 Argentina",e2:"🇩🇿 Argelia",sede:"GEHA Field at Arrowhead, Kansas City",
  p:[62,24,14],m:"2-0",alt:"270 m — sin efecto",
  clima:"~28 °C al inicio, calor del medio oeste; posible tormenta aislada de tarde",
  arb:"Szymon Marciniak (Polonia) · dirigió la final de Qatar 2022 (Argentina campeona); viejo conocido de la Albiceleste",
  f1:"V. 2-0 Honduras (cerró ante Islandia el 9-jun) — campeona vigente y 1.ª del ranking; Messi, su último Mundial",
  f2:"V. 1-0 a Países Bajos en Rotterdam — aviso mayúsculo: Argelia no es comparsa",
  news:["Baja en Argentina: Leo Balerdi (desgarro en el sóleo) quedó fuera del torneo.","Scaloni citó a un debutante de último momento para la preparación.","Mahrez (capitán argelino) calentó la previa: 'no le tenemos miedo a nadie'.","Argentina llega como líder del ranking FIFA y defensora del título."],
  an:"Argentina es muy superior en plantel y jerarquía, pero Argelia acaba de ganarle a Países Bajos y tiene contragolpe letal con Mahrez. Favoritismo claro, no trámite."},
 {g:"J",f:"Mié 17 jun",h:"00:00 ET (21:00 PT mar)",e1:"🇦🇹 Austria",e2:"🇯🇴 Jordania",sede:"Levi's Stadium, Santa Clara",
  p:[48,30,22],m:"1-0",alt:"25 m — sin efecto",
  clima:"~17 °C nocturno, fresco y seco",
  arb:"Por confirmar",
  f1:"V. 1-0 Túnez (con 10), cerró ante Guatemala el 10-jun — sólida, estilo Rangnick de presión",
  f2:"D. 1-4 Suiza, D. 0-2 Colombia — dos derrotas claras en la previa",
  news:["Baja sensible en Austria: Baumgartner (desgarro en el muslo) — su creador principal.","Jordania, debutante absoluto, no pudo con Suiza ni Colombia.","Austria mostró carácter ganando con 10 hombres ante Túnez."],
  an:"Austria favorita aun sin Baumgartner: su presión asfixia a rivales de menor ritmo. Jordania necesita el partido perfecto; un 1-0 trabajado es el guion lógico."},
 {g:"K",f:"Mié 17 jun",h:"13:00 ET (12:00 CT)",e1:"🇵🇹 Portugal",e2:"🇨🇩 RD Congo",sede:"NRG Stadium, Houston",
  p:[67,21,12],m:"2-0",alt:"15 m — techo cerrado",
  clima:"Clima controlado (~22 °C); sin factor",
  arb:"Por confirmar",
  f1:"V. 2-1 Chile, cerró ante Nigeria el 10-jun — 5.º del ranking; CR7 a su sexto Mundial",
  f2:"E. 0-0 Dinamarca (amistoso ante Chile suspendido) — físicamente fuerte, ofensivamente romo",
  news:["RD Congo llegó vía repechaje intercontinental; su 0-0 ante Dinamarca muestra solidez.","Su amistoso del 9-jun ante Chile fue suspendido: menos rodaje del previsto.","Portugal cierra preparación ante Nigeria con el once de gala."],
  an:"Portugal muy favorito. El Congo defiende bien y puede mantener el cero un rato largo, pero genera poquísimo: la diferencia de talento debería imponerse."},
 {g:"L",f:"Mié 17 jun",h:"16:00 ET (15:00 CT)",e1:"🏴󠁧󠁢󠁥󠁮󠁧󠁿 Inglaterra",e2:"🇭🇷 Croacia",sede:"AT&T Stadium, Arlington",
  p:[50,28,22],m:"2-1",alt:"180 m — techo retráctil",
  clima:"Clima controlado; fuera ~34 °C en Dallas",
  arb:"Por confirmar",
  f1:"V. 1-0 Nueva Zelanda, cerró ante Costa Rica el 10-jun — 4.ª del ranking, Kane y Bellingham al frente",
  f2:"D. 0-2 Bélgica (local), V. 2-1 Eslovenia — Modric a su despedida; recambio generacional a medias",
  news:["Inglaterra llega con victorias discretas pero sin bajas.","Croacia perdió en casa con Bélgica: señales de desgaste del bloque histórico.","El duelo Bellingham–Modric, choque generacional del grupo L."],
  an:"El cruce más 'eliminatoria' de la jornada 1. Inglaterra favorita por presente y profundidad de plantel; Croacia vive de su oficio en partidos grandes."},
 {g:"L",f:"Mié 17 jun",h:"19:00 ET",e1:"🇬🇭 Ghana",e2:"🇵🇦 Panamá",sede:"BMO Field, Toronto",
  p:[38,30,32],m:"1-1",alt:"76 m — sin efecto",
  clima:"~23 °C, tarde templada en Toronto",
  arb:"Por confirmar",
  f1:"D. 0-2 México, E. 1-1 Gales — sin ganar en la previa, pero con talento joven (Kudus)",
  f2:"V. 4-2 Rep. Dominicana, E. 1-1 Bosnia — competitiva y con gol; cayó goleada solo ante Brasil",
  news:["Panamá mostró más regularidad reciente que Ghana.","Ghana confía en el salto de calidad de sus figuras de Premier League.","Ambos saben que el tercer puesto del grupo L puede dar boleto: partido de seis puntos."],
  an:"Paridad real. Ghana tiene techo más alto; Panamá, mejor momento y rodaje CONCACAF. El empate deja vivo a ambos y es escenario muy plausible."},
 {g:"K",f:"Mié 17 jun",h:"22:00 ET (20:00 CDMX)",e1:"🇺🇿 Uzbekistán",e2:"🇨🇴 Colombia",sede:"Estadio Azteca, Ciudad de México",
  p:[18,26,56],m:"0-2",alt:"2 240 m — factor mayúsculo; ninguno juega 'en casa', pero Colombia tiene jugadores habituados a la altura",
  clima:"Lluvia vespertina probable en CDMX en junio; cancha rápida y pesada de noche",
  arb:"Por confirmar",
  f1:"D. 0-2 Canadá, D. 1-2 Países Bajos — debutante digno, compite pero pierde los duelos grandes",
  f2:"V. 3-1 Costa Rica, V. 2-0 Jordania — dos triunfos, James y Luis Díaz finos",
  news:["Colombia cerró su preparación con dos victorias sólidas.","Uzbekistán compitió de tú a tú ante Países Bajos pero volvió a caer.","La altura del Azteca castigará más al equipo que corra detrás del balón: ventaja cafetera si maneja la posesión."],
  an:"Colombia favorita clara: mejor plantel, mejor forma y mejor adaptación esperable a los 2 240 m. Uzbekistán ya demostró que compite; necesita eficacia máxima."}
];
// ============================================================
// PROPS — Probabilidades detalladas por partido (mismo orden que J1).
// Pares [x,y] y campos a/b siempre en orden: equipo local listado / visitante.
// fa=faltas (t total, a/b por equipo, p1 prob. primera falta)
// am=amarillas (t, a/b, p1 prob. primera tarjeta, roja=prob. de roja en el partido %)
// co=córners (t, a/b, p1 prob. primer córner) · li=tiros libres a favor (a/b)
// mi=mitades (g1/g2 prob. de gol en cada mitad %, m2 prob. de más goles en 2T, m1t marcador 1T más probable)
// re=rematadores [nombre, remates esperados, a puerta] · go=goleadores [nombre, prob. de anotar %]
// La tarea diaria actualiza este arreglo junto con J1.
// ============================================================
const PROPS = [
 {fa:{t:26,a:13,b:13,p1:[50,50]},am:{t:4.5,a:2.2,b:2.3,p1:[48,52],roja:12},co:{t:9.5,a:5.5,b:4.0,p1:[58,42]},li:{a:13,b:13},mi:{g1:50,g2:72,m2:58,m1t:"1-0 (26%)"},re:[["S. Giménez (MEX)","3.2","1.5"],["R. Jiménez (MEX)","2.4","1.1"],["H-M. Son (KOR)","3.4","1.5"],["Lee Kang-in (KOR)","2.2","0.9"]],go:[["Santiago Giménez (MEX)",30],["Heung-min Son (KOR)",28],["Raúl Jiménez (MEX)",24]]},
 {fa:{t:27,a:13,b:14,p1:[48,52]},am:{t:4.0,a:1.7,b:2.3,p1:[45,55],roja:10},co:{t:9.0,a:5.5,b:3.5,p1:[60,40]},li:{a:14,b:13},mi:{g1:44,g2:68,m2:58,m1t:"0-0 (36%)"},re:[["P. Schick (CZE)","3.2","1.4"],["L. Krejčí (CZE)","1.8","0.8"],["L. Foster (RSA)","2.0","0.8"]],go:[["Patrik Schick (CZE)",29],["Ladislav Krejčí (CZE)",16],["Lyle Foster (RSA)",13]]},
 {fa:{t:25,a:12,b:13,p1:[48,52]},am:{t:3.5,a:1.6,b:1.9,p1:[46,54],roja:7},co:{t:9.5,a:6.0,b:3.5,p1:[62,38]},li:{a:13,b:12},mi:{g1:48,g2:70,m2:57,m1t:"0-0 (33%)"},re:[["B. Embolo (SUI)","3.4","1.6"],["D. Ndoye (SUI)","2.8","1.2"],["E. Demirović (BIH)","2.4","1.0"],["E. Džeko (BIH)","2.0","0.8"]],go:[["Breel Embolo (SUI)",30],["Dan Ndoye (SUI)",20],["Ermedin Demirović (BIH)",16]]},
 {fa:{t:24,a:12,b:12,p1:[52,48]},am:{t:3.5,a:1.7,b:1.8,p1:[50,50],roja:7},co:{t:9.5,a:6.0,b:3.5,p1:[63,37]},li:{a:12,b:12},mi:{g1:50,g2:71,m2:57,m1t:"1-0 (27%)"},re:[["J. David (CAN)","3.3","1.5"],["C. Larin (CAN)","2.6","1.1"],["A. Afif (QAT)","2.0","0.8"],["Almoez Ali (QAT)","1.8","0.7"]],go:[["Jonathan David (CAN)",31],["Cyle Larin (CAN)",24],["Akram Afif (QAT)",12]]},
 {fa:{t:23,a:10,b:13,p1:[42,58]},am:{t:3.0,a:1.1,b:1.9,p1:[36,64],roja:6},co:{t:11.0,a:8.0,b:3.0,p1:[75,25]},li:{a:13,b:10},mi:{g1:62,g2:80,m2:56,m1t:"1-0 (28%)"},re:[["Vinícius Jr. (BRA)","4.0","1.9"],["Raphinha (BRA)","3.2","1.5"],["Igor Thiago (BRA)","2.6","1.2"],["D. Nazon (HAI)","1.8","0.7"]],go:[["Vinícius Jr. (BRA)",40],["Raphinha (BRA)",30],["Igor Thiago (BRA)",26]]},
 {fa:{t:26,a:14,b:12,p1:[54,46]},am:{t:4.0,a:2.2,b:1.8,p1:[56,44],roja:9},co:{t:9.5,a:3.6,b:5.9,p1:[38,62]},li:{a:12,b:14},mi:{g1:47,g2:69,m2:57,m1t:"0-0 (33%)"},re:[["Y. En-Nesyri (MAR)","3.2","1.5"],["I. Saibari (MAR)","2.6","1.1"],["S. McTominay (SCO)","2.8","1.2"],["C. Adams (SCO)","2.3","1.0"]],go:[["Youssef En-Nesyri (MAR)",30],["Ismael Saibari (MAR)",22],["Scott McTominay (SCO)",20]]},
 {fa:{t:25,a:12,b:13,p1:[48,52]},am:{t:4.0,a:1.9,b:2.1,p1:[47,53],roja:9},co:{t:9.5,a:5.6,b:3.9,p1:[59,41]},li:{a:12,b:13},mi:{g1:49,g2:71,m2:58,m1t:"1-0 (26%)"},re:[["F. Balogun (USA)","3.4","1.6"],["C. Pulisic (USA)","3.2","1.5"],["N. Irankunda (AUS)","2.6","1.1"],["M. Yengi (AUS)","2.0","0.8"]],go:[["Folarin Balogun (USA)",32],["Christian Pulisic (USA)",27],["Nestory Irankunda (AUS)",18]]},
 {fa:{t:25,a:12,b:13,p1:[48,52]},am:{t:3.5,a:1.6,b:1.9,p1:[46,54],roja:7},co:{t:9.5,a:5.4,b:4.1,p1:[57,43]},li:{a:13,b:12},mi:{g1:52,g2:73,m2:58,m1t:"1-0 (26%)"},re:[["C. Gakpo (NED)","3.3","1.5"],["M. Depay (NED)","2.8","1.3"],["A. Isak (SWE)","3.4","1.6"],["V. Gyökeres (SWE)","3.2","1.5"]],go:[["Cody Gakpo (NED)",28],["Alexander Isak (SWE)",27],["Viktor Gyökeres (SWE)",25]]},
 {fa:{t:24,a:11,b:13,p1:[45,55]},am:{t:3.5,a:1.4,b:2.1,p1:[42,58],roja:7},co:{t:10.5,a:7.0,b:3.5,p1:[67,33]},li:{a:13,b:11},mi:{g1:56,g2:76,m2:57,m1t:"1-0 (28%)"},re:[["K. Havertz (GER)","3.6","1.7"],["F. Wirtz (GER)","3.4","1.6"],["J. Musiala (GER)","3.2","1.5"],["A. Diallo (CIV)","2.4","1.0"]],go:[["Kai Havertz (GER)",40],["Jamal Musiala (GER)",30],["Florian Wirtz (GER)",28]]},
 {fa:{t:24,a:12,b:12,p1:[52,48]},am:{t:3.5,a:1.6,b:1.9,p1:[50,50],roja:7},co:{t:10.0,a:7.0,b:3.0,p1:[70,30]},li:{a:12,b:12},mi:{g1:55,g2:75,m2:57,m1t:"1-0 (28%)"},re:[["E. Valencia (ECU)","3.2","1.5"],["K. Páez (ECU)","2.6","1.1"],["L. Comenencia (CUW)","1.8","0.7"]],go:[["Enner Valencia (ECU)",34],["Kendry Páez (ECU)",22],["Gonzalo Plata (ECU)",18]]},
 {fa:{t:26,a:14,b:12,p1:[55,45]},am:{t:3.5,a:2.0,b:1.5,p1:[57,43],roja:8},co:{t:9.0,a:3.6,b:5.4,p1:[40,60]},li:{a:12,b:14},mi:{g1:48,g2:70,m2:57,m1t:"0-1 (27%)"},re:[["K. Mitoma (JPN)","3.2","1.5"],["T. Kubo (JPN)","2.9","1.3"],["A. Ogawa (JPN)","2.4","1.0"],["Y. Msakni (TUN)","2.0","0.8"]],go:[["Kaoru Mitoma (JPN)",30],["Takefusa Kubo (JPN)",24],["Ayase Ueda (JPN)",20]]},
 {fa:{t:24,a:10,b:14,p1:[40,60]},am:{t:3.5,a:1.3,b:2.2,p1:[38,62],roja:7},co:{t:11.0,a:8.0,b:3.0,p1:[75,25]},li:{a:14,b:10},mi:{g1:60,g2:80,m2:56,m1t:"1-0 (28%)"},re:[["L. Yamal (ESP)","4.0","1.9"],["M. Oyarzabal (ESP)","3.0","1.4"],["F. Torres (ESP)","2.6","1.2"]],go:[["Mikel Oyarzabal (ESP)",36],["Lamine Yamal (ESP)",34],["Ferran Torres (ESP)",24]]},
 {fa:{t:25,a:12,b:13,p1:[47,53]},am:{t:3.5,a:1.6,b:1.9,p1:[45,55],roja:7},co:{t:10.0,a:6.5,b:3.5,p1:[64,36]},li:{a:13,b:12},mi:{g1:52,g2:73,m2:57,m1t:"1-0 (26%)"},re:[["J. Doku (BEL)","3.2","1.5"],["K. De Bruyne (BEL)","2.9","1.3"],["L. Openda (BEL)","2.8","1.3"],["M. Taremi (IRN)","2.6","1.1"]],go:[["Loïs Openda (BEL)",30],["Jérémy Doku (BEL)",24],["Mehdi Taremi (IRN)",18]]},
 {fa:{t:25,a:13,b:12,p1:[52,48]},am:{t:3.5,a:1.8,b:1.7,p1:[52,48],roja:7},co:{t:10.0,a:6.5,b:3.5,p1:[64,36]},li:{a:12,b:13},mi:{g1:50,g2:71,m2:57,m1t:"0-0 (32%)"},re:[["D. Núñez (URU)","3.5","1.6"],["F. Valverde (URU)","3.0","1.3"],["R. Mendes (CPV)","2.0","0.8"]],go:[["Darwin Núñez (URU)",33],["Federico Valverde (URU)",22],["Ryan Mendes (CPV)",12]]},
 {fa:{t:26,a:13,b:13,p1:[50,50]},am:{t:3.5,a:1.7,b:1.8,p1:[48,52],roja:7},co:{t:9.0,a:4.0,b:5.0,p1:[44,56]},li:{a:13,b:13},mi:{g1:48,g2:70,m2:57,m1t:"0-0 (32%)"},re:[["C. Wood (NZL)","2.6","1.1"],["E. Just (NZL)","2.4","1.0"],["M. Salah (EGY)","3.4","1.6"],["O. Marmoush (EGY)","2.8","1.2"]],go:[["Mohamed Salah (EGY)",30],["Chris Wood (NZL)",22],["Omar Marmoush (EGY)",20]]},
 {fa:{t:26,a:12,b:14,p1:[45,55]},am:{t:3.5,a:1.5,b:2.0,p1:[45,55],roja:8},co:{t:10.0,a:6.0,b:4.0,p1:[60,40]},li:{a:14,b:12},mi:{g1:53,g2:74,m2:57,m1t:"1-0 (25%)"},re:[["K. Mbappé (FRA)","4.1","2.0"],["M. Olise (FRA)","3.4","1.6"],["S. Mané (SEN)","2.8","1.2"],["N. Jackson (SEN)","2.6","1.2"]],go:[["Kylian Mbappé (FRA)",38],["Michael Olise (FRA)",28],["Nicolas Jackson (SEN)",19]]},
 {fa:{t:27,a:15,b:12,p1:[58,42]},am:{t:3.5,a:2.2,b:1.3,p1:[62,38],roja:8},co:{t:9.5,a:3.5,b:6.0,p1:[36,64]},li:{a:12,b:15},mi:{g1:51,g2:72,m2:58,m1t:"0-1 (27%)"},re:[["E. Haaland (NOR)","4.3","2.1"],["A. Sørloth (NOR)","2.6","1.2"],["M. Ødegaard (NOR)","2.8","1.2"]],go:[["Erling Haaland (NOR)",44],["Alexander Sørloth (NOR)",22],["Martin Ødegaard (NOR)",18]]},
 {fa:{t:26,a:11,b:15,p1:[42,58]},am:{t:3.5,a:1.4,b:2.1,p1:[40,60],roja:8},co:{t:10.0,a:6.8,b:3.2,p1:[67,33]},li:{a:15,b:11},mi:{g1:55,g2:76,m2:58,m1t:"1-0 (27%)"},re:[["L. Messi (ARG)","3.8","1.8"],["J. Álvarez (ARG)","3.4","1.6"],["L. Martínez (ARG)","3.0","1.4"],["R. Mahrez (ALG)","2.4","1.0"]],go:[["Julián Álvarez (ARG)",33],["Lionel Messi (ARG)",31],["Lautaro Martínez (ARG)",28]]},
 {fa:{t:27,a:13,b:14,p1:[48,52]},am:{t:3.5,a:1.6,b:1.9,p1:[46,54],roja:7},co:{t:10.0,a:6.5,b:3.5,p1:[65,35]},li:{a:14,b:13},mi:{g1:50,g2:70,m2:56,m1t:"0-0 (30%)"},re:[["M. Arnautović (AUT)","2.9","1.3"],["M. Gregoritsch (AUT)","2.5","1.1"],["M. Al-Tamari (JOR)","2.0","0.8"]],go:[["Marko Arnautović (AUT)",28],["Michael Gregoritsch (AUT)",22],["Musa Al-Tamari (JOR)",10]]},
 {fa:{t:24,a:10,b:14,p1:[40,60]},am:{t:3.0,a:1.1,b:1.9,p1:[36,64],roja:7},co:{t:10.5,a:7.5,b:3.0,p1:[72,28]},li:{a:14,b:10},mi:{g1:58,g2:78,m2:57,m1t:"1-0 (29%)"},re:[["C. Ronaldo (POR)","3.6","1.7"],["R. Leão (POR)","3.1","1.4"],["B. Fernandes (POR)","2.9","1.3"]],go:[["Cristiano Ronaldo (POR)",36],["Rafael Leão (POR)",28],["Bruno Fernandes (POR)",22]]},
 {fa:{t:24,a:11,b:13,p1:[46,54]},am:{t:3.0,a:1.3,b:1.7,p1:[44,56],roja:6},co:{t:10.0,a:6.0,b:4.0,p1:[60,40]},li:{a:13,b:11},mi:{g1:51,g2:72,m2:57,m1t:"0-0 (30%)"},re:[["H. Kane (ENG)","3.7","1.8"],["J. Bellingham (ENG)","3.2","1.5"],["B. Saka (ENG)","2.9","1.3"],["A. Kramarić (CRO)","2.0","0.8"]],go:[["Harry Kane (ENG)",35],["Jude Bellingham (ENG)",26],["Bukayo Saka (ENG)",22]]},
 {fa:{t:27,a:14,b:13,p1:[52,48]},am:{t:3.5,a:1.9,b:1.6,p1:[54,46],roja:8},co:{t:9.0,a:4.8,b:4.2,p1:[53,47]},li:{a:13,b:14},mi:{g1:46,g2:68,m2:57,m1t:"0-0 (34%)"},re:[["M. Kudus (GHA)","3.3","1.5"],["A. Semenyo (GHA)","2.7","1.2"],["J. Fajardo (PAN)","2.0","0.8"]],go:[["Mohammed Kudus (GHA)",27],["Antoine Semenyo (GHA)",22],["José Fajardo (PAN)",13]]},
 {fa:{t:26,a:14,b:12,p1:[55,45]},am:{t:3.5,a:2.0,b:1.5,p1:[57,43],roja:8},co:{t:9.5,a:3.7,b:5.8,p1:[39,61]},li:{a:12,b:14},mi:{g1:50,g2:73,m2:59,m1t:"0-1 (26%)"},re:[["L. Díaz (COL)","3.5","1.6"],["James Rodríguez (COL)","2.8","1.3"],["E. Shomurodov (UZB)","2.4","1.0"]],go:[["Luis Díaz (COL)",31],["James Rodríguez (COL)",22],["Eldor Shomurodov (UZB)",14]]}
];
// Genera las barras de probabilidades detalladas (verde = equipo local listado, rojo = visitante)
const propsHTML=(x,P)=>{
  const fila=(icono,titulo,pa,pb,com)=>`<div class="strow"><div class="slbl">${icono} ${titulo}</div><div><div class="sbar"><div class="sa" style="width:${pa}%">${pa}%</div><div class="sb" style="width:${pb}%">${pb}%</div></div>${com?`<div class="scom">${com}</div>`:''}</div></div>`;
  const shr=(a,b)=>{const s=Math.round(100*a/(a+b));return [s,100-s];};
  const [fA,fB]=shr(P.fa.a,P.fa.b), [cA,cB]=shr(P.co.a,P.co.b), [tA,tB]=shr(P.am.a,P.am.b);
  return `<div class="statwrap">
    <div class="sthead">📊 Probabilidades del partido <span>— barras: ${equipo(x.e1)} (verde) / ${equipo(x.e2)} (rojo)</span></div>
    ${fila("🦵","Reparto de faltas",fA,fB,`Total esperado: ${P.fa.t} faltas (${P.fa.a} / ${P.fa.b}) · Tiros libres a favor: ${P.li.a} / ${P.li.b}`)}
    ${fila("🦵","1.ª falta del partido",P.fa.p1[0],P.fa.p1[1],"")}
    ${fila("🟨","Reparto de amarillas",tA,tB,`Total esperado: ${P.am.t} amarillas (${P.am.a} / ${P.am.b}) · 🟥 Prob. de roja en el partido: ${P.am.roja}%`)}
    ${fila("🟨","1.ª tarjeta",P.am.p1[0],P.am.p1[1],"")}
    ${fila("🚩","Reparto de córners",cA,cB,`Total esperado: ${P.co.t} córners (${P.co.a} / ${P.co.b})`)}
    ${fila("🚩","1.er córner",P.co.p1[0],P.co.p1[1],"")}
    ${fila("⏱","¿Mitad con más goles?",100-P.mi.m2,P.mi.m2,`Aquí: 1.ª mitad (verde) vs 2.ª mitad (rojo) · Prob. de gol 1T: ${P.mi.g1}% · 2T: ${P.mi.g2}% · Al descanso: ${P.mi.m1t}`)}
    <div class="stlists">
      <div class="pbox"><b>🎯 Rematadores (remates / a puerta)</b><ul>${P.re.map(r=>`<li>${r[0]} — ${r[1]} / ${r[2]}</li>`).join('')}</ul></div>
      <div class="pbox"><b>⚽ Goleadores probables (anota en cualquier momento)</b><ul>${P.go.map(r=>`<li>${r[0]} — ${r[1]}%</li>`).join('')}</ul></div>
    </div>
  </div>`;
};
// Orden cronológico: siempre el próximo partido primero (sin importar el orden del arreglo).
// Lee el día de x.f ("Vie 12 jun"), el mes (jun/jul) y la hora ET de x.h ("21:00 ET ...").
const claveCrono=i=>{
  const f=J1[i].f||'', h=J1[i].h||'';
  const mes=/jul/i.test(f)?7:6;
  const dia=(f.match(/(\d+)/)||[,99])[1];
  const hm=h.match(/(\d+):(\d+)/);
  const min=hm?(+hm[1])*60+(+hm[2]):0;
  return mes*1000000+(+dia)*10000+min;
};
const ordenJ1=J1.map((_,i)=>i).sort((a,b)=>claveCrono(a)-claveCrono(b));
document.getElementById('listaPartidos').innerHTML = ordenJ1.map(i=>{const x=J1[i],P=PROPS[i];return `<div class="mcard">
    <div class="mtop"><span class="grp">GRUPO ${x.g}</span><span>${x.f} · ${x.h}</span><span>🏟 ${x.sede}</span><span style="display:flex;gap:6px"><button class="btnimg" onclick="descargarPNG(${i})">📷 Imagen</button><button class="btnimg" style="border-color:#3ecf8e;color:#3ecf8e" onclick="compartir(${i},'wa')">📤 WhatsApp</button><button class="btnimg" onclick="compartir(${i},'x')">📤 X</button></span></div>
    <div class="mmain"><span>${equipo(x.e1)}</span><span class="score">Marcador probable: ${x.m}</span><span>${equipo(x.e2)}</span></div>
    <div class="probbar">
      <div class="pl" style="width:${x.p[0]}%">${x.p[0]}%</div>
      <div class="pe" style="width:${x.p[1]}%">${x.p[1]}%</div>
      <div class="pv" style="width:${x.p[2]}%">${x.p[2]}%</div>
    </div>
    <div style="display:flex;justify-content:space-between;padding:0 18px;font-size:.68rem;color:var(--mut)"><span>◀ Gana ${x.e1.split(' ').slice(1).join(' ')}</span><span>Empate</span><span>Gana ${x.e2.split(' ').slice(1).join(' ')} ▶</span></div>
    ${P?propsHTML(x,P):''}
    <div class="factores">
      <div class="factor"><b>⛰ Altitud</b>${x.alt}</div>
      <div class="factor"><b>🌦 Clima</b>${x.clima}</div>
      <div class="factor"><b>🟨 Árbitro</b>${x.arb}</div>
    </div>
    <div class="seccion"><h4>📈 Forma reciente</h4>
      <div class="forma"><div><b>${equipo(x.e1)}:</b> ${x.f1}</div><div><b>${equipo(x.e2)}:</b> ${x.f2}</div></div>
    </div>
    <div class="news"><h4>📰 Noticias del partido</h4><ul>${x.news.map(n=>`<li>${n}</li>`).join('')}</ul></div>
    <div class="analisis">💡 ${x.an}</div>
  </div>`;}).join('');

// ============================================================
// IMAGEN DESCARGABLE DEL PRONÓSTICO (canvas 1080x1350, banderas de flagcdn.com)
// ============================================================
const loadFlag=code=>new Promise(res=>{
  if(!code||!FLAGCODE[code]) return res(null);
  const im=new Image(); im.crossOrigin="anonymous";
  im.onload=()=>res(im); im.onerror=()=>res(null);
  im.src=`https://flagcdn.com/w320/${FLAGCODE[code]}.png`;
});
function rrect(ctx,x,y,w,h,r){ctx.beginPath();ctx.moveTo(x+r,y);ctx.arcTo(x+w,y,x+w,y+h,r);ctx.arcTo(x+w,y+h,x,y+h,r);ctx.arcTo(x,y+h,x,y,r);ctx.arcTo(x,y,x+w,y,r);ctx.closePath();}
async function descargarPNG(i){
  const x=J1[i], P=PROPS[i];
  const n1=x.e1.split(' ').slice(1).join(' '), n2=x.e2.split(' ').slice(1).join(' ');
  const c1=codeDe(n1), c2=codeDe(n2);
  const [im1,im2]=await Promise.all([loadFlag(c1),loadFlag(c2)]);
  const W=1080, H=2200;
  const cv=document.createElement('canvas'); cv.width=W; cv.height=H;
  const ctx=cv.getContext('2d');
  // helper: texto con saltos de línea y tope de líneas
  const wrap=(txt,X,Y,maxW,lh,maxLines)=>{
    const words=String(txt).split(' '); let line='', lines=[];
    for(const w of words){ const t=line?line+' '+w:w; if(ctx.measureText(t).width>maxW&&line){lines.push(line);line=w;} else line=t; }
    if(line)lines.push(line);
    if(lines.length>maxLines){ lines=lines.slice(0,maxLines); lines[maxLines-1]=lines[maxLines-1].replace(/\s+\S*$/,'')+'…'; }
    lines.forEach((l,k)=>ctx.fillText(l,X,Y+k*lh));
    return Y+lines.length*lh;
  };
  const sec=(titulo,Y)=>{ ctx.textAlign='left'; ctx.fillStyle='#e8c258'; ctx.font='bold 26px Segoe UI, Arial'; ctx.fillText(titulo,90,Y); return Y; };
  // fondo
  const bg=ctx.createLinearGradient(0,0,W,H); bg.addColorStop(0,'#0a1628'); bg.addColorStop(.5,'#13294a'); bg.addColorStop(1,'#0a1628');
  ctx.fillStyle=bg; ctx.fillRect(0,0,W,H);
  ctx.strokeStyle='#e8c258'; ctx.lineWidth=6; ctx.strokeRect(14,14,W-28,H-28);
  // encabezado
  ctx.textAlign='center';
  ctx.fillStyle='#e8c258'; ctx.font='bold 38px Segoe UI, Arial';
  ctx.fillText('⚽ TABLERO MUNDIAL 2026',540,78);
  ctx.fillStyle='#8aa0b8'; ctx.font='26px Segoe UI, Arial';
  ctx.fillText(`Pronóstico · Grupo ${x.g} · ${x.f} · ${x.h}`,540,120);
  ctx.font='24px Segoe UI, Arial'; ctx.fillText(`🏟 ${x.sede}`,540,156);
  // banderas
  const drawFlag=(im,cx,nom)=>{
    const fx=cx-100, fy=188, fw=200, fh=133;
    if(im){ ctx.save(); rrect(ctx,fx,fy,fw,fh,12); ctx.clip(); ctx.drawImage(im,fx,fy,fw,fh); ctx.restore(); ctx.strokeStyle='#e8c258'; ctx.lineWidth=3; rrect(ctx,fx,fy,fw,fh,12); ctx.stroke(); }
    else { ctx.fillStyle='#1a3050'; rrect(ctx,fx,fy,fw,fh,12); ctx.fill(); ctx.strokeStyle='#e8c258'; ctx.lineWidth=3; rrect(ctx,fx,fy,fw,fh,12); ctx.stroke(); ctx.fillStyle='#e8c258'; ctx.font='bold 48px Segoe UI, Arial'; ctx.textAlign='center'; ctx.fillText(nom.slice(0,3).toUpperCase(),cx,fy+84); }
    ctx.textAlign='center'; ctx.fillStyle='#e9eef5'; ctx.font='bold 30px Segoe UI, Arial';
    ctx.fillText(nom,cx,362,320);
  };
  drawFlag(im1,280,n1); drawFlag(im2,800,n2);
  ctx.textAlign='center'; ctx.fillStyle='#e8c258'; ctx.font='bold 46px Segoe UI, Arial'; ctx.fillText('VS',540,268);
  // marcador probable
  ctx.fillStyle='#e8c258'; ctx.font='bold 24px Segoe UI, Arial'; ctx.fillText('MARCADOR PROBABLE',540,420);
  ctx.fillStyle='#ffffff'; ctx.font='bold 76px Segoe UI, Arial'; ctx.fillText(x.m,540,496);
  // barra V/E/D
  const bx=90, bw=900, by=524, bh=48;
  const w1=bw*x.p[0]/100, w2=bw*x.p[1]/100, w3=bw-w1-w2;
  ctx.fillStyle='#3ecf8e'; ctx.fillRect(bx,by,w1,bh);
  ctx.fillStyle='#b9c6d6'; ctx.fillRect(bx+w1,by,w2,bh);
  ctx.fillStyle='#ef6a6a'; ctx.fillRect(bx+w1+w2,by,w3,bh);
  ctx.fillStyle='#0e2138'; ctx.font='bold 26px Segoe UI, Arial';
  if(x.p[0]>7) ctx.fillText(x.p[0]+'%',bx+w1/2,by+33);
  if(x.p[1]>7) ctx.fillText(x.p[1]+'%',bx+w1+w2/2,by+33);
  if(x.p[2]>7) ctx.fillText(x.p[2]+'%',bx+w1+w2+w3/2,by+33);
  ctx.fillStyle='#8aa0b8'; ctx.font='21px Segoe UI, Arial';
  ctx.textAlign='left';  ctx.fillText('Gana '+n1,bx,by+78);
  ctx.textAlign='center';ctx.fillText('Empate',540,by+78);
  ctx.textAlign='right'; ctx.fillText('Gana '+n2,bx+bw,by+78);
  // FACTORES CLAVE
  let y=sec('🎯 FACTORES CLAVE',656)+34;
  ctx.fillStyle='#cdd9e6'; ctx.font='22px Segoe UI, Arial'; ctx.textAlign='left';
  y=wrap('⛰ Altitud: '+x.alt,90,y,900,28,2)+8;
  y=wrap('🌦 Clima: '+x.clima,90,y,900,28,2)+8;
  y=wrap('🟨 Árbitro: '+x.arb,90,y,900,28,2);
  // FORMA RECIENTE
  y=sec('📈 FORMA RECIENTE',y+40)+34;
  ctx.fillStyle='#cdd9e6'; ctx.font='22px Segoe UI, Arial'; ctx.textAlign='left';
  y=wrap(n1+': '+x.f1,90,y,900,28,2)+8;
  y=wrap(n2+': '+x.f2,90,y,900,28,2);
  // PROBABILIDADES (7 barras)
  y=sec('📊 PROBABILIDADES',y+40);
  ctx.fillStyle='#8aa0b8'; ctx.font='20px Segoe UI, Arial'; ctx.textAlign='right';
  ctx.fillText(`verde: ${n1} · rojo: ${n2}`,990,y);
  y+=26;
  const shr=(a,b)=>{const s=Math.round(100*a/(a+b));return [s,100-s];};
  const filas=[
    [`Reparto de faltas (${P.fa.t} esp.)`,shr(P.fa.a,P.fa.b)],
    ['1.ª falta del partido',P.fa.p1],
    [`Reparto de amarillas (${P.am.t} esp. · roja ${P.am.roja}%)`,shr(P.am.a,P.am.b)],
    ['1.ª tarjeta',P.am.p1],
    [`Reparto de córners (${P.co.t} esp.)`,shr(P.co.a,P.co.b)],
    ['1.er córner',P.co.p1],
    [`Mitad con más goles (1T/2T) · descanso ${P.mi.m1t}`,[100-P.mi.m2,P.mi.m2]]
  ];
  filas.forEach(f=>{
    ctx.textAlign='left'; ctx.fillStyle='#cdd9e6'; ctx.font='21px Segoe UI, Arial';
    ctx.fillText(f[0],90,y+25,375);
    const rx=480, rw=510, rh=34;
    const wA=rw*f[1][0]/100;
    ctx.fillStyle='#3ecf8e'; ctx.fillRect(rx,y,wA,rh);
    ctx.fillStyle='#ef6a6a'; ctx.fillRect(rx+wA,y,rw-wA,rh);
    ctx.fillStyle='#0e2138'; ctx.font='bold 20px Segoe UI, Arial'; ctx.textAlign='center';
    if(f[1][0]>9) ctx.fillText(f[1][0]+'%',rx+wA/2,y+24);
    if(f[1][1]>9) ctx.fillText(f[1][1]+'%',rx+wA+(rw-wA)/2,y+24);
    y+=52;
  });
  // REMATADORES y GOLEADORES en dos columnas
  const yCols=y+38;
  sec('🎯 REMATADORES (rem. / a puerta)',yCols);
  ctx.textAlign='left'; ctx.fillStyle='#e8c258'; ctx.font='bold 26px Segoe UI, Arial';
  ctx.fillText('⚽ GOLEADORES (prob.)',610,yCols);
  ctx.fillStyle='#e9eef5'; ctx.font='22px Segoe UI, Arial';
  P.re.slice(0,4).forEach((r,k)=>ctx.fillText(`${r[0]} — ${r[1]} / ${r[2]}`,90,yCols+38+k*32,490));
  P.go.slice(0,4).forEach((g,k)=>ctx.fillText(`${g[0]} — ${g[1]}%`,610,yCols+38+k*32,380));
  y=yCols+38+Math.max(Math.min(P.re.length,4),Math.min(P.go.length,4))*32;
  // NOTICIAS
  y=sec('📰 NOTICIAS DEL PARTIDO',y+30)+32;
  ctx.fillStyle='#cdd9e6'; ctx.font='21px Segoe UI, Arial'; ctx.textAlign='left';
  x.news.slice(0,4).forEach(nw=>{ y=wrap('• '+nw,90,y,900,27,2)+6; });
  // ANÁLISIS
  y=sec('💡 ANÁLISIS',y+26)+32;
  ctx.fillStyle='#b9c9da'; ctx.font='italic 22px Segoe UI, Arial'; ctx.textAlign='left';
  wrap(x.an,90,y,900,28,3);
  // pie con marca de agua
  ctx.textAlign='center'; ctx.fillStyle='#e8c258'; ctx.font='bold 24px Segoe UI, Arial';
  ctx.fillText('🌐 '+SITE_HOST,540,H-62);
  ctx.fillStyle='#8aa0b8'; ctx.font='19px Segoe UI, Arial';
  ctx.fillText('Probabilidades del modelo (forma, árbitro, clima y altitud) · No es consejo de apuestas · Actualización diaria 7:00',540,H-30);
  // descarga
  try{
    cv.toBlob(b=>{
      const a=document.createElement('a');
      a.href=URL.createObjectURL(b);
      a.download=`pronostico_${n1.replace(/ /g,'_')}_vs_${n2.replace(/ /g,'_')}.png`;
      a.click();
      setTimeout(()=>URL.revokeObjectURL(a.href),5000);
    },'image/png');
  }catch(e){ alert('No se pudo generar la imagen: '+e.message); }
}

// ============================================================
// IMÁGENES DESCARGABLES DE SECCIONES (favoritos, grupos, simulador, premios)
// ============================================================
function dlCanvas(cv,nombre){try{cv.toBlob(b=>{const a=document.createElement('a');a.href=URL.createObjectURL(b);a.download=nombre;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),5000);},'image/png');}catch(e){alert('No se pudo generar la imagen: '+e.message);}}
async function flagsImgs(codes){const u=[...new Set(codes.filter(Boolean))];const imgs=await Promise.all(u.map(loadFlag));const m={};u.forEach((c,i)=>m[c]=imgs[i]);return m;}
function lienzo(H,sub){const cv=document.createElement('canvas');cv.width=1080;cv.height=H;const ctx=cv.getContext('2d');const bg=ctx.createLinearGradient(0,0,1080,H);bg.addColorStop(0,'#0a1628');bg.addColorStop(.5,'#13294a');bg.addColorStop(1,'#0a1628');ctx.fillStyle=bg;ctx.fillRect(0,0,1080,H);ctx.strokeStyle='#e8c258';ctx.lineWidth=6;ctx.strokeRect(14,14,1052,H-28);ctx.textAlign='center';ctx.fillStyle='#e8c258';ctx.font='bold 38px Segoe UI, Arial';ctx.fillText('⚽ TABLERO MUNDIAL 2026',540,78);ctx.fillStyle='#8aa0b8';ctx.font='26px Segoe UI, Arial';ctx.fillText(sub,540,122);return [cv,ctx];}
function pieImg(ctx,H){ctx.textAlign='center';ctx.fillStyle='#e8c258';ctx.font='bold 23px Segoe UI, Arial';ctx.fillText('🌐 '+SITE_HOST,540,H-60);ctx.fillStyle='#8aa0b8';ctx.font='19px Segoe UI, Arial';ctx.fillText('Modelo propio · No es consejo de apuestas · Actualización diaria 7:00',540,H-30);}
function miniFlag(ctx,im,x,y,w,h,txt){if(im){ctx.save();rrect(ctx,x,y,w,h,4);ctx.clip();ctx.drawImage(im,x,y,w,h);ctx.restore();ctx.strokeStyle='#23405f';ctx.lineWidth=1;rrect(ctx,x,y,w,h,4);ctx.stroke();}else{ctx.fillStyle='#1a3050';rrect(ctx,x,y,w,h,4);ctx.fill();ctx.fillStyle='#e8c258';ctx.font='bold '+Math.round(h*.55)+'px Segoe UI, Arial';ctx.textAlign='center';ctx.fillText((txt||'?').slice(0,3),x+w/2,y+h*.7);}}
function wrapG(ctx,txt,X,Y,maxW,lh,maxLines){const words=String(txt).split(' ');let line='',lines=[];for(const w of words){const t=line?line+' '+w:w;if(ctx.measureText(t).width>maxW&&line){lines.push(line);line=w;}else line=t;}if(line)lines.push(line);if(lines.length>maxLines){lines=lines.slice(0,maxLines);lines[maxLines-1]=lines[maxLines-1].replace(/\s+\S*$/,'')+'…';}lines.forEach((l,k)=>ctx.fillText(l,X,Y+k*lh));return Y+lines.length*lh;}

// --- Favoritos (sección completa) ---
async function imgFavoritos(){
  const m=await flagsImgs(FAVORITOS.map(f=>f.c));
  const H=210+FAVORITOS.length*118+80;
  const [cv,ctx]=lienzo(H,'🏆 Favoritos para ganar la Copa del Mundo');
  const pmax=FAVORITOS[0].p;
  FAVORITOS.forEach((f,i)=>{
    const y=170+i*118;
    ctx.fillStyle=i%2?'#10223a':'#13263f'; rrect(ctx,60,y,960,106,10); ctx.fill();
    ctx.textAlign='center'; ctx.fillStyle='#e8c258'; ctx.font='bold 38px Segoe UI, Arial';
    ctx.fillText(f.p+'%',135,y+62);
    miniFlag(ctx,m[f.c],210,y+18,64,43,T[f.c].n);
    ctx.textAlign='left'; ctx.fillStyle='#e9eef5'; ctx.font='bold 30px Segoe UI, Arial';
    ctx.fillText(`${i+1}. ${T[f.c].n}`,292,y+44);
    ctx.fillStyle='#8aa0b8'; ctx.font='19px Segoe UI, Arial';
    ctx.fillText(`Grupo ${T[f.c].g} · Rating ${T[f.c].r}`,292,y+68);
    ctx.fillStyle='#23405f'; ctx.fillRect(292,y+80,420,9);
    ctx.fillStyle='#e8c258'; ctx.fillRect(292,y+80,420*f.p/pmax,9);
    ctx.fillStyle='#bfe8d2'; ctx.font='18px Segoe UI, Arial';
    wrapG(ctx,'✔ '+f.pro,740,y+34,260,22,2);
    ctx.fillStyle='#f0c9c9';
    wrapG(ctx,'✖ '+f.con,740,y+86,260,22,1);
  });
  ctx.textAlign='center'; ctx.fillStyle='#8aa0b8'; ctx.font='20px Segoe UI, Arial';
  ctx.fillText(`El ${100-FAVORITOS.reduce((s,x)=>s+x.p,0)}% restante se reparte entre las otras 36 selecciones`,540,H-70);
  pieImg(ctx,H); dlCanvas(cv,'favoritos_mundial2026.png');
}

// --- Fase de grupos (un grupo) ---
async function imgGrupo(g){
  const tabla=tablaGrupo(g);
  const m=await flagsImgs(tabla.map(s=>s.c));
  const H=800;
  const [cv,ctx]=lienzo(H,`Fase de Grupos · Tabla del GRUPO ${g}`);
  const cols=[['PJ',560],['G',615],['E',668],['P',721],['GF',778],['GC',836],['DIF',897],['PTS',957],['PROY',1014]];
  ctx.fillStyle='#8aa0b8'; ctx.font='bold 20px Segoe UI, Arial'; ctx.textAlign='center';
  ctx.fillText('#',75,218); cols.forEach(c=>ctx.fillText(c[0],c[1],218));
  ctx.textAlign='left'; ctx.fillText('Equipo',175,218);
  tabla.forEach((s,i)=>{
    const y=240+i*108;
    ctx.fillStyle=i%2?'#10223a':'#13263f'; rrect(ctx,55,y,970,94,10); ctx.fill();
    ctx.fillStyle=i<2?'#3ecf8e':(i==2?'#f0b35a':'transparent');
    if(i<3) ctx.fillRect(55,y,7,94);
    ctx.textAlign='center'; ctx.fillStyle='#e9eef5'; ctx.font='bold 28px Segoe UI, Arial';
    ctx.fillText(i+1,80,y+58);
    miniFlag(ctx,m[s.c],108,y+24,68,45,T[s.c].n);
    ctx.textAlign='left'; ctx.font='bold 27px Segoe UI, Arial'; ctx.fillStyle='#e9eef5';
    ctx.fillText(T[s.c].n,192,y+58,340);
    ctx.textAlign='center'; ctx.font='26px Segoe UI, Arial';
    const vals=[s.pj,s.w,s.e,s.l,s.gf,s.gc,s.gf-s.gc];
    vals.forEach((v,k)=>{ctx.fillStyle='#cdd9e6';ctx.fillText(v,cols[k][1],y+58);});
    ctx.fillStyle='#e8c258'; ctx.font='bold 28px Segoe UI, Arial'; ctx.fillText(s.pts,957,y+58);
    ctx.fillStyle='#3ecf8e'; ctx.font='bold 26px Segoe UI, Arial'; ctx.fillText(T[s.c].proy,1014,y+58);
  });
  ctx.textAlign='center'; ctx.fillStyle='#8aa0b8'; ctx.font='19px Segoe UI, Arial';
  ctx.fillText('Verde: 1.º y 2.º clasifican directo · Ámbar: el 3.º puede avanzar entre los 8 mejores terceros · PROY = puntos proyectados',540,H-70);
  pieImg(ctx,H); dlCanvas(cv,`grupo_${g}_mundial2026.png`);
}

// --- Simulador (cuadro completo, respeta tus ajustes manuales) ---
async function imgSimulador(){
  const M=simular();
  const todos=[...FIN,...TP,...SF,...QF,...R16,...R32];
  const m=await flagsImgs(todos.flatMap(x=>[M[x.id].A,M[x.id].B,M[x.id].w]));
  const nLineas=todos.length;
  const H=330+6*48+nLineas*36+70;
  const [cv,ctx]=lienzo(H,'🗺 Simulador del cuadro eliminatorio · 28 jun – 19 jul');
  const fin=M[104];
  ctx.fillStyle='#e8c258'; ctx.font='bold 24px Segoe UI, Arial'; ctx.textAlign='center';
  ctx.fillText('CAMPEÓN PROYECTADO',540,182);
  if(fin&&fin.w){ miniFlag(ctx,m[fin.w],460,200,72,48,T[fin.w].n);
    ctx.fillStyle='#ffffff'; ctx.font='bold 42px Segoe UI, Arial'; ctx.textAlign='left';
    ctx.fillText(T[fin.w].n,550,236); }
  ctx.textAlign='center'; ctx.fillStyle='#8aa0b8'; ctx.font='20px Segoe UI, Arial';
  ctx.fillText(Object.keys(OV).length?`Con ${Object.keys(OV).length} ajuste(s) manual(es)`:'Todo según el modelo',540,278);
  let y=320;
  const rondas=[['🏆 GRAN FINAL — MetLife, 19 jul',FIN],['🥉 Tercer lugar',TP],['🟠 Semifinales',SF],['🟡 Cuartos de final',QF],['🟢 Octavos de final',R16],['🔵 Ronda de 32',R32]];
  rondas.forEach(([titulo,arr])=>{
    ctx.textAlign='left'; ctx.fillStyle='#e8c258'; ctx.font='bold 24px Segoe UI, Arial';
    ctx.fillText(titulo,80,y+30); y+=48;
    arr.forEach(mm=>{
      const x=M[mm.id]; if(!x.A||!x.B){y+=36;return;}
      const pA=x.pA, pB=100-x.pA;
      miniFlag(ctx,m[x.A],90,y+6,33,22,T[x.A].n);
      ctx.textAlign='left'; ctx.fillStyle='#cdd9e6'; ctx.font='22px Segoe UI, Arial';
      ctx.fillText(`${T[x.A].n} ${pA}%`,132,y+24,250);
      ctx.fillStyle='#8aa0b8'; ctx.fillText('vs',400,y+24);
      miniFlag(ctx,m[x.B],440,y+6,33,22,T[x.B].n);
      ctx.fillStyle='#cdd9e6'; ctx.fillText(`${T[x.B].n} ${pB}%`,482,y+24,250);
      ctx.fillStyle='#8aa0b8'; ctx.fillText('→',756,y+24);
      miniFlag(ctx,m[x.w],792,y+6,33,22,T[x.w].n);
      ctx.fillStyle='#3ecf8e'; ctx.font='bold 22px Segoe UI, Arial';
      ctx.fillText(T[x.w].n,834,y+24,180);
      y+=36;
    });
    y+=8;
  });
  pieImg(ctx,H); dlCanvas(cv,'simulador_mundial2026.png');
}

// --- Premios individuales (uno por premio) ---
const PREMIOS_IMG=[
 ['👟 Bota de Oro — Máximo goleador',()=>BOTA,[['g','Goles'],['a','Asist.'],['pj','PJ']],'bota_de_oro'],
 ['🏅 Balón de Oro — Mejor jugador del torneo',()=>BALON,[['g','Goles'],['a','Asist.'],['pj','PJ']],'balon_de_oro'],
 ['🧤 Guante de Oro — Mejor portero',()=>GUANTE,[['vi','Vallas inv.'],['gc','Goles recibidos'],['pj','PJ']],'guante_de_oro'],
 ['🌟 Premio al Jugador Joven',()=>JOVEN,[['g','Goles'],['a','Asist.'],['pj','PJ']],'jugador_joven']
];
async function imgPremio(k){
  const [titulo,getArr,cols,slug]=PREMIOS_IMG[k];
  const arr=getArr();
  const m=await flagsImgs(arr.map(x=>x.c));
  const H=200+arr.length*86+80;
  const [cv,ctx]=lienzo(H,titulo);
  arr.forEach((x,i)=>{
    const y=165+i*86;
    ctx.fillStyle=i%2?'#10223a':'#13263f'; rrect(ctx,55,y,970,76,10); ctx.fill();
    if(x.fav){ctx.fillStyle='#e8c258';ctx.fillRect(55,y,7,76);}
    ctx.textAlign='center'; ctx.fillStyle='#8aa0b8'; ctx.font='bold 24px Segoe UI, Arial';
    ctx.fillText(i+1,85,y+48);
    miniFlag(ctx,m[x.c],112,y+18,56,37,T[x.c].n);
    ctx.textAlign='left'; ctx.fillStyle='#e9eef5'; ctx.font='bold 26px Segoe UI, Arial';
    ctx.fillText(x.j+(x.fav?' ⭐':''),186,y+34,380);
    ctx.fillStyle='#8aa0b8'; ctx.font='17px Segoe UI, Arial';
    wrapG(ctx,x.nota,186,y+60,520,20,1);
    ctx.textAlign='right'; ctx.fillStyle='#e8c258'; ctx.font='bold 23px Segoe UI, Arial';
    ctx.fillText(cols.map(c=>`${c[1]}: ${x[c[0]]}`).join('  ·  '),1000,y+48);
  });
  ctx.textAlign='center'; ctx.fillStyle='#8aa0b8'; ctx.font='19px Segoe UI, Arial';
  ctx.fillText('⭐ = favorito actual según el modelo · Estadísticas del torneo, se actualizan a diario',540,H-70);
  pieImg(ctx,H); dlCanvas(cv,`premio_${slug}_mundial2026.png`);
}

// ============================================================
// SIMULADOR DE RONDAS (bracket oficial FIFA 2026)
// ============================================================
const R32 = [
 {id:73,a:"2A",b:"2B",s:"SoFi, Inglewood"},{id:74,a:"1E",b:"3ABCDF",s:"Gillette, Foxborough"},
 {id:75,a:"1F",b:"2C",s:"BBVA, Monterrey"},{id:76,a:"1C",b:"2F",s:"NRG, Houston"},
 {id:77,a:"1I",b:"3CDFGH",s:"MetLife, NY/NJ"},{id:78,a:"2E",b:"2I",s:"AT&T, Arlington"},
 {id:79,a:"1A",b:"3CEFHI",s:"Azteca, CDMX"},{id:80,a:"1L",b:"3EHIJK",s:"Mercedes-Benz, Atlanta"},
 {id:81,a:"1D",b:"3BEFIJ",s:"Levi's, Santa Clara"},{id:82,a:"1G",b:"3AEHIJ",s:"Lumen, Seattle"},
 {id:83,a:"2K",b:"2L",s:"BMO, Toronto"},{id:84,a:"1H",b:"2J",s:"SoFi, Inglewood"},
 {id:85,a:"1B",b:"3EFGIJ",s:"BC Place, Vancouver"},{id:86,a:"1J",b:"2H",s:"Hard Rock, Miami"},
 {id:87,a:"1K",b:"3DEIJL",s:"Arrowhead, Kansas City"},{id:88,a:"2D",b:"2G",s:"AT&T, Arlington"}
];
const R16 = [{id:89,a:"W74",b:"W77",s:"Lincoln Financial, Filadelfia"},{id:90,a:"W73",b:"W75",s:"NRG, Houston"},{id:91,a:"W76",b:"W78",s:"MetLife, NY/NJ"},{id:92,a:"W79",b:"W80",s:"Azteca, CDMX"},{id:93,a:"W83",b:"W84",s:"AT&T, Arlington"},{id:94,a:"W81",b:"W82",s:"Lumen, Seattle"},{id:95,a:"W86",b:"W88",s:"Mercedes-Benz, Atlanta"},{id:96,a:"W85",b:"W87",s:"BC Place, Vancouver"}];
const QF  = [{id:97,a:"W89",b:"W90",s:"Gillette, Foxborough"},{id:98,a:"W93",b:"W94",s:"SoFi, Inglewood"},{id:99,a:"W91",b:"W92",s:"Hard Rock, Miami"},{id:100,a:"W95",b:"W96",s:"Arrowhead, Kansas City"}];
const SF  = [{id:101,a:"W97",b:"W98",s:"AT&T, Arlington"},{id:102,a:"W99",b:"W100",s:"Mercedes-Benz, Atlanta"}];
const TP  = [{id:103,a:"L101",b:"L102",s:"Hard Rock, Miami"}];
const FIN = [{id:104,a:"W101",b:"W102",s:"MetLife Stadium, NY/NJ — 19 de julio"}];

let OV = {}; // ajustes manuales del usuario: {idPartido: codigoEquipo}
const probWin=(a,b)=>1/(1+Math.pow(10,(T[b].r-T[a].r)/22));

function simular(){
  const pos={}; GL.forEach(g=>{pos[g]=tablaGrupo(g).map(s=>s.c);});
  const terceros = GL.map(g=>tablaGrupo(g)[2]).sort((x,y)=> y.pts-x.pts || (y.gf-y.gc)-(x.gf-x.gc) || y.gf-x.gf || T[y.c].r-T[x.c].r);
  const mejores8 = terceros.slice(0,8).map(s=>s.c);
  const slots = R32.filter(m=>m.b.startsWith("3"));
  const asig = {};
  (function bt(i,used){
    if(i===slots.length) return true;
    for(const t of mejores8){
      if(used.has(t)) continue;
      if(slots[i].b.slice(1).includes(T[t].g)){
        asig[slots[i].id]=t; used.add(t);
        if(bt(i+1,used)) return true;
        used.delete(t); delete asig[slots[i].id];
      }
    }
    return false;
  })(0,new Set());
  slots.forEach(s=>{ if(!asig[s.id]){ asig[s.id]=mejores8.find(t=>!Object.values(asig).includes(t)); }});

  const W={},L={},M={};
  const resolver=ref=>{
    if(ref.startsWith("W")) return W[ref.slice(1)];
    if(ref.startsWith("L")) return L[ref.slice(1)];
    const p=+ref[0], g=ref[1];
    return pos[g] ? pos[g][p-1] : null;
  };
  [...R32,...R16,...QF,...SF,...TP,...FIN].forEach(m=>{
    const A = resolver(m.a);
    const B = m.b.startsWith("3") ? asig[m.id] : resolver(m.b);
    M[m.id]={...m,A,B};
    if(A&&B){
      const pA=probWin(A,B);
      const w = OV[m.id] && (OV[m.id]===A||OV[m.id]===B) ? OV[m.id] : (pA>=.5?A:B);
      M[m.id].w=w; M[m.id].pA=Math.round(pA*100);
      W[m.id]=w; L[m.id]= w===A?B:A;
    }
  });
  return M;
}

function renderSim(){
  const M=simular();
  const rondas=[["🔵 Dieciseisavos — Ronda de 32 (28 jun – 3 jul)",R32],["🟢 Octavos de final (4–7 jul)",R16],["🟡 Cuartos de final (9–11 jul)",QF],["🟠 Semifinales (14–15 jul)",SF],["🥉 Tercer lugar (18 jul)",TP],["🏆 GRAN FINAL (19 jul)",FIN]];
  document.getElementById('bracket').innerHTML = rondas.map(([t,arr])=>`<div class="ronda"><h3>${t}</h3><div class="rgrid">${
    arr.map(m=>{
      const x=M[m.id];
      const fila=(c,etq)=>{
        if(!c) return `<div class="row"><span style="color:var(--mut)">${etq}</span></div>`;
        const win=x.w===c, pr= x.pA!=null ? (c===x.A?x.pA:100-x.pA) : null;
        return `<div class="row ${win?'win':''}" onclick="elegir(${m.id},'${c}')"><span>${name(c)}</span>${pr!=null?`<span class="pr">${pr}%</span>`:''}</div>`;
      };
      return `<div class="sm">${fila(x.A,x.a)}<div class="mid">P${m.id} · ${m.s}</div>${fila(x.B,x.b)}</div>`;
    }).join('')
  }</div></div>`).join('');
  const fin=M[104];
  document.getElementById('champName').innerHTML = fin&&fin.w ? name(fin.w) : "—";
  document.getElementById('champSub').innerHTML = fin&&fin.w ? `Final: ${name(fin.A)} vs ${name(fin.B)} · MetLife Stadium · ${Object.keys(OV).length? 'con '+Object.keys(OV).length+' ajuste(s) manual(es)' : 'según el modelo'}` : "";
  document.getElementById('ovCount').textContent = Object.keys(OV).length? `${Object.keys(OV).length} cruce(s) forzado(s) por ti` : "Sin ajustes manuales — todo según el modelo";
}
function elegir(id,c){ OV[id]= OV[id]===c ? undefined : c; if(OV[id]===undefined) delete OV[id]; renderSim(); }
document.getElementById('btnReset').addEventListener('click',()=>{OV={};renderSim();});
renderSim();

// ============================================================
// PREMIOS INDIVIDUALES — la tarea diaria actualiza g (goles), a (asistencias),
// pj (partidos), vi (vallas invictas), gc (goles en contra)
// ============================================================
const BOTA = [
 {j:"Kai Havertz",c:"GER",g:2,a:0,pj:1,fav:1,nota:"Doblete en el 7-1 a Curazao (penal al filo del 1T y contragolpe al 88'); colíder de la Bota y goleador de la ofensiva más temida"},
 {j:"Folarin Balogun",c:"USA",g:2,a:0,pj:1,nota:"Doblete en la goleada 4-1 a Paraguay; colíder de la Bota con 2 goles"},
 {j:"Yasin Ayari",c:"SWE",g:2,a:0,pj:1,nota:"Doblete desde el mediocampo (7' y 90+5') en el 5-1 a Túnez; colíder sorpresa de la Bota"},
 {j:"Elijah Just",c:"NZL",g:2,a:0,pj:1,nota:"Doblete (7' y 54') ante Irán en el 2-2; el neozelandés irrumpe como colíder de la Bota"},
 {j:"Felix Nmecha",c:"GER",g:1,a:0,pj:1,nota:"Abrió el 7-1 al 6' ante Curazao"},
 {j:"Nico Schlotterbeck",c:"GER",g:1,a:0,pj:1,nota:"De cabeza tras córner para el 2-1 (38') ante Curazao"},
 {j:"Jamal Musiala",c:"GER",g:1,a:0,pj:1,nota:"Anotó el 4-1 al 47' en la goleada a Curazao"},
 {j:"Nathaniel Brown",c:"GER",g:1,a:0,pj:1,nota:"Sumó el 5-1 al 68' ante Curazao"},
 {j:"Deniz Undav",c:"GER",g:1,a:0,pj:1,nota:"Amplió la goleada alemana ante Curazao"},
 {j:"Alexander Isak",c:"SWE",g:1,a:0,pj:1,nota:"Gol al 29' y asistencia a Gyökeres en el 5-1 a Túnez"},
 {j:"Viktor Gyökeres",c:"SWE",g:1,a:0,pj:1,nota:"Marcó el 3-1 al 59' (asistencia de Isak) ante Túnez"},
 {j:"Mattias Svanberg",c:"SWE",g:1,a:0,pj:1,nota:"Gol tras revisión del VAR al 84' en la goleada a Túnez"},
 {j:"Virgil van Dijk",c:"NED",g:1,a:0,pj:1,nota:"De cabeza al 51' abrió el 2-2 ante Japón"},
 {j:"Crysencio Summerville",c:"NED",g:1,a:0,pj:1,nota:"Recorte y disparo al 64' para el 2-1 ante Japón"},
 {j:"Keito Nakamura",c:"JPN",g:1,a:0,pj:1,nota:"Empate japonés al 56' ante Países Bajos"},
 {j:"Daichi Kamada",c:"JPN",g:1,a:0,pj:1,nota:"Desvió el córner de Ogawa al 88' para el 2-2 ante Países Bajos"},
 {j:"Amad Diallo",c:"CIV",g:1,a:0,pj:1,nota:"Gol al 90' que dio a Costa de Marfil el 1-0 sobre Ecuador"},
 {j:"Livano Comenencia",c:"CUW",g:1,a:0,pj:1,nota:"Primer gol mundialista de Curazao en su historia, en el 1-7 ante Alemania"},
 {j:"Omar Rekik",c:"TUN",g:1,a:0,pj:1,nota:"De cabeza al 43', único gol tunecino en el 1-5 ante Suecia"},
 {j:"Julián Quiñones",c:"MEX",g:1,a:0,pj:1,nota:"Autor del primer gol del Mundial"},
 {j:"Raúl Jiménez",c:"MEX",g:1,a:0,pj:1,nota:"De cabeza ante Sudáfrica; el 9 veterano del Tri sigue vigente"},
 {j:"Hwang In-beom",c:"KOR",g:1,a:0,pj:1,nota:"Golazo del empate ante Chequia"},
 {j:"Oh Hyeon-gyu",c:"KOR",g:1,a:0,pj:1,nota:"Gol del triunfo coreano en el 80'"},
 {j:"Ladislav Krejčí",c:"CZE",g:1,a:0,pj:1,nota:"El primer gol checo del torneo, tras saque largo de Souček"},
 {j:"Giovanni Reyna",c:"USA",g:1,a:0,pj:1,nota:"Cerró la goleada ante Paraguay"},
 {j:"Cyle Larin",c:"CAN",g:1,a:0,pj:1,nota:"Igualó 1-1 a Bosnia al 79'"},
 {j:"Breel Embolo",c:"SUI",g:1,a:0,pj:1,nota:"Penal al 17' ante Qatar"},
 {j:"Ismael Saibari",c:"MAR",g:1,a:0,pj:1,nota:"Adelantó a Marruecos ante Brasil; el 1-1 sabe a punto de oro"},
 {j:"Vinícius Jr.",c:"BRA",g:1,a:0,pj:1,nota:"Su gol 10 con Brasil rescató el 1-1 ante Marruecos"},
 {j:"John McGinn",c:"SCO",g:1,a:0,pj:1,nota:"Gol del primer triunfo escocés en 36 años"},
 {j:"Nestory Irankunda",c:"AUS",g:1,a:0,pj:1,nota:"Golazo individual al 27' en el 2-0 a Turquía"},
 {j:"Connor Metcalfe",c:"AUS",g:1,a:0,pj:1,nota:"Zurdazo al 75' que selló el sorpresón australiano"},
 {j:"Emam Ashour",c:"EGY",g:1,a:0,pj:1,nota:"Golazo de media distancia ante Bélgica (asistió Salah); el 1-1 sabe a triunfo egipcio"},
 {j:"Romelu Lukaku",c:"BEL",g:1,a:0,pj:1,nota:"Entró desde el banco y rescató el 1-1 belga ante Egipto"},
 {j:"Ramin Rezaeian",c:"IRN",g:1,a:0,pj:1,nota:"Igualó ante Nueva Zelanda con remate dentro del área (32')"},
 {j:"Mohammad Mohebi",c:"IRN",g:1,a:0,pj:1,nota:"Firmó el 2-2 definitivo de Irán al 64'"},
 {j:"Abdulelah Al-Amri",c:"KSA",g:1,a:0,pj:1,nota:"El central saudí adelantó a Arabia ante Uruguay (41')"},
 {j:"Maximiliano Araújo",c:"URU",g:1,a:0,pj:1,nota:"Rescató el 1-1 de Uruguay ante Arabia al 80'"},
 {j:"Kylian Mbappé",c:"FRA",g:0,a:0,pj:0,nota:"Debuta hoy 16-jun ante Senegal; 12 goles en Mundiales a sus 27"},
 {j:"Erling Haaland",c:"NOR",g:0,a:0,pj:0,nota:"Debuta hoy 16-jun ante Irak; venía de eliminatorias récord"},
 {j:"Harry Kane",c:"ENG",g:0,a:0,pj:0,nota:"Bota de Oro 2018; debuta el 17-jun ante Croacia"},
 {j:"Lamine Yamal",c:"ESP",g:0,a:0,pj:1,nota:"Debutó en el 0-0 ante Cabo Verde sin poder marcar; sigue siendo la gran amenaza española"},
 {j:"Lionel Messi",c:"ARG",g:0,a:0,pj:0,nota:"Último Mundial; debuta hoy 16-jun ante Argelia"},
 {j:"Julián Álvarez",c:"ARG",g:0,a:0,pj:0,nota:"El 9 de la campeona; 4 goles en Qatar 2022"},
 {j:"Mohamed Salah",c:"EGY",g:0,a:0,pj:1,nota:"Jugó el 1-1 ante Bélgica y asistió el gol de Ashour; aún busca su primer gol"}
];
const BALON = [
 {j:"Lamine Yamal",c:"ESP",g:0,a:0,pj:1,fav:1,nota:"Debutó en el 0-0 ante Cabo Verde; sigue siendo la cara del torneo y España, candidata máxima"},
 {j:"Lionel Messi",c:"ARG",g:0,a:0,pj:0,nota:"Balón de Oro en 2014 y 2022; va por una despedida de leyenda"},
 {j:"Vinícius Jr.",c:"BRA",g:1,a:0,pj:1,nota:"Apareció cuando Brasil lo necesitó: su gol salvó el 1-1 ante Marruecos"},
 {j:"Jude Bellingham",c:"ENG",g:0,a:0,pj:0,nota:"El motor total de Inglaterra"},
 {j:"Kylian Mbappé",c:"FRA",g:0,a:0,pj:0,nota:"Si Francia llega lejos, será con él como protagonista"},
 {j:"Pedri",c:"ESP",g:0,a:0,pj:0,nota:"El cerebro de la Roja invicta"},
 {j:"Vitinha",c:"POR",g:0,a:0,pj:0,nota:"El mejor mediocentro de Europa esta temporada"},
 {j:"Kevin De Bruyne",c:"BEL",g:0,a:0,pj:1,nota:"Bélgica gira a su alrededor, aunque solo empató 1-1 con Egipto en el debut"},
 {j:"Federico Valverde",c:"URU",g:0,a:0,pj:1,nota:"Jugó el 1-1 ante Arabia; caudillo del Uruguay de Bielsa"}
];
const GUANTE = [
 {j:"José Raúl 'Tala' Rangel",c:"MEX",vi:1,gc:0,pj:1,nota:"Valla invicta y 2 paradas en el debut 2-0 a Sudáfrica; uno de los seis porteros con el cero intacto"},
 {j:"Angus Gunn",c:"SCO",vi:1,gc:0,pj:1,nota:"Valla invicta en el 1-0 a Haití; clave para el primer triunfo escocés en 36 años"},
 {j:"Patrick Beach",c:"AUS",vi:1,gc:0,pj:1,nota:"Debut soñado: relevó a Mat Ryan, hizo 8 paradas (incluida una a Güler) y dejó el cero en el 2-0 a Turquía"},
 {j:"Yahia Fofana",c:"CIV",vi:1,gc:0,pj:1,nota:"Valla invicta en el 1-0 a Ecuador; sostuvo el cero hasta el gol de Amad Diallo al 90'"},
 {j:"Vozinha",c:"CPV",vi:1,gc:0,pj:1,nota:"Histórico: a sus 40 años dejó en cero a España (paradón a Oyarzabal) en el debut mundial de Cabo Verde"},
 {j:"Emiliano 'Dibu' Martínez",c:"ARG",vi:0,gc:0,pj:0,nota:"Guante de Oro en Qatar 2022; especialista en momentos límite"},
 {j:"Unai Simón",c:"ESP",vi:1,gc:0,pj:1,fav:1,nota:"Valla invicta en el 0-0 ante Cabo Verde; con la favorita europea, el modelo lo ve como líder de la carrera"},
 {j:"Mike Maignan",c:"FRA",vi:0,gc:0,pj:0,nota:"Reflejos de élite tras una zaga que concede ocasiones"},
 {j:"Jordan Pickford",c:"ENG",vi:0,gc:0,pj:0,nota:"Seguro bajo palos y en tandas de penales"},
 {j:"Marc-André ter Stegen",c:"GER",vi:0,gc:1,pj:1,nota:"Alemania goleó 7-1, pero encajó el gol histórico de Comenencia: sin valla invicta en el debut"},
 {j:"Diogo Costa",c:"POR",vi:0,gc:0,pj:0,nota:"Atajapenales; grupo accesible para acumular vallas invictas"},
 {j:"Yassine 'Bono' Bounou",c:"MAR",vi:0,gc:0,pj:0,nota:"Héroe de 2022; el muro marroquí empieza con él"},
 {j:"Thibaut Courtois",c:"BEL",vi:0,gc:0,pj:0,nota:"Jerarquía intacta; Bélgica llega lanzada"}
];
const JOVEN = [
 {j:"Nestory Irankunda",c:"AUS",g:1,a:0,pj:1,fav:1,nota:"Golazo individual de 20 años en el 2-0 a Turquía: hoy, el joven más determinante del torneo"},
 {j:"Lamine Yamal",c:"ESP",g:0,a:0,pj:1,nota:"18 años y ya es la cara del torneo; debutó en el 0-0 ante Cabo Verde, buscará su primer gol ante Arabia"},
 {j:"Ben Gannon Doak",c:"SCO",g:0,a:0,pj:1,nota:"Desequilibrante en el 1-0 a Haití; el extremo de 20 años fue la chispa escocesa"},
 {j:"Endrick",c:"BRA",g:0,a:0,pj:0,nota:"Revulsivo de lujo de Ancelotti"},
 {j:"Arda Güler",c:"TUR",g:0,a:0,pj:1,nota:"Turquía cayó 0-2 con Australia; su zurda no encontró espacios y Beach le negó el gol"},
 {j:"Kenan Yildiz",c:"TUR",g:0,a:0,pj:1,nota:"Discreto en el sorpresivo tropiezo turco ante Australia; deberá reaccionar ya"},
 {j:"Assan Ouédraogo",c:"GER",g:0,a:0,pj:0,nota:"Entró a la lista por la baja de Karl; proyección enorme"},
 {j:"Franco Mastantuono",c:"ARG",g:0,a:0,pj:0,nota:"La joya argentina que pide minutos"},
 {j:"Pau Cubarsí",c:"ESP",g:0,a:0,pj:1,nota:"Titular en la zaga española en el 0-0 ante Cabo Verde; central precoz de la Roja"},
 {j:"Warren Zaïre-Emery",c:"FRA",g:0,a:0,pj:0,nota:"El mediocampo francés del futuro, hoy"}
];
function tj(arr,cols){
  return `<table><thead><tr><th style="text-align:left;padding-left:14px">Jugador</th><th>País</th>${cols.map(c=>`<th>${c[1]}</th>`).join('')}<th style="text-align:left">Nota</th></tr></thead><tbody>${
    arr.map(x=>`<tr><td class="eq">${x.j} ${x.fav?'<span class="tagfav">FAVORITO</span>':''}</td><td>${fl(x.c)}</td>${cols.map(c=>`<td class="pts">${x[c[0]]}</td>`).join('')}<td style="text-align:left;font-size:.74rem;color:var(--mut)">${x.nota}</td></tr>`).join('')
  }</tbody></table>`;
}
document.getElementById('awards').innerHTML =
 `<div class="award"><h3>👟 Bota de Oro — Máximo goleador <button class="btnimg" style="float:right" onclick="imgPremio(0)">📷 Imagen</button></h3><p class="d">Desempates oficiales: asistencias y menos minutos jugados.</p>${tj(BOTA,[["g","Goles"],["a","Asist."],["pj","PJ"]])}</div>
  <div class="award"><h3>🏅 Balón de Oro — Mejor jugador del torneo <button class="btnimg" style="float:right" onclick="imgPremio(1)">📷 Imagen</button></h3><p class="d">Lo elige el Grupo de Estudios Técnicos de la FIFA.</p>${tj(BALON,[["g","Goles"],["a","Asist."],["pj","PJ"]])}</div>
  <div class="award"><h3>🧤 Guante de Oro — Mejor portero <button class="btnimg" style="float:right" onclick="imgPremio(2)">📷 Imagen</button></h3><p class="d">Vallas invictas y goles recibidos, actualizados a diario.</p>${tj(GUANTE,[["vi","Vallas inv."],["gc","Goles recibidos"],["pj","PJ"]])}</div>
  <div class="award"><h3>🌟 Premio al Jugador Joven <button class="btnimg" style="float:right" onclick="imgPremio(3)">📷 Imagen</button></h3><p class="d">Para nacidos a partir del 1 de enero de 2005.</p>${tj(JOVEN,[["g","Goles"],["a","Asist."],["pj","PJ"]])}</div>`;

// ============================================================
// CALENDARIO COMPLETO FASE DE GRUPOS
// ============================================================
const CAL = [
 ["Jueves 11 de junio",[["15:00","A","🇲🇽 México","🇿🇦 Sudáfrica","Estadio Azteca, CDMX"],["22:00","A","🇰🇷 Corea del Sur","🇨🇿 Chequia","Estadio Akron, Guadalajara"]]],
 ["Viernes 12 de junio",[["15:00","B","🇨🇦 Canadá","🇧🇦 Bosnia y Herz.","BMO Field, Toronto"],["21:00","D","🇺🇸 Estados Unidos","🇵🇾 Paraguay","SoFi Stadium, Inglewood"]]],
 ["Sábado 13 de junio",[["15:00","B","🇶🇦 Qatar","🇨🇭 Suiza","Levi's Stadium, Santa Clara"],["18:00","C","🇧🇷 Brasil","🇲🇦 Marruecos","MetLife Stadium, East Rutherford"],["21:00","C","🇭🇹 Haití","🏴󠁧󠁢󠁳󠁣󠁴󠁿 Escocia","Gillette Stadium, Foxborough"]]],
 ["Domingo 14 de junio",[["00:00","D","🇦🇺 Australia","🇹🇷 Turquía","BC Place, Vancouver"],["13:00","E","🇩🇪 Alemania","🇨🇼 Curazao","NRG Stadium, Houston"],["16:00","F","🇳🇱 Países Bajos","🇯🇵 Japón","AT&T Stadium, Arlington"],["19:00","E","🇨🇮 Costa de Marfil","🇪🇨 Ecuador","Lincoln Financial Field, Filadelfia"],["22:00","F","🇸🇪 Suecia","🇹🇳 Túnez","Estadio BBVA, Monterrey"]]],
 ["Lunes 15 de junio",[["12:00","H","🇪🇸 España","🇨🇻 Cabo Verde","Mercedes-Benz Stadium, Atlanta"],["15:00","G","🇧🇪 Bélgica","🇪🇬 Egipto","Lumen Field, Seattle"],["18:00","H","🇸🇦 Arabia Saudita","🇺🇾 Uruguay","Hard Rock Stadium, Miami"],["21:00","G","🇮🇷 Irán","🇳🇿 Nueva Zelanda","SoFi Stadium, Inglewood"]]],
 ["Martes 16 de junio",[["15:00","I","🇫🇷 Francia","🇸🇳 Senegal","MetLife Stadium, East Rutherford"],["18:00","I","🇮🇶 Irak","🇳🇴 Noruega","Gillette Stadium, Foxborough"],["21:00","J","🇦🇷 Argentina","🇩🇿 Argelia","Arrowhead Stadium, Kansas City"]]],
 ["Miércoles 17 de junio",[["00:00","J","🇦🇹 Austria","🇯🇴 Jordania","Levi's Stadium, Santa Clara"],["13:00","K","🇵🇹 Portugal","🇨🇩 RD Congo","NRG Stadium, Houston"],["16:00","L","🏴󠁧󠁢󠁥󠁮󠁧󠁿 Inglaterra","🇭🇷 Croacia","AT&T Stadium, Arlington"],["19:00","L","🇬🇭 Ghana","🇵🇦 Panamá","BMO Field, Toronto"],["22:00","K","🇺🇿 Uzbekistán","🇨🇴 Colombia","Estadio Azteca, CDMX"]]],
 ["Jueves 18 de junio",[["12:00","A","🇨🇿 Chequia","🇿🇦 Sudáfrica","Mercedes-Benz Stadium, Atlanta"],["15:00","B","🇨🇭 Suiza","🇧🇦 Bosnia y Herz.","SoFi Stadium, Inglewood"],["18:00","B","🇨🇦 Canadá","🇶🇦 Qatar","BC Place, Vancouver"],["21:00","A","🇲🇽 México","🇰🇷 Corea del Sur","Estadio Akron, Guadalajara"]]],
 ["Viernes 19 de junio",[["15:00","D","🇺🇸 Estados Unidos","🇦🇺 Australia","Lumen Field, Seattle"],["18:00","C","🏴󠁧󠁢󠁳󠁣󠁴󠁿 Escocia","🇲🇦 Marruecos","Gillette Stadium, Foxborough"],["20:30","C","🇧🇷 Brasil","🇭🇹 Haití","Lincoln Financial Field, Filadelfia"],["23:00","D","🇹🇷 Turquía","🇵🇾 Paraguay","Levi's Stadium, Santa Clara"]]],
 ["Sábado 20 de junio",[["13:00","F","🇳🇱 Países Bajos","🇸🇪 Suecia","NRG Stadium, Houston"],["16:00","E","🇩🇪 Alemania","🇨🇮 Costa de Marfil","BMO Field, Toronto"],["20:00","E","🇪🇨 Ecuador","🇨🇼 Curazao","Arrowhead Stadium, Kansas City"]]],
 ["Domingo 21 de junio",[["00:00","F","🇹🇳 Túnez","🇯🇵 Japón","Estadio BBVA, Monterrey"],["12:00","H","🇪🇸 España","🇸🇦 Arabia Saudita","Mercedes-Benz Stadium, Atlanta"],["15:00","G","🇧🇪 Bélgica","🇮🇷 Irán","SoFi Stadium, Inglewood"],["18:00","H","🇺🇾 Uruguay","🇨🇻 Cabo Verde","Hard Rock Stadium, Miami"],["21:00","G","🇳🇿 Nueva Zelanda","🇪🇬 Egipto","BC Place, Vancouver"]]],
 ["Lunes 22 de junio",[["13:00","J","🇦🇷 Argentina","🇦🇹 Austria","AT&T Stadium, Arlington"],["17:00","I","🇫🇷 Francia","🇮🇶 Irak","Lincoln Financial Field, Filadelfia"],["20:00","I","🇳🇴 Noruega","🇸🇳 Senegal","MetLife Stadium, East Rutherford"],["23:00","J","🇯🇴 Jordania","🇩🇿 Argelia","Levi's Stadium, Santa Clara"]]],
 ["Martes 23 de junio",[["13:00","K","🇵🇹 Portugal","🇺🇿 Uzbekistán","NRG Stadium, Houston"],["16:00","L","🏴󠁧󠁢󠁥󠁮󠁧󠁿 Inglaterra","🇬🇭 Ghana","Gillette Stadium, Foxborough"],["19:00","L","🇵🇦 Panamá","🇭🇷 Croacia","BMO Field, Toronto"],["22:00","K","🇨🇴 Colombia","🇨🇩 RD Congo","Estadio Akron, Guadalajara"]]],
 ["Miércoles 24 de junio",[["15:00","B","🇨🇭 Suiza","🇨🇦 Canadá","BC Place, Vancouver"],["15:00","B","🇧🇦 Bosnia y Herz.","🇶🇦 Qatar","Lumen Field, Seattle"],["18:00","C","🏴󠁧󠁢󠁳󠁣󠁴󠁿 Escocia","🇧🇷 Brasil","Hard Rock Stadium, Miami"],["18:00","C","🇲🇦 Marruecos","🇭🇹 Haití","Mercedes-Benz Stadium, Atlanta"],["21:00","A","🇨🇿 Chequia","🇲🇽 México","Estadio Azteca, CDMX"],["21:00","A","🇿🇦 Sudáfrica","🇰🇷 Corea del Sur","Estadio BBVA, Monterrey"]]],
 ["Jueves 25 de junio",[["16:00","E","🇨🇼 Curazao","🇨🇮 Costa de Marfil","Lincoln Financial Field, Filadelfia"],["16:00","E","🇪🇨 Ecuador","🇩🇪 Alemania","MetLife Stadium, East Rutherford"],["19:00","F","🇯🇵 Japón","🇸🇪 Suecia","AT&T Stadium, Arlington"],["19:00","F","🇹🇳 Túnez","🇳🇱 Países Bajos","Arrowhead Stadium, Kansas City"],["22:00","D","🇹🇷 Turquía","🇺🇸 Estados Unidos","SoFi Stadium, Inglewood"],["22:00","D","🇵🇾 Paraguay","🇦🇺 Australia","Levi's Stadium, Santa Clara"]]],
 ["Viernes 26 de junio",[["15:00","I","🇳🇴 Noruega","🇫🇷 Francia","Gillette Stadium, Foxborough"],["15:00","I","🇸🇳 Senegal","🇮🇶 Irak","BMO Field, Toronto"],["20:00","H","🇨🇻 Cabo Verde","🇸🇦 Arabia Saudita","NRG Stadium, Houston"],["20:00","H","🇺🇾 Uruguay","🇪🇸 España","Estadio Akron, Guadalajara"],["23:00","G","🇪🇬 Egipto","🇮🇷 Irán","Lumen Field, Seattle"],["23:00","G","🇳🇿 Nueva Zelanda","🇧🇪 Bélgica","BC Place, Vancouver"]]],
 ["Sábado 27 de junio",[["17:00","L","🇵🇦 Panamá","🏴󠁧󠁢󠁥󠁮󠁧󠁿 Inglaterra","MetLife Stadium, East Rutherford"],["17:00","L","🇭🇷 Croacia","🇬🇭 Ghana","Lincoln Financial Field, Filadelfia"],["19:30","K","🇨🇴 Colombia","🇵🇹 Portugal","Hard Rock Stadium, Miami"],["19:30","K","🇨🇩 RD Congo","🇺🇿 Uzbekistán","Mercedes-Benz Stadium, Atlanta"],["22:00","J","🇩🇿 Argelia","🇦🇹 Austria","Arrowhead Stadium, Kansas City"],["22:00","J","🇯🇴 Jordania","🇦🇷 Argentina","AT&T Stadium, Arlington"]]]
];
document.getElementById('cal').innerHTML = CAL.map(([dia,ps])=>`<div class="dia"><h3>${dia}</h3>${
  ps.map(p=>`<div class="pline"><span class="hora">${p[0]} ET</span><span class="g">Grupo ${p[1]}</span><span style="flex:1;text-align:center">${equipo(p[2])} <b style="color:var(--mut)">vs</b> ${equipo(p[3])}</span><span class="sede">${p[4]}</span></div>`).join('')
}</div>`).join('');

// ===== TABS =====
document.querySelectorAll('.tab').forEach(t=>t.addEventListener('click',()=>{
  document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));
  document.querySelectorAll('.view').forEach(x=>x.classList.remove('active'));
  t.classList.add('active');
  document.getElementById(t.dataset.v).classList.add('active');
}));

// ============================================================
// BUSCADOR DE SELECCIONES + FICHA GENERAL DEL EQUIPO
// ============================================================
const RONDA_NOMBRE=id=>id<=88?'Dieciseisavos (R32)':id<=96?'Octavos de final':id<=100?'Cuartos de final':id<=102?'Semifinal':id===103?'Tercer lugar':'GRAN FINAL';
const norm=s=>s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'');
const inpBusca=document.getElementById('busca'), sugs=document.getElementById('sugs');
inpBusca.addEventListener('input',()=>{
  const q=norm(inpBusca.value.trim());
  if(!q){sugs.style.display='none';return;}
  const hits=Object.keys(T).filter(c=>norm(T[c].n).includes(q)).slice(0,8);
  sugs.innerHTML=hits.length?hits.map(c=>`<div onclick="verEquipo('${c}')">${fl(c)} ${T[c].n}</div>`).join(''):'<div style="color:var(--mut);cursor:default">Sin resultados</div>';
  sugs.style.display='block';
});
inpBusca.addEventListener('keydown',e=>{
  if(e.key==='Enter'){
    const q=norm(inpBusca.value.trim());
    const c=Object.keys(T).find(c=>norm(T[c].n).includes(q));
    if(c) verEquipo(c);
  }
});
document.addEventListener('click',e=>{ if(!e.target.closest('.buscador')) sugs.style.display='none'; });

function verEquipo(c){
  sugs.style.display='none'; inpBusca.value=T[c].n;
  document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));
  document.querySelectorAll('.view').forEach(x=>x.classList.remove('active'));
  document.getElementById('equipo').classList.add('active');
  const g=T[c].g, tabla=tablaGrupo(g);
  const pos=tabla.findIndex(s=>s.c===c)+1;
  const fav=FAVORITOS.find(f=>f.c===c);
  // tabla del grupo con el equipo resaltado
  const filasT=tabla.map((s,i)=>`<tr class="${i<2?'q1':(i==2?'q3':'q4')}"${s.c===c?' style="background:#1d3a5f"':''}>
    <td>${i+1}</td><td class="eq clickeq" onclick="verEquipo('${s.c}')" title="Ver ficha de ${T[s.c].n}">${name(s.c)}</td><td>${s.pj}</td><td>${s.w}</td><td>${s.e}</td><td>${s.l}</td><td>${s.gf}</td><td>${s.gc}</td><td>${s.gf-s.gc}</td><td class="pts">${s.pts}</td><td class="proy">${T[s.c].proy}</td></tr>`).join('');
  // sus partidos (calendario + resultado real si existe)
  let partidos='';
  CAL.forEach(([dia,ps])=>ps.forEach(p=>{
    const cA=codeDe(p[2].split(' ').slice(1).join(' ')), cB=codeDe(p[3].split(' ').slice(1).join(' '));
    if(cA!==c&&cB!==c) return;
    const res=RESULTADOS.find(r=>r.hg!=null&&((r.h===cA&&r.a===cB)||(r.h===cB&&r.a===cA)));
    const estado=res?`<b style="color:var(--gold);min-width:60px;text-align:center">${res.h===cA?res.hg+' - '+res.ag:res.ag+' - '+res.hg}</b>`:`<span style="color:var(--green);font-size:.75rem;min-width:60px;text-align:center">Por jugar</span>`;
    const d=dia.split(' ');
    partidos+=`<div class="pline"><span class="hora">${d[1]} ${d[3].slice(0,3)} · ${p[0]} ET</span><span class="g">Grupo ${p[1]}</span><span style="flex:1;text-align:center">${equipo(p[2])} <b style="color:var(--mut)">vs</b> ${equipo(p[3])}</span>${estado}<span class="sede">${p[4]}</span></div>`;
  }));
  // pronósticos que lo involucran + su forma + noticias
  let pron='', forma='', noticias=[];
  J1.forEach(x=>{
    const cA=codeDe(x.e1.split(' ').slice(1).join(' ')), cB=codeDe(x.e2.split(' ').slice(1).join(' '));
    if(cA!==c&&cB!==c) return;
    forma = cA===c?x.f1:x.f2;
    noticias.push(...x.news);
    pron+=`<div class="mcard" style="margin-bottom:10px">
      <div class="mtop"><span class="grp">GRUPO ${x.g}</span><span>${x.f} · ${x.h}</span><span>🏟 ${x.sede}</span></div>
      <div class="mmain" style="font-size:1rem"><span>${equipo(x.e1)}</span><span class="score">Marcador probable: ${x.m}</span><span>${equipo(x.e2)}</span></div>
      <div class="probbar"><div class="pl" style="width:${x.p[0]}%">${x.p[0]}%</div><div class="pe" style="width:${x.p[1]}%">${x.p[1]}%</div><div class="pv" style="width:${x.p[2]}%">${x.p[2]}%</div></div>
      <div class="analisis" style="padding-top:6px">💡 ${x.an}</div></div>`;
  });
  // camino proyectado en eliminatorias
  const M=simular(); let camino='';
  [...R32,...R16,...QF,...SF,...TP,...FIN].forEach(m=>{
    const x=M[m.id]; if(!x.A||!x.B||(x.A!==c&&x.B!==c)) return;
    const rival=x.A===c?x.B:x.A, gana=x.w===c, pct=x.A===c?x.pA:100-x.pA;
    camino+=`<div class="pline"><span class="hora" style="min-width:150px">${RONDA_NOMBRE(m.id)}</span><span style="flex:1;text-align:center">vs ${name(rival)}</span><span style="color:${gana?'var(--green)':'var(--red)'};font-weight:700;font-size:.78rem">${gana?'AVANZA':'ELIMINADO'} · ${pct}%</span><span class="sede">${m.s}</span></div>`;
  });
  // sus jugadores en carreras de premios
  const premios=[['👟 Bota de Oro',BOTA],['🏅 Balón de Oro',BALON],['🧤 Guante de Oro',GUANTE],['🌟 Jugador Joven',JOVEN]].map(([t,arr])=>{
    const js=arr.filter(x=>x.c===c); if(!js.length) return '';
    return `<div class="factor"><b>${t}</b>${js.map(x=>`${x.j}${x.fav?' ⭐':''}`).join(' · ')}</div>`;
  }).filter(Boolean).join('');
  document.getElementById('fichaEquipo').innerHTML=`
   <div class="fhead">
     <img src="https://flagcdn.com/w160/${FLAGCODE[c]}.png" alt="${T[c].n}">
     <div style="flex:1;min-width:240px">
       <h2>${T[c].n}</h2>
       <p>Grupo ${g} · Posición actual: ${pos}.º · Rating de fuerza: ${T[c].r} · Proyección: ${T[c].proy} pts</p>
       <p style="color:var(--gold);font-weight:700">${fav?`🏆 ${fav.p}% de probabilidad de título · ${FAVORITOS.indexOf(fav)+1}.º favorito`:'🏆 <1% de probabilidad de título según el modelo'}</p>
     </div>
     <button class="btnref" onclick="location.reload()" title="Recarga el tablero con los últimos datos">↻ Restablecer datos</button>
   </div>
   ${fav?`<div class="factores" style="padding:0 0 4px"><div class="factor"><b>✔ A favor</b>${fav.pro}</div><div class="factor"><b>✖ En contra</b>${fav.con}</div></div>`:''}
   ${forma?`<div class="factores" style="padding:0"><div class="factor"><b>📈 Forma reciente (últimos partidos)</b>${forma}</div></div>`:''}
   <h3 class="fsec">📊 Su grupo</h3>
   <div class="gcard"><table><thead><tr><th>#</th><th style="text-align:left;padding-left:12px">Equipo</th><th>PJ</th><th>G</th><th>E</th><th>P</th><th>GF</th><th>GC</th><th>DIF</th><th>PTS</th><th>PROY</th></tr></thead><tbody>${filasT}</tbody></table></div>
   <h3 class="fsec">📅 Sus partidos en el torneo (resultados y por jugar)</h3>${partidos||'<p class="leyenda">Sin partidos registrados.</p>'}
   ${pron?`<h3 class="fsec">🔮 Pronóstico de su próximo partido</h3>${pron}`:''}
   <h3 class="fsec">🗺 Camino proyectado en eliminatorias</h3>${camino||'<p class="leyenda">El modelo no lo proyecta clasificado a la fase eliminatoria hoy. Puede cambiar con los resultados reales.</p>'}
   ${noticias.length?`<h3 class="fsec">📰 Noticias relacionadas</h3><div class="news" style="padding:0 0 8px"><ul>${noticias.map(n=>`<li>${n}</li>`).join('')}</ul></div>`:''}
   ${premios?`<h3 class="fsec">⭐ Sus jugadores en carreras de premios</h3><div class="factores" style="padding:0 0 20px">${premios}</div>`:''}
  `;
  window.scrollTo({top:0,behavior:'smooth'});
}

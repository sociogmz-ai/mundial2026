import re, sys

path = "index.html"
html = open(path, encoding="utf-8").read()
orig_len = len(html)

def rep(old, new, label):
    global html
    c = html.count(old)
    if c != 1:
        print(f"FAIL {label}: count={c}")
        sys.exit(1)
    html = html.replace(old, new)
    print(f"OK {label}")

# 1) Australia-Egipto: arbitro
rep(
 '  p:[32,34,34],m:"1-1",alt:"Techo retráctil — sin efecto",\n  clima:"Techo cerrado, clima controlado (~22 °C) en Dallas",\n  arb:"Por confirmar (FIFA designa ~48 h antes)",',
 '  p:[32,34,34],m:"1-1",alt:"Techo retráctil — sin efecto",\n  clima:"Techo cerrado, clima controlado (~22 °C) en Dallas",\n  arb:"Gustavo Tejera (Uruguay); asist. Barreiro y Tarán; 4º Sandro Schärer (Suiza); VAR Leodán González",',
 "arb Australia-Egipto"
)

# 2) Argentina-Cabo Verde: arbitro + clima mas preciso
rep(
 '  p:[78,15,7],m:"3-0",alt:"Al aire — sin efecto",\n  clima:"~31 °C y húmedo en Miami; posible tormenta vespertina",\n  arb:"Por confirmar (FIFA designa ~48 h antes)",',
 '  p:[78,15,7],m:"3-0",alt:"Al aire — sin efecto",\n  clima:"33 °C máx., 55% prob. de lluvia y tormenta vespertina en Miami",\n  arb:"Drew Fischer (Canadá); asist. Barwegen y Arfa; 4ª Katia García (México)",',
 "arb+clima Argentina-CaboVerde"
)

# 3) Colombia-Ghana: arbitro + nota clima tormenta
rep(
 '  p:[44,40,16],m:"2-1",alt:"Al aire — sin efecto",\n  clima:"~28 °C, noche cálida en Kansas City; cancha al aire",\n  arb:"Por confirmar (FIFA designa ~48 h antes)",',
 '  p:[44,40,16],m:"2-1",alt:"Al aire — sin efecto",\n  clima:"~28 °C, noche cálida con riesgo de tormenta vespertina en Kansas City; cancha al aire",\n  arb:"Clément Turpin (Francia); asist. Danos y Pages; 4º Alejandro Hernández (España)",',
 "arb+clima Colombia-Ghana"
)

# 4) Canada-Marruecos: arbitro + noticia baja Kone
rep(
 '  arb:"Por confirmar (FIFA designa ~48 h antes)",\n  f1:"16avos: 1-0 a Sudáfrica (Eustáquio al 90+2\'); Canadá a octavos por 1.ª vez en su historia",\n  f2:"16avos: eliminó a Países Bajos (1-1, 3-2 pen.; Diop al 90+1 y Bono figura)",\n  news:["Marruecos, semifinalista en 2022, parte favorito ante una Canadá histórica.","Hakimi, Saibari y En-Nesyri encabezan a los Leones del Atlas.","Canadá, con Jonathan David y Larin, sueña con seguir haciendo historia."],',
 '  arb:"Michael Oliver (Inglaterra); asist. Burt y Mainwaring; 4º Danny Makkelie (Países Bajos)",\n  f1:"16avos: 1-0 a Sudáfrica (Eustáquio al 90+2\'); Canadá a octavos por 1.ª vez en su historia",\n  f2:"16avos: eliminó a Países Bajos (1-1, 3-2 pen.; Diop al 90+1 y Bono figura)",\n  news:["Marruecos, semifinalista en 2022, parte favorito ante una Canadá histórica.","Hakimi, Saibari y En-Nesyri encabezan a los Leones del Atlas.","BAJA CAN: Ismaël Koné, fractura de tibia y peroné en 16avos; ya operado, fuera el resto del torneo."],',
 "arb+news Canada-Marruecos"
)

# 5) Paraguay-Francia: arbitro
rep(
 '  p:[13,22,65],m:"2-0",alt:"Al aire — sin efecto",\n  clima:"~30 °C, tarde de verano en Filadelfia; cancha al aire",\n  arb:"Por confirmar (FIFA designa ~48 h antes)",',
 '  p:[13,22,65],m:"2-0",alt:"Al aire — sin efecto",\n  clima:"~30 °C, tarde de verano en Filadelfia; cancha al aire",\n  arb:"Ilgiz Tantashev (Uzbekistán); asist. Tsapenko y Gaynullin",',
 "arb Paraguay-Francia"
)

open(path, "w", encoding="utf-8").write(html)
print("new_len", len(html), "orig_len", orig_len)

import sys
path = "index.html"
html = open(path, encoding="utf-8").read()

old = ('HOY 3 jul, cierre de 16avos: Australia–Egipto, Argentina–Cabo Verde y Colombia–Ghana · '
       'Octavos confirmados: Canadá–Marruecos y Paraguay–Francia (4 jul), Brasil–Noruega y México–Inglaterra (5 jul), España–Portugal y EE. UU.–Bélgica (6 jul) · ')
new = ('HOY 3 jul, cierre de 16avos: Australia–Egipto (árb. Gustavo Tejera, URU), Argentina–Cabo Verde (árb. Drew Fischer, CAN) y Colombia–Ghana (árb. Clément Turpin, FRA) · '
       'Octavos confirmados: Canadá–Marruecos (árb. Michael Oliver, ENG) y Paraguay–Francia (árb. Ilgiz Tantashev, UZB) el 4 jul, Brasil–Noruega y México–Inglaterra (5 jul), España–Portugal y EE. UU.–Bélgica (6 jul) · '
       'BAJA: Ismaël Koné (CAN) fuera el resto del torneo por fractura de tibia y peroné · ')

c = html.count(old)
if c != 1:
    print("FAIL stamp, count=", c)
    sys.exit(1)
html = html.replace(old, new)
open(path, "w", encoding="utf-8").write(html)
print("OK stamp")

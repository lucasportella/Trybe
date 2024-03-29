import csv

# lê os dados
with open("balneabilidade.csv") as file:
   beach_status_reader = csv.reader(file, delimiter=",", quotechar='"')
   header, *data = beach_status_reader

# agrupa campanhas e suas respectivas balneabilidades
bathing_by_campaign = {}
for row in data:
   campaign = row[6] # na vdd é coluna na posição 6
   bathing = row[2] # na vdd é coluna na posição 2
   if campaign not in bathing_by_campaign:
       bathing_by_campaign[campaign] = { # joga na bathing_by_campaign uma chave com o valor do numero_boletim e o valor dessa chave vai ser essas linhas abaixo:
           "Própria": 0,
           "Imprópria": 0,
           "Muito Boa": 0,
           "Indisponível": 0,
           "Satisfatória": 0,
       }
   bathing_by_campaign[campaign][bathing] += 1 # a variável bathing é a categoria no arquivo csv, que vai corresponder a "Própria", "Imprópria" etc, a que bater com o valor de bathing_by_campaign[campaign] ganhará 1 ponto, indicando que naquele dia foi essa a balnealidade da praia

# escreve o relatório em csv
# abre um arquivo para escrita
with open("report_por_campanha.csv", "w") as file:
   writer = csv.writer(file)

   # escreve o cabeçalho
   headers = [
       "Campanha",
       "Própria",
       "Imprópria",
       "Muito Boa",
       "Indisponível",
       "Satisfatória",
   ]
   writer.writerow(headers)

   # escreve as linhas de dados



   for campaign, bathing in bathing_by_campaign.items():
       # o .items() transforma um dicionário em uma classe chamada dict_items, que acaba com a relação chave/valor de um dicionário, cada elemento vira uma linha só

       # desempacota os valores de balneabilidade para formar uma linha
       # equivalente a
       # row = [campaign]
       # for value in bathing.values():
       #     row.append(value)
       row = [campaign, *bathing.values()]
       writer.writerow(row)
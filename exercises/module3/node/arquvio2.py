#1 - quantidade de notas
#2 - maior nota
#3 - menor nota
#4 - média da turma
#5 - situação(opcional)
def notas(maior=0, menor=0, média=0, situação=False):
    if situação == True:
        if média >=7:
            situação = 'boa'
        if média >=5 and média <7:
            situação = 'razoável'
        else:
            situação = 'ruim'
    dic ={'maior':dados[0],'menor':'','média':'','situação':''}
    
    return dic

dados=(3.5,2, 6.5, True)
print(dados)
print(notas())
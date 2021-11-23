from abc import ABC, abstractmethod
import json
import csv


class SalesReport(ABC):
    def __init__(self, export_file):
        self.export_file = export_file

    def build(self):
        return [{
                'Coluna 1': 'Dado 1',
                'Coluna 2': 'Dado 2',
                'Coluna 3': 'Dado 3'
                },
                {
                'Coluna 1': 'Dado A',
                'Coluna 2': 'Dado B',
                'Coluna 3': 'Dado C'
                }]

    @abstractmethod
    def serialize(self):
        raise NotImplementedError

    
    @abstractmethod
    def get_length(self):
        raise NotImplementedError


class SalesReportJSON(SalesReport):
    def serialize(self):
        with open(self.export_file + '.json', 'w') as file:
            json.dump(self.build(), file)
    
    def get_length(self):
        with open(self.export_file + '.json') as file:
            content = json.load(file)
            print(len(content))

class SalesReportCSV(SalesReport):
    def serialize(self):
        with open(self.export_file + '.csv', 'w') as file:
            headers = ["Coluna 1", "Coluna 2", "Coluna 3"]
            writer = csv.DictWriter(file, fieldnames=headers)
            writer.writeheader()
            for row in self.build():
                writer.writerow(row)
    
    def get_length(self):
        with open ('meu_relatorio.csv') as file:
            reader = csv.reader(file, delimiter=",", quotechar='"')
            header, *data = reader
            print(len(data))

relatorio_de_vendas = SalesReportJSON('meu_relatorio')
relatorio_de_vendas.serialize()

relatorio_de_compras = SalesReportCSV('meu_relatorio')
relatorio_de_compras.serialize()

relatorio_de_vendas.get_length()
relatorio_de_compras.get_length()
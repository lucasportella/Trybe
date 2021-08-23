use('erp');
db.clientes.find();

use('erp');
db.produtos.find();

use('erp');
db.vendas.find();


use('erp');
db.vendas.aggregate([
  { $group: { _id: "$clienteId", quant: { $sum: 1 } } },
  { $match: { quant: { $gt: 5 } } },
  { $count: 'dadadad' }
])

use('erp');
db.vendas.aggregate([
  {
    $group: {
      _id: "$clienteId",
      totalCompras: {
        $sum: 1
      }
    }
  },
  {
    $match: {
      totalCompras: { $gt: 5 }
    }
  },
  {
    $group: { _id: null, aaaaa: { $sum: 1 } }
  }
]);



use('erp');
db.vendas.aggregate([
  { $match: { dataVenda: { $gte: ISODate('2020-01-01'), $lte: ISODate('2020-03-31') } } },
  { $group: { _id: "$clienteId", totalCompras: { $sum: 1 } } },
  { $match: { totalCompras: { $lt: 3 } } },
  { $count: 'aaa' }
])



use('storage');
db.products.aggregate([
  {
    $project: {
      _id: 0, name: 1, lucro_total: {
        $multiply: ["$quantity", {
          $subtract: ["$sale_price", {
            $add: ["$purchase_price", "$taxes"]
          }]
        }]
      }
    }
  }
])

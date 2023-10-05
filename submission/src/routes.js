const{
    tambahbuku,
    dapatBuku,
    DapatIdBuku,
    editidbuku,
    HapusBukuId,
} = require('./handler');

const routes = [
    {
      method: 'POST',
      path: '/books',
      handler: tambahbuku,
    },
    {
      method: 'GET',
      path: '/books',
      handler: dapatBuku,
    },
    {
      method: 'GET',
      path: '/books/{id}',
      handler: DapatIdBuku,
    },
    {
      method: 'PUT',
      path: '/books/{id}',
      handler: editidbuku,
    },
    {
      method: 'DELETE',
      path: '/books/{id}',
      handler: HapusBukuId,
    },
  ];
  
  module.exports = routes;
  
module.exports.seeds = {
  category: [
    { name: 'Obst' },
    { name: 'Gemüse' },
    { name: 'Milchprodukte' },
    { name: 'Backwaren' },
    { name: 'Fleischwaren' }
  ],


    product: [
  { name: 'Äpfel', description: 'Frische grüne Äpfel', price: 3.50, priceType: 'weight', availability: true, category: 'Obst' },
  { name: 'Bananen', description: 'Süße gelbe Bananen', price: 2.50, priceType: 'weight', availability: true, category: 'Obst' },
  { name: 'Erdbeeren', description: 'Frische rote Erdbeeren', price: 4.00, priceType: 'weight', availability: true, category: 'Obst' },
  { name: 'Kirschen', description: 'Saftige rote Kirschen', price: 5.00, priceType: 'weight', availability: true, category: 'Obst' },
  { name: 'Pflaumen', description: 'Süße Pflaumen', price: 3.20, priceType: 'weight', availability: true, category: 'Obst' },

  { name: 'Karotten', description: 'Bio-Karotten', price: 1.80, priceType: 'weight', availability: true, category: 'Gemüse' },
  { name: 'Tomaten', description: 'Reife Tomaten', price: 2.50, priceType: 'unit', availability: true, category: 'Gemüse' },
  { name: 'Salat', description: 'Frischer grüner Salat', price: 1.50, priceType: 'unit', availability: true, category: 'Gemüse' },
  { name: 'Gurken', description: 'Knackige Gurken', price: 1.20, priceType: 'unit', availability: true, category: 'Gemüse' },
  { name: 'Paprika', description: 'Bunte Paprika', price: 2.00, priceType: 'weight', availability: true, category: 'Gemüse' },

  { name: 'Milch', description: 'Frische Vollmilch', price: 0.99, priceType: 'unit', availability: true, category: 'Milchprodukte' },
  { name: 'Joghurt', description: 'Cremiger Joghurt', price: 0.80, priceType: 'unit', availability: true, category: 'Milchprodukte' },

  { name: 'Brot', description: 'Frisch gebackenes Brot', price: 2.50, priceType: 'unit', availability: true, category: 'Backwaren' },
  { name: 'Brötchen', description: 'Knusprige Brötchen', price: 0.30, priceType: 'unit', availability: true, category: 'Backwaren' },

  { name: 'Hähnchen', description: 'Frisches Hähnchenfleisch', price: 7.00, priceType: 'weight', availability: true, category: 'Fleischwaren' }
]



};

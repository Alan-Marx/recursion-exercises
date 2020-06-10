const animals = [
  { id: 'animals',   parent: null },
  { id: 'mammals',   parent: 'animals' },
  { id: 'cats',      parent: 'mammals' },
  { id: 'dogs',      parent: 'mammals' }, 
  { id: 'chihuahua', parent: 'dogs' },
  { id: 'labrador',  parent: 'dogs' },
  { id: 'persian',   parent: 'cats' },
  { id: 'siamese',   parent: 'cats' }
]

const organizeAnimals = (categories, parent) => {
  const results = {};

  categories  
    .filter(category => category.parent === parent)
    .forEach(category => results[category.id] = organizeAnimals(categories, category.id));

 return results;
}

console.log(
  JSON.stringify(organizeAnimals(animals, null), null, 2)
);

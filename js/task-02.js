// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.


const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
  ];
  
  const newArr = ingredients.map(elem => {
  
    const elLi = document.createElement('li');
    elLi.textContent = elem;
    elLi.classList.add('item');
   
    return elLi;
  });
  
  const ulIngredients = document.querySelector('#ingredients');
  ulIngredients.append(...newArr);
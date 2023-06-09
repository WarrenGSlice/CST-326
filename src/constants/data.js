import images from './images';

const burgers = [
  {
    title: 'All American Burger',
    price: '$7',
    tags: 'Gourmet Beef burger',
  },
  {
    title: 'Cheeseburger',
    price: '$7.50',
    tags: 'Beef patty + cheese',
  },
  {
    title: 'Bacon Burger',
    price: '$10',
    tags: 'Burger with bacon + cheese',
  },
  {
    title: 'Western Burger',
    price: '$10.50',
    tags: 'Bacon, onion rings and cheese',
  },
  {
    title: 'Felix Burger',
    price: '$11.50',
    tags: 'Double cheese burger with jalapenos',
  },
];

const sides = [
  {
    title: 'Large Fries',
    price: '$5',
    tags: 'Salted and Freshly cut',
  },
  {
    title: "Nachos",
    price: '$11',
    tags: 'Homemade chips with 7 layers',
  },
  {
    title: 'Hot Dog',
    price: '$6',
    tags: 'Gourmet Dogs with all the fixings',
  },
  {
    title: 'BLT',
    price: '$10',
    tags: 'Bacon Lettace and Tomato',
  },
  {
    title: 'Street Taco',
    price: '$11.50',
    tags: '3 tacos, your choice of Beef | Chicken | Fish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { burgers, sides, awards };

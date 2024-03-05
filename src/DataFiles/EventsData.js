const importImages = (id, count, date) => {
  const formattedDate = date.split('-').join(':');
  const images = [];
  for (let i = 1; i <= count; i++) {
    images.push(require(`../Images/${formattedDate}/${i}.jpg`));
  }
  return images;
};

const eventsData = [
  {
    id: 1,
    date: '2024-02-15',
    title: 'General Club Meetup',
    description: 'First general meeting for the semester. And guess what? There will be PIZZA! We are a growing community where members can showcase their projects, connect, and collaborate. We hope to see you there!',
    images: importImages(1, 11, '02-15-2024'),
  },
  {
    id: 2,
    date: '2024-03-28',
    title: 'General Club Meeting',
    description: 'Second general meeting for the semester. And guess what? There will be PIZZA! We are a growing community where members can showcase their projects, connect, and collaborate. We hope to see you there!',
    images: [],
  },
  {
    id: 3,
    date: '2024-04-25',
    title: 'General Meetup',
    description: 'Third general meeting for the semester. And guess what? There will be PIZZA! We are a growing community where members can showcase their projects, connect, and collaborate. We hope to see you there!',
    images: [],
  },
  {
    id: 4,
    date: '2024-05-09',
    title: 'General Meetup',
    description: 'Fourth general meeting for the semester. And guess what? There will be PIZZA! We are a growing community where members can showcase their projects, connect, and collaborate. We hope to see you there!',
    images: [],
  },
];

export default eventsData;

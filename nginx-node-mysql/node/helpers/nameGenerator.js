const nameGenerator = () => {
  const names = [
    "Anakin Skywalker",
    "Obi-Wan Kenobi",
    "Luke Skywalker",
    "Leia Organa",
    "Darth Vader",
    "Mestre Yoda",
    "Han Solo",
    "Qui-Gon Jinn",
    "Mace Windu",
    "Conde Dookan",
    "Padmé Amidala",
    "Chewbacca",
    "R2-D2",
    "C3-PO",
  ];

  const name = Math.floor(Math.random() * names.length);

  return names[name];
};

module.exports = nameGenerator;

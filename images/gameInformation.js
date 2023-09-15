import * as images from '.';

const gameInformation = [
  {
    "title": "Anteater Adventures",
    "image": `${images.anteaterInNature}`,
    "description": `Lorem ipsum dolor sit amet, consectetur adipiscing
      elit. Sed ex nisl, ultricies eu tempor a, sollicitudin nec est. Sed
      quis feugiat nisi, vitae lacinia sem. Praesent commodo magna eu mattis
      ornare. Morbi a nunc mattis dolor efficitur feugiat non lacinia est.
      Aenean blandit, sapien in iaculis faucibus, est turpis commodo lectus,
      in ultrices leo turpis nec erat.`,
    "popularityRating": "week"
  },

  {
    "title":"Dragon Forest",
    "image": `${images.babyForestDragon}`,
    "description":`Sed bibendum nisl non neque lobortis, non vulputate nibh luctus.
                  Phasellus fringilla consequat turpis sit amet dictum. Donec feugiat
                  fermentum dignissim. Maecenas vitae semper felis. Nulla facilisi. Integer
                  sollicitudin sed lectus vitae tempus. Donec commodo leo in ipsum egestas lacinia.`,
    "featured": `true`
  },

  {
    "title": "Urban Legends...",
    "image":`${images.bigfoot}`,
    "description": `Integer sollicitudin sed lectus vitae tempus. Donec commodo leo in ipsum egestas
                   lacinia. Phasellus fringilla nulla non sem efficitur imperdiet. Cras semper
                   ipsum sed maximus tempor. Vivamus in risus laoreet, eleifend ipsum et, fermentum odio.`,
    "featured": `true`
  },

  {
    "title":"Backpack Organizer",
    "image":`${images.books}`,
    "description":`Sed bibendum nisl non neque lobortis, non vulputate nibh luctus.
                  Phasellus fringilla consequat turpis sit amet dictum. Donec feugiat
                  fermentum dignissim. Maecenas vitae semper felis. Nulla facilisi. Integer
                  sollicitudin sed lectus vitae tempus. Donec commodo leo in ipsum egestas lacinia.`,
      "popularityRating":"week"
  },

  {
    "title": "Schedule Maker",
    "image":`${images.calendar}`,
    "description": `Integer sollicitudin sed lectus vitae tempus. Donec commodo leo in ipsum egestas
                   lacinia. Phasellus fringilla nulla non sem efficitur imperdiet. Cras semper
                   ipsum sed maximus tempor. Vivamus in risus laoreet, eleifend ipsum et, fermentum odio.`,
    "popularityRating": "week",
    "featured": `true`
  },


  {
    "title":"Ocean Biology",
    "image":`${images.diverUnderwater}`,
    "description":`Sed bibendum nisl non neque lobortis, non vulputate nibh luctus.
                  Phasellus fringilla consequat turpis sit amet dictum. Donec feugiat
                  fermentum dignissim. Maecenas vitae semper felis. Nulla facilisi. Integer
                  sollicitudin sed lectus vitae tempus. Donec commodo leo in ipsum egestas lacinia.`
  },

  {
    "title":"Frog Biology",
    "image": `${images.guitarFrog}`,
    "description":`Vivamus eget leo quis magna cursus tempus vel ut dui. Donec tincidunt quam
                  at nulla scelerisque, ac pellentesque arcu luctus. In hac habitasse platea
                  dictumst. Suspendisse potenti. Proin id accumsan dolor. Aliquam posuere tortor
                  eu arcu facilisis ultricies. Pellentesque euismod viverra arcu, at faucibus magna molestie at.`,
                  "featured": `true`
  },

  {
    "title":"King of the Sand",
    "image": `${images.desertCastle}`,
    "description":`Sed bibendum nisl non neque lobortis, non vulputate nibh luctus.
                  Phasellus fringilla consequat turpis sit amet dictum. Donec feugiat
                  fermentum dignissim. Maecenas vitae semper felis. Nulla facilisi. Integer
                  sollicitudin sed lectus vitae tempus. Donec commodo leo in ipsum egestas lacinia.`
  },

  {
    "title": "Codex Penguinis",
    "image":`${images.handDrawnPenguins}`,
    "description": `preguntas sollicitudin sed lectus vitae tempus. Donec commodo leo in ipsum egestas
                   lacinia. Phasellus fringilla nulla non sem efficitur imperdiet. Cras semper
                   ipsum sed maximus tempor. Vivamus in risus laoreet, eleifend ipsum et, fermentum odio.`,
      "popularityRating":"week",
      "featured": `true`
  },

  {
    "title":"Thrill Ride",
    "image":`${images.sportsCar}`,
    "description":`Sed bibendum nisl non neque lobortis, non vulputate nibh luctus.
                  Phasellus fringilla consequat turpis sit amet dictum. Donec feugiat
                  fermentum dignissim. Maecenas vitae semper felis. Nulla facilisi. Integer
                  sollicitudin sed lectus vitae tempus. Donec commodo leo in ipsum egestas lacinia.`
  },

  {
    "title":"Virtual Horse",
    "image":`${images.horse}`,
    "description":`Vivamus eget leo quis magna cursus tempus vel ut dui. Donec tincidunt quam
                  at nulla scelerisque, ac pellentesque arcu luctus. In hac habitasse platea
                  dictumst. Suspendisse potenti. Proin id accumsan dolor. Aliquam posuere tortor
                  eu arcu facilisis ultricies. Pellentesque euismod viverra arcu, at faucibus magna molestie at.`,
    "popularityRating": "week"
  },

  {
    "title": "Derby",
    "image": `${images.horseRace}`,
    "description": `Integer sollicitudin sed lectus vitae tempus. Donec commodo leo in ipsum egestas
                   lacinia. Phasellus fringilla nulla non sem efficitur imperdiet. Cras semper
                   ipsum sed maximus tempor. Vivamus in risus laoreet, eleifend ipsum et, fermentum odio.`
  },

  {
    "title":"Catch of the Day",
    "image":`${images.colorfulBird}`,
    "description":`Vivamus eget leo quis magna cursus tempus vel ut dui. Donec tincidunt quam
                  at nulla scelerisque, ac pellentesque arcu luctus. In hac habitasse platea
                  dictumst. Suspendisse potenti. Proin id accumsan dolor. Aliquam posuere tortor
                  eu arcu facilisis ultricies. Pellentesque euismod viverra arcu, at faucibus magna molestie at.`,
    "popularityRating": "week"
  },

  {
    "title":"Tilted",
    "image": `${images.joustingKnights}`,
    "description":`Sed bibendum nisl non neque lobortis, non vulputate nibh luctus.
                  Phasellus fringilla consequat turpis sit amet dictum. Donec feugiat
                  fermentum dignissim. Maecenas vitae semper felis. Nulla facilisi. Integer
                  sollicitudin sed lectus vitae tempus. Donec commodo leo in ipsum egestas lacinia.`,
    "featured": `true`
  },

  {
    "title":"Pond Biology",
    "image":`${images.koiFish}`,
    "description":`Vivamus eget leo quis magna cursus tempus vel ut dui. Donec tincidunt quam
                  at nulla scelerisque, ac pellentesque arcu luctus. In hac habitasse platea
                  dictumst. Suspendisse potenti. Proin id accumsan dolor. Aliquam posuere tortor
                  eu arcu facilisis ultricies. Pellentesque euismod viverra arcu, at faucibus magna molestie at.`
  },

  {
    "title":"Mongoose Family",
    "image":`${images.mongooses}`,
    "description":`Sed bibendum nisl non neque lobortis, non vulputate nibh luctus.
                  Phasellus fringilla consequat turpis sit amet dictum. Donec feugiat
                  fermentum dignissim. Maecenas vitae semper felis. Nulla facilisi. Integer
                  sollicitudin sed lectus vitae tempus. Donec commodo leo in ipsum egestas lacinia.`
  },

  {
    "title": "Whose Mummy is This?",
    "image":`${images.mummy}`,
    "description": `Lorem ipsum dolor sit amet, consectetur adipiscing
      elit. Sed ex nisl, ultricies eu tempor a, sollicitudin nec est. Sed
      quis feugiat nisi, vitae lacinia sem. Morbi a nunc mattis dolor efficitur feugiat non lacinia est.
      Aenean blandit, sapien in iaculis faucibus, est turpis commodo lectus,
      in ultrices leo turpis nec erat.`,
    "popularityRating": "week"
  },

  {
    "title":"Far Far Away",
    "image": `${images.nebula}`,
    "description":`Sed bibendum nisl non neque lobortis, non vulputate nibh luctus.
                  Phasellus fringilla consequat turpis sit amet dictum. Donec feugiat
                  fermentum dignissim. Maecenas vitae semper felis. Nulla facilisi. Integer
                  sollicitudin sed lectus vitae tempus. Donec commodo leo in ipsum egestas lacinia.`,
    "featured": `true`
  },

  {
    "title": "Rocket Maker",
    "image": `${images.rocketship}`,
    "description": `Integer sollicitudin sed lectus vitae tempus. Donec commodo leo in ipsum egestas
                   lacinia. Phasellus fringilla nulla non sem efficitur imperdiet. Cras semper
                   ipsum sed maximus tempor. Vivamus in risus laoreet, eleifend ipsum et, fermentum odio.`,
    "featured": `true`
  },

  {
    "title": "Snake Catcher",
    "image": `${images.snake}`,
    "description": `Integer sollicitudin sed lectus vitae tempus. Donec commodo leo in ipsum egestas
                   lacinia. Phasellus fringilla nulla non sem efficitur imperdiet. Cras semper
                   ipsum sed maximus tempor. Vivamus in risus laoreet, eleifend ipsum et, fermentum odio.`,
    "featured": `true`
  },

  {
    "title":"Alpine Adventure",
    "image": `${images.snowyMountains}`,
    "description":`Sed bibendum nisl non neque lobortis, non vulputate nibh luctus.
                  Phasellus fringilla consequat turpis sit amet dictum. Donec feugiat
                  fermentum dignissim. Maecenas vitae semper felis. Nulla facilisi. Integer
                  sollicitudin sed lectus vitae tempus. Donec commodo leo in ipsum egestas lacinia.`,
    "featured": `true`
  },

  {
    "title": "Skyline Enforcers",
    "image":`${images.skylineEnforcers}`,
    "description": `Integer sollicitudin sed lectus vitae tempus. Donec commodo leo in ipsum egestas
                   lacinia. Phasellus fringilla nulla non sem efficitur imperdiet. Cras semper
                   ipsum sed maximus tempor. Vivamus in risus laoreet, eleifend ipsum et, fermentum odio.`,
      "popularityRating":"week",
      "featured": `true`
  },

  {
    "title":"Eruption Science",
    "image":`${images.volcano}`,
    "description":`Eruptus bibendum nisl non neque lobortis, non vulputate nibh luctus.
                  Phasellus fringilla consequat turpis sit amet dictum. Donec feugiat
                  fermentum dignissim. Maecenas vitae semper felis. Nulla facilisi. Integer
                  sollicitudin sed lectus vitae tempus. Donec commodo leo in ipsum egestas lacinia.`,
      "popularityRating":"week",
      "featured": `true`
  },

  {
    "title":"Writing Wraith",
    "image":`${images.wraith}`,
    "description":`Sed bibendum nisl non neque lobortis, non vulputate nibh luctus.
                  Phasellus fringilla consequat turpis sit amet dictum. Donec feugiat
                  fermentum dignissim. Maecenas vitae semper felis. Nulla facilisi. Integer
                  sollicitudin sed lectus vitae tempus. Donec commodo leo in ipsum egestas lacinia.`,
      "popularityRating":"week",
      "featured": `true`
  },

  {
    "title":"Apple",
    "image":`${images.appleOnDesk}`,
    "description":`Manzana bibendum nisl non neque lobortis, non vulputate nibh luctus.
                  Phasellus fringilla consequat turpis sit amet dictum. Donec feugiat
                  fermentum dignissim. Maecenas vitae semper felis. Nulla facilisi. Integer
                  sollicitudin sed lectus vitae tempus. Donec commodo leo in ipsum egestas lacinia.`,
      "popularityRating":"week"
  }
];

export default gameInformation;

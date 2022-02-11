// array describing the drivers, sorted by position and with a total describing the distance from the leading driver
const leaderboard = [
  {
    name: "NITT",
    place: "trichy",
    total: 0,

    img: "logos/trichy.png",
  },
  {
    name: "NITRKL",
    place: "Rourkela",
    total: 0,
  },
  {
    name: "NITK",
    place: "Surathkal",
    total: 0,
  },
  {
    name: "NITW",
    place: "Warangal",
    total: 0,
  },
  {
    name: "NITDGP",
    place: "Durgapur",
    total: 0,
  },
  {
    name: "VNIT",
    place: "Nagpur",
    total: 0,
  },
  {
    name: "MNIT",
    place: "Jaipur",
    total: 0,
  },
  {
    name: "MNNIT",
    place: "Allahabad",
    total: 0,
  },
  {
    name: "NITKKR",
    place: "Kurukshetra",
    total: 0,
  },
  {
    name: "SVNIT",
    place: "Surat",
    total: 0,
  },
  {
    name: "NITS",
    place: "Silchar",
    total: 0,
  },
  {
    name: "NITJ",
    place: "Jalandhar",
    total: 0,
  },
  {
    name: "NITM",
    place: "Meghalaya",
    total: 0,
  },
  {
    name: "MANIT",
    place: "Bhopal",
    total: 0,
  },
  {
    name: "NITRR",
    place: "Raipur",
    total: 0,
  },
  {
    name: "NITSRI",
    place: "Srinagar",
    total: 0,
  },
  {
    name: "NITP",
    place: "Patna",
    total: 0,
  },
  {
    name: "NITG",
    place: "Goa",
    total: 0,
  },
  {
    name: "NITJSR",
    place: "Jamshedpur",
    total: 0,
  },
  {
    name: "NITA",
    place: "Hamirpur",
    total: 0,
  },
  {
    name: "NITMN",
    place: "Manipur",
    total: 0,
  },
  {
    name: "NITPY",
    place: "Puducherry",
    total: 0,
  },
  {
    name: "NITAP",
    place: "Arunchal Pradesh",
    total: 0,
  },
  {
    name: "NITUK",
    place: "Uttarakhand",
    total: 0,
  },
  {
    name: "NITD",
    place: "Delhi",
    total: 0,
  },
  {
    name: "NITMZ",
    place: "Mizoram",
    total: 0,
  },
  {
    name: "NITN",
    place: "Nagaland",
    total: 0,
  },
  {
    name: "NITSKM",
    place: "Sikkim",
    total: 0,
  },
  {
    name: "NITANP",
    place: "Andhra Pradesh",
    total: 0,
  },
];
function add_img(img_src) {
  //const image = place.split(' ').map((word, index) => index > 0 ? `${word[0].toUpperCase()}${word.slice(1)}` : `${word}` ).join('');
  var img = document.createElement("img");
  img.src = images[img_src];
  document.getElementById("body").appendChild(img);
}

function compare(a, b) {
  if (a.total < b.total) {
    return 1;
  }

  if (a.total > b.total) {
    return -1;
  }

  if (a.name < b.name) {
    return 1;
  }
  return -1;
}
// target the table element in which to add one div for each driver
const main = d3.select("table");

// for each driver add one table row
// ! add a class to the row to differentiate the rows from the existing one
// otherwise the select method would target the existing one and include one row less than the required amount
const institutes = main
  .selectAll("tr.institute")
  .data(leaderboard.sort(compare))
  .enter()
  .append("tr")
  .attr("class", "institute");

// in each row add the information specified by the dataset in td elements
// specify a class to style the elements differently with CSS

// position using the index of the data points
institutes
  .append("td")
  .text((d, i) => i + 1)
  .attr("class", "position");

institutes
  .append("td")
  // include the last name in a separate element to style it differently
  // include the place also in another element for the same reason
  .html(
    ({ name, place }) =>
      `${name
        .split(" ")
        .map((part, index) =>
          index > 0 ? `<strong>${part}</strong>` : `${part}`
        )
        .join(" ")} <span>${place}</span>`
  )
  .attr("class", "institute");

// total from the first driver
institutes
  .append("td")
  .attr("class", "total")
  .append("span")
  .text(({ total }) => total);

// institutes
//   .append("td")
//   .attr("class", "comp1")
//   .append("span")
//   .text(({ comp1 }) => comp1);

// institutes
//   .append("td")
//   .attr("class", "comp1")
//   .append("span")
//   .text(({ comp2 }) => comp2);

// institutes
//   .append("td")
//   .attr("class", "comp1")
//   .append("span")
//   .text(({ comp3 }) => comp3);
// document.querySelector(".menu-toggle").addEventListener("click", function () {
//   document.querySelector(".site-nav").toggleClass("site-nav--open", 500);
//   document.querySelector(".menu-toggle").toggleClass("open");
// });
// $(".menu-toggle").click(function () {
//   $(".site-nav").toggleClass("site-nav--open", 500);
//   $(this).toggleClass("open");
// });

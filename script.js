// 1. Create student data
const students = [
  {
    name: "Rahul",
    marks: 85,
    class: "Second",
    address: "Gurgaon",
  },
  {
    name: "Priya",
    marks: 92,
    class: "Third",
    address: "Delhi",
  },
  {
    name: "Amit",
    marks: 76,
    class: "Fourth",
    address: "Noida",
  },
  {
    name: "Sneha",
    marks: 88,
    class: "Fifth",
    address: "Lucknow",
  },
  {
    name: "Vikash",
    marks: 67,
    class: "Second",
    address: "Kanpur",
  },
  {
    name: "Sneha",
    marks: 88,
    class: "Fifth",
    address: "Lucknow",
  },
  {
    name: "Vikash",
    marks: 67,
    class: "Second",
    address: "Kanpur",
  },
  {
    name: "Sneha",
    marks: 88,
    class: "Fifth",
    address: "Lucknow",
  },
  {
    name: "Vikash",
    marks: 67,
    class: "Second",
    address: "Kanpur",
  },
  {
    name: "Sneha",
    marks: 88,
    class: "Fifth",
    address: "Lucknow",
  },
  {
    name: "Vikash",
    marks: 67,
    class: "Second",
    address: "Kanpur",
  },
  {
    name: "Sneha",
    marks: 88,
    class: "Fifth",
    address: "Lucknow",
  },
  {
    name: "Vikash",
    marks: 67,
    class: "Second",
    address: "Kanpur",
  },
  {
    name: "Sneha",
    marks: 88,
    class: "Fifth",
    address: "Lucknow",
  },
  {
    name: "Vikash",
    marks: 67,
    class: "Second",
    address: "Kanpur",
  },
];

const searchBtn  = document.querySelector("#btn-search");
const search  = document.querySelector("#search");
const container = document.querySelector("#student-container");

function displaySearch(data) {
  const cards = data.map((data) => {
    return `<div class="student-card">
                        <h2>${data.name}</h2>
                        <p><strong>Marks:</strong> ${data.marks}</p>
                        <p><strong>Class:</strong> ${data.class}</p>
                        <p><strong>Address:</strong> ${data.address}</p>
                    </div>`;
  });
  container.innerHTML = cards.join("");
}

searchBtn .addEventListener("click", function () {
  const value = search.value.toLowerCase().trim();
  const filterSearch = students.filter((data) =>
    data.name.toLowerCase().includes(value)
  );
  displaySearch(filterSearch);
});
displaySearch(students);

/* Simple return without checking any request parameters


export default function handler(req, res) {
  const compliments = [
    "You're doing great!",
    "Keep going, you're learning fast.",
    "Your persistence is inspiring.",
    "You make progress every day.",
    "This project will make you smile."
  ];

  const random = compliments[Math.floor(Math.random() * compliments.length)];
  res.status(200).json({ compliment: random });
}
  */

export default function handler(req, res) {
const facts = {
  animals: [
    "A blue whale’s tongue can weigh as much as an elephant 🐋🐘.",
    "Lobsters taste with their legs and chew with their stomachs — fine dining, Nova Scotia style! 🦞",
    "Seagulls in Halifax have learned to unzip backpacks to steal fries 🍟.",
    "Dolphins sleep with one eye open — the ultimate night shift security guards 👁️.",
    "Sharks have been around longer than trees — they’re the real old-timers 🌲🦈."
  ],
  geography: [
    "Halifax has one of the world’s deepest natural harbours — deep enough to hide multiple CN Towers 🌊.",
    "The Bay of Fundy in Nova Scotia has the highest tides on Earth — enough water moves daily to fill the Grand Canyon twice 🌊🏞️.",
    "Peggy’s Cove lighthouse is so famous, it’s basically Halifax’s Instagram filter 📸.",
    "Nova Scotia is almost completely surrounded by water — it’s basically Canada’s giant surfboard 🏄.",
    "The Atlantic Ocean off Nova Scotia sometimes glows at night thanks to bioluminescent plankton ✨."
  ],
  climate: [
    "Oceans absorb about 90% of the heat from climate change — talk about carrying the team 🔥🌊.",
    "Phytoplankton in the Atlantic produce half the oxygen you breathe — thank them for every second breath 🫁.",
    "Fog is Halifax’s unofficial weather — locals joke that it has more seasons of fog than Game of Thrones 🌫️.",
    "The Bay of Fundy tides generate so much energy that scientists are testing turbines there ⚡🌊.",
    "Nova Scotia weather can flip from sun to storm in 10 minutes — the ocean likes to keep everyone guessing ☀️🌧️."
  ]
};

  // get category from query string, e.g. /api/fact?category=animals
  const { category } = req.query;

  if (!category || !facts[category]) {
    return res.status(400).json({ error: "Invalid or missing category" });
  }

  const list = facts[category];
  const random = list[Math.floor(Math.random() * list.length)];

  res.status(200).json({ fact: random });
}


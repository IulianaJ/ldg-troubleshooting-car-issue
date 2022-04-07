const tree = [
  {
    text: "Is the car silent when you turn the key?",
    yes: "corroded",
    no: "clicking",
  },
  {
    text: "Are the battery terminals corroded?",
    yes: "clean",
    no: "cables",
    id: "corroded",
  },
  {
    text: "Does the car make a clicking noise?",
    yes: "battery",
    no: "crank",
    id: "clicking",
  },
  {
    text: "Does the car crank up but fail to start?",
    yes: "spark",
    no: "engine",
    id: "crank",
  },
  {
    text: "Does the engine start and then die?",
    yes: "injection",
    no: "answer",
    id: "engine",
  },
  {
    text: "No more questions here.",
    id: "answer",
  },
  {
    text: "Does your car have fuel injection?",
    yes: "choke",
    no: "service",
    id: "injection",
  },
  { text: "Clean terminals and try starting again.", id: "clean" },
  { text: "Replace cables and try again.", id: "cables" },
  { text: "Replace the battery.", id: "battery" },
  { text: "Check spark plug connections.", id: "spark" },
  { text: "Get it in for service.", id: "service" },
  { text: "Check to ensure the choke is opening and closing.", id: "choke" },
];

export default tree;

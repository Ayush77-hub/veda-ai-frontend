export interface Topic {
  id: string;
  name: string;
}

export interface Category {
  id: string;
  name: string;
  topics: Topic[];
}

export const categories: Category[] = [
  {
    id: "vedas",
    name: "Vedas",
    topics: [
      { id: "rigveda", name: "Rigveda" },
      { id: "yajurveda", name: "Yajurveda" },
      { id: "samaveda", name: "Samaveda" },
      { id: "atharvaveda", name: "Atharvaveda" }
    ]
  },
  {
    id: "puranas",
    name: "Puranas",
    topics: [
      { id: "bhagwat", name: "Bhagwat Puran" },
      { id: "bhavishya", name: "Bhavishya Puran" },
      { id: "brahma", name: "Brahma Puran" },
      { id: "brahmand", name: "Brahmand Puran" },
      { id: "garuda", name: "Garuda Puran" },
      { id: "kurma", name: "Kurma Puran" },
      { id: "ling", name: "Ling Puran" },
      { id: "markandya", name: "Markandya Puran" },
      { id: "matsya", name: "Matsya Puran" },
      { id: "narad", name: "Narad Puran" },
      { id: "padma", name: "Padma Puran" },
      { id: "shiv", name: "Shiv Puran" },
      { id: "skand", name: "Skand Puran" },
      { id: "brahmvaivatra", name: "BrahmVaivatra Puran" },
      { id: "vaman", name: "Vaman Puran" },
      { id: "varah", name: "Varah Puran" },
      { id: "vishnu", name: "Vishnu Puran" }
    ]
  },
  {
    id: "epics",
    name: "Epics",
    topics: [
      { id: "mahabharata", name: "Mahabharata" },
      { id: "ramayana", name: "Ramayana" },
      { id: "ramcharitmanas", name: "Ramcharitmanas" },
      { id: "gita", name: "Gita" }
    ]
  },
  {
    id: "characters",
    name: "Characters",
    topics: [
      { id: "krishna", name: "Krishna" },
      { id: "rama", name: "Rama" },
      { id: "hanuman", name: "Hanuman" },
      { id: "shiva", name: "Shiva" },
      { id: "brahma", name: "Brahma" },
      { id: "vishnu", name: "Vishnu" },
      { id: "navdurga", name: "Navdurga" },
      { id: "vishwakarma", name: "Vishwakarma" },
      { id: "narasimha", name: "Narasimha" },
      { id: "ravana", name: "Ravana" }
    ]
  },
  {
    id: "sages",
    name: "Sages",
    topics: [
      { id: "rishi", name: "Rishi" }
    ]
  },
  {
    id: "knowledge",
    name: "Knowledge",
    topics: [
      { id: "ayurveda", name: "Ayurveda" },
      { id: "jyotish", name: "Jyotish" }
    ]
  },
  {
    id: "cosmos",
    name: "Cosmos",
    topics: [
      { id: "universe", name: "Universe" }
    ]
  },
  {
    id: "misc",
    name: "Misc",
    topics: [
      { id: "manusmriti", name: "Manusmriti" },
      { id: "ravansahita", name: "Ravansahita" }
    ]
  }
];

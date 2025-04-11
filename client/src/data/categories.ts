
export interface Topic {
  id: string;
  name: string;
}

export interface Category {
  id: string;
  name: string;
  topics?: Topic[];
  subcategories?: Category[];
}

export const categories: Category[] = [
  {
    id: "vedas",
    name: "Vedas",
    subcategories: [
      {
        id: "rigveda",
        name: "Rigveda",
        topics: [
          { id: "rigveda-general", name: "Rigveda" }
        ]
      },
      {
        id: "yajurveda",
        name: "Yajurveda",
        topics: [
          { id: "yajurveda-general", name: "Yajurveda" }
        ]
      },
      {
        id: "samaveda",
        name: "Samaveda",
        topics: [
          { id: "samaveda-general", name: "Samaveda" }
        ]
      },
      {
        id: "atharvaveda",
        name: "Atharvaveda",
        topics: [
          { id: "atharvaveda-general", name: "Atharvaveda" }
        ]
      }
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
    id: "knowledge",
    name: "Knowledge",
    topics: [
      { id: "ayurveda", name: "Ayurveda" },
      { id: "jyotish", name: "Jyotish" }
    ]
  },
  {
    id: "characters",
    name: "Characters",
    subcategories: [
      {
        id: "devas",
        name: "Devas",
        topics: [
          { id: "vishnu", name: "Lord Vishnu" },
          { id: "shiva", name: "Lord Shiva" },
          { id: "brahma", name: "Lord Brahma" },
          { id: "indra", name: "Lord Indra" },
          { id: "surya", name: "Lord Surya" }
        ]
      },
      {
        id: "avatars",
        name: "Avatars",
        topics: [
          { id: "rama", name: "Lord Rama" },
          { id: "krishna", name: "Lord Krishna" },
          { id: "narasimha", name: "Lord Narasimha" },
          { id: "vamana", name: "Lord Vamana" },
          { id: "parashurama", name: "Lord Parashurama" }
        ]
      },
      {
        id: "sages",
        name: "Sages",
        topics: [
          { id: "vashishtha", name: "Sage Vashishtha" },
          { id: "vishwamitra", name: "Sage Vishwamitra" },
          { id: "narada", name: "Sage Narada" },
          { id: "vyasa", name: "Sage Vyasa" },
          { id: "valmiki", name: "Sage Valmiki" }
        ]
      }
    ]
  }
];

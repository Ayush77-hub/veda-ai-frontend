
export interface Topic {
  id: string;
  name: string;
  subtopics?: Topic[];
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
      {
        id: "rigveda",
        name: "Rigveda",
        subtopics: [
          { id: "mandala1", name: "Mandala 1" },
          { id: "mandala2", name: "Mandala 2" },
          { id: "gayatri", name: "Gayatri Mantra" }
        ]
      },
      {
        id: "yajurveda",
        name: "Yajurveda",
        subtopics: [
          { id: "shukla", name: "Shukla Yajurveda" },
          { id: "krishna", name: "Krishna Yajurveda" }
        ]
      },
      {
        id: "samaveda",
        name: "Samaveda",
        subtopics: [
          { id: "purvarchika", name: "Purvarchika" },
          { id: "uttararchika", name: "Uttararchika" }
        ]
      },
      {
        id: "atharvaveda",
        name: "Atharvaveda",
        subtopics: [
          { id: "kanda1", name: "Kanda 1" },
          { id: "kanda2", name: "Kanda 2" }
        ]
      }
    ]
  },
  {
    id: "puranas",
    name: "Puranas",
    topics: [
      {
        id: "mahapuranas",
        name: "Maha Puranas",
        subtopics: [
          { id: "bhagwat", name: "Bhagwat Puran" },
          { id: "vishnu", name: "Vishnu Puran" },
          { id: "shiv", name: "Shiv Puran" },
          { id: "brahmand", name: "Brahmand Puran" }
        ]
      },
      {
        id: "upapuranas",
        name: "Upa Puranas",
        subtopics: [
          { id: "narasimha", name: "Narasimha Puran" },
          { id: "vayu", name: "Vayu Puran" }
        ]
      }
    ]
  },
  {
    id: "epics",
    name: "Epics",
    topics: [
      {
        id: "mahabharata",
        name: "Mahabharata",
        subtopics: [
          { id: "adiparva", name: "Adi Parva" },
          { id: "sabhaparva", name: "Sabha Parva" },
          { id: "gita", name: "Bhagavad Gita" }
        ]
      },
      {
        id: "ramayana",
        name: "Ramayana",
        subtopics: [
          { id: "balakanda", name: "Bala Kanda" },
          { id: "ayodhyakanda", name: "Ayodhya Kanda" },
          { id: "sundarakanda", name: "Sundara Kanda" }
        ]
      }
    ]
  },
  {
    id: "characters",
    name: "Characters",
    topics: [
      {
        id: "devas",
        name: "Devas",
        subtopics: [
          { id: "vishnu", name: "Vishnu" },
          { id: "shiva", name: "Shiva" },
          { id: "brahma", name: "Brahma" }
        ]
      },
      {
        id: "avatars",
        name: "Avatars",
        subtopics: [
          { id: "rama", name: "Rama" },
          { id: "krishna", name: "Krishna" },
          { id: "narasimha", name: "Narasimha" }
        ]
      }
    ]
  }
];

/* =====================================================
   PRIMATE PROFILE DATA
   Great apes and monkeys are kept in separate arrays,
   then combined into one array for rendering and search.
===================================================== */

const greatApes = [

{
    name: "Chimpanzee",

    scientificName: "Pan troglodytes",

    category: "great-ape",

    subCategory: "chimpanzee",

    price: 0,

    displayPrice:
    "Institutional conservation enquiry",

    image:
    "assets/images/primates/great-apes/chimpanzee.jpg",

    age:
    "Institutional Profile",

    location:
    "Western and Central Africa",

    description:
    "A highly intelligent and social great ape known for complex communication, tool use, strong family relationships, and advanced problem-solving ability.",

    fullDescription:
    "The Chimpanzee (Pan troglodytes) is a highly social great ape native to forests and woodland habitats across western and central Africa. Chimpanzees live in flexible communities, communicate through vocalisations, facial expressions and gestures, and are capable of sophisticated tool use. Under managed care they require complex social housing, extensive climbing space, protected-contact systems, specialist veterinary support, behavioural enrichment and conservation-focused institutional management.",

    colors: [
        "Black",
        "Dark Brown",
        "Brown-Black",
        "Pale Facial Skin in Younger Individuals"
    ],

    availableAges: [
        "Institutional Profile"
    ],

    gender: [
        "Male",
        "Female"
    ],

    weight:
    "Approximately 32 - 60 kg as adults, with males generally larger than females",

    height:
    "Approximately 100 - 170 cm when standing upright",

    lifespan:
    "Commonly 40 - 50 Years, with some individuals living longer under specialist care",

    temperament:
    "Highly Intelligent, Social, Expressive, Curious, Powerful, Cooperative",

    agility:
    "Extremely High. Chimpanzees are strong climbers, capable brachiators, fast ground movers and skilled manipulators of objects and tools.",

    activityLevel:
    "Very High",

    trainability:
    "Specialist Protected-Contact Management Required",

    goodWithChildren:
    "Not Suitable",

    goodWithPets:
    "Not Suitable",

    shedding:
    "Low to Moderate",

    climate:
    "Requires warm, humid, forest-like conditions with climate-controlled indoor accommodation, shade, climbing structures and private retreat areas.",

    dietType:
    "Omnivore with a fruit-rich natural diet",

    health: [
        "Specialist primate veterinary documentation required",
        "Individual identification records required",
        "Preventive health programme required",
        "Behavioural and nutritional monitoring required",
        "Institutional health review required"
    ],

    documents: [
        "Institutional eligibility documentation",
        "Veterinary health documentation",
        "Individual identification records",
        "Captive-management and conservation records",
        "National and international wildlife permits where applicable",
        "CITES documentation where applicable",
        "Transport and destination approvals"
    ],

    feed:
    "A professionally formulated primate diet supported by vegetables, leafy greens, approved fruits, browse and species-appropriate enrichment foods. Feeding plans must be supervised by qualified primate nutrition and veterinary teams.",

    feedingSchedule: [
        "Morning Scatter Feeding",
        "Midday Browse and Enrichment",
        "Afternoon Vegetable Feeding",
        "Evening Managed Feeding"
    ],

    habitat:
    "A conservation-standard social habitat with extensive climbing frames, ropes, platforms, natural substrate, indoor and outdoor spaces, visual barriers, retreat rooms and protected-contact keeper systems.",

    parents: {
        father:
        "Institutionally managed male Chimpanzee with documented ancestry, health history and conservation records.",

        mother:
        "Institutionally managed female Chimpanzee with documented maternal, veterinary and behavioural records."
    },

    care: [
        "Maintain compatible social groups under professional supervision.",
        "Provide complex climbing, foraging and tool-use enrichment.",
        "Use protected-contact management only.",
        "Arrange continuous specialist primate veterinary care.",
        "Maintain detailed behavioural, nutritional and medical records.",
        "Prevent unsupervised public contact.",
        "Comply with all applicable conservation and wildlife requirements."
    ],

    shipping:
    "Movement is considered only between legally eligible institutions and requires veterinary clearance, welfare planning, specialist containment, carrier approval, destination approval and complete regulatory documentation.",

    warranty:
    "Institutional health and documentation terms depend on the relevant conservation or transfer agreement.",

    restricted:
    true,

    checkoutEnabled:
    false,

    availability:
    "Institutional conservation review only"
},

{
    name: "Orangutan",

    scientificName: "Pongo spp.",

    category: "great-ape",

    subCategory: "orangutan",

    price: 0,

    displayPrice:
    "Institutional conservation enquiry",

    image:
    "assets/images/primates/great-apes/orangutan.jpg",

    age:
    "Institutional Profile",

    location:
    "Borneo and Sumatra",

    description:
    "A large, highly intelligent and mostly arboreal great ape recognised for long powerful arms, reddish hair, deliberate movement and advanced problem-solving skills.",

    fullDescription:
    "Orangutans belong to the genus Pongo and are native to the tropical forests of Borneo and Sumatra. They are the most arboreal of the great apes and use long arms, flexible joints and careful weight distribution to travel through the forest canopy. Orangutans are intelligent, generally more solitary than chimpanzees and gorillas, and require exceptionally complex climbing environments, private retreat areas, specialist nutrition, protected-contact handling and conservation-focused institutional care.",

    colors: [
        "Reddish Orange",
        "Copper Red",
        "Dark Auburn",
        "Brown-Red"
    ],

    availableAges: [
        "Institutional Profile"
    ],

    gender: [
        "Male",
        "Female"
    ],

    weight:
    "Approximately 30 - 90 kg as adults, depending on species and sex",

    height:
    "Approximately 110 - 150 cm when standing upright",

    lifespan:
    "Often 30 - 50 Years, with some individuals living longer under specialist care",

    temperament:
    "Intelligent, Deliberate, Curious, Solitary, Observant, Powerful",

    agility:
    "Exceptional Arboreal Ability. Orangutans climb, suspend, sway and move carefully through complex elevated structures using both hands and feet.",

    activityLevel:
    "Moderate to High",

    trainability:
    "Specialist Protected-Contact Management Required",

    goodWithChildren:
    "Not Suitable",

    goodWithPets:
    "Not Suitable",

    shedding:
    "Low to Moderate",

    climate:
    "Requires warm and humid tropical conditions, temperature-controlled indoor areas, elevated pathways, shade and quiet private spaces.",

    dietType:
    "Fruit-rich omnivore",

    health: [
        "Specialist primate veterinary documentation required",
        "Individual identification records required",
        "Preventive health programme required",
        "Nutritional and body-condition monitoring required",
        "Institutional health review required"
    ],

    documents: [
        "Institutional eligibility documentation",
        "Veterinary health documentation",
        "Individual identification records",
        "Conservation programme documentation",
        "National and international wildlife permits where applicable",
        "CITES documentation where applicable",
        "Transport and destination approvals"
    ],

    feed:
    "A professionally managed primate diet including vegetables, leafy greens, controlled fruit portions, browse, approved primate feeds and enrichment items. Dietary composition must be supervised by qualified nutrition and veterinary teams.",

    feedingSchedule: [
        "Morning Elevated Forage",
        "Midday Browse Feeding",
        "Afternoon Vegetable Feeding",
        "Evening Managed Feeding"
    ],

    habitat:
    "A tall conservation-standard enclosure with interconnected climbing structures, flexible ropes, platforms, hammocks, sheltered indoor rooms, quiet retreat spaces and protected-contact access.",

    parents: {
        father:
        "Institutionally managed male Orangutan with documented genetic, conservation and veterinary records.",

        mother:
        "Institutionally managed female Orangutan with documented maternal, behavioural and health history."
    },

    care: [
        "Provide extensive elevated travel routes and strong climbing structures.",
        "Offer daily cognitive, feeding and nest-building enrichment.",
        "Maintain quiet retreat areas and individual choice of space.",
        "Use protected-contact management only.",
        "Arrange specialist primate veterinary and nutritional oversight.",
        "Maintain detailed conservation and health records.",
        "Comply with all relevant wildlife and institutional agreements."
    ],

    shipping:
    "Movement requires institutional eligibility, conservation approval, veterinary clearance, specialist containment, welfare planning, destination approval and complete legal documentation.",

    warranty:
    "Institutional health and documentation terms depend on the applicable conservation or transfer agreement.",

    restricted:
    true,

    checkoutEnabled:
    false,

    availability:
    "Institutional conservation review only"
},

{
    name: "Western Lowland Gorilla",

    scientificName:
    "Gorilla gorilla gorilla",

    category:
    "great-ape",

    subCategory:
    "gorilla",

    price:
    0,

    displayPrice:
    "Institutional conservation enquiry",

    image:
    "assets/images/primates/great-apes/western-lowland-gorilla.jpg",

    age:
    "Institutional Profile",

    location:
    "Congo Basin, Western and Central Africa",

    description:
    "The smallest gorilla subspecies, yet an exceptionally powerful and social great ape requiring complex group management, specialist habitats and conservation-focused care.",

    fullDescription:
    "The Western Lowland Gorilla (Gorilla gorilla gorilla) is native to tropical forests across parts of western and central Africa. It is the smallest gorilla subspecies, although adult males remain exceptionally large and powerful. Gorillas live in structured social groups and spend much of their day feeding, resting and interacting. Managed groups require expansive indoor and outdoor habitats, compatible social arrangements, high-fibre nutrition, protected-contact systems, specialist veterinary support and formal conservation management.",

    colors: [
        "Black",
        "Dark Gray",
        "Brown-Black",
        "Silver-Gray Saddle in Mature Males"
    ],

    availableAges: [
        "Institutional Profile"
    ],

    gender: [
        "Male",
        "Female"
    ],

    weight:
    "Adult males average about 136 kg and may exceed 220 kg; females are commonly about 68 - 113 kg",

    height:
    "Up to approximately 180 cm for adult males when standing upright",

    lifespan:
    "Around 30 - 40 Years in the wild and potentially into the 50s under specialist care",

    temperament:
    "Social, Intelligent, Powerful, Observant, Protective, Generally Calm When Undisturbed",

    agility:
    "High. Gorillas are strong climbers when young, capable knuckle-walkers and powerful movers requiring robust structures and barriers.",

    activityLevel:
    "Moderate",

    trainability:
    "Specialist Protected-Contact Management Required",

    goodWithChildren:
    "Not Suitable",

    goodWithPets:
    "Not Suitable",

    shedding:
    "Low to Moderate",

    climate:
    "Requires warm, humid conditions with sheltered indoor housing, shaded outdoor habitats, deep substrate and quiet retreat spaces.",

    dietType:
    "Primarily herbivorous",

    health: [
        "Specialist primate veterinary documentation required",
        "Individual identification records required",
        "Preventive health programme required",
        "Cardiovascular, nutritional and behavioural monitoring required",
        "Institutional health review required"
    ],

    documents: [
        "Institutional eligibility documentation",
        "Veterinary health documentation",
        "Individual identification records",
        "Conservation and population-management records",
        "National and international wildlife permits where applicable",
        "CITES documentation where applicable",
        "Transport and destination approvals"
    ],

    feed:
    "A high-fibre professionally managed diet based on leafy greens, vegetables, browse, approved primate feeds and limited fruit, with food distributed to encourage natural foraging.",

    feedingSchedule: [
        "Morning Group Forage",
        "Midday Browse Feeding",
        "Afternoon Individual Health Feeding",
        "Evening Greens and Browse"
    ],

    habitat:
    "A conservation-standard social habitat with extremely strong barriers, deep substrate, climbing structures, elevated resting platforms, sheltered indoor rooms, outdoor yards, visual barriers and protected-contact systems.",

    parents: {
        father:
        "Institutionally managed male Western Lowland Gorilla with documented genetics, health and conservation records.",

        mother:
        "Institutionally managed female Western Lowland Gorilla with documented maternal, behavioural and veterinary history."
    },

    care: [
        "Maintain a compatible professionally managed social group.",
        "Use protected-contact systems and trained great-ape teams.",
        "Provide high-fibre forage throughout the day.",
        "Offer daily behavioural and cognitive enrichment.",
        "Arrange specialist cardiovascular and general veterinary monitoring.",
        "Maintain detailed population-management and health records.",
        "Comply with all conservation, welfare and wildlife requirements."
    ],

    shipping:
    "Movement is limited to legally eligible institutions and requires conservation coordination, veterinary clearance, specialist transport planning, destination approval and complete national and international documentation.",

    warranty:
    "Institutional health and documentation terms depend on the applicable conservation or transfer agreement.",

    restricted:
    true,

    checkoutEnabled:
    false,

    availability:
    "Institutional conservation review only"
}

];


const monkeys = [

{
    name:
    "White-Faced Capuchin Monkey",

    scientificName:
    "Cebus capucinus",

    category:
    "monkey",

    subCategory:
    "capuchin",

    price:
    0,

    displayPrice:
    "Estimate provided after compliance review",

    image:
    "assets/images/primates/monkeys/capuchin-monkey.jpg",

    age:
    "Subject to confirmation",

    location:
    "Central and Northwestern South America",

    description:
    "A highly intelligent New World monkey known for dexterous hands, advanced problem-solving, strong social behaviour and energetic forest movement.",

    fullDescription:
    "The White-Faced Capuchin Monkey (Cebus capucinus) is a social and highly intelligent New World primate. Capuchins use dexterous hands to manipulate food and objects, live in structured groups and require constant opportunities for climbing, foraging, problem-solving and social interaction. Managed care requires secure complex housing, compatible group arrangements, specialist nutrition, behavioural enrichment, trained primate staff and veterinary supervision.",

    colors: [
        "Black and Cream",
        "Dark Brown and Cream",
        "Black Body with Pale Face and Shoulders"
    ],

    availableAges: [
        "Juvenile",
        "Young Adult",
        "Adult"
    ],

    gender: [
        "Male",
        "Female"
    ],

    weight:
    "Approximately 1.5 - 4 kg as adults",

    height:
    "Approximately 33 - 45 cm body length, excluding the tail",

    lifespan:
    "Often 30 - 40 Years under specialist managed care",

    temperament:
    "Highly Intelligent, Social, Energetic, Curious, Manipulative, Alert",

    agility:
    "Extremely High. Capuchins are fast climbers and leapers with excellent balance, grip strength and object-manipulation ability.",

    activityLevel:
    "Very High",

    trainability:
    "Specialist Primate Handling Required",

    goodWithChildren:
    "Not Suitable",

    goodWithPets:
    "Not Suitable",

    shedding:
    "Low to Moderate",

    climate:
    "Requires warm, humid conditions with indoor climate control, secure climbing areas, shaded outdoor space and dry sleeping quarters.",

    dietType:
    "Omnivore",

    health: [
        "Veterinary record available",
        "Individual identification information required",
        "Parasite prevention information available",
        "Nutritional and behavioural monitoring required",
        "Health records available for compliance review"
    ],

    documents: [
        "Veterinary health documentation",
        "Individual identification records",
        "Captive-bred documentation where applicable",
        "Legal eligibility documentation",
        "Transport permits where required",
        "CITES or wildlife documentation where applicable"
    ],

    feed:
    "A professionally formulated primate diet supplemented with vegetables, leafy greens, controlled fruit portions, insects, approved protein sources and forage-based enrichment.",

    feedingSchedule: [
        "Morning Scatter Feeding",
        "Midday Foraging Enrichment",
        "Afternoon Vegetable Feeding",
        "Evening Managed Feeding"
    ],

    habitat:
    "A secure social enclosure with extensive branches, ropes, platforms, puzzle feeders, hidden forage, sleeping areas, visual barriers and protected keeper access.",

    parents: {
        father:
        "Captive-managed male White-Faced Capuchin with documented ancestry, veterinary history and behavioural records.",

        mother:
        "Captive-managed female White-Faced Capuchin with documented maternal, health and social records."
    },

    care: [
        "House only in an appropriate compatible social group.",
        "Provide daily climbing, manipulation and food-search enrichment.",
        "Use secure double-entry containment and trained primate staff.",
        "Arrange routine care with a primate veterinarian.",
        "Maintain a controlled nutritionally balanced diet.",
        "Prevent unsupervised contact with visitors.",
        "Comply with every applicable primate ownership and transport rule."
    ],

    shipping:
    "Transport review is available only where legally permitted and subject to veterinary clearance, destination approval, suitable containment, qualified carriers and complete documentation.",

    warranty:
    "Health information may be provided after veterinary review where legally applicable.",

    restricted:
    true,

    checkoutEnabled:
    true,

    availability:
    "Subject to legal eligibility and confirmation"
},

{
    name:
    "Geoffroy's Marmoset",

    scientificName:
    "Callithrix geoffroyi",

    category:
    "small-primate",

    subCategory:
    "marmoset",

    price:
    0,

    displayPrice:
    "Estimate provided after compliance review",

    image:
    "assets/images/primates/monkeys/marmoset.jpg",

    age:
    "Subject to confirmation",

    location:
    "Brazil",

    description:
    "A very small, social and agile tree-dwelling monkey recognised for white facial markings, dark ear tufts, claw-like nails and rapid canopy movement.",

    fullDescription:
    "Geoffroy's Marmoset (Callithrix geoffroyi) is a small New World monkey native to Brazilian lowland forests. Its claw-like nails help it cling to trunks and move quickly through branches. Marmosets live in family groups, communicate frequently and feed on fruits, flowers, nectar, gums and small animal prey. Managed care requires compatible social housing, fine-mesh secure containment, warm conditions, ultraviolet-light planning, specialist nutrition and daily foraging enrichment.",

    colors: [
        "Black-Brown",
        "White Face",
        "Black Ear Tufts",
        "Lightly Ringed Dark Tail"
    ],

    availableAges: [
        "Juvenile",
        "Young Adult",
        "Adult"
    ],

    gender: [
        "Male",
        "Female"
    ],

    weight:
    "Approximately 260 - 380 g as adults",

    height:
    "Approximately 20 cm body length with a tail near 29 cm",

    lifespan:
    "Usually around 10 Years and sometimes longer under specialist care",

    temperament:
    "Social, Alert, Fast-Moving, Curious, Vocal, Sensitive",

    agility:
    "Exceptional. Marmosets cling vertically to trunks, leap between branches and move rapidly through fine climbing structures.",

    activityLevel:
    "Very High",

    trainability:
    "Specialist Small-Primate Handling Required",

    goodWithChildren:
    "Not Suitable",

    goodWithPets:
    "Not Suitable",

    shedding:
    "Low",

    climate:
    "Requires consistently warm, humid conditions, suitable ultraviolet lighting, shaded outdoor access and protected heated sleeping areas.",

    dietType:
    "Omnivore with fruit, gum and insect components",

    health: [
        "Veterinary record available",
        "Individual identification information required",
        "Preventive health and parasite programme required",
        "Vitamin and mineral monitoring required",
        "Health records available for compliance review"
    ],

    documents: [
        "Veterinary health documentation",
        "Individual identification records",
        "Captive-bred documentation where applicable",
        "Legal eligibility documentation",
        "Transport permits where required",
        "CITES or wildlife documentation where applicable"
    ],

    feed:
    "A specialist marmoset diet with approved primate gel or feed, vegetables, limited fruit, gum sources, insects and vitamin-mineral support under veterinary and nutrition supervision.",

    feedingSchedule: [
        "Morning Marmoset Diet",
        "Midday Gum and Insect Enrichment",
        "Afternoon Vegetable Feeding",
        "Evening Light Feeding"
    ],

    habitat:
    "A warm fine-mesh social habitat with dense branches, vertical trunks, nest boxes, ropes, hiding spaces, ultraviolet-light provision and multiple feeding stations.",

    parents: {
        father:
        "Captive-managed male Geoffroy's Marmoset with documented ancestry, veterinary records and social history.",

        mother:
        "Captive-managed female Geoffroy's Marmoset with documented maternal, reproductive and health records."
    },

    care: [
        "Maintain a compatible family or social group.",
        "Provide vertical trunks, fine branches and secure nest boxes.",
        "Offer gum, insect and foraging enrichment every day.",
        "Monitor vitamin D, calcium and general nutritional balance.",
        "Arrange routine specialist primate veterinary examinations.",
        "Maintain warm temperatures and appropriate ultraviolet-light planning.",
        "Comply with all relevant wildlife and transport requirements."
    ],

    shipping:
    "Transport review is available only where legally permitted and requires veterinary clearance, climate control, suitable containment, destination approval and complete documentation.",

    warranty:
    "Health information may be provided after veterinary review where legally applicable.",

    restricted:
    true,

    checkoutEnabled:
    true,

    availability:
    "Subject to legal eligibility and confirmation"
},

{
    name:
    "Geoffroy's Spider Monkey",

    scientificName:
    "Ateles geoffroyi",

    category:
    "monkey",

    subCategory:
    "spider-monkey",

    price:
    0,

    displayPrice:
    "Estimate provided after compliance review",

    image:
    "assets/images/primates/monkeys/spider-monkey.jpg",

    age:
    "Subject to confirmation",

    location:
    "Central America",

    description:
    "A large, highly agile canopy monkey with exceptionally long limbs and a powerful prehensile tail that functions almost like a fifth limb.",

    fullDescription:
    "Geoffroy's Spider Monkey (Ateles geoffroyi) is an arboreal New World primate native to mature and montane forests of Central America. Spider monkeys have long limbs and a strong prehensile tail used for suspension, balance and grasping. They live in fluid social groups and travel across large forest areas while searching mainly for ripe fruit. Managed care requires very tall interconnected habitats, compatible social groups, long-distance climbing routes, protected-contact handling and intensive behavioural enrichment.",

    colors: [
        "Black",
        "Dark Brown",
        "Reddish Brown",
        "Pale Facial Mask",
        "Lighter Underparts"
    ],

    availableAges: [
        "Juvenile",
        "Young Adult",
        "Adult"
    ],

    gender: [
        "Male",
        "Female"
    ],

    weight:
    "Approximately 6 - 9 kg as adults",

    height:
    "Approximately 30 - 63 cm body length with a tail commonly 63 - 84 cm",

    lifespan:
    "Around 20 - 25 Years in the wild and potentially 30 - 40 Years under specialist care",

    temperament:
    "Social, Intelligent, Athletic, Alert, Vocal, Sensitive",

    agility:
    "Exceptional. Spider monkeys brachiate, hang by one limb or tail, leap between structures and travel rapidly through the upper canopy.",

    activityLevel:
    "Extremely High",

    trainability:
    "Specialist Protected-Contact Primate Management Required",

    goodWithChildren:
    "Not Suitable",

    goodWithPets:
    "Not Suitable",

    shedding:
    "Low to Moderate",

    climate:
    "Requires warm, humid conditions with very tall indoor and outdoor climbing areas, shade, sheltered sleeping spaces and protection from cold.",

    dietType:
    "Primarily frugivorous",

    health: [
        "Veterinary record available",
        "Individual identification information required",
        "Preventive health and parasite programme required",
        "Nutritional and behavioural monitoring required",
        "Health records available for compliance review"
    ],

    documents: [
        "Veterinary health documentation",
        "Individual identification records",
        "Captive-bred documentation where applicable",
        "Legal eligibility documentation",
        "Transport permits where required",
        "CITES or wildlife documentation where applicable"
    ],

    feed:
    "A professionally balanced primate diet with leafy vegetables, approved high-fibre feeds, controlled portions of suitable fruit, browse and foraging enrichment.",

    feedingSchedule: [
        "Morning Elevated Scatter Feed",
        "Midday Browse and Foraging",
        "Afternoon Vegetable Feeding",
        "Evening Managed Feeding"
    ],

    habitat:
    "A very tall social habitat with overhead ropes, flexible pathways, suspended platforms, canopy-level feeding stations, visual barriers, indoor sleeping rooms and protected-contact systems.",

    parents: {
        father:
        "Captive-managed male Geoffroy's Spider Monkey with documented ancestry, health records and social history.",

        mother:
        "Captive-managed female Geoffroy's Spider Monkey with documented maternal, behavioural and veterinary records."
    },

    care: [
        "Provide very tall interconnected climbing routes.",
        "Maintain a compatible professionally supervised social group.",
        "Use protected-contact handling and secure double-door containment.",
        "Offer canopy-level foraging and cognitive enrichment daily.",
        "Arrange routine specialist primate veterinary care.",
        "Closely manage fruit intake and nutritional balance.",
        "Comply with all applicable wildlife and transport regulations."
    ],

    shipping:
    "Transport review is available only where legally permitted and requires veterinary clearance, tall-species transport planning, secure containment, destination approval and complete documentation.",

    warranty:
    "Health information may be provided after veterinary review where legally applicable.",

    restricted:
    true,

    checkoutEnabled:
    true,

    availability:
    "Subject to legal eligibility and confirmation"
},

{
    name:
    "Golden Lion Tamarin",

    scientificName:
    "Leontopithecus rosalia",

    category:
    "small-primate",

    subCategory:
    "tamarin",

    price:
    0,

    displayPrice:
    "Conservation and compliance enquiry",

    image:
    "assets/images/primates/monkeys/tamarin.jpg",

    age:
    "Institutional or qualified-facility profile",

    location:
    "Atlantic Forest, Southeastern Brazil",

    description:
    "A small endangered primate with a brilliant reddish-gold coat, long mane, agile canopy movement and strong cooperative family behaviour.",

    fullDescription:
    "The Golden Lion Tamarin (Leontopithecus rosalia) is a small social primate native to Brazil's Atlantic coastal forest. Its distinctive reddish-gold mane frames a dark face, while narrow hands and claw-like nails help it search bark and vegetation for insects and other food. Golden lion tamarins live in family groups and are closely associated with coordinated conservation programmes. Managed care requires specialist social housing, nest boxes, warm conditions, high-quality nutrition, ultraviolet-light planning and intensive conservation recordkeeping.",

    colors: [
        "Golden Orange",
        "Reddish Gold",
        "Copper Gold"
    ],

    availableAges: [
        "Institutional Profile"
    ],

    gender: [
        "Male",
        "Female"
    ],

    weight:
    "Approximately 482 - 680 g as adults",

    height:
    "Approximately 15 - 25 cm body length with a tail around 32 - 40 cm",

    lifespan:
    "Often about 8 Years in the wild and up to 20 Years or more under specialist care",

    temperament:
    "Social, Territorial, Agile, Vocal, Curious, Family-Oriented",

    agility:
    "Very High. Golden Lion Tamarins leap between branches, move quickly through vines and probe small spaces with long slender fingers.",

    activityLevel:
    "Very High",

    trainability:
    "Specialist Conservation-Primate Handling Required",

    goodWithChildren:
    "Not Suitable",

    goodWithPets:
    "Not Suitable",

    shedding:
    "Low",

    climate:
    "Requires warm and humid conditions with shaded climbing areas, nest boxes, controlled indoor temperatures and appropriate ultraviolet-light planning.",

    dietType:
    "Omnivore",

    health: [
        "Specialist veterinary documentation required",
        "Individual identification information required",
        "Preventive health and parasite programme required",
        "Vitamin D and nutritional monitoring required",
        "Conservation programme health review required"
    ],

    documents: [
        "Institutional or qualified-facility documentation",
        "Veterinary health documentation",
        "Individual identification records",
        "Conservation programme documentation",
        "Transport permits where required",
        "CITES or wildlife documentation where applicable"
    ],

    feed:
    "A specialist tamarin diet using approved primate feeds or gel, vegetables, insects, approved protein items, browse and carefully controlled fruit portions under professional supervision.",

    feedingSchedule: [
        "Morning Tamarin Diet",
        "Midday Insect Foraging",
        "Afternoon Vegetable Feeding",
        "Evening Light Feeding"
    ],

    habitat:
    "A warm social habitat with dense branches, vines, nest boxes, elevated pathways, insect-foraging devices, ultraviolet-light provision and secure protected keeper access.",

    parents: {
        father:
        "Institutionally managed male Golden Lion Tamarin with documented conservation, genetic and health records.",

        mother:
        "Institutionally managed female Golden Lion Tamarin with documented maternal, reproductive and veterinary records."
    },

    care: [
        "Maintain an appropriate family group.",
        "Provide nest boxes, dense branches and elevated pathways.",
        "Offer insect-search and bark-probing enrichment.",
        "Monitor vitamin D and overall nutritional balance.",
        "Arrange routine specialist primate veterinary care.",
        "Maintain detailed conservation and breeding records.",
        "Comply with all relevant conservation and wildlife agreements."
    ],

    shipping:
    "Movement requires legal and conservation approval, veterinary clearance, climate-controlled specialist transport, destination approval and complete documentation.",

    warranty:
    "Institutional health and documentation terms depend on the applicable conservation or transfer agreement.",

    restricted:
    true,

    checkoutEnabled:
    false,

    availability:
    "Conservation or qualified-facility review only"
}

];


/* One combined list used by the page and learn-more.html. */

const primates = [
    ...greatApes,
    ...monkeys
];


/* =====================================================
   PAGE ELEMENTS
===================================================== */

const primatesGrid =
document.getElementById(
    "primatesGrid"
);

const primateSearch =
document.getElementById(
    "primateSearch"
);

const primateFilter =
document.getElementById(
    "primateFilter"
);

const resultsCount =
document.getElementById(
    "resultsCount"
);


/* =====================================================
   DISPLAY HELPERS
===================================================== */

function formatPrimatePrice(primate){

    if(
        primate.displayPrice
    ){

        return primate.displayPrice;

    }

    return (
        "Review estimate: $" +
        Number(
            primate.price || 0
        ).toLocaleString()
    );

}


function getPrimateButtonClass(primate){

    if(
        primate.checkoutEnabled === false
    ){

        return "institutional-enquiry-btn";

    }

    return "add-cart-btn";

}


function getPrimateButtonText(primate){

    if(
        primate.checkoutEnabled === false
    ){

        return "Institutional Enquiry";

    }

    return "Start Compliance Request";

}


function getPrimateCategoryLabel(primate){

    if(
        primate.category === "great-ape"
    ){

        return "Great Ape Profile";

    }

    if(
        primate.category === "small-primate"
    ){

        return "Small Primate Profile";

    }

    return "Monkey Profile";

}


/* =====================================================
   RENDER
===================================================== */

function renderPrimates(primateArray){

    if(
        !primatesGrid
    ){

        return;

    }

    primatesGrid.innerHTML = "";

    if(
        primateArray.length === 0
    ){

        primatesGrid.innerHTML = `
            <div class="empty-results">
                <h3>No primate profiles found</h3>
                <p>
                    Try another species name or profile category.
                </p>
            </div>
        `;

        return;

    }

    primateArray.forEach(
        primate => {

            const requestClass =
            getPrimateButtonClass(
                primate
            );

            primatesGrid.innerHTML += `

                <article
                    class="pet-card primate-card"
                    data-category="${primate.category}"
                    data-sub-category="${primate.subCategory}"
                    data-name="${primate.name.toLowerCase()}"
                >

                    <div class="pet-image-wrap">

                        <img
                            src="../${primate.image}"
                            alt="${primate.name}"
                            loading="lazy"
                        >

                        <span class="regulated-badge">
                            Regulated Profile
                        </span>

                    </div>

                    <div class="pet-content">

                        <span class="pet-category">
                            ${getPrimateCategoryLabel(primate)}
                        </span>

                        <h3>
                            ${primate.name}
                        </h3>

                        <small class="scientific-name">
                            ${primate.scientificName}
                        </small>

                        <p>
                            ${primate.description}
                        </p>

                        <div class="pet-info">

                            <span>
                                ${primate.age}
                            </span>

                            <span>
                                ${primate.location}
                            </span>

                        </div>

                        <div class="pet-footer">

                            <h4>
                                ${formatPrimatePrice(primate)}
                            </h4>

                            <div class="pet-actions">

                                <button
                                    type="button"
                                    class="${requestClass}"
                                    data-request-button="${primate.checkoutEnabled}"
                                    data-name="${primate.name}"
                                    data-price="${primate.price}"
                                    data-image="../${primate.image}"
                                    data-checkout-enabled="${primate.checkoutEnabled}"
                                >
                                    ${getPrimateButtonText(primate)}
                                </button>

                                <button
                                    type="button"
                                    class="wishlist-add-btn"
                                    data-name="${primate.name}"
                                    data-price="${primate.price}"
                                    data-image="${primate.image}"
                                >
                                    ❤ Save For Review
                                </button>

                            </div>

                            <a
                                href="learn-more.html?type=primates&name=${encodeURIComponent(primate.name)}"
                                class="learn-more-btn"
                            >
                                Learn More →
                            </a>

                        </div>

                    </div>

                </article>

            `;

        }
    );

    attachInstitutionalEnquiryButtons();

    attachPrimateWishlistButtons();

    animatePrimateCards();

}


/* =====================================================
   FILTERING
===================================================== */

function filterPrimates(){

    const searchTerm =
    primateSearch
    ?
    primateSearch.value
    .trim()
    .toLowerCase()
    :
    "";

    const selectedFilter =
    primateFilter
    ?
    primateFilter.value
    :
    "all";

    const filtered =
    primates.filter(
        primate => {

            const searchableText = `
                ${primate.name}
                ${primate.scientificName}
                ${primate.category}
                ${primate.subCategory}
                ${primate.location}
                ${primate.description}
            `.toLowerCase();

            const searchMatches =
            searchableText.includes(
                searchTerm
            );

            const categoryMatches =
            selectedFilter === "all" ||
            primate.category === selectedFilter ||
            primate.subCategory === selectedFilter;

            return (
                searchMatches &&
                categoryMatches
            );

        }
    );

    renderPrimates(
        filtered
    );

    if(
        resultsCount
    ){

        resultsCount.textContent =
        `${filtered.length} Regulated Profiles`;

    }

}


if(
    primateSearch
){

    primateSearch.addEventListener(
        "input",
        filterPrimates
    );

}


if(
    primateFilter
){

    primateFilter.addEventListener(
        "change",
        filterPrimates
    );

}


/* =====================================================
   INSTITUTIONAL ENQUIRY
===================================================== */

function attachInstitutionalEnquiryButtons(){

    document
    .querySelectorAll(
        ".institutional-enquiry-btn"
    )
    .forEach(
        button => {

            button.onclick = () => {

                const animalName =
                button.dataset.name ||
                "Primate Profile";

                window.location.href =
                `contact.html?subject=${encodeURIComponent(
                    "Institutional primate enquiry: " +
                    animalName
                )}`;

            };

        }
    );

}


/* =====================================================
   WISHLIST SUPPORT
===================================================== */

function normalizePrimateImagePath(path){

    let cleanPath =
    String(
        path || ""
    ).trim();

    const imageIndex =
    cleanPath.indexOf(
        "assets/images/"
    );

    if(
        imageIndex !== -1
    ){

        cleanPath =
        cleanPath.substring(
            imageIndex
        );

    }

    return cleanPath
    .replace(/^\.\.\//g, "")
    .replace(/^\.\//g, "")
    .replace(/^\//g, "");

}


function getPrimateWishlist(){

    try{

        return JSON.parse(
            localStorage.getItem(
                "CompanionReviewHubWishlist"
            )
        ) || [];

    }
    catch(error){

        console.error(
            "Unable to read wishlist:",
            error
        );

        return [];

    }

}


function savePrimateWishlist(list){

    localStorage.setItem(
        "CompanionReviewHubWishlist",
        JSON.stringify(
            list
        )
    );

    updatePrimateWishlistCount();

}


function updatePrimateWishlistCount(){

    const count =
    document.getElementById(
        "wishlist-count"
    );

    if(
        count
    ){

        count.textContent =
        getPrimateWishlist().length;

    }

}


function showPrimateMessage(message){

    let messageBox =
    document.querySelector(
        ".wishlist-action-message"
    );

    if(
        !messageBox
    ){

        messageBox =
        document.createElement(
            "div"
        );

        messageBox.className =
        "wishlist-action-message";

        document.body.appendChild(
            messageBox
        );

    }

    messageBox.innerHTML =
    `<strong>${message}</strong>`;

    messageBox.classList.add(
        "show"
    );

    clearTimeout(
        messageBox.hideTimer
    );

    messageBox.hideTimer =
    setTimeout(
        () => {

            messageBox.classList.remove(
                "show"
            );

        },
        2600
    );

}


function addPrimateToWishlist(item){

    const wishlist =
    getPrimateWishlist();

    const cleanItem = {
        name:
        item.name,

        price:
        item.price,

        image:
        normalizePrimateImagePath(
            item.image
        )
    };

    const exists =
    wishlist.some(
        profile =>
        String(
            profile.name
        ).toLowerCase() ===
        String(
            cleanItem.name
        ).toLowerCase()
    );

    if(
        exists
    ){

        showPrimateMessage(
            "This profile is already saved for later review."
        );

        return;

    }

    wishlist.push(
        cleanItem
    );

    savePrimateWishlist(
        wishlist
    );

    showPrimateMessage(
        "Profile saved for later review."
    );

}


function attachPrimateWishlistButtons(){

    document
    .querySelectorAll(
        ".wishlist-add-btn"
    )
    .forEach(
        button => {

            button.onclick = () => {

                addPrimateToWishlist({
                    name:
                    button.dataset.name,

                    price:
                    button.dataset.price,

                    image:
                    button.dataset.image
                });

            };

        }
    );

}


/* =====================================================
   CARD ANIMATION
===================================================== */

function animatePrimateCards(){

    const cards =
    document.querySelectorAll(
        ".primate-card:not(.show)"
    );

    if(
        !("IntersectionObserver" in window)
    ){

        cards.forEach(
            card =>
            card.classList.add(
                "show"
            )
        );

        return;

    }

    const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(
                entry => {

                    if(
                        entry.isIntersecting
                    ){

                        entry.target.classList.add(
                            "show"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },
        {
            threshold: 0.12
        }
    );

    cards.forEach(
        card =>
        observer.observe(
            card
        )
    );

}


/* =====================================================
   INITIAL PAGE LOAD
===================================================== */

updatePrimateWishlistCount();

renderPrimates(
    primates
);
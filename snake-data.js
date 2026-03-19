// ─── Snake Data for All 50 US States ─────────────────────────────────────────
// Each state has its top 3 most notable/common snakes with wiki links.

const stateSnakeData = {
  AL: {
    name: "Alabama",
    snakes: [
      { name: "Eastern Diamondback Rattlesnake", desc: "The largest venomous snake in North America, found in pine flatwoods and coastal scrub across southern Alabama.", wiki: "https://en.wikipedia.org/wiki/Eastern_diamondback_rattlesnake" },
      { name: "Cottonmouth", desc: "A heavy-bodied pit viper commonly found near rivers, swamps, and lakes throughout the state.", wiki: "https://en.wikipedia.org/wiki/Agkistrodon_piscivorus" },
      { name: "Eastern Coral Snake", desc: "A brightly banded venomous snake with potent neurotoxic venom; 'red touches yellow, kill a fellow.'", wiki: "https://en.wikipedia.org/wiki/Micrurus_fulvius" }
    ]
  },
  AK: {
    name: "Alaska",
    snakes: [
      { name: "No Native Snakes", desc: "Alaska is one of the few US states with no native snake species due to its extreme cold climate.", wiki: "https://en.wikipedia.org/wiki/Snake" },
      { name: "Common Garter Snake (rare sightings)", desc: "Occasional unverified sightings near the southeastern panhandle, but no established populations.", wiki: "https://en.wikipedia.org/wiki/Common_garter_snake" },
      { name: "Pet Trade Species", desc: "Ball pythons and corn snakes are popular pets in Alaska but are not found in the wild.", wiki: "https://en.wikipedia.org/wiki/Ball_python" }
    ]
  },
  AZ: {
    name: "Arizona",
    snakes: [
      { name: "Western Diamondback Rattlesnake", desc: "Arizona's most iconic snake, responsible for more bites in the US than any other species.", wiki: "https://en.wikipedia.org/wiki/Western_diamondback_rattlesnake" },
      { name: "Arizona Black Rattlesnake", desc: "A dark-colored rattlesnake found in mountainous regions, known for its calm temperament.", wiki: "https://en.wikipedia.org/wiki/Crotalus_cerberus" },
      { name: "Sonoran Coralsnake", desc: "A small, secretive, brightly banded snake found in desert and semi-desert habitats.", wiki: "https://en.wikipedia.org/wiki/Micruroides_euryxanthus" }
    ]
  },
  AR: {
    name: "Arkansas",
    snakes: [
      { name: "Timber Rattlesnake", desc: "Found in forested hillsides and rocky outcrops throughout the Ozark and Ouachita Mountains.", wiki: "https://en.wikipedia.org/wiki/Crotalus_horridus" },
      { name: "Copperhead", desc: "The most commonly encountered venomous snake in Arkansas, fond of leaf litter and wooded areas.", wiki: "https://en.wikipedia.org/wiki/Agkistrodon_contortrix" },
      { name: "Western Cottonmouth", desc: "A semi-aquatic viper found in swamps, bayous, and river bottoms of the lowland south and east.", wiki: "https://en.wikipedia.org/wiki/Agkistrodon_piscivorus" }
    ]
  },
  CA: {
    name: "California",
    snakes: [
      { name: "Southern Pacific Rattlesnake", desc: "The most commonly encountered rattlesnake in southern California's chaparral and coastal sage habitats.", wiki: "https://en.wikipedia.org/wiki/Crotalus_helleri" },
      { name: "California Kingsnake", desc: "A popular and beautiful constrictor known for eating other snakes, including rattlesnakes.", wiki: "https://en.wikipedia.org/wiki/Lampropeltis_californiae" },
      { name: "Gopher Snake", desc: "A large, non-venomous snake often mistaken for a rattlesnake due to its defensive behavior.", wiki: "https://en.wikipedia.org/wiki/Pituophis_catenifer" }
    ]
  },
  CO: {
    name: "Colorado",
    snakes: [
      { name: "Prairie Rattlesnake", desc: "Colorado's only commonly encountered venomous snake, found on the eastern plains and western slopes.", wiki: "https://en.wikipedia.org/wiki/Crotalus_viridis" },
      { name: "Bullsnake", desc: "A large, powerful constrictor and excellent rodent controller found across Colorado's grasslands.", wiki: "https://en.wikipedia.org/wiki/Pituophis_catenifer_sayi" },
      { name: "Western Terrestrial Garter Snake", desc: "A highly adaptable species found near water sources from the plains to alpine meadows.", wiki: "https://en.wikipedia.org/wiki/Thamnophis_elegans" }
    ]
  },
  CT: {
    name: "Connecticut",
    snakes: [
      { name: "Timber Rattlesnake", desc: "Critically endangered in Connecticut, found only in a few rocky hillside dens in the northwest.", wiki: "https://en.wikipedia.org/wiki/Crotalus_horridus" },
      { name: "Northern Copperhead", desc: "Found in rocky, wooded hillsides in the central-western part of the state.", wiki: "https://en.wikipedia.org/wiki/Agkistrodon_contortrix" },
      { name: "Eastern Rat Snake", desc: "Connecticut's largest snake, a skilled climber found in forests and farmland.", wiki: "https://en.wikipedia.org/wiki/Pantherophis_alleghaniensis" }
    ]
  },
  DE: {
    name: "Delaware",
    snakes: [
      { name: "Eastern Rat Snake", desc: "The largest snake in Delaware, reaching over 6 feet, commonly found in forests and barns.", wiki: "https://en.wikipedia.org/wiki/Pantherophis_alleghaniensis" },
      { name: "Eastern Kingsnake", desc: "A glossy black snake with white chain-link bands, known for its immunity to pit viper venom.", wiki: "https://en.wikipedia.org/wiki/Lampropeltis_getula" },
      { name: "Northern Copperhead", desc: "Delaware's most common venomous snake, found in wooded and rocky habitats.", wiki: "https://en.wikipedia.org/wiki/Agkistrodon_contortrix" }
    ]
  },
  FL: {
    name: "Florida",
    snakes: [
      { name: "Eastern Diamondback Rattlesnake", desc: "The heaviest venomous snake in the Americas, an apex predator of Florida's palmetto prairies.", wiki: "https://en.wikipedia.org/wiki/Eastern_diamondback_rattlesnake" },
      { name: "Burmese Python (invasive)", desc: "A massive invasive constrictor devastating Everglades wildlife; can exceed 18 feet in length.", wiki: "https://en.wikipedia.org/wiki/Burmese_python" },
      { name: "Eastern Coral Snake", desc: "A shy, fossorial snake with highly potent venom, found in sandy soils and pine flatwoods.", wiki: "https://en.wikipedia.org/wiki/Micrurus_fulvius" }
    ]
  },
  GA: {
    name: "Georgia",
    snakes: [
      { name: "Eastern Diamondback Rattlesnake", desc: "Found in coastal plain longleaf pine habitats, Georgia's largest and most dangerous snake.", wiki: "https://en.wikipedia.org/wiki/Eastern_diamondback_rattlesnake" },
      { name: "Copperhead", desc: "Georgia's most frequently encountered venomous snake, often found near suburban woodlands.", wiki: "https://en.wikipedia.org/wiki/Agkistrodon_contortrix" },
      { name: "Eastern Indigo Snake", desc: "The longest native snake in the US (up to 8.5 ft), federally threatened and iridescent blue-black.", wiki: "https://en.wikipedia.org/wiki/Drymarchon_couperi" }
    ]
  },
  HI: {
    name: "Hawaii",
    snakes: [
      { name: "Yellow-Bellied Sea Snake", desc: "The only snake naturally occurring in Hawaiian waters; fully aquatic and rarely seen on shore.", wiki: "https://en.wikipedia.org/wiki/Hydrophis_platurus" },
      { name: "Brahminy Blind Snake (invasive)", desc: "A tiny, worm-like snake accidentally introduced via potted plants; the world's smallest snake.", wiki: "https://en.wikipedia.org/wiki/Indotyphlops_braminus" },
      { name: "Brown Tree Snake (threat)", desc: "Not yet established in Hawaii but a major biosecurity concern after devastating Guam's bird populations.", wiki: "https://en.wikipedia.org/wiki/Boiga_irregularis" }
    ]
  },
  ID: {
    name: "Idaho",
    snakes: [
      { name: "Western Rattlesnake", desc: "Idaho's only venomous snake, found in sagebrush flats and rocky canyon lands.", wiki: "https://en.wikipedia.org/wiki/Crotalus_oreganus" },
      { name: "Gopher Snake", desc: "A large, common constrictor often mistaken for a rattlesnake; excellent rodent predator.", wiki: "https://en.wikipedia.org/wiki/Pituophis_catenifer" },
      { name: "Rubber Boa", desc: "A docile, cold-tolerant boa found in forested mountains; one of only two boas native to the US.", wiki: "https://en.wikipedia.org/wiki/Charina_bottae" }
    ]
  },
  IL: {
    name: "Illinois",
    snakes: [
      { name: "Eastern Massasauga", desc: "A small, endangered rattlesnake found in wet prairies and marshy areas of northern Illinois.", wiki: "https://en.wikipedia.org/wiki/Sistrurus_catenatus" },
      { name: "Timber Rattlesnake", desc: "Found in the bluffs along the Mississippi River and Shawnee National Forest region.", wiki: "https://en.wikipedia.org/wiki/Crotalus_horridus" },
      { name: "Eastern Rat Snake", desc: "Illinois' largest snake, a powerful constrictor found in woodlands and farmland.", wiki: "https://en.wikipedia.org/wiki/Pantherophis_alleghaniensis" }
    ]
  },
  IN: {
    name: "Indiana",
    snakes: [
      { name: "Eastern Massasauga", desc: "A federally threatened rattlesnake found in northern Indiana's wetlands and bogs.", wiki: "https://en.wikipedia.org/wiki/Sistrurus_catenatus" },
      { name: "Timber Rattlesnake", desc: "Found in forested hills of south-central Indiana, increasingly rare.", wiki: "https://en.wikipedia.org/wiki/Crotalus_horridus" },
      { name: "Eastern Hognose Snake", desc: "Famous for its dramatic death-feigning displays, flattening its neck like a cobra.", wiki: "https://en.wikipedia.org/wiki/Heterodon_platirhinos" }
    ]
  },
  IA: {
    name: "Iowa",
    snakes: [
      { name: "Timber Rattlesnake", desc: "Found along the bluffs of the Mississippi River and in the Loess Hills.", wiki: "https://en.wikipedia.org/wiki/Crotalus_horridus" },
      { name: "Prairie Kingsnake", desc: "A secretive constrictor found in grasslands and open woodlands of southern Iowa.", wiki: "https://en.wikipedia.org/wiki/Lampropeltis_calligaster" },
      { name: "Bullsnake", desc: "Iowa's largest snake, an impressive hisser and rodent predator of the prairies.", wiki: "https://en.wikipedia.org/wiki/Pituophis_catenifer_sayi" }
    ]
  },
  KS: {
    name: "Kansas",
    snakes: [
      { name: "Western Diamondback Rattlesnake", desc: "Found in the western third of Kansas in rocky, arid habitats.", wiki: "https://en.wikipedia.org/wiki/Western_diamondback_rattlesnake" },
      { name: "Massasauga", desc: "A small rattlesnake of tallgrass prairies in eastern Kansas, now declining.", wiki: "https://en.wikipedia.org/wiki/Sistrurus_catenatus" },
      { name: "Great Plains Rat Snake", desc: "A beautiful, blotched snake common in rocky outcrops and grasslands.", wiki: "https://en.wikipedia.org/wiki/Pantherophis_emoryi" }
    ]
  },
  KY: {
    name: "Kentucky",
    snakes: [
      { name: "Copperhead", desc: "Kentucky's most common venomous snake, abundant in forests, bluffs, and suburban edges.", wiki: "https://en.wikipedia.org/wiki/Agkistrodon_contortrix" },
      { name: "Timber Rattlesnake", desc: "Found in the rugged hills of eastern Kentucky and along the Land Between the Lakes.", wiki: "https://en.wikipedia.org/wiki/Crotalus_horridus" },
      { name: "Black Racer", desc: "A fast, agile snake common across the state; can exceed 5 feet in length.", wiki: "https://en.wikipedia.org/wiki/Coluber_constrictor" }
    ]
  },
  LA: {
    name: "Louisiana",
    snakes: [
      { name: "Cottonmouth", desc: "Extremely common in Louisiana's bayous, swamps, and marshes; a heavy-bodied semi-aquatic viper.", wiki: "https://en.wikipedia.org/wiki/Agkistrodon_piscivorus" },
      { name: "Eastern Diamondback Rattlesnake", desc: "Found in pine forests and coastal areas of eastern Louisiana.", wiki: "https://en.wikipedia.org/wiki/Eastern_diamondback_rattlesnake" },
      { name: "Louisiana Pine Snake", desc: "One of the rarest snakes in North America, found only in longleaf pine forests.", wiki: "https://en.wikipedia.org/wiki/Pituophis_ruthveni" }
    ]
  },
  ME: {
    name: "Maine",
    snakes: [
      { name: "Common Garter Snake", desc: "Maine's most abundant snake, found in gardens, meadows, and forest edges statewide.", wiki: "https://en.wikipedia.org/wiki/Common_garter_snake" },
      { name: "Northern Ringneck Snake", desc: "A small, secretive snake with a bright orange-yellow neck ring and belly.", wiki: "https://en.wikipedia.org/wiki/Diadophis_punctatus" },
      { name: "Smooth Green Snake", desc: "A beautiful, bright green insectivore found in meadows and bogs across the state.", wiki: "https://en.wikipedia.org/wiki/Opheodrys_vernalis" }
    ]
  },
  MD: {
    name: "Maryland",
    snakes: [
      { name: "Copperhead", desc: "Maryland's most commonly encountered venomous snake, found in the western mountains and Piedmont.", wiki: "https://en.wikipedia.org/wiki/Agkistrodon_contortrix" },
      { name: "Timber Rattlesnake", desc: "Found in the Appalachian Mountains of western Maryland; state endangered species.", wiki: "https://en.wikipedia.org/wiki/Crotalus_horridus" },
      { name: "Eastern Rat Snake", desc: "A large, excellent climbing snake common in forests, farms, and suburban areas.", wiki: "https://en.wikipedia.org/wiki/Pantherophis_alleghaniensis" }
    ]
  },
  MA: {
    name: "Massachusetts",
    snakes: [
      { name: "Timber Rattlesnake", desc: "Extremely rare and state endangered; found only in the Blue Hills and Connecticut River Valley.", wiki: "https://en.wikipedia.org/wiki/Crotalus_horridus" },
      { name: "Northern Copperhead", desc: "Found in rocky, wooded areas of the Connecticut River Valley.", wiki: "https://en.wikipedia.org/wiki/Agkistrodon_contortrix" },
      { name: "Eastern Milk Snake", desc: "A colorful, banded snake common in farmland, often found in barns and stone walls.", wiki: "https://en.wikipedia.org/wiki/Lampropeltis_triangulum" }
    ]
  },
  MI: {
    name: "Michigan",
    snakes: [
      { name: "Eastern Massasauga", desc: "Michigan's only venomous snake, a federally threatened rattlesnake of wetland prairies.", wiki: "https://en.wikipedia.org/wiki/Sistrurus_catenatus" },
      { name: "Eastern Hognose Snake", desc: "Known for its cobra-like threat displays and dramatic death feigning when threatened.", wiki: "https://en.wikipedia.org/wiki/Heterodon_platirhinos" },
      { name: "Blue Racer", desc: "A fast, blue-gray subspecies of racer found in open habitats of southern Michigan.", wiki: "https://en.wikipedia.org/wiki/Coluber_constrictor_foxii" }
    ]
  },
  MN: {
    name: "Minnesota",
    snakes: [
      { name: "Timber Rattlesnake", desc: "Found in the bluff prairies of southeastern Minnesota along the Mississippi River.", wiki: "https://en.wikipedia.org/wiki/Crotalus_horridus" },
      { name: "Eastern Massasauga", desc: "Extremely rare in Minnesota; historically found in calcareous fens and wet prairies.", wiki: "https://en.wikipedia.org/wiki/Sistrurus_catenatus" },
      { name: "Gophersnake", desc: "Minnesota's largest snake, found in sandy prairies and bluffs of the southern regions.", wiki: "https://en.wikipedia.org/wiki/Pituophis_catenifer" }
    ]
  },
  MS: {
    name: "Mississippi",
    snakes: [
      { name: "Eastern Diamondback Rattlesnake", desc: "Found in pine savannas and coastal areas of southern Mississippi.", wiki: "https://en.wikipedia.org/wiki/Eastern_diamondback_rattlesnake" },
      { name: "Cottonmouth", desc: "Abundant in the swamps, oxbow lakes, and river bottoms throughout the state.", wiki: "https://en.wikipedia.org/wiki/Agkistrodon_piscivorus" },
      { name: "Mississippi Green Watersnake", desc: "A large, non-venomous watersnake found in the Mississippi Delta and coastal marshes.", wiki: "https://en.wikipedia.org/wiki/Nerodia_cyclopion" }
    ]
  },
  MO: {
    name: "Missouri",
    snakes: [
      { name: "Copperhead", desc: "Missouri's most common venomous snake, responsible for the majority of snakebites in the state.", wiki: "https://en.wikipedia.org/wiki/Agkistrodon_contortrix" },
      { name: "Timber Rattlesnake", desc: "Found in the Ozark highlands and along rocky bluffs of major rivers.", wiki: "https://en.wikipedia.org/wiki/Crotalus_horridus" },
      { name: "Speckled Kingsnake", desc: "A beautiful black snake dotted with yellow speckles, known for eating venomous snakes.", wiki: "https://en.wikipedia.org/wiki/Lampropeltis_holbrooki" }
    ]
  },
  MT: {
    name: "Montana",
    snakes: [
      { name: "Prairie Rattlesnake", desc: "Montana's only venomous snake, common in grasslands and sagebrush east of the Continental Divide.", wiki: "https://en.wikipedia.org/wiki/Crotalus_viridis" },
      { name: "Bullsnake", desc: "Montana's largest snake, an impressive species reaching 6+ feet in the eastern prairies.", wiki: "https://en.wikipedia.org/wiki/Pituophis_catenifer_sayi" },
      { name: "Rubber Boa", desc: "A gentle, cold-adapted boa found in the forests of western Montana.", wiki: "https://en.wikipedia.org/wiki/Charina_bottae" }
    ]
  },
  NE: {
    name: "Nebraska",
    snakes: [
      { name: "Prairie Rattlesnake", desc: "Nebraska's most common rattlesnake, found throughout the western Sandhills and panhandle.", wiki: "https://en.wikipedia.org/wiki/Crotalus_viridis" },
      { name: "Bullsnake", desc: "The largest snake in Nebraska, a powerful constrictor and excellent gopher predator.", wiki: "https://en.wikipedia.org/wiki/Pituophis_catenifer_sayi" },
      { name: "Plains Hognose Snake", desc: "A small, charming snake with an upturned snout used for digging up toads.", wiki: "https://en.wikipedia.org/wiki/Heterodon_nasicus" }
    ]
  },
  NV: {
    name: "Nevada",
    snakes: [
      { name: "Great Basin Rattlesnake", desc: "Nevada's most widespread venomous snake, found in sagebrush and rocky desert terrain.", wiki: "https://en.wikipedia.org/wiki/Crotalus_lutosus" },
      { name: "Mojave Rattlesnake", desc: "Found in southern Nevada; possesses one of the most potent venoms of any rattlesnake.", wiki: "https://en.wikipedia.org/wiki/Crotalus_scutulatus" },
      { name: "Sonoran Lyre Snake", desc: "A mildly venomous nocturnal snake found in rocky desert canyons of southern Nevada.", wiki: "https://en.wikipedia.org/wiki/Trimorphodon_lambda" }
    ]
  },
  NH: {
    name: "New Hampshire",
    snakes: [
      { name: "Timber Rattlesnake", desc: "State endangered and found only at a few rocky den sites in the southwestern part of the state.", wiki: "https://en.wikipedia.org/wiki/Crotalus_horridus" },
      { name: "Common Garter Snake", desc: "New Hampshire's most abundant snake, found in every county and habitat type.", wiki: "https://en.wikipedia.org/wiki/Common_garter_snake" },
      { name: "Smooth Green Snake", desc: "A delicate bright green insectivore found in meadows and moist grassy areas.", wiki: "https://en.wikipedia.org/wiki/Opheodrys_vernalis" }
    ]
  },
  NJ: {
    name: "New Jersey",
    snakes: [
      { name: "Timber Rattlesnake", desc: "Found in the Pine Barrens and northern highlands; classified as endangered in New Jersey.", wiki: "https://en.wikipedia.org/wiki/Crotalus_horridus" },
      { name: "Northern Copperhead", desc: "Found in rocky, wooded hillsides of northern New Jersey.", wiki: "https://en.wikipedia.org/wiki/Agkistrodon_contortrix" },
      { name: "Northern Pine Snake", desc: "A large, powerful burrowing snake of the Pine Barrens, state threatened.", wiki: "https://en.wikipedia.org/wiki/Pituophis_melanoleucus" }
    ]
  },
  NM: {
    name: "New Mexico",
    snakes: [
      { name: "Western Diamondback Rattlesnake", desc: "New Mexico's most common and wide-ranging rattlesnake, found in deserts and grasslands.", wiki: "https://en.wikipedia.org/wiki/Western_diamondback_rattlesnake" },
      { name: "Coachwhip", desc: "One of North America's fastest snakes, reaching speeds up to 4 mph across open desert.", wiki: "https://en.wikipedia.org/wiki/Masticophis_flagellum" },
      { name: "New Mexico Ridge-nosed Rattlesnake", desc: "The state reptile of New Mexico, found only in the Animas and Peloncillo Mountains.", wiki: "https://en.wikipedia.org/wiki/Crotalus_willardi_obscurus" }
    ]
  },
  NY: {
    name: "New York",
    snakes: [
      { name: "Timber Rattlesnake", desc: "Found in the Catskills, Hudson Highlands, and southern tier; state threatened species.", wiki: "https://en.wikipedia.org/wiki/Crotalus_horridus" },
      { name: "Eastern Massasauga", desc: "Extremely rare in New York, found only in a few wetland sites near Syracuse.", wiki: "https://en.wikipedia.org/wiki/Sistrurus_catenatus" },
      { name: "Eastern Milk Snake", desc: "A beautiful banded snake common in farmland and rocky hillsides across the state.", wiki: "https://en.wikipedia.org/wiki/Lampropeltis_triangulum" }
    ]
  },
  NC: {
    name: "North Carolina",
    snakes: [
      { name: "Copperhead", desc: "The most frequently encountered venomous snake in North Carolina's Piedmont and mountains.", wiki: "https://en.wikipedia.org/wiki/Agkistrodon_contortrix" },
      { name: "Eastern Diamondback Rattlesnake", desc: "Found in the coastal plain longleaf pine ecosystems of southeastern North Carolina.", wiki: "https://en.wikipedia.org/wiki/Eastern_diamondback_rattlesnake" },
      { name: "Eastern Kingsnake", desc: "A glossy black and white snake immune to pit viper venom; a farmer's best friend.", wiki: "https://en.wikipedia.org/wiki/Lampropeltis_getula" }
    ]
  },
  ND: {
    name: "North Dakota",
    snakes: [
      { name: "Prairie Rattlesnake", desc: "North Dakota's only venomous snake, found in the badlands and western grasslands.", wiki: "https://en.wikipedia.org/wiki/Crotalus_viridis" },
      { name: "Bullsnake", desc: "The largest snake in North Dakota, a loud hisser and impressive rodent controller.", wiki: "https://en.wikipedia.org/wiki/Pituophis_catenifer_sayi" },
      { name: "Plains Garter Snake", desc: "One of the most cold-hardy snakes in North America, found throughout the state.", wiki: "https://en.wikipedia.org/wiki/Thamnophis_radix" }
    ]
  },
  OH: {
    name: "Ohio",
    snakes: [
      { name: "Eastern Massasauga", desc: "A small, federally threatened rattlesnake found in northeastern Ohio's bogs and wet prairies.", wiki: "https://en.wikipedia.org/wiki/Sistrurus_catenatus" },
      { name: "Timber Rattlesnake", desc: "Found in the unglaciated hills of southern Ohio; state endangered.", wiki: "https://en.wikipedia.org/wiki/Crotalus_horridus" },
      { name: "Northern Copperhead", desc: "Ohio's most commonly encountered venomous snake, found in hilly, wooded areas.", wiki: "https://en.wikipedia.org/wiki/Agkistrodon_contortrix" }
    ]
  },
  OK: {
    name: "Oklahoma",
    snakes: [
      { name: "Western Diamondback Rattlesnake", desc: "Oklahoma's most common and widely distributed venomous snake.", wiki: "https://en.wikipedia.org/wiki/Western_diamondback_rattlesnake" },
      { name: "Copperhead", desc: "Common in the eastern forested regions and Ouachita Mountains.", wiki: "https://en.wikipedia.org/wiki/Agkistrodon_contortrix" },
      { name: "Western Cottonmouth", desc: "Found in the swamps and streams of eastern Oklahoma.", wiki: "https://en.wikipedia.org/wiki/Agkistrodon_piscivorus" }
    ]
  },
  OR: {
    name: "Oregon",
    snakes: [
      { name: "Western Rattlesnake", desc: "Oregon's only venomous snake, found east of the Cascades in rocky, arid habitats.", wiki: "https://en.wikipedia.org/wiki/Crotalus_oreganus" },
      { name: "Rubber Boa", desc: "A gentle, nocturnal boa found in forests throughout most of Oregon.", wiki: "https://en.wikipedia.org/wiki/Charina_bottae" },
      { name: "California Mountain Kingsnake", desc: "A stunningly colored red, black, and white coral snake mimic of the Siskiyou Mountains.", wiki: "https://en.wikipedia.org/wiki/Lampropeltis_zonata" }
    ]
  },
  PA: {
    name: "Pennsylvania",
    snakes: [
      { name: "Timber Rattlesnake", desc: "Found in the Appalachian ridge and valley region; Pennsylvania's state reptile candidate.", wiki: "https://en.wikipedia.org/wiki/Crotalus_horridus" },
      { name: "Copperhead", desc: "The most commonly encountered venomous snake in Pennsylvania's wooded hills.", wiki: "https://en.wikipedia.org/wiki/Agkistrodon_contortrix" },
      { name: "Eastern Rat Snake", desc: "Pennsylvania's largest snake, commonly found in barns and forests across the state.", wiki: "https://en.wikipedia.org/wiki/Pantherophis_alleghaniensis" }
    ]
  },
  RI: {
    name: "Rhode Island",
    snakes: [
      { name: "Timber Rattlesnake", desc: "Extremely rare and state endangered in Rhode Island; found in very few rocky den sites.", wiki: "https://en.wikipedia.org/wiki/Crotalus_horridus" },
      { name: "Northern Copperhead", desc: "Found in rocky, forested areas in the western part of the state.", wiki: "https://en.wikipedia.org/wiki/Agkistrodon_contortrix" },
      { name: "Eastern Ribbon Snake", desc: "A slender, semi-aquatic snake found near ponds, bogs, and wetlands.", wiki: "https://en.wikipedia.org/wiki/Thamnophis_saurita" }
    ]
  },
  SC: {
    name: "South Carolina",
    snakes: [
      { name: "Eastern Diamondback Rattlesnake", desc: "Found in the coastal plain and Sandhills; South Carolina's largest venomous snake.", wiki: "https://en.wikipedia.org/wiki/Eastern_diamondback_rattlesnake" },
      { name: "Copperhead", desc: "Found throughout the Piedmont and mountain regions of the state.", wiki: "https://en.wikipedia.org/wiki/Agkistrodon_contortrix" },
      { name: "Eastern Coral Snake", desc: "A secretive, burrowing snake of the coastal plain with potent neurotoxic venom.", wiki: "https://en.wikipedia.org/wiki/Micrurus_fulvius" }
    ]
  },
  SD: {
    name: "South Dakota",
    snakes: [
      { name: "Prairie Rattlesnake", desc: "Found in the Black Hills, Badlands, and western grasslands of South Dakota.", wiki: "https://en.wikipedia.org/wiki/Crotalus_viridis" },
      { name: "Bullsnake", desc: "South Dakota's largest snake, a powerful constrictor of the prairies.", wiki: "https://en.wikipedia.org/wiki/Pituophis_catenifer_sayi" },
      { name: "Plains Hognose Snake", desc: "A charmingly odd snake with an upturned snout, found in sandy grasslands.", wiki: "https://en.wikipedia.org/wiki/Heterodon_nasicus" }
    ]
  },
  TN: {
    name: "Tennessee",
    snakes: [
      { name: "Timber Rattlesnake", desc: "Found across Tennessee's mountains and highlands; the state's most widespread venomous snake.", wiki: "https://en.wikipedia.org/wiki/Crotalus_horridus" },
      { name: "Copperhead", desc: "Tennessee's most common venomous snake, found in forests and rocky bluffs statewide.", wiki: "https://en.wikipedia.org/wiki/Agkistrodon_contortrix" },
      { name: "Eastern Kingsnake", desc: "A beautiful black and white banded constrictor known for eating venomous snakes.", wiki: "https://en.wikipedia.org/wiki/Lampropeltis_getula" }
    ]
  },
  TX: {
    name: "Texas",
    snakes: [
      { name: "Western Diamondback Rattlesnake", desc: "The most iconic Texas snake, celebrated at the Sweetwater Rattlesnake Roundup.", wiki: "https://en.wikipedia.org/wiki/Western_diamondback_rattlesnake" },
      { name: "Texas Coral Snake", desc: "A brightly banded venomous snake found in the eastern half of the state.", wiki: "https://en.wikipedia.org/wiki/Micrurus_tener" },
      { name: "Texas Rat Snake", desc: "A large, common constrictor found throughout eastern Texas; excellent climber.", wiki: "https://en.wikipedia.org/wiki/Pantherophis_obsoletus_lindheimeri" }
    ]
  },
  UT: {
    name: "Utah",
    snakes: [
      { name: "Great Basin Rattlesnake", desc: "Utah's most common venomous snake, found in sagebrush and rocky terrain.", wiki: "https://en.wikipedia.org/wiki/Crotalus_lutosus" },
      { name: "Sidewinder", desc: "A small desert rattlesnake with distinctive sideways locomotion, found in southern Utah.", wiki: "https://en.wikipedia.org/wiki/Crotalus_cerastes" },
      { name: "Gopher Snake", desc: "Utah's largest and most common non-venomous snake, found statewide.", wiki: "https://en.wikipedia.org/wiki/Pituophis_catenifer" }
    ]
  },
  VT: {
    name: "Vermont",
    snakes: [
      { name: "Timber Rattlesnake", desc: "State endangered and found only on a few rocky ledges in Rutland County.", wiki: "https://en.wikipedia.org/wiki/Crotalus_horridus" },
      { name: "Common Garter Snake", desc: "Vermont's most abundant snake, active even in the cool mountain climate.", wiki: "https://en.wikipedia.org/wiki/Common_garter_snake" },
      { name: "Eastern Milk Snake", desc: "A handsome, banded snake found in farmland, stone walls, and forest edges.", wiki: "https://en.wikipedia.org/wiki/Lampropeltis_triangulum" }
    ]
  },
  VA: {
    name: "Virginia",
    snakes: [
      { name: "Copperhead", desc: "Virginia's most commonly encountered venomous snake, found statewide in wooded habitats.", wiki: "https://en.wikipedia.org/wiki/Agkistrodon_contortrix" },
      { name: "Timber Rattlesnake", desc: "Found in the Blue Ridge and Appalachian Mountains; increasingly rare.", wiki: "https://en.wikipedia.org/wiki/Crotalus_horridus" },
      { name: "Eastern Rat Snake", desc: "Virginia's largest snake, commonly found from suburban backyards to mountain forests.", wiki: "https://en.wikipedia.org/wiki/Pantherophis_alleghaniensis" }
    ]
  },
  WA: {
    name: "Washington",
    snakes: [
      { name: "Western Rattlesnake", desc: "Washington's only venomous snake, found in the arid eastern regions and Columbia Basin.", wiki: "https://en.wikipedia.org/wiki/Crotalus_oreganus" },
      { name: "Rubber Boa", desc: "A small, docile boa found in forests on both sides of the Cascades.", wiki: "https://en.wikipedia.org/wiki/Charina_bottae" },
      { name: "Gopher Snake", desc: "A large, common snake of eastern Washington's grasslands and shrub-steppe.", wiki: "https://en.wikipedia.org/wiki/Pituophis_catenifer" }
    ]
  },
  WV: {
    name: "West Virginia",
    snakes: [
      { name: "Timber Rattlesnake", desc: "Found throughout West Virginia's mountains and forested ridges.", wiki: "https://en.wikipedia.org/wiki/Crotalus_horridus" },
      { name: "Copperhead", desc: "The most frequently encountered venomous snake in West Virginia.", wiki: "https://en.wikipedia.org/wiki/Agkistrodon_contortrix" },
      { name: "Eastern Rat Snake", desc: "A large, powerful climber found in forests, barns, and rocky outcrops.", wiki: "https://en.wikipedia.org/wiki/Pantherophis_alleghaniensis" }
    ]
  },
  WI: {
    name: "Wisconsin",
    snakes: [
      { name: "Timber Rattlesnake", desc: "Found in the bluffs of the Mississippi and Wisconsin Rivers; state special concern.", wiki: "https://en.wikipedia.org/wiki/Crotalus_horridus" },
      { name: "Eastern Massasauga", desc: "State endangered, found in a few remaining wetland sites in southeastern Wisconsin.", wiki: "https://en.wikipedia.org/wiki/Sistrurus_catenatus" },
      { name: "Eastern Hognose Snake", desc: "A theatrical snake that puffs up, hisses, and plays dead when threatened.", wiki: "https://en.wikipedia.org/wiki/Heterodon_platirhinos" }
    ]
  },
  WY: {
    name: "Wyoming",
    snakes: [
      { name: "Prairie Rattlesnake", desc: "Wyoming's only venomous snake, common in the grasslands, badlands, and sagebrush.", wiki: "https://en.wikipedia.org/wiki/Crotalus_viridis" },
      { name: "Bullsnake", desc: "The largest snake in Wyoming, an aggressive-looking but harmless rodent predator.", wiki: "https://en.wikipedia.org/wiki/Pituophis_catenifer_sayi" },
      { name: "Wandering Garter Snake", desc: "Found near streams and wetlands throughout the state, even at high elevations.", wiki: "https://en.wikipedia.org/wiki/Thamnophis_elegans_vagrans" }
    ]
  }
};

// ─── Quiz Questions ──────────────────────────────────────────────────────────
const quizQuestions = [
  {
    question: "How many species of snakes are found in the United States?",
    options: ["About 50", "About 150", "About 250", "About 500"],
    answer: 1,
    fact: "There are roughly 150 species of snakes in the United States, only about 20 of which are venomous."
  },
  {
    question: "Which US state has NO native snake species?",
    options: ["Montana", "Alaska", "Maine", "Vermont"],
    answer: 1,
    fact: "Alaska is the only US state with no confirmed native snake species due to its extreme climate."
  },
  {
    question: "What is the largest venomous snake in North America?",
    options: ["Timber Rattlesnake", "Cottonmouth", "Eastern Diamondback Rattlesnake", "Mojave Rattlesnake"],
    answer: 2,
    fact: "The Eastern Diamondback Rattlesnake can reach up to 8 feet and weigh over 10 pounds!"
  },
  {
    question: "Which invasive snake species is devastating the Florida Everglades?",
    options: ["King Cobra", "Burmese Python", "Boa Constrictor", "Green Anaconda"],
    answer: 1,
    fact: "Burmese Pythons have virtually eliminated many small mammal populations in the Everglades since their introduction."
  },
  {
    question: "What does a Hognose Snake do when threatened?",
    options: ["Spits venom", "Plays dead", "Changes color", "Burrows underground"],
    answer: 1,
    fact: "Hognose snakes put on one of nature's greatest shows — they hiss, flatten their neck like a cobra, and if that fails, roll over and play dead!"
  },
  {
    question: "Which snake is immune to pit viper venom?",
    options: ["Garter Snake", "Milk Snake", "Kingsnake", "Rat Snake"],
    answer: 2,
    fact: "Kingsnakes are ophiophagous (snake-eaters) and have evolved natural immunity to pit viper venom."
  },
  {
    question: "How do rattlesnakes sense their prey in total darkness?",
    options: ["Echolocation", "Heat-sensing pit organs", "Magnetic field detection", "Ultraviolet vision"],
    answer: 1,
    fact: "Rattlesnakes have heat-sensing pit organs between their eyes and nostrils that can detect temperature differences of 0.003°C!"
  },
  {
    question: "What is the fastest snake in North America?",
    options: ["Black Racer", "Coachwhip", "Kingsnake", "Cottonmouth"],
    answer: 1,
    fact: "Coachwhip snakes can move at speeds up to 4 mph, making them among the fastest snakes on the continent."
  },
  {
    question: "What is the rhyme used to identify coral snakes?",
    options: [
      "\"Red touches blue, good for you\"",
      "\"Red touches yellow, kill a fellow\"",
      "\"If it's bright, it won't bite\"",
      "\"Stripes mean danger\""
    ],
    answer: 1,
    fact: "The full rhyme is: 'Red touches yellow, kill a fellow. Red touches black, friend of Jack.' It helps distinguish venomous coral snakes from harmless mimics."
  },
  {
    question: "How do snakes smell?",
    options: ["Through their nostrils only", "By flicking their tongue", "Through their skin", "They can't smell"],
    answer: 1,
    fact: "Snakes flick their forked tongue to collect chemical particles from the air, then insert the tips into the Jacobson's organ in the roof of their mouth to 'smell'."
  },
  {
    question: "Which US snake holds the record for the longest native species?",
    options: ["Bullsnake", "Eastern Indigo Snake", "Texas Rat Snake", "Black Rat Snake"],
    answer: 1,
    fact: "The Eastern Indigo Snake can reach up to 8.5 feet, making it the longest native snake species in the United States."
  },
  {
    question: "How often do most snakes eat?",
    options: ["Every day", "Every 1-2 weeks", "Once a month", "Once a year"],
    answer: 1,
    fact: "Most snakes eat every 1-2 weeks, though some large species can go months between meals. A python once went 2 years without eating!"
  },
  {
    question: "Which rattlesnake has the most potent venom?",
    options: ["Eastern Diamondback", "Timber Rattlesnake", "Mojave Rattlesnake", "Sidewinder"],
    answer: 2,
    fact: "The Mojave Rattlesnake possesses a potent neurotoxic venom that is considered the most toxic of any rattlesnake species."
  },
  {
    question: "What is a group of snakes called?",
    options: ["A pack", "A nest", "A den or a knot", "A flock"],
    answer: 2,
    fact: "A group of snakes is called a 'den', 'nest', 'pit', or 'knot'. During winter, hundreds of snakes may share a single den!"
  },
  {
    question: "Can snakes hear sound?",
    options: ["No, they are completely deaf", "Yes, through internal ear bones", "Only ultrasonic frequencies", "Only underwater"],
    answer: 1,
    fact: "While snakes lack external ears, they have internal ear bones that can detect vibrations through the ground and even some airborne sounds."
  },
  {
    question: "Which state hosts the world's largest rattlesnake roundup?",
    options: ["Arizona", "New Mexico", "Texas", "Oklahoma"],
    answer: 2,
    fact: "Sweetwater, Texas hosts the world's largest rattlesnake roundup each March, handling thousands of Western Diamondback Rattlesnakes."
  },
  {
    question: "How do snakes move without legs?",
    options: [
      "Only by slithering side-to-side",
      "Using four distinct locomotion methods",
      "By contracting and expanding their body",
      "By rolling"
    ],
    answer: 1,
    fact: "Snakes use four types of movement: lateral undulation, rectilinear, sidewinding, and concertina locomotion, each suited to different terrain."
  },
  {
    question: "What purpose does a rattlesnake's rattle serve?",
    options: ["Attracting mates", "Warning predators", "Stunning prey", "Temperature regulation"],
    answer: 1,
    fact: "The rattle is a warning device made of keratin segments. Each time a rattlesnake sheds its skin, a new segment is added to the rattle."
  },
  {
    question: "Are there any venomous watersnakes in the US besides the Cottonmouth?",
    options: ["Yes, several species", "No, the Cottonmouth is the only one", "Yes, the Water Moccasin is different", "Yes, the Banded Watersnake"],
    answer: 1,
    fact: "The Cottonmouth (also called the Water Moccasin) is the ONLY venomous watersnake in North America. All other watersnakes are harmless!"
  },
  {
    question: "What is the smallest snake in the United States?",
    options: ["Ring-necked Snake", "Brahminy Blind Snake", "Smooth Earth Snake", "Worm Snake"],
    answer: 1,
    fact: "The Brahminy Blind Snake (introduced in Hawaii and Florida) reaches only about 6 inches — it's often mistaken for an earthworm!"
  }
];

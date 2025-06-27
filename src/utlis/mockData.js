

 const mockHotels= [
  {
    id: '1',
    name: 'Grand Palazzo Resort',
    location: 'Santorini, Greece',
    price: 420,
    rating: 4.9,
    reviews: 847,
    image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Experience luxury at its finest with breathtaking views of the Aegean Sea. Our resort offers world-class amenities, exceptional service, and an unforgettable Mediterranean experience.',
    amenities: ['WiFi', 'Pool', 'Spa', 'Restaurant', 'Bar', 'Gym', 'Beach Access', 'Room Service'],
    coordinates: { latitude: 36.3932, longitude: 25.4615 },
    type: 'Resort',
    checkIn: '3:00 PM',
    checkOut: '11:00 AM'
  },
  {
    id: '2',
    name: 'Urban Boutique Hotel',
    location: 'New York, USA',
    price: 285,
    rating: 4.7,
    reviews: 1203,
    image: 'https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Modern elegance in the heart of Manhattan. Perfect for business travelers and city explorers seeking luxury accommodations with easy access to all NYC attractions.',
    amenities: ['WiFi', 'Gym', 'Restaurant', 'Bar', 'Business Center', 'Concierge', 'Room Service'],
    coordinates: { latitude: 40.7128, longitude: -74.0060 },
    type: 'Boutique',
    checkIn: '3:00 PM',
    checkOut: '12:00 PM'
  },
  {
    id: '3',
    name: 'Tropical Paradise Lodge',
    location: 'Bali, Indonesia',
    price: 180,
    rating: 4.8,
    reviews: 692,
    image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Immerse yourself in the natural beauty of Bali. Our eco-friendly lodge offers stunning jungle views, authentic cultural experiences, and unparalleled tranquility.',
    amenities: ['WiFi', 'Pool', 'Spa', 'Restaurant', 'Yoga Studio', 'Garden', 'Cultural Tours'],
    coordinates: { latitude: -8.3405, longitude: 115.0920 },
    type: 'Lodge',
    checkIn: '2:00 PM',
    checkOut: '11:00 AM'
  },
  {
    id: '4',
    name: 'Alpine Mountain Resort',
    location: 'Swiss Alps, Switzerland',
    price: 520,
    rating: 4.9,
    reviews: 456,
    image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Luxury meets adventure in the heart of the Swiss Alps. Perfect for skiing enthusiasts and nature lovers seeking premium accommodations with mountain views.',
    amenities: ['WiFi', 'Spa', 'Restaurant', 'Bar', 'Ski Equipment', 'Fireplace', 'Mountain Guides'],
    coordinates: { latitude: 46.5197, longitude: 7.4815 },
    type: 'Resort',
    checkIn: '4:00 PM',
    checkOut: '10:00 AM'
  },
  {
    id: '5',
    name: 'Coastal Breeze Hotel',
    location: 'Miami, USA',
    price: 320,
    rating: 4.6,
    reviews: 934,
    image: 'https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Art Deco elegance meets modern luxury on Miami Beach. Enjoy direct beach access, vibrant nightlife, and world-class dining in the heart of South Beach.',
    amenities: ['WiFi', 'Pool', 'Beach Access', 'Restaurant', 'Bar', 'Gym', 'Nightclub', 'Valet'],
    coordinates: { latitude: 25.7617, longitude: -80.1918 },
    type: 'Hotel',
    checkIn: '3:00 PM',
    checkOut: '11:00 AM'
  },
  {
    id: '6',
    name: 'Desert Oasis Resort',
    location: 'Dubai, UAE',
    price: 680,
    rating: 4.8,
    reviews: 1156,
    image: 'https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Experience the pinnacle of luxury in the golden dunes of Dubai. Our resort offers unmatched opulence with desert adventures, world-class spa treatments, and exceptional cuisine.',
    amenities: ['WiFi', 'Pool', 'Spa', 'Restaurant', 'Bar', 'Desert Safari', 'Helicopter Tours', 'Butler Service'],
    coordinates: { latitude: 25.2048, longitude: 55.2708 },
    type: 'Resort',
    checkIn: '3:00 PM',
    checkOut: '12:00 PM'
  },

  {
    "id": "7",
    "name": "Madden-Washington Lodge",
    "location": "North James, Tuvalu",
    "price": 531,
    "rating": 4.9,
    "reviews": 1152,
    "image": "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800",
    "images": [
      "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    "description": "Rock space TV expert nor check.",
    "amenities": [
      "Restaurant",
      "Gym",
      "Concierge",
      "Pool",
      "Beach Access",
      "Room Service",
      "Free WiFi",
      "Parking"
    ],
    "coordinates": {
      "latitude": 23.704812,
      "longitude": -69.262861
    },
    "type": "Hotel",
    "checkIn": "3:00 PM",
    "checkOut": "12:00 PM"
  },
  {
    "id": "8",
    "name": "Johnson, Collins and Travis Lodge",
    "location": "Sabrinamouth, Liberia",
    "price": 555,
    "rating": 3.8,
    "reviews": 761,
    "image": "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800",
    "images": [
      "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    "description": "Court through dog save.",
    "amenities": [
      "Room Service",
      "Beach Access",
      "Bar",
      "Restaurant",
      "Spa",
      "Parking",
      "Pool"
    ],
    "coordinates": {
      "latitude": 10.463104,
      "longitude": 152.168958
    },
    "type": "Boutique",
    "checkIn": "3:00 PM",
    "checkOut": "12:00 PM"
  },
  {
    "id": "9",
    "name": "Mccoy Ltd Inn",
    "location": "New Kathleen, Saint Martin",
    "price": 323,
    "rating": 4.6,
    "reviews": 2683,
    "image": "https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=800",
    "images": [
      "https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    "description": "Style detail door result.",
    "amenities": [
      "Bar",
      "Laundry",
      "Pet Friendly",
      "Restaurant",
      "Room Service"
    ],
    "coordinates": {
      "latitude": 47.291373,
      "longitude": -165.074379
    },
    "type": "Motel",
    "checkIn": "1:00 PM",
    "checkOut": "11:00 AM"
  },
  {
    "id": "10",
    "name": "Mckenzie, Costa and Wheeler Lodge",
    "location": "Coreychester, Aruba",
    "price": 423,
    "rating": 4.7,
    "reviews": 1927,
    "image": "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800",
    "images": [
      "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    "description": "Your manage official.",
    "amenities": [
      "Bar",
      "Parking",
      "Free WiFi",
      "Spa",
      "Concierge",
      "Restaurant",
      "Gym",
      "Room Service"
    ],
    "coordinates": {
      "latitude": 22.76161,
      "longitude": -17.614007
    },
    "type": "Motel",
    "checkIn": "3:00 PM",
    "checkOut": "11:00 AM"
  },
  {
    "id": "11",
    "name": "Chambers, Gill and Davidson Inn",
    "location": "Lake Jennifer, Montserrat",
    "price": 324,
    "rating": 4.8,
    "reviews": 2830,
    "image": "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800",
    "images": [
      "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    "description": "Around federal bring moment sure series.",
    "amenities": [
      "Parking",
      "Bar",
      "Restaurant",
      "Concierge",
      "Free WiFi",
      "Laundry",
      "Gym"
    ],
    "coordinates": {
      "latitude": -37.10276,
      "longitude": 58.27154
    },
    "type": "Resort",
    "checkIn": "1:00 PM",
    "checkOut": "11:00 AM"
  },
  {
    "id": "12",
    "name": "Wilson PLC Inn",
    "location": "New Jesus, Germany",
    "price": 366,
    "rating": 4.5,
    "reviews": 967,
    "image": "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800",
    "images": [
      "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    "description": "Feeling how else ground page boy factor hotel.",
    "amenities": [
      "Concierge",
      "Laundry",
      "Spa",
      "Parking",
      "Bar",
      "Room Service",
      "Free WiFi",
      "Beach Access"
    ],
    "coordinates": {
      "latitude": -26.188482,
      "longitude": -18.07118
    },
    "type": "Motel",
    "checkIn": "3:00 PM",
    "checkOut": "12:00 PM"
  },
  {
    "id": "13",
    "name": "Patterson-Swanson Resort",
    "location": "South Alyssaside, Brazil",
    "price": 545,
    "rating": 4.9,
    "reviews": 740,
    "image": "https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=800",
    "images": [
      "https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    "description": "Film level maybe them.",
    "amenities": [
      "Spa",
      "Concierge",
      "Pet Friendly",
      "Room Service",
      "Restaurant",
      "Bar"
    ],
    "coordinates": {
      "latitude": 79.258713,
      "longitude": 69.904444
    },
    "type": "Motel",
    "checkIn": "1:00 PM",
    "checkOut": "12:00 PM"
  },
  {
    "id": "14",
    "name": "Doyle, Schwartz and Thompson Resort",
    "location": "Teresamouth, Bulgaria",
    "price": 586,
    "rating": 5.0,
    "reviews": 1064,
    "image": "https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=800",
    "images": [
      "https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    "description": "Any so model edge the bed that certain.",
    "amenities": [
      "Free WiFi",
      "Pet Friendly",
      "Restaurant",
      "Spa",
      "Beach Access",
      "Parking",
      "Bar",
      "Concierge"
    ],
    "coordinates": {
      "latitude": -7.155776,
      "longitude": 141.12382
    },
    "type": "Lodge",
    "checkIn": "2:00 PM",
    "checkOut": "12:00 PM"
  },
  {
    "id": "15",
    "name": "Martin, Hicks and Huber Hotel",
    "location": "Port Cliffordborough, United States of America",
    "price": 158,
    "rating": 4.5,
    "reviews": 1007,
    "image": "https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=800",
    "images": [
      "https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    "description": "Order evidence determine.",
    "amenities": [
      "Beach Access",
      "Room Service",
      "Pool",
      "Laundry",
      "Restaurant"
    ],
    "coordinates": {
      "latitude": 57.238207,
      "longitude": -27.550007
    },
    "type": "Boutique",
    "checkIn": "1:00 PM",
    "checkOut": "12:00 PM"
  },
  {
    "id": "16",
    "name": "Foster-Ingram Inn",
    "location": "Simmonsmouth, Uganda",
    "price": 142,
    "rating": 4.8,
    "reviews": 2010,
    "image": "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800",
    "images": [
      "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    "description": "Traditional worker piece high.",
    "amenities": [
      "Room Service",
      "Gym",
      "Free WiFi",
      "Bar",
      "Spa",
      "Laundry"
    ],
    "coordinates": {
      "latitude": -25.596494,
      "longitude": 62.857519
    },
    "type": "Lodge",
    "checkIn": "3:00 PM",
    "checkOut": "10:00 AM"
  },
  {
    "id": "17",
    "name": "Griffin Ltd Inn",
    "location": "Gilberttown, Cote d'Ivoire",
    "price": 334,
    "rating": 4.4,
    "reviews": 1321,
    "image": "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800",
    "images": [
      "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    "description": "Need occur fire office pay race.",
    "amenities": [
      "Gym",
      "Beach Access",
      "Laundry",
      "Bar"
    ],
    "coordinates": {
      "latitude": 58.700179,
      "longitude": -74.178251
    },
    "type": "Lodge",
    "checkIn": "1:00 PM",
    "checkOut": "12:00 PM"
  },
  {
    "id": "18",
    "name": "Curry-Jackson Resort",
    "location": "Vazquezstad, Saint Kitts and Nevis",
    "price": 122,
    "rating": 3.9,
    "reviews": 1198,
    "image": "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800",
    "images": [
      "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    "description": "Agree space citizen sort the box political.",
    "amenities": [
      "Laundry",
      "Spa",
      "Beach Access",
      "Bar",
      "Pool"
    ],
    "coordinates": {
      "latitude": -7.293422,
      "longitude": -157.610756
    },
    "type": "Resort",
    "checkIn": "2:00 PM",
    "checkOut": "12:00 PM"
  },
  {
    "id": "19",
    "name": "Schneider, Johnson and Lester Hotel",
    "location": "Lake David, Palau",
    "price": 90,
    "rating": 4.0,
    "reviews": 767,
    "image": "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800",
    "images": [
      "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    "description": "This several perhaps ground identify chair.",
    "amenities": [
      "Room Service",
      "Pet Friendly",
      "Concierge",
      "Parking",
      "Bar",
      "Free WiFi"
    ],
    "coordinates": {
      "latitude": -50.650518,
      "longitude": 78.330762
    },
    "type": "Hotel",
    "checkIn": "2:00 PM",
    "checkOut": "11:00 AM"
  },
  {
    "id": "20",
    "name": "Kerr, Pena and Peters Inn",
    "location": "Lake Davidton, Hungary",
    "price": 444,
    "rating": 5.0,
    "reviews": 1723,
    "image": "https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=800",
    "images": [
      "https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    "description": "Which head choice defense recognize.",
    "amenities": [
      "Parking",
      "Spa",
      "Laundry",
      "Pet Friendly",
      "Beach Access",
      "Gym",
      "Free WiFi",
      "Bar"
    ],
    "coordinates": {
      "latitude": -46.293969,
      "longitude": 7.324828
    },
    "type": "Lodge",
    "checkIn": "1:00 PM",
    "checkOut": "11:00 AM"
  },
  {
    "id": "21",
    "name": "Coleman Ltd Inn",
    "location": "Stephenfort, Vietnam",
    "price": 311,
    "rating": 3.7,
    "reviews": 1690,
    "image": "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800",
    "images": [
      "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    "description": "Since sure must air.",
    "amenities": [
      "Concierge",
      "Pet Friendly",
      "Bar",
      "Free WiFi",
      "Beach Access",
      "Parking",
      "Spa",
      "Gym"
    ],
    "coordinates": {
      "latitude": 74.606874,
      "longitude": 53.276396
    },
    "type": "Lodge",
    "checkIn": "3:00 PM",
    "checkOut": "10:00 AM"
  },
  {
    "id": "22",
    "name": "Payne-Jackson Lodge",
    "location": "Mariaview, Costa Rica",
    "price": 401,
    "rating": 3.9,
    "reviews": 2331,
    "image": "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800",
    "images": [
      "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    "description": "Trip officer become start spend up deep.",
    "amenities": [
      "Parking",
      "Restaurant",
      "Spa",
      "Concierge",
      "Room Service",
      "Bar",
      "Beach Access",
      "Pool"
    ],
    "coordinates": {
      "latitude": -33.225226,
      "longitude": -13.139234
    },
    "type": "Motel",
    "checkIn": "2:00 PM",
    "checkOut": "10:00 AM"
  },
  {
    "id": "23",
    "name": "Adams Ltd Suites",
    "location": "Port Christopher, Germany",
    "price": 181,
    "rating": 3.8,
    "reviews": 624,
    "image": "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800",
    "images": [
      "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    "description": "With life everybody home there.",
    "amenities": [
      "Gym",
      "Free WiFi",
      "Beach Access",
      "Pet Friendly"
    ],
    "coordinates": {
      "latitude": -51.886143,
      "longitude": 78.117236
    },
    "type": "Boutique",
    "checkIn": "1:00 PM",
    "checkOut": "10:00 AM"
  },
  {
    "id": "24",
    "name": "Gill Group Inn",
    "location": "New William, United States of America",
    "price": 151,
    "rating": 3.6,
    "reviews": 287,
    "image": "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800",
    "images": [
      "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    "description": "View approach add less available quickly appear.",
    "amenities": [
      "Beach Access",
      "Pool",
      "Laundry",
      "Restaurant",
      "Parking"
    ],
    "coordinates": {
      "latitude": 89.339664,
      "longitude": -160.087656
    },
    "type": "Motel",
    "checkIn": "3:00 PM",
    "checkOut": "12:00 PM"
  },
  {
    "id": "25",
    "name": "Buckley and Sons Inn",
    "location": "Chelseaport, Nicaragua",
    "price": 494,
    "rating": 4.5,
    "reviews": 424,
    "image": "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800",
    "images": [
      "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    "description": "Pretty its week there.",
    "amenities": [
      "Room Service",
      "Spa",
      "Concierge",
      "Restaurant",
      "Bar",
      "Pet Friendly"
    ],
    "coordinates": {
      "latitude": -65.229846,
      "longitude": 80.126323
    },
    "type": "Hotel",
    "checkIn": "3:00 PM",
    "checkOut": "11:00 AM"
  },
  {
    "id": "26",
    "name": "Jones, Marks and Moore Suites",
    "location": "Williamsstad, Vietnam",
    "price": 477,
    "rating": 4.1,
    "reviews": 1151,
    "image": "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800",
    "images": [
      "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    "description": "Crime wide of turn.",
    "amenities": [
      "Restaurant",
      "Pool",
      "Parking",
      "Laundry",
      "Gym",
      "Free WiFi"
    ],
    "coordinates": {
      "latitude": -33.001471,
      "longitude": 154.305432
    },
    "type": "Motel",
    "checkIn": "1:00 PM",
    "checkOut": "12:00 PM"
  },
  {
    "id": "27",
    "name": "Bryan LLC Hotel",
    "location": "Dylanview, El Salvador",
    "price": 537,
    "rating": 4.9,
    "reviews": 822,
    "image": "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800",
    "images": [
      "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    "description": "Care seven heavy life teach religious amount.",
    "amenities": [
      "Room Service",
      "Beach Access",
      "Gym",
      "Concierge",
      "Spa"
    ],
    "coordinates": {
      "latitude": -72.699871,
      "longitude": -120.281769
    },
    "type": "Resort",
    "checkIn": "1:00 PM",
    "checkOut": "10:00 AM"
  },
  {
    "id": "28",
    "name": "Martinez, Romero and Ross Hotel",
    "location": "New Dustin, Solomon Islands",
    "price": 137,
    "rating": 4.4,
    "reviews": 1287,
    "image": "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800",
    "images": [
      "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    "description": "Go section mission letter.",
    "amenities": [
      "Bar",
      "Beach Access",
      "Room Service",
      "Restaurant",
      "Laundry",
      "Gym",
      "Pet Friendly"
    ],
    "coordinates": {
      "latitude": -46.938104,
      "longitude": 139.256232
    },
    "type": "Resort",
    "checkIn": "2:00 PM",
    "checkOut": "12:00 PM"
  },
  {
    "id": "29",
    "name": "King Group Resort",
    "location": "Harmonville, Saint Pierre and Miquelon",
    "price": 510,
    "rating": 4.3,
    "reviews": 838,
    "image": "https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=800",
    "images": [
      "https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    "description": "So per about present sea pay loss.",
    "amenities": [
      "Spa",
      "Concierge",
      "Beach Access",
      "Pool",
      "Parking",
      "Laundry"
    ],
    "coordinates": {
      "latitude": 48.475053,
      "longitude": 38.452589
    },
    "type": "Hotel",
    "checkIn": "2:00 PM",
    "checkOut": "12:00 PM"
  },
  {
    "id": "30",
    "name": "Sullivan and Sons Lodge",
    "location": "Medinaberg, Belize",
    "price": 519,
    "rating": 3.9,
    "reviews": 881,
    "image": "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800",
    "images": [
      "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    "description": "Today hotel get five modern control clearly development.",
    "amenities": [
      "Bar",
      "Parking",
      "Laundry",
      "Room Service",
      "Pet Friendly",
      "Gym",
      "Restaurant"
    ],
    "coordinates": {
      "latitude": -50.165414,
      "longitude": 87.117245
    },
    "type": "Boutique",
    "checkIn": "3:00 PM",
    "checkOut": "11:00 AM"
  },
  {
    "id": "31",
    "name": "Bean PLC Resort",
    "location": "Port Jeffrey, Venezuela",
    "price": 588,
    "rating": 3.8,
    "reviews": 2475,
    "image": "https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=800",
    "images": [
      "https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    "description": "Computer certainly charge.",
    "amenities": [
      "Parking",
      "Room Service",
      "Concierge",
      "Spa",
      "Pool"
    ],
    "coordinates": {
      "latitude": -73.621067,
      "longitude": -39.685147
    },
    "type": "Boutique",
    "checkIn": "1:00 PM",
    "checkOut": "10:00 AM"
  },
  {
    "id": "32",
    "name": "Dennis, Marshall and Hancock Inn",
    "location": "North Heather, India",
    "price": 352,
    "rating": 4.9,
    "reviews": 1704,
    "image": "https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=800",
    "images": [
      "https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    "description": "Effort study positive guy.",
    "amenities": [
      "Pool",
      "Concierge",
      "Beach Access",
      "Free WiFi",
      "Spa",
      "Laundry",
      "Pet Friendly"
    ],
    "coordinates": {
      "latitude": 88.032317,
      "longitude": 144.917587
    },
    "type": "Hotel",
    "checkIn": "3:00 PM",
    "checkOut": "10:00 AM"
  },
  {
    "id": "33",
    "name": "Miller, Pruitt and Smith Resort",
    "location": "Port Johnton, Chile",
    "price": 342,
    "rating": 4.4,
    "reviews": 396,
    "image": "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800",
    "images": [
      "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    "description": "Continue send research create toward.",
    "amenities": [
      "Bar",
      "Laundry",
      "Pool",
      "Beach Access"
    ],
    "coordinates": {
      "latitude": -26.360947,
      "longitude": -91.563645
    },
    "type": "Motel",
    "checkIn": "2:00 PM",
    "checkOut": "10:00 AM"
  },
  {
    "id": "34",
    "name": "Wagner Ltd Hotel",
    "location": "Aguilarfort, Moldova",
    "price": 189,
    "rating": 4.8,
    "reviews": 363,
    "image": "https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=800",
    "images": [
      "https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    "description": "Arrive there eye sister interesting turn marriage.",
    "amenities": [
      "Parking",
      "Pet Friendly",
      "Gym",
      "Laundry",
      "Free WiFi",
      "Bar",
      "Room Service",
      "Concierge"
    ],
    "coordinates": {
      "latitude": 74.110706,
      "longitude": -19.629842
    },
    "type": "Resort",
    "checkIn": "1:00 PM",
    "checkOut": "10:00 AM"
  },
  {
    "id": "35",
    "name": "Frederick-Garcia Inn",
    "location": "Mooreborough, Antigua and Barbuda",
    "price": 504,
    "rating": 4.1,
    "reviews": 1983,
    "image": "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800",
    "images": [
      "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    "description": "Television operation news public you skin.",
    "amenities": [
      "Gym",
      "Concierge",
      "Beach Access",
      "Pet Friendly",
      "Parking",
      "Free WiFi",
      "Restaurant"
    ],
    "coordinates": {
      "latitude": -55.662761,
      "longitude": 115.080719
    },
    "type": "Hotel",
    "checkIn": "3:00 PM",
    "checkOut": "10:00 AM"
  },
  {
    "id": "36",
    "name": "Rios Ltd Suites",
    "location": "Port Joelburgh, Argentina",
    "price": 327,
    "rating": 3.9,
    "reviews": 1294,
    "image": "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800",
    "images": [
      "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    "description": "According spend meet trouble yourself off.",
    "amenities": [
      "Parking",
      "Bar",
      "Free WiFi",
      "Room Service",
      "Concierge",
      "Restaurant"
    ],
    "coordinates": {
      "latitude": -5.990484,
      "longitude": -85.634695
    },
    "type": "Boutique",
    "checkIn": "2:00 PM",
    "checkOut": "10:00 AM"
  },
  {
    "id": "37",
    "name": "Ross, Le and Martin Hotel",
    "location": "Meyerschester, Martinique",
    "price": 302,
    "rating": 4.0,
    "reviews": 654,
    "image": "https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=800",
    "images": [
      "https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    "description": "Factor event soldier hand respond.",
    "amenities": [
      "Room Service",
      "Laundry",
      "Beach Access",
      "Concierge",
      "Bar",
      "Pet Friendly"
    ],
    "coordinates": {
      "latitude": -32.403028,
      "longitude": 162.950244
    },
    "type": "Boutique",
    "checkIn": "2:00 PM",
    "checkOut": "11:00 AM"
  },
  {
    "id": "38",
    "name": "Brown-Ferrell Inn",
    "location": "Garciaville, United Arab Emirates",
    "price": 542,
    "rating": 4.4,
    "reviews": 1106,
    "image": "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800",
    "images": [
      "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    "description": "Next bring decide decide go require.",
    "amenities": [
      "Beach Access",
      "Restaurant",
      "Gym",
      "Spa"
    ],
    "coordinates": {
      "latitude": -26.875577,
      "longitude": -112.816218
    },
    "type": "Motel",
    "checkIn": "2:00 PM",
    "checkOut": "11:00 AM"
  },
  {
    "id": "39",
    "name": "Rios PLC Lodge",
    "location": "Lewisstad, Luxembourg",
    "price": 87,
    "rating": 4.0,
    "reviews": 2207,
    "image": "https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=800",
    "images": [
      "https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    "description": "Show arrive quickly develop.",
    "amenities": [
      "Parking",
      "Free WiFi",
      "Pet Friendly",
      "Room Service",
      "Laundry",
      "Pool",
      "Spa",
      "Bar"
    ],
    "coordinates": {
      "latitude": -61.577688,
      "longitude": 164.206534
    },
    "type": "Resort",
    "checkIn": "2:00 PM",
    "checkOut": "10:00 AM"
  },
  {
    "id": "40",
    "name": "Gomez-Rivera Resort",
    "location": "North Rebecca, South Africa",
    "price": 126,
    "rating": 4.8,
    "reviews": 1343,
    "image": "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800",
    "images": [
      "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    "description": "Question cover by top threat.",
    "amenities": [
      "Bar",
      "Room Service",
      "Pool",
      "Free WiFi",
      "Beach Access",
      "Concierge"
    ],
    "coordinates": {
      "latitude": 19.82961,
      "longitude": -80.247399
    },
    "type": "Lodge",
    "checkIn": "3:00 PM",
    "checkOut": "11:00 AM"
  },
  {
    "id": "41",
    "name": "Adams, Chavez and Thompson Inn",
    "location": "Crystaltown, Guernsey",
    "price": 192,
    "rating": 4.2,
    "reviews": 2562,
    "image": "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800",
    "images": [
      "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    "description": "Amount step me.",
    "amenities": [
      "Gym",
      "Room Service",
      "Pet Friendly",
      "Free WiFi",
      "Concierge"
    ],
    "coordinates": {
      "latitude": 27.299115,
      "longitude": 112.585584
    },
    "type": "Boutique",
    "checkIn": "3:00 PM",
    "checkOut": "11:00 AM"
  },
  {
    "id": "42",
    "name": "Foster LLC Hotel",
    "location": "Port Richardberg, Kyrgyz Republic",
    "price": 342,
    "rating": 4.4,
    "reviews": 1553,
    "image": "https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=800",
    "images": [
      "https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    "description": "Growth see audience.",
    "amenities": [
      "Gym",
      "Room Service",
      "Bar",
      "Pet Friendly"
    ],
    "coordinates": {
      "latitude": 39.776066,
      "longitude": 75.707444
    },
    "type": "Motel",
    "checkIn": "1:00 PM",
    "checkOut": "11:00 AM"
  },
  {
    "id": "43",
    "name": "Moreno-Harvey Resort",
    "location": "Duncanfurt, Macao",
    "price": 101,
    "rating": 4.0,
    "reviews": 1892,
    "image": "https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=800",
    "images": [
      "https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    "description": "Executive learn party policy.",
    "amenities": [
      "Gym",
      "Parking",
      "Concierge",
      "Pool",
      "Free WiFi",
      "Spa",
      "Laundry",
      "Restaurant"
    ],
    "coordinates": {
      "latitude": -78.180469,
      "longitude": 54.997464
    },
    "type": "Boutique",
    "checkIn": "3:00 PM",
    "checkOut": "11:00 AM"
  },
  {
    "id": "44",
    "name": "Ross LLC Hotel",
    "location": "Randyport, Libyan Arab Jamahiriya",
    "price": 246,
    "rating": 3.9,
    "reviews": 1315,
    "image": "https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=800",
    "images": [
      "https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    "description": "Song even however.",
    "amenities": [
      "Pool",
      "Room Service",
      "Parking",
      "Spa"
    ],
    "coordinates": {
      "latitude": -24.013167,
      "longitude": 169.182903
    },
    "type": "Boutique",
    "checkIn": "3:00 PM",
    "checkOut": "10:00 AM"
  },
  {
    "id": "45",
    "name": "Salinas-Johnson Inn",
    "location": "West Gary, San Marino",
    "price": 542,
    "rating": 4.0,
    "reviews": 2959,
    "image": "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800",
    "images": [
      "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    "description": "Bed exactly old.",
    "amenities": [
      "Beach Access",
      "Concierge",
      "Pet Friendly",
      "Laundry",
      "Room Service"
    ],
    "coordinates": {
      "latitude": 2.241795,
      "longitude": 176.768206
    },
    "type": "Lodge",
    "checkIn": "3:00 PM",
    "checkOut": "12:00 PM"
  },
  {
    "id": "46",
    "name": "Walsh Inc Inn",
    "location": "Lake Victor, Gabon",
    "price": 279,
    "rating": 4.9,
    "reviews": 2767,
    "image": "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800",
    "images": [
      "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    "description": "Campaign off reflect home once.",
    "amenities": [
      "Parking",
      "Free WiFi",
      "Concierge",
      "Pool",
      "Bar",
      "Restaurant"
    ],
    "coordinates": {
      "latitude": -4.966225,
      "longitude": -25.463382
    },
    "type": "Hotel",
    "checkIn": "1:00 PM",
    "checkOut": "11:00 AM"
  },
  {
    "id": "47",
    "name": "Powers-Lee Inn",
    "location": "Jacobsland, China",
    "price": 294,
    "rating": 4.8,
    "reviews": 1567,
    "image": "https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=800",
    "images": [
      "https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    "description": "Economy real boy half.",
    "amenities": [
      "Pet Friendly",
      "Bar",
      "Spa",
      "Room Service"
    ],
    "coordinates": {
      "latitude": 2.449641,
      "longitude": -9.838881
    },
    "type": "Motel",
    "checkIn": "3:00 PM",
    "checkOut": "11:00 AM"
  },
  {
    "id": "48",
    "name": "Brown PLC Lodge",
    "location": "Donnamouth, India",
    "price": 348,
    "rating": 3.7,
    "reviews": 2041,
    "image": "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800",
    "images": [
      "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    "description": "Chance capital would size religious.",
    "amenities": [
      "Laundry",
      "Free WiFi",
      "Beach Access",
      "Room Service"
    ],
    "coordinates": {
      "latitude": -61.36334,
      "longitude": -7.352327
    },
    "type": "Hotel",
    "checkIn": "3:00 PM",
    "checkOut": "10:00 AM"
  },
  {
    "id": "49",
    "name": "Williams LLC Hotel",
    "location": "Port Randy, Belize",
    "price": 157,
    "rating": 4.3,
    "reviews": 2735,
    "image": "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800",
    "images": [
      "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    "description": "Investment half simply financial rock above perform conference.",
    "amenities": [
      "Laundry",
      "Room Service",
      "Bar",
      "Concierge",
      "Parking",
      "Restaurant",
      "Pool"
    ],
    "coordinates": {
      "latitude": 29.281198,
      "longitude": -6.022077
    },
    "type": "Motel",
    "checkIn": "1:00 PM",
    "checkOut": "12:00 PM"
  },
  {
    "id": "50",
    "name": "Stephenson Ltd Suites",
    "location": "Jamesfurt, Trinidad and Tobago",
    "price": 218,
    "rating": 3.7,
    "reviews": 2668,
    "image": "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800",
    "images": [
      "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    "description": "Price charge buy cost left scientist news.",
    "amenities": [
      "Concierge",
      "Gym",
      "Room Service",
      "Free WiFi",
      "Restaurant"
    ],
    "coordinates": {
      "latitude": 81.641582,
      "longitude": -123.51056
    },
    "type": "Hotel",
    "checkIn": "2:00 PM",
    "checkOut": "11:00 AM"
  }
];


module.exports = { mockHotels };
const mockEvents = {
    "totalEvents": 6
    , "events": [
        {
            "eventId": 2,
            "title": "Alexis House Warming",
            "date": "2024-04-15",
            "startTime": "11:00 AM",
            "endTime": "1:00 PM",
            "duration": "2 hours",
            "iconColor": "blue",
            "description": "Celebrate the new home of Alexis with friends and family.",
            "rsvp": {"status": "Yes", "guests": ["John", "Emily"]},
            "location": "123 Main St, Anytown",
            "organizer": "Alexis",
            "category": "Social Gathering",
            "tags": ["housewarming", "friends"],
            "eventStatus": "Confirmed",
            "links": ["https://example.com/event-details"],
            "notes": "Please bring a small gift."
        },
        {
            "eventId": 7,
            "title": "Muff Selling Plates",
            "date": "2024-04-16",
            "startTime": "3:00 PM",
            "endTime": "4:30 PM",
            "duration": "1.5 hours",
            "iconColor": "green",
            "description": "Explore a variety of delicious plates prepared by Muff.",
            "rsvp": {"status": "Maybe", "guests": ["Alice"]},
            "location": "456 Elm St, Anytown",
            "organizer": "Muff",
            "category": "Sales Event",
            "tags": ["food", "plates", "local"],
            "eventStatus": "Tentative",
            "links": ["https://example.com/muff-selling-plates"],
            "notes": "Limited edition plates available."
        },
        {
            "eventId": 8,
            "title": "Zavien's Birthday Dinner",
            "date": "2024-04-17",
            "startTime": "5:00 PM",
            "endTime": "7:00 PM",
            "duration": "2 hours",
            "iconColor": "pink",
            "description": "Join us in celebrating Zavien's special day with a dinner party.",
            "rsvp": {"status": "No", "guests": []},
            "location": "789 Oak St, Anytown",
            "organizer": "Zavien",
            "category": "Celebration",
            "tags": ["birthday", "dinner", "friends"],
            "eventStatus": "Canceled",
            "links": ["https://example.com/zaviens-birthday-dinner"],
            "notes": "Rescheduled to next week."
        },
        {
            "eventId": 3,
            "title": "Calia's KickBack",
            "date": "2024-04-18",
            "startTime": "8:00 PM",
            "endTime": "10:00 PM",
            "duration": "2 hours",
            "iconColor": "white",
            "description": "Relax and unwind at Calia's laid-back kickback event.",
            "rsvp": {"status": "Yes", "guests": ["Michael", "Sarah"]},
            "location": "987 Pine St, Anytown",
            "organizer": "Calia",
            "category": "Party",
            "tags": ["kickback", "friends", "fun"],
            "eventStatus": "Confirmed",
            "links": ["https://example.com/calias-kickback"],
            "notes": "BYOB. Casual attire."
        },
        {
            "eventId": 10,
            "title": "Trip to Cali",
            "date": "2024-04-19",
            "startTime": "10:00 PM",
            "endTime": "12:00 AM",
            "duration": "2 hours",
            "iconColor": "orange",
            "description": "Embark on an exciting adventure with David, Sophie, and Ethan to California.",
            "rsvp": {"status": "Yes", "guests": ["David", "Sophie", "Ethan"]},
            "location": "321 Vine St, Anytown",
            "organizer": "David",
            "category": "Travel",
            "tags": ["trip", "friends", "adventure"],
            "eventStatus": "Confirmed",
            "links": ["https://example.com/trip-to-cali"],
            "notes": "Meet at the airport at 9:00 PM."
        },
        {
            "eventId": 1,
            "title": "Morning Yoga",
            "date": "2024-04-20",
            "startTime": "9:00 AM",
            "endTime": "11:00 AM",
            "duration": "2 hours",
            "iconColor": "yellow",
            "description": "Start your day refreshed with a relaxing yoga session.",
            "rsvp": {"status": "Yes", "guests": ["Alice", "Bob"]},
            "location": "456 Elm St, Anytown",
            "organizer": "Yoga Studio",
            "category": "Health & Wellness",
            "tags": ["yoga", "exercise", "relaxation"],
            "eventStatus": "Confirmed",
            "links": ["https://example.com/morning-yoga"],
            "notes": "Bring your own mat."
        }
    ]
};

export default mockEvents;

import React, { useEffect, useRef, useState} from 'react';
import { Card, Button } from 'react-bootstrap';
import './GetInvolved.css';
import Navbar from './components/Navbar';
const events = {
  online: [
    {
      subCategory: "Webinars",
      events: [
        {
          title: "Biodiversity of the Western Ghats: Insights from Kerala",
          description: "Learn about the unique biodiversity of the Western Ghats in Kerala.",
          whoCanParticipate: "Students, nature enthusiasts, and researchers.",
          whatYouCanDo: "Gain knowledge about the flora and fauna specific to Kerala's Western Ghats.",
          platform: "Zoom",
          date: "2024-07-01",
          time: "10:00 AM - 12:00 PM GMT +5:30",
          organizer: "Dr. Anil Kumar",
          eventCoordinator: "Mr. Ravi Varma",
          speaker: "Dr. Maya Menon"
        },
        {
          title: "Impact of Climate Change on Tamil Nadu's Western Ghats",
          description: "Exploring the effects of climate change on the Western Ghats in Tamil Nadu.",
          whoCanParticipate: "Climate scientists, students, and concerned citizens.",
          whatYouCanDo: "Understand and discuss mitigation strategies specific to Tamil Nadu's Western Ghats.",
          platform: "Microsoft Teams",
          date: "2024-07-05",
          time: "9:00 AM - 11:00 AM GMT +5:30",
          organizer: "Mr. Suresh Patel",
          eventCoordinator: "Dr. Nidhi Kapoor",
          speaker: "Ms. Meera Nair"
        },
      ]
    },
    {
      subCategory: "Conferences",
      events: [
        {
          title: "Conservation Technology Summit: Innovations for Goa's Western Ghats",
          description: "Explore the latest technology aiding conservation efforts in the Western Ghats of Goa.",
          whoCanParticipate: "Tech enthusiasts, developers, and conservationists.",
          whatYouCanDo: "Discover cutting-edge innovations and network with experts focused on Goa's Western Ghats.",
          platform: "Google Meet",
          date: "2024-07-10",
          time: "2:00 PM - 5:00 PM GMT +5:30",
          organizer: "Mr. Sanjay Gupta",
          eventCoordinator: "Ms. Priya Sharma",
          speaker: "Dr. Rohan Verma"
        },
        {
          title: "AI and Ecology Conference: Maharashtra's Western Ghats Perspective",
          description: "Dive into the world of artificial intelligence and its applications in ecology in Maharashtra's Western Ghats.",
          whoCanParticipate: "AI enthusiasts, researchers, and ecologists.",
          whatYouCanDo: "Attend insightful sessions and hands-on workshops tailored for Maharashtra's Western Ghats.",
          platform: "Webex",
          date: "2024-07-15",
          time: "10:00 AM - 1:00 PM GMT +5:30",
          organizer: "Dr. Ananya Singh",
          eventCoordinator: "Mr. Rahul Khanna",
          speaker: "Ms. Priya Mehta"
        },
      ]
    },
    {
      subCategory: "Seminars",
      events: [
        {
          title: "Sustainable Practices in Karnataka's Western Ghats",
          description: "Discussing strategies for sustainable living in the Western Ghats of Karnataka.",
          whoCanParticipate: "Environmentalists, policymakers, and concerned citizens.",
          whatYouCanDo: "Exchange ideas and collaborate on sustainability initiatives specific to Karnataka's Western Ghats.",
          platform: "Zoom",
          date: "2024-07-20",
          time: "11:00 AM - 1:00 PM GMT +5:30",
          organizer: "Dr. Priya Verma",
          eventCoordinator: "Mr. Arjun Singh",
          speaker: "Dr. Rahul Sharma"
        },
        {
          title: "Green Energy Seminar: Insights from Kerala's Western Ghats",
          description: "Exploring renewable energy solutions for a cleaner environment in Kerala's Western Ghats.",
          whoCanParticipate: "Energy experts, researchers, and climate advocates.",
          whatYouCanDo: "Learn about innovative green energy technologies and policies tailored for Kerala's Western Ghats.",
          platform: "Microsoft Teams",
          date: "2024-07-25",
          time: "3:00 PM - 5:00 PM GMT +5:30",
          organizer: "Ms. Sneha Gupta",
          eventCoordinator: "Mr. Rajat Verma",
          speaker: "Dr. Ankit Singh"
        },
      ]
    },
  ],
  offline: [
    {
      subCategory: "Tree Planting",
      events: [
        {
          title: "Eco-Friendly Tree Planting Drive in Karnataka's Western Ghats",
          description: "Contribute to environmental conservation by planting trees in Karnataka's Western Ghats.",
          whoCanParticipate: "Volunteers, students, and nature lovers.",
          whatYouCanDo: "Plant native trees and learn about sustainable practices specific to Karnataka's Western Ghats.",
          location: "Agumbe, Karnataka",
          address: "Door No. 15, Near Agumbe Rainforest Research Station, Agumbe, Karnataka - 577411",
          date: "2024-07-20",
          time: "8:00 AM - 11:00 AM GMT +5:30",
          organizer: "Mr. Arjun Kumar",
          eventCoordinator: "Ms. Swati Gupta"
        },
        {
          title: "Green Earth Initiative in Kerala's Western Ghats",
          description: "Join hands in creating green spaces for a healthier planet in Kerala's Western Ghats.",
          whoCanParticipate: "Community members, environmentalists, and students.",
          whatYouCanDo: "Plant saplings and promote eco-friendly practices specific to Kerala's Western Ghats.",
          location: "Wayanad, Kerala",
          address: "Door No. 101, Chembra Peak Road, Meppadi, Wayanad, Kerala - 673577",
          date: "2024-07-25",
          time: "9:30 AM - 12:30 PM GMT +5:30",
          organizer: "Ms. Priya Verma",
          eventCoordinator: "Mr. Rohit Singh"
        },
      ]
    },
    {
      subCategory: "Awareness Campaigns",
      events: [
        {
          title: "Water Conservation Workshop in Tamil Nadu's Western Ghats",
          description: "Raise awareness about water conservation practices in Tamil Nadu's Western Ghats.",
          whoCanParticipate: "Local communities, students, and environmentalists.",
          whatYouCanDo: "Learn about water-saving techniques and strategies specific to Tamil Nadu's Western Ghats.",
          location: "Valparai, Tamil Nadu",
          address: "Door No. 56, Near Sholayar Dam, Valparai, Tamil Nadu - 642127",
          date: "2024-07-12",
          time: "3:00 PM - 5:00 PM GMT +5:30",
          organizer: "Ms. Ritu Khanna",
          eventCoordinator: "Mr. Rajesh Verma"
        },
        {
          title: "Green Living Campaign in Maharashtra's Western Ghats",
          description: "Promote sustainable living practices for a greener future in Maharashtra's Western Ghats.",
          whoCanParticipate: "Community members, eco-enthusiasts, and families.",
          whatYouCanDo: "Explore eco-friendly products and lifestyle choices specific to Maharashtra's Western Ghats.",
          location: "Mahabaleshwar, Maharashtra",
          address: "Door No. 22, Old Mahabaleshwar Road, Mahabaleshwar, Maharashtra - 412806",
          date: "2024-07-18",
          time: "10:00 AM - 12:00 PM GMT +5:30",
          organizer: "Mr. Akash Singh",
          eventCoordinator: "Ms. Priya Sharma"
        },
      ]
    },
  ],
};

 

const GetInvolved = () => {
  const eventRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold: 0.5 }
    );

    eventRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      eventRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const slideshowImages = [
    '8.jpg',
    '9.jpg',
    '10.jpg',
    '11.jpg',
    '12.jpg',
    '13.jpg',
    '14.jpg',
    '15.jpg',
  ];
  const [bgIndex, setBgIndex] = useState(8);
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => ((prevIndex+1) % slideshowImages.length) + 8);
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, [slideshowImages.length]);
  const bgImage = `${process.env.PUBLIC_URL}/images/${bgIndex}.jpg`;
  const renderEvents = (events, eventType) => {
    return events.map((category, categoryIndex) => {
      const sortedEvents = category.events.sort((a, b) => new Date(a.date) - new Date(b.date));
      return (
        <div key={`${eventType}-${category.subCategory}`} className="category-container">
        <fieldset>
            <legend>
          <h3 className='subcategory-heading'>{category.subCategory}</h3>
          </legend>
          {sortedEvents.map((event, eventIndex) => (
            <div
              key={`${eventType}-${category.subCategory}-${eventIndex}`}
              ref={(el) => (eventRefs.current.push(el))}
              className="get-involved-event-card"
            >
              <Card className='event-card'  style={{ backgroundImage: `url(${bgImage})` }}>
                <div className="date-time-container">
                  <p><strong>Date & Time:</strong> {event.date}, {event.time}</p>
                </div>
                <Card.Header className="get-involved-card-header">{event.title}</Card.Header>
                <Card.Body className='event-body'>
                  <Card.Text><strong>Description:</strong> {event.description}</Card.Text>
                  <Card.Text><strong>Who Can Participate:</strong> {event.whoCanParticipate}</Card.Text>
                  <Card.Text><strong>What You Can Do:</strong> {event.whatYouCanDo}</Card.Text>
                  {event.platform && <Card.Text><strong>Platform:</strong> {event.platform}</Card.Text>}
                  {event.location && <Card.Text><strong>Location:</strong> {event.location}</Card.Text>}
                  {event.address && <Card.Text><strong>Address:</strong> {event.address}</Card.Text>}
                  <Card.Text><strong>Organizer:</strong> {event.organizer}</Card.Text>
                  <Card.Text><strong>Event Coordinator:</strong> {event.eventCoordinator}</Card.Text>
                  <Button variant="primary" className="get-involved-button">Register</Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </fieldset>
        </div>
      );
    });
  };

  return (
    <>
      <Navbar />
      <div className="get-involved-container">
        <div>
          <h2 className='head'>Online Events</h2>
          {renderEvents(events.online, 'online')}
        </div>
        <div>
          <h2 className='head'>Offline Events</h2>
          {renderEvents(events.offline, 'offline')}
        </div>
      </div>
    </>
  );
};

export default GetInvolved;

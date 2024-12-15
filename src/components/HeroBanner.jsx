/* eslint-disable react/prop-types */
import Button from "./Button";

const HeroBanner = ({ event }) => {
  // {
  //   "id": "1",
  //   "title": "Campus Music Festival",
  //   "date": "2024-11-15",
  //   "time": "14:00 - 18:00",
  //   "location": "Central Campus Square",
  //   "description": "Join us for our Campus Music Festival featuring live music performances, food stalls, and engaging activities! Whether you're a music lover or just looking to have a great time with friends, there's something for everyone.",
  //   "image": "https://picsum.photos/900/600/?random", // You can replace this with an appropriate image for the event
  //   "tickets": {
  //     "price": "Free",
  //     "link": "https://example.com/register" // This can be a registration link
  //   },
  //   "organizer": "Student Union",
  //   "contact": {
  //     "email": "contact@studentunion.edu",
  //     "phone": "123-456-7890"
  //   }
  // }

  return (
    <div className="w-10/12 h-[80vh] m-auto my-12 flex items-center justify-center rounded-lg overflow-hidden relative">
      <img
        src={event?.image}
        alt="Latest Event"
        width={900}
        height={900}
        className="w-full h-full object-cover rounded-lg brightness-50"
      />

      <div className="absolute left-0 w-2/3 h-full pl-16 text-white text-left flex flex-col justify-center">
        <h1 className="text-5xl font-bold py-4">{event?.title}</h1>
        <p className="text-xl py-4">{event?.description}</p>
        <p className="text-lg py-1">
          Location:
          {event?.location}
        </p>
        <p className="text-lg py-1">Date: {event?.date} </p>
        <p className="text-lg py-1">Time: {event?.time}</p>
        <div className="my-4">
          <Button width={"w-48"} height={"h-14"} className="mt-8">
            Register Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;

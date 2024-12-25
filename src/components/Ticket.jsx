/* eslint-disable react/prop-types */
import { QRCodeSVG } from "qrcode.react";
import { Calendar, Clock, MapPin, Ticket } from "lucide-react";

const TicketSection = ({ ticket }) => {
  const ticketInfo = {
    id: `TKT-${ticket.date.split("-")[0]}-${ticket._id[2]}`,
    eventTitle: ticket.title,
    date: ticket.date.split("T")[0],
    time: ticket.time,
    location: ticket.location,
    username: JSON.parse(localStorage.getItem("user")).username,
    qrData: `${ticket._id.slice(0, 5)}USR${
      JSON.parse(localStorage.getItem("user")).id
    }`,
  };

  console.log(ticketInfo);

  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="flex flex-col md:flex-row">
          {/* Left Section - Event Info */}
          <div className="flex-grow p-8 space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-gray-900">
                {ticketInfo.eventTitle}
              </h2>
              <p className="text-sm text-gray-500">#{ticketInfo.id}</p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  icon: <Calendar className="w-5 h-5" />,
                  label: "Date",
                  value: new Date(ticketInfo.date).toLocaleDateString(),
                },
                {
                  icon: <Clock className="w-5 h-5" />,
                  label: "Time",
                  value: ticketInfo.time,
                },
                {
                  icon: <MapPin className="w-5 h-5" />,
                  label: "Location",
                  value: ticketInfo.location,
                },
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="text-primary-900">{item.icon}</div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {item.value}
                    </p>
                    <p className="text-xs text-gray-500">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t">
              <div className="flex items-center space-x-2">
                <Ticket className="w-5 h-5 text-primary-900" />
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {ticketInfo.username}
                  </p>
                  <p className="text-xs text-gray-500">Attendee</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - QR Code */}
          <div className="bg-gray-50 p-8 flex flex-col items-center justify-center border-t md:border-t-0 md:border-l">
            <QRCodeSVG
              value={ticketInfo.qrData}
              size={160}
              level="H"
              includeMargin={true}
            />
            <p className="mt-4 text-sm text-gray-500">Scan to verify ticket</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketSection;

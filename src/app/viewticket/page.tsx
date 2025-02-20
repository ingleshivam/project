import { ArrowLeft, RefreshCw, Search, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BookingHistory() {
  const tickets = [
    {
      type: "M-TICKET",
      fare: 10.0,
      source: "TUGALAKABAD",
      destination: "PALWAL",
      via: "",
      adult: 1,
      child: 0,
      class: "SECOND (II)",
      category: "ORDINARY (O)",
      bookingDate: "DEC 01, 2020",
      bookingId: "",
      isPaperless: true,
      isPaper: false,
    },
  ];

  return (
    <div className="min-h-screen bg-[#FF7F50]">
      {/* Header */}
      <div className="flex justify-between items-center px-4 py-3 text-white">
        <div className="flex items-center gap-4">
          <ArrowLeft className="w-6 h-6" />
          <h1 className="text-2xl font-bold">Booking History</h1>
        </div>
        <div className="flex gap-4">
          <RefreshCw className="w-6 h-6 text-black" />
          <Image
            src="/images/history.png"
            width={25}
            height={20}
            alt="Rail Icon"
          />
        </div>
      </div>

      {/* Booking History Section */}
      <div className="bg-white min-h-screen rounded-t-3xl pt-4">
        <div className="bg-[#FF7F50] mx-4 rounded-xl px-4 py-3 text-white flex items-center gap-2">
          <span className="text-2xl">
            <Image
              src="/images/785581.png"
              width={20}
              height={20}
              alt="Rail Icon"
            />
          </span>
          <span className="text-xl font-bold">BOOKING HISTORY</span>
        </div>

        {/* Tickets */}
        <div className="p-4 space-y-4">
          {tickets.map((ticket, index) => (
            <Link href="/trainticket" key={index}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer">
                {/* Ticket Header */}
                <div className="bg-[#FF7F50] flex justify-between px-4 py-2">
                  <div className="font-bold">JOURNEY ( {ticket.type} )</div>
                  <div className="font-bold">
                    FARE: ₹{ticket.fare.toFixed(2)}
                  </div>
                </div>

                {/* Ticket Content */}
                <div className="p-4 relative">
                  {/* Watermark */}
                  {ticket.isPaper && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 border-4 border-gray-400 rounded-full p-4 rotate-[-20deg]">
                      <span className="text-gray-400 font-bold whitespace-nowrap">
                        PAPER
                      </span>
                    </div>
                  )}
                  {ticket.isPaperless && (
                    <div className="absolute py-[50px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 border-4 border-gray-400 rounded-full p-4 rotate-[-20deg]">
                      <span className="text-gray-400 font-bold whitespace-nowrap">
                        PAPERLESS
                      </span>
                    </div>
                  )}

                  {/* Station Details */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex flex-row items-center gap-1">
                      <div className="w-8 h-8 rounded-full bg-[#FF7F50] flex items-center justify-center text-white ">
                        S
                      </div>
                      <div className="text-[#FF7F50]  whitespace-pre-line text-center">
                        {ticket.source}
                      </div>
                    </div>
                    <div className="flex-1 border-t-2 border-dashed border-gray-300 mt-4" />
                    <div className="flex flex-row items-center gap-1">
                      <div className="w-8 h-8 rounded-full bg-[#FF7F50] flex items-center justify-center text-white ">
                        D
                      </div>
                      <div className="text-[#FF7F50]  text-center">
                        {ticket.destination}
                      </div>
                    </div>
                  </div>

                  {/* Journey Details */}
                  <div className="space-y-2">
                    <div className="flex gap-2">
                      <span className="">Via:</span>
                      <span className="text-[#FF7F50]">{ticket.via}</span>
                    </div>
                    <div className="flex justify-between text-[14px]">
                      <div>
                        <span className="">ADULT:</span>
                        <span className="text-[#FF7F50] ml-1">
                          {ticket.adult}
                        </span>
                        <span className=" ml-4">CHILD:</span>
                        <span className="text-[#FF7F50] ml-1">
                          {ticket.child}
                        </span>
                      </div>
                      <div>
                        <span className="">{ticket.class}</span>
                        <span className=" ml-4">{ticket.category}</span>
                      </div>
                    </div>
                    <div className="flex text-[14px] justify-between pt-2 border-t border-gray-200">
                      <div>
                        <span className="">BOOKING DATE:</span>
                        <span className="text-[#FF7F50] ml-1">
                          {ticket.bookingDate}
                        </span>
                      </div>
                      {ticket.bookingId && (
                        <div>
                          <span className="">BOOKING ID:</span>
                          <span className="text-[#FF7F50] ml-1">
                            {ticket.bookingId}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex justify-between mt-4 pt-4 border-t border-gray-200">
                    <button className="flex items-center gap-2 text-[#FF7F50] ">
                      <ArrowRight className="w-5 h-5" />
                      BOOK AGAIN
                    </button>
                    <button className="flex items-center gap-2 text-[#FF7F50] ">
                      <Search className="w-5 h-5" />
                      NEXT TRAINS
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

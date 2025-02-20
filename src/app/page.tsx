"use client";
import Image from "next/image";
import { Bell } from "lucide-react";
import { useRouter } from "next/navigation";

export default function UTSBooking() {
  const router = useRouter();

  function handleclick(link: string) {
    if (link) {
      router.push(link);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#FF7043] text-white px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/rail.png"
            alt="UTS Logo"
            width={36}
            height={36}
            className="rounded-full "
          />
          <div>
            <h1 className="text-xl font-bold leading-tight tracking-wide">
              UTS
            </h1>
            <p className="text-[13px] leading-tight">IR Unreserved Ticketing</p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <span className="text-2xl font-medium">भा</span>
          <button className="bg-[#FF5722] px-2 py-1 rounded-full font-medium">
            <Bell className="w-5 rounded-full" />
          </button>
          <button className="px-1 text-[21px] text-black">⋮</button>
        </div>
      </div>

      {/* Navigation Icons */}
      <div className="grid grid-cols-5 bg-white py-4 px-2">
        {[
          {
            icon: (
              <Image
                src="/images/785581.png"
                width={20}
                height={20}
                alt="Rail Icon"
              />
            ),
            label: "Journey\nTicket",
          },
          {
            icon: (
              <Image
                src="/images/qrbooking.png"
                width={20}
                height={20}
                alt="Rail Icon"
              />
            ),
            label: "QR\nBooking",
          },
          {
            icon: (
              <Image
                src="/images/fastpass-removebg-preview.png"
                width={20}
                height={20}
                alt="Rail Icon"
              />
            ),
            label: "Quick\nBooking",
          },
          {
            icon: (
              <Image
                src="/images/images-removebg-preview.png"
                width={20}
                height={20}
                alt="Rail Icon"
              />
            ),
            label: "Platform\nTicket",
          },
          {
            icon: (
              <Image
                src="/images/4455781-200.png"
                width={20}
                height={20}
                alt="Rail Icon"
              />
            ),
            label: "Season\nTicket",
          },
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center gap-1.5">
            <div className="w-14 h-14 rounded-full bg-[#FF7043] flex items-center justify-center text-white text-2xl">
              {item.icon}
            </div>
            <span className="text-[11px] text-center font-medium whitespace-pre-line leading-tight">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-2 p-3">
        {[
          {
            icon: (
              <Image
                src="/images/1585.png"
                width={20}
                height={20}
                alt="Rail Icon"
              />
            ),
            label: "CANCEL TICKET",
            link: "",
          },
          {
            icon: (
              <Image
                src="/images/history.png"
                width={20}
                height={20}
                alt="Rail Icon"
              />
            ),
            label: "BOOKING HISTORY",
            link: "",
          },
          {
            icon: (
              <Image
                src="/images/785581.png"
                width={20}
                height={20}
                alt="Rail Icon"
              />
            ),
            label: "SHOW TICKET",
            link: "/viewticket",
          },
          {
            icon: (
              <Image
                src="/images/389795.png"
                width={20}
                height={20}
                alt="Rail Icon"
              />
            ),
            label: "R-WALLET",
            link: "",
          },
          {
            icon: (
              <Image
                src="/images/6522516.png"
                width={20}
                height={20}
                alt="Rail Icon"
              />
            ),
            label: "PROFILE",
            link: "",
          },
          {
            icon: (
              <Image
                src="/images/5566931.png"
                width={20}
                height={20}
                alt="Rail Icon"
              />
            ),
            label: "TRANSACTIONS",
            link: "",
          },
        ].map((item, i) => (
          <button
            key={i}
            className="bg-white p-1 space-y-1 flex flex-col items-center"
            onClick={() => handleclick(item.link)}
          >
            <span className="text-2xl">{item.icon}</span>
            <span className="text-[#FF5722] text-[12px] font-medium">
              {item.label}
            </span>
          </button>
        ))}
      </div>

      {/* Normal Booking Section */}
      <div className="px-3">
        <div className="bg-white rounded-lg shadow-[0_1px_2px_rgba(0,0,0,0.1)] overflow-hidden">
          <div className="bg-[#FF7043] text-white px-4 py-2">
            <h2 className="text-[15px] font-medium tracking-wide">
              NORMAL BOOKING
            </h2>
          </div>
          <div className="p-4">
            <div className="flex gap-6 mb-6">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="bookingType"
                  className="w-5 h-5 accent-[#FF5722]"
                  defaultChecked
                />
                <span className="text-[13px]">Book & Travel (Paperless)</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="bookingType"
                  className="w-5 h-5 accent-[#FF5722]"
                />
                <span className="text-[13px]">Book & Print (Paper)</span>
              </label>
            </div>

            <div className="flex items-center justify-around mb-8 px-4">
              <div className="text-center">
                <p className="text-[12px] text-gray-500">Depart from</p>
                <h3 className="text-1xl my-1">STN</h3>
                <p className="text-[12px] text-gray-500">Station Name</p>
              </div>
              <div className="flex gap-1">
                <span className="text-lg">
                  {" "}
                  <Image
                    src="/images/arrow-removebg-preview.png"
                    width={20}
                    height={20}
                    alt="Rail Icon"
                  />
                </span>
              </div>
              <div className="text-center">
                <p className="text-[12px] text-gray-500">Going to</p>
                <h3 className="text-1xl my-1">STN</h3>
                <p className="text-[12px] text-gray-500">Station Name</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="bg-[#FF7043] text-white py-2.5 rounded-full text-[13px] font-medium">
                NEXT TRAINS
              </button>
              <button className="bg-[#FF7043] text-white py-2.5 rounded-full text-[13px] font-medium">
                GET FARE
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Help Button */}
      <div className="fixed bottom-16 right-4">
        <button className="w-14 h-14 bg-[#FF5722] rounded-full flex items-center justify-center shadow-lg">
          <span className="text-white text-xl font-medium">?</span>
        </button>
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 w-full bg-white border-t py-1.5 px-4">
        <p className="text-[#FF5722] text-[11px] text-center">
          G.16.63 (15.1.41)
        </p>
        <div className="flex items-center justify-center gap-1 mt-0.5">
          <Image
            src="/images/cris.png"
            alt="CRIS Logo"
            width={16}
            height={16}
            className="opacity-70"
          />
          <p className="text-[11px] text-gray-600">
            Centre for Railway Information Systems (CRIS)
          </p>
        </div>
      </div>
    </div>
  );
}

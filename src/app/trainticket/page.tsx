"use client";
import { useRouter } from "next/navigation";
export default function TrainTicket() {
  const router = useRouter();

  return (
    <div className="h-screen bg-gray-100">
      <div className="max-w-md mx-auto h-full">

        {/* Ticket Content */}
        <div className="p-4">
          <div className="bg-[#ff47cc] rounded-lg p-4 text-black shadow-lg">
            <div className="border-b border-black/20 pb-4 mb-4">
              <h2 className="text-xl font-bold mb-4 border-b border-black/20">
                HAPPY JOURNEY
              </h2>
              <div className="text-center w-full">
                <p className="text-sm font-bold">JOURNEY</p>
              </div>

              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="font-bold">Rs. 15.00 /-</p>
                  <p className="text-md font-bold opacity-80">UTS NO.: XE6KCTO001</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">02/12/2020</p>
                  <p className="text-sm">9874865126</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-6 gap-4">  
                <div className="grid grid-rows-2 gap-4">  
                  <div className="flex items-center gap-4">  
                       <div style={{backgroundColor:"#F40076"}} className="rounded-full ml-2 w-6 h-6 flex item-center justify-center"><p className="text-sm opacity-80">S</p></div>  
                       <p className="text-sm opacity-80">Manmad मनमाड</p>  
                  </div>                
                <div className="flex items-center gap-4">  
                  <div style={{backgroundColor:"#F40076"}} className="rounded-full ml-2 w-6 h-6 flex item-center justify-center"><p className="text-sm opacity-80">D</p></div>           
                  <p className="text-sm">Parbhani परभणी</p>  
                </div>  
            </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  
                  <p className="font-bold">ADULT: 1 CHILD: 0</p>
                </div>
                
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-sm opacity-80">CLASS</p>
                  <p className="font-bold">द्वितीय SECOND (II)</p>
                </div>
                <div>
                  <p className="text-sm opacity-80">Train Type</p>
                  <p className="font-bold">मेल/ एक्सप्रेस Mail/Exp</p>
                </div>
                <div>
                  <p className="text-sm opacity-80">VIA</p>
                  <p className="font-bold">DDJ</p>
                </div>
              </div>

              <div className="text-xs opacity-80 pt-4 border-t space-y-2 border-black/20">
                <p className="text-[12px] border-b border-black/20">
                  SAC:<span className="font-bold">995411</span>{" "}
                  &nbsp;&nbsp;&nbsp;IR:{" "}
                  <span className="font-bold">27AAAGM0289X2XI</span>
                </p>
                <p>Commence Journey wihin 3 Hrs or Dept of First Train</p>
                <div className="text-[12px] flex justify-between">
                  <p className="font-bold">R27642 </p>
                  <p>Distance: 13km</p>
                </div>

                <p>
                  <span className="font-bold">Booking Time:</span> 02/12/2020
                  17:18
                </p>
              </div>
            </div>
          </div>
          <div className="text-xs text-blue-600 px-3 py-1 w-full bg-white">
            <p>
              It is recommended not to perform factory reset or change your
              handset whenever you are having ticket in the mobile. Click for{" "}
              <span className="underline">
                Changing Handset with Valid Ticket
              </span>
            </p>
            <div className="text-xs text-center text-red-500 p-2">
              FOR MEDICAL EMERGENCY / FIRST AID / SECURITY
              <br />
              STAFF / GUARD OR DIAL 138
            </div>
            {/* Bottom Buttons */}
            <div className="mt-4 space-y-2">
              <button className="w-full bg-[#ff7b5f] text-white py-3 rounded-full font-medium hover:opacity-90 transition-opacity">
                OPEN QR CODE
              </button>
              <button className="w-full bg-[#ff7b5f] text-white py-3 rounded-full font-medium hover:opacity-90 transition-opacity">
                NEXT TRAINS FROM SDAH
              </button>
              <button
                className="w-full bg-[#ff7b5f] text-white py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
                onClick={() => router.push("/")}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { BsFillLightningChargeFill } from "react-icons/bs";
import { PiSparkleFill } from "react-icons/pi";
import { IoIosLock } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import Avatar from "@/app/components/common/Avatar";
import Star from "@/public/assets/star.svg";
import Image from "next/image";

export default function Clients() {
    const sections = [
      {
        icon: <Avatar />,
        rating: 5,
        description: 'I cannot recommend this company enough! Their professionalism and attention to detail transformed our project, exceeding all expectations. The team was always available and eager to help.',
      },
      {
        icon: <Avatar />,
        rating: 5,
        description: 'Working with this team has been a game-changer for our business. They delivered exceptional service and innovative solutions that helped us streamline operations and improve results.',
      },
      {
        icon: <Avatar />,
        rating: 5,
        description: 'The level of expertise and dedication displayed by this company was remarkable. They listened to our needs and implemented effective strategies that made a significant difference.',
      }
    ];

    return (
      <div className="p-8 text-center bg-white">
        <h1 className="text-[30px] font-bold text-gray-950 mb-6">What Our Clients Say</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-items-center gap-6">
          {sections.map((section, index) => (
            <div key={index} className="p-4 justify-items-center">
              <div className="text-2xl mb-4 text-gray-900 border rounded-full p-2">{section.icon}</div>

                <div className="flex">
                    <Image className="w-5" src={Star} alt="Star" />
                    <Image className="w-5" src={Star} alt="Star" />
                    <Image className="w-5" src={Star} alt="Star" />
                    <Image className="w-5" src={Star} alt="Star" />
                    <Image className="w-5" src={Star} alt="Star" />
                </div>

                <p className="text-gray-600 my-2">{section.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

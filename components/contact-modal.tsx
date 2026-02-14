import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { User, Mail, Briefcase, Phone } from "lucide-react";
import charos from "@/public/images/team/charos.jpg";

interface ContactModalProps {
  isOpen: boolean;

  onClose: () => void;
}

export function ContactDialog({ isOpen, onClose }: ContactModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="text-white hover:text-gray-400 hover:bg-yellow-500 transition duration-300 ease-in-out bg-yellow-500 px-4 py-2 rounded-[3px] cursor-pointer border-none"
        >
          Contact Us
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] shadow-2xl rounded-xl z-[10000]">
        <DialogHeader className="text-center">
          <DialogTitle className="text-2xl font-bold text-gray-800 mb-4">
            Our Contact Representative
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col items-center space-y-6 p-6 ">
          <div className="w-48 h-48 overflow-hidden rounded-full border-4 border-blue-500 shadow-lg">
            <Image
              src={charos}
              alt="Contact Representative"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="text-left space-y-4">
            <div className="flex items-center space-x-2">
              <User className="text-blue-600" />
              <h2 className="text-xl font-semibold text-gray-700">
                Abdusattorova Charos
              </h2>
            </div>

            <div className="flex items-center space-x-2">
              <Briefcase className="text-green-600" />
              <p className="text-gray-600">Head of the Organizing Committee</p>
            </div>

            <div className="flex items-center space-x-2">
              <Mail className="text-red-600" />
              <a
                href="mailto:info@olympcenter.uz"
                className="text-blue-500 hover:underline"
              >
                info@olympcenter.uz
              </a>
            </div>

            <div className="flex items-center space-x-2">
              <Phone className="text-green-600" />
              <a
                href="https://wa.me/998775503366"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp: +998775503366
              </a>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ContactDialog;

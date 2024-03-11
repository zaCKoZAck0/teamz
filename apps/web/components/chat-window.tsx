"use client";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { Tooltip } from "@nextui-org/tooltip";
import { Badge } from "@nextui-org/badge";
import { Textarea } from "@nextui-org/input";
import { Checkbox } from "@nextui-org/checkbox";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import { Divider } from "@nextui-org/divider";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/popover";
import { TextBox } from "./text-box";
import { useState } from "react";

export type MessageState = {
  message: string;
  replying: boolean;
  replyingTo: string;
  forwarded: boolean;
};

export function ChatWindow() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [state, setState] = useState({ message: "" });
  return (
    <section className="flex relative flex-col items-center h-[100vh-64px] w-full">
      <div className="text-4xl w-full text-slate-700 font-bold p-3 px-8 border-b border-slate-300 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Badge
            content=""
            color="success"
            shape="circle"
            placement="bottom-right"
          >
            <Avatar
              src="https://i.pravatar.cc/150?u=a04258114e29026302d"
              size="lg"
            />
          </Badge>
          John Doe
          <Button
            variant="bordered"
            size="md"
            className="text-2xl text-slate-500 font-medium"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
              <path d="M14 2v4a2 2 0 0 0 2 2h4" />
            </svg>
            Files
          </Button>
          <Tooltip content="Add to Conversation" placement="bottom">
            <Button isIconOnly variant="light" className="text-slate-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
            </Button>
          </Tooltip>
        </div>
      </div>
      <div className="h-full flex flex-col gap-2 overflow-y-scroll container-snap w-full max-w-4xl px-1 py-2">
        <div className="flex items-start gap-2">
          <Badge
            content=""
            color="success"
            shape="circle"
            placement="bottom-right"
          >
            <Avatar
              src="https://i.pravatar.cc/150?u=a04258114e29026302d"
              size="md"
            />
          </Badge>
          <div className="flex flex-col gap-1">
            <p className="text-sm text-slate-500">John Doe</p>
            <p className="bg-gray-100 p-2 px-5 rounded-t-md ">
              We need a break
            </p>
            <p className="bg-gray-100 p-2 px-4 rounded-b-md ">
              It is late at night
            </p>
          </div>
        </div>
        <div className="w-full flex justify-end">
          <div className="flex items-start gap-2 just">
            <div className="flex flex-col items-end gap-2">
              <span className="block text-xs text-gray-700">
                Yesterday 8:30 PM
              </span>
              <div className="group relative flex flex-col items-end">
                <div className="z-[999] absolute translate-y-[-80%] group-hover:flex gap-2 hidden">
                  <div className="bg-background rounded-md p-1 flex items-center gap-0.5 shadow-md border border-gray-300">
                    <div className="flex items-center gap-3 text-2xl mx-1">
                      {["❤️", "👍", "🎉", "😂"].map((item) => (
                        <button
                          className="hover:scale-125 transition-transform hover:-translate-y-1"
                          key={item}
                        >
                          {item}
                        </button>
                      ))}
                      <Popover placement="bottom" radius="sm">
                        <PopoverTrigger>
                          <Button
                            isIconOnly
                            variant="light"
                            size="sm"
                            radius="md"
                            className="text-savoy_blue-600"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="22"
                              height="22"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path d="M22 11v1a10 10 0 1 1-9-10" />
                              <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                              <line x1="9" x2="9.01" y1="9" y2="9" />
                              <line x1="15" x2="15.01" y1="9" y2="9" />
                              <path d="M16 5h6" />
                              <path d="M19 2v6" />
                            </svg>
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="bg-transparent border-none shadow-none outline-none">
                          <Picker
                            data={data}
                            previewPosition={"none"}
                            skinTonePosition={"none"}
                            onEmojiSelect={console.log}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <Divider orientation="vertical" className="mx-1" />
                    <Button
                      isIconOnly
                      variant="light"
                      title="Delete"
                      size="sm"
                      radius="md"
                      className="text-savoy_blue-600"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M3 6h18" />
                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                      </svg>
                    </Button>
                    <Popover placement="bottom" radius="sm">
                      <PopoverTrigger>
                        <Button
                          isIconOnly
                          variant="light"
                          title="More Options"
                          size="sm"
                          radius="md"
                          className="text-savoy_blue-600"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <circle cx="12" cy="12" r="1" />
                            <circle cx="19" cy="12" r="1" />
                            <circle cx="5" cy="12" r="1" />
                          </svg>
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="text-left py-2">
                        <Button
                          variant="light"
                          size="sm"
                          className="text-gray-700 text-left justify-start text-sm group"
                          fullWidth
                          startContent={
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="group-hover:text-savoy_blue-600"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <polyline points="9 17 4 12 9 7" />
                              <path d="M20 18v-2a4 4 0 0 0-4-4H4" />
                            </svg>
                          }
                        >
                          Reply
                        </Button>
                        <Button
                          variant="light"
                          size="sm"
                          className="text-gray-700 text-left justify-start text-sm group"
                          fullWidth
                          startContent={
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="group-hover:text-savoy_blue-600"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <polyline points="15 17 20 12 15 7" />
                              <path d="M4 18v-2a4 4 0 0 1 4-4h12" />
                            </svg>
                          }
                        >
                          Forward
                        </Button>
                        <Button
                          variant="light"
                          size="sm"
                          className="text-gray-700 text-left justify-start text-sm group"
                          fullWidth
                          startContent={
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="group-hover:text-savoy_blue-600"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path d="M9 17H7A5 5 0 0 1 7 7h2" />
                              <path d="M15 7h2a5 5 0 1 1 0 10h-2" />
                              <line x1="8" x2="16" y1="12" y2="12" />
                            </svg>
                          }
                        >
                          Copy Link
                        </Button>
                        <Button
                          variant="light"
                          size="sm"
                          className="text-gray-700 text-left justify-start text-sm group"
                          fullWidth
                          startContent={
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="group-hover:text-savoy_blue-600"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                              <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                              <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                              <line x1="2" x2="22" y1="2" y2="22" />
                            </svg>
                          }
                        >
                          Mark as unread
                        </Button>
                        <Button
                          variant="light"
                          size="sm"
                          className="text-gray-700 text-left justify-start text-sm group"
                          fullWidth
                          startContent={
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="group-hover:text-savoy_blue-600"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <line x1="12" x2="12" y1="17" y2="22" />
                              <path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z" />
                            </svg>
                          }
                        >
                          Pin
                        </Button>
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>

                <p className="bg-lavender_(web) p-2 px-5 rounded-t-md  max-w-[95%]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Debitis, fugiat labore unde inventore voluptatum rerum ipsum
                  sed similique nesciunt ad, enim dolore facere accusamus iste
                  doloribus qui vitae amet ab.
                </p>
              </div>
              <p className="bg-lavender_(web) p-2 px-4 flex gap-2 items-center italic max-w-[95%]">
                This message has been deleted.
                <Button
                  variant="light"
                  className="text-savoy_blue text-medium font-semibold"
                  size="sm"
                >
                  Undo
                </Button>
              </p>
              <p className="bg-lavender_(web) p-2 px-4 rounded-b-md  max-w-[95%]">
                It is late at night
              </p>
              <p className="text-lavender_(web)-400 flex items-end text-sm gap-0.5">
                Seen
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </p>
              <p className="text-lavender_(web)-400 flex items-end text-sm gap-0.5">
                Sent
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </p>
            </div>
          </div>
        </div>
      </div>
      <TextBox />
    </section>
  );
}

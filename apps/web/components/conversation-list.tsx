"use client";
import { Button } from "@nextui-org/button";
import { Tooltip } from "@nextui-org/tooltip";
import { Avatar } from "@nextui-org/avatar";
import { Badge } from "@nextui-org/badge";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@nextui-org/dropdown";
import Link from "next/link";

export default function ConversationList() {
  return (
    <div className="w-full max-w-md border-t-0 border-l-0 ml-20 h-[calc(100vh-64px)] bg-anti-flash_white border border-slate-300 ">
      <h2 className="text-3xl text-slate-700 font-bold p-5 px-8 border-b border-slate-300 flex justify-between">
        Chat
        <div className="flex items-center gap-2">
          <Tooltip content="Start Conversation">
            <Button className="text-slate-500" isIconOnly variant="light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                <path d="M12 7v6" />
                <path d="M9 10h6" />
              </svg>
            </Button>
          </Tooltip>
          <Tooltip content="Mark all as read">
            <Button className="text-slate-500" isIconOnly variant="light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m3 17 2 2 4-4" />
                <path d="m3 7 2 2 4-4" />
                <path d="M13 6h8" />
                <path d="M13 12h8" />
                <path d="M13 18h8" />
              </svg>
            </Button>
          </Tooltip>

          <Dropdown>
            {/* <Tooltip content="Sort"> */}
            <DropdownTrigger>
              <Button className="text-slate-500" isIconOnly variant="light">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m3 16 4 4 4-4" />
                  <path d="M7 20V4" />
                  <path d="M11 4h10" />
                  <path d="M11 8h7" />
                  <path d="M11 12h4" />
                </svg>
              </Button>
            </DropdownTrigger>
            {/* </Tooltip> */}

            <DropdownMenu aria-label="Static Actions">
              <DropdownItem key="recent">Recent First</DropdownItem>
              <DropdownItem key="unread">Unread First</DropdownItem>
              <DropdownItem key="alphabetical">Alphabetical Names</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </h2>
      <ConversationGroup title="Pinned" />
      <ConversationGroup title="Recent" />
    </div>
  );
}

function ConversationGroup({ title }: { title: string }) {
  return (
    <div className="flex flex-col gap-1">
      <h3 className="p-3 px-8 text-slate-400">{title}</h3>
      <ConversationItem />
    </div>
  );
}

function ConversationItem() {
  return (
    <div className="p-1 pt-0 w-full">
      <Link href="/conversation/123456787654">
        <div className="flex items-center py-1 rounded-md bg-alice_blue-900 hover:bg-alice_blue-500 border-slate-300 border w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12.1" cy="12.1" r="1" />
          </svg>
          <Badge
            content=""
            color="success"
            shape="circle"
            placement="bottom-right"
          >
            <Avatar
              className="flex-shrink-0"
              src="https://i.pravatar.cc/150?u=a04258114e29026302d"
              size="lg"
            />
          </Badge>
          <div className="pl-3 pr-7 flex flex-col w-full">
            <div className="flex justify-between items-center w-full">
              <p className="text-slate-700 font-semibold">John Doe</p>
              <p className="text-slate-500 text-sm">3/12</p>
            </div>
            <p className="text-slate-500 font-bold">Hey, how are you?</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

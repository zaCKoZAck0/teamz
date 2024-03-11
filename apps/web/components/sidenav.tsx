"use client";
import Link from "next/link";
import React, { useState } from "react";

export const SideNav = () => {
  const [selectedItem, setSelectedItem] = useState("");

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
  };

  return (
    <div className="w-20 absolute top-0 pt-16 bg-alice_blue h-screen border border-gray-300">
      <ul>
        <li
          className={`cursor-pointer border-l-3 py-2 ${
            selectedItem === "For You"
              ? "text-savoy_blue border-l-savoy_blue"
              : "text-slate-500 border-l-transparent"
          }`}
          onClick={() => handleItemClick("For You")}
        >
          <span className="flex flex-col gap-1 items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill={selectedItem === "For You" ? "currentColor" : "none"}
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
              <path d="M5 3v4" />
              <path d="M19 17v4" />
              <path d="M3 5h4" />
              <path d="M17 19h4" />
            </svg>
            <p className="text-sm">For You</p>
          </span>
        </li>
        <li
          className={`cursor-pointer border-l-3 py-2 ${
            selectedItem === "Activity"
              ? "text-savoy_blue border-l-savoy_blue"
              : "text-slate-500 border-l-transparent"
          }`}
          onClick={() => handleItemClick("Activity")}
        >
          <span className="flex flex-col gap-1 items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 24 24"
              fill={selectedItem === "Activity" ? "currentColor" : "none"}
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
            </svg>
            <p className="text-sm">Activity</p>
          </span>
        </li>
        <Link href="/conversation">
          <li
            className={`cursor-pointer border-l-3 py-2 ${
              selectedItem === "Chat"
                ? "text-savoy_blue border-l-savoy_blue"
                : "text-slate-500 border-l-transparent"
            }`}
            onClick={() => handleItemClick("Chat")}
          >
            <span className="flex flex-col gap-1 items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill={selectedItem === "Chat" ? "currentColor" : "none"}
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                <path
                  stroke={
                    selectedItem === "Chat"
                      ? "rgb(229 236 242)"
                      : "currentColor"
                  }
                  d="M13 8H7"
                />
                <path
                  stroke={
                    selectedItem === "Chat"
                      ? "rgb(229 236 242)"
                      : "currentColor"
                  }
                  d="M17 12H7"
                />
              </svg>
              <p className="text-sm">Chat</p>
            </span>
          </li>
        </Link>
      </ul>
    </div>
  );
};

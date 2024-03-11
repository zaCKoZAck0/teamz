import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { Textarea } from "@nextui-org/input";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/popover";
import { Tooltip } from "@nextui-org/tooltip";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

export function TextBox() {
  return (
    <div className="bottom-0 w-full max-w-3xl fixed z-10 p-4 flex flex-col gap-0.5">
      <div className="flex items-center gap-1">
        <Popover placement="top" showArrow radius="sm">
          <PopoverTrigger>
            <Button
              isIconOnly
              variant="light"
              title="Attach file"
              size="sm"
              radius="full"
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
                <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
              </svg>
            </Button>
          </PopoverTrigger>

          <PopoverContent>
            <ul className="py-2">
              <li>
                <Button
                  variant="light"
                  fullWidth
                  startContent={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="17 8 12 3 7 8" />
                      <line x1="12" x2="12" y1="3" y2="15" />
                    </svg>
                  }
                >
                  Upload from this device
                </Button>
              </li>
            </ul>
          </PopoverContent>
        </Popover>
        <Tooltip content="Emoji" placement="top">
          <Button
            isIconOnly
            variant="light"
            size="sm"
            radius="full"
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
              <path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z" />
              <path d="m14 7 3 3" />
              <path d="M5 6v4" />
              <path d="M19 14v4" />
              <path d="M10 2v2" />
              <path d="M7 8H3" />
              <path d="M21 16h-4" />
              <path d="M11 3H9" />
            </svg>
          </Button>
        </Tooltip>
        <Button
          isIconOnly
          variant="light"
          size="sm"
          radius="full"
          className="text-savoy_blue-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12.75 8.25v7.5m6-7.5h-3V12m0 0v3.75m0-3.75H18M9.75 9.348c-1.03-1.464-2.698-1.464-3.728 0-1.03 1.465-1.03 3.84 0 5.304 1.03 1.464 2.699 1.464 3.728 0V12h-1.5M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
            />
          </svg>
        </Button>
        <Popover placement="top">
          <PopoverTrigger>
            <Button
              isIconOnly
              variant="light"
              size="sm"
              radius="full"
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
                <circle cx="12" cy="12" r="10" />
                <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                <line x1="9" x2="9.01" y1="9" y2="9" />
                <line x1="15" x2="15.01" y1="9" y2="9" />
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
      <div className="gap-1 flex items-center justify-center">
        <Textarea
          variant="underlined"
          minRows={1}
          size="lg"
          classNames={{
            innerWrapper: "px-2 flex flex-col gap-1",
            input: "text-slate-700  text-lg",
          }}
          startContent={
            <div className="flex flex-col gap-1">
              <div className="flex gap-1 items-center">
                <Button
                  size="sm"
                  startContent={
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
                      <path d="M8 3H2v15h7c1.7 0 3 1.3 3 3V7c0-2.2-1.8-4-4-4Z" />
                      <path d="m16 12 2 2 4-4" />
                      <path d="M22 6V3h-6c-2.2 0-4 1.8-4 4v14c0-1.7 1.3-3 3-3h7v-2.3" />
                    </svg>
                  }
                  variant="bordered"
                  className="text-sm border-1 font-semibold text-savoy_blue-600 p-1 h-fit"
                >
                  Fix Grammar
                </Button>
                <Divider
                  orientation="vertical"
                  className="bg-gray-900 px-2 z-10"
                />
                <Button
                  size="sm"
                  variant="bordered"
                  className="text-sm border-1 font-semibold text-savoy_blue-600 p-1 h-fit"
                  startContent={
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
                      <path d="M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20" />
                      <path d="M19.8 17.8a7.5 7.5 0 0 0 .003-10.603" />
                      <path d="M17 15a3.5 3.5 0 0 0-.025-4.975" />
                    </svg>
                  }
                >
                  Formal
                </Button>
                <Button
                  size="sm"
                  variant="bordered"
                  className="text-sm border-1 font-semibold text-savoy_blue-600 p-1 h-fit"
                  startContent={
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
                      <path d="M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20" />
                      <path d="M19.8 17.8a7.5 7.5 0 0 0 .003-10.603" />
                      <path d="M17 15a3.5 3.5 0 0 0-.025-4.975" />
                    </svg>
                  }
                >
                  Humorous
                </Button>
                <Button
                  size="sm"
                  variant="bordered"
                  className="text-sm border-1 font-semibold text-savoy_blue-600 p-1 h-fit"
                  startContent={
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
                      <path d="M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20" />
                      <path d="M19.8 17.8a7.5 7.5 0 0 0 .003-10.603" />
                      <path d="M17 15a3.5 3.5 0 0 0-.025-4.975" />
                    </svg>
                  }
                >
                  Passionate
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600 flex gap-1 items-center">
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
                    <polyline points="9 17 4 12 9 7" />
                    <path d="M20 18v-2a4 4 0 0 0-4-4H4" />
                  </svg>
                  Reply to
                  <b>John Doe</b>
                </p>
                <Button
                  isIconOnly
                  variant="light"
                  title="Cancel reply"
                  size="sm"
                  className="text-gray-500"
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
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </Button>
              </div>
              <p className="bg-gray-100 p-2 px-5 rounded-t-md border-b-4 border-b-savoy_blue">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis, fugiat labore unde inventore voluptatum rerum ipsum sed
                similique nesciunt ad, enim dolore facere accusamus iste
                doloribus qui vitae amet ab.
              </p>
            </div>
          }
          endContent={
            <div className="flex items-center gap-2 bg-gray-100 text-gray-400 rounded-md border border-gray-200 px-2 py-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                <path d="M14 2v4a2 2 0 0 0 2 2h4" />
              </svg>
              <ul>
                <li className="text-sm font-bold text-gray-700">
                  File Name.txt
                </li>
                <li className="text-xs text-gray-600">2MB</li>
              </ul>
              <Button
                isIconOnly
                variant="light"
                size="sm"
                className="text-gray-500"
              >
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
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </Button>
            </div>
          }
          className="h-fit shadow-sm shadow-alice_blue border border-slate-300 rounded-t-md"
          placeholder="Type a new message"
        />
        <Button isIconOnly variant="light" size="lg" className="text-slate-600">
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
            <path d="m3 3 3 9-3 9 19-9Z" />
            <path d="M6 12h16" />
          </svg>
        </Button>
      </div>
    </div>
  );
}

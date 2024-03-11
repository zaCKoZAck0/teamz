"use client";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import React from "react";
import Link from "next/link";
import {
  EyeIcon,
  EyeOffIcon,
  GitPullRequestIcon,
  GithubIcon,
  KeyIcon,
  KeyRoundIcon,
  LockIcon,
} from "lucide-react";
import { Progress } from "@nextui-org/progress";
export default function OptionsPage() {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <div className="w-full flex flex-col items-center gap-3 relative">
      <Progress
        size="sm"
        isIndeterminate
        aria-label="Loading..."
        className="max-w-sm absolute z-[calc(infinity-1)]"
      />
      <Card radius="none" shadow="sm" className="w-full max-w-sm p-4">
        <CardHeader className="flex gap-4 flex-col items-start">
          <div className="font-semibold text-sm flex items-center gap-1">
            <GitPullRequestIcon className="text-primary" /> ZACKOZACK
          </div>
          <h1 className="text-2xl font-bold">Sign-in Options</h1>
        </CardHeader>
        <CardBody className="flex flex-col">
          <Button
            radius="none"
            variant="light"
            size="lg"
            className="text-left justify-start text-md h-fit py-4"
            startContent={<GithubIcon size={36} strokeWidth={1.5} />}
          >
            Sign in with GitHub
          </Button>
          <Button
            radius="none"
            variant="light"
            size="lg"
            className="text-left justify-start text-md h-fit py-4"
            startContent={<KeyRoundIcon size={36} strokeWidth={1.5} />}
          >
            Forgot my password
          </Button>
        </CardBody>
        <CardFooter className="flex justify-end">
          <Button
            radius="none"
            className="w-fit"
            onClick={() => {
              console.log("Register button clicked");
            }}
          >
            Back
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

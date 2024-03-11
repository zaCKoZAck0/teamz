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
  KeyIcon,
  KeyRoundIcon,
} from "lucide-react";
import { Progress } from "@nextui-org/progress";
export default function LoginPage() {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <div className="w-full flex flex-col items-center gap-3">
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
          <h1 className="text-2xl font-bold">Sign in</h1>
        </CardHeader>
        <CardBody className="flex flex-col gap-2">
          <Input
            type="email"
            radius="none"
            label="Email"
            variant="underlined"
            isInvalid={false}
            errorMessage={""}
          />
          <Input
            label="Password"
            variant="underlined"
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
              >
                {isVisible ? (
                  <EyeOffIcon className="text-xl text-default-400 pointer-events-none" />
                ) : (
                  <EyeIcon className="text-xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            type={isVisible ? "text" : "password"}
          />
          <div className="text-sm">
            No account?{" "}
            <a className="text-primary" href="/auth/register">
              Register
            </a>
          </div>
        </CardBody>
        <CardFooter className="flex justify-end">
          <Button
            color="primary"
            radius="none"
            className="w-fit"
            onClick={() => {
              console.log("Register button clicked");
            }}
          >
            Sign in
          </Button>
        </CardFooter>
      </Card>

      <Card radius="none" className="w-full max-w-sm p-4">
        <Link href="/auth/options">
          <div className="flex items-center gap-2 px-2">
            <KeyRoundIcon /> Sign-in options
          </div>
        </Link>
      </Card>
    </div>
  );
}

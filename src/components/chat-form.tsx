"use client";

import { ChangeEvent, FormEvent } from "react";

import { ChatRequestOptions } from "ai";

import { SendHorizonal } from "lucide-react";

import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";

interface ChatFormProps {
  input: string;
  onSubmit: (
    e: FormEvent<HTMLFormElement>,
    chatRequestOptions?: ChatRequestOptions | undefined
  ) => void;
  handleInputChange: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void;
  isLoading: boolean;
}

export const ChatForm = ({
  input,
  onSubmit,
  handleInputChange,
  isLoading,
}: ChatFormProps) => {
  return (
    <form
      onSubmit={onSubmit}
      className="border-t border-primary/10 py-4 flex items-center gap-x-2"
    >
      <Input
        value={input}
        onChange={handleInputChange}
        placeholder="Type a message"
        disabled={isLoading}
        className="rounded-lg bg-primary/10"
      />
      <Button disabled={isLoading} variant="ghost">
        <SendHorizonal className="h-6 w-6" />
      </Button>
    </form>
  );
};

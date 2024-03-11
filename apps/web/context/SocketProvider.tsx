"use client";

import React, { useCallback, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

interface SocketProviderProps {
  children?: React.ReactNode;
}

interface SocketContextProps {
  sendMessage: (message: string) => any;
  messages: string[];
}

const SocketContext = React.createContext<SocketContextProps | null>(null);

export const SocketProvider: React.FC<SocketProviderProps> = ({ children }) => {
  const [messages, setMessages] = useState<string[]>([]);
  const [socket, setSocket] = useState<Socket | null>(null);

  const sendMessage: SocketContextProps["sendMessage"] = useCallback(
    (message) => {
      console.log(`[Message Service] Sending message: ${message}`);
      if (socket) {
        socket.emit("event:message", { message });
      }
    },
    [socket]
  );

  const onMessage = useCallback((message: string) => {
    console.log(`[Message Service] Received message from Server: ${message}`);
    setMessages((prev) => [...prev, message]);
  }, []);

  useEffect(() => {
    const _socket = io("http://localhost:8000");
    _socket.on("event:message", onMessage);
    setSocket(_socket);
    return () => {
      _socket.disconnect();
      _socket.off("message", onMessage);
      setSocket(null);
    };
  }, []);

  return (
    <SocketContext.Provider value={{ sendMessage, messages }}>
      {children}
    </SocketContext.Provider>
  );
};

export function useSocket() {
  const context = React.useContext(SocketContext);
  if (!context) {
    throw new Error("useSocket must be used within a SocketProvider");
  }
  return context;
}

import { useState, useEffect, useRef, useMemo } from "react";
import { useAppSelector } from "redux/hooks.ts/hooks";
import io, { Socket } from "socket.io-client";


const useSecondSocket = (): Socket | null => {
  // Adjusted return type to include null
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJhYnlmYXQyIiwiaWQiOiI2NmVmZjMwYWUyYmQ4ZDViZWUzN2ZlMTEiLCJpYXQiOjE3MjcwMDEzNjJ9.ZmrqMED6aLAc0savXLBR6XkajWyKt4CQ_O-j-b9WgLA";
  const socketRef = useRef<Socket | null>(null); // Explicitly allow null here

  useMemo(() => {
    if (token) {
      const newSocket = io(process.env.EXPO_PUBLIC_API_URL as string, {
        autoConnect: true,
        auth: {
          token,
        },
      });
      socketRef.current = newSocket; // This should not cause an error
    } else {
      socketRef.current = null; // Explicitly setting to null when there's no token
    }
  }, [token]);

  return socketRef.current;
};

export default useSecondSocket;

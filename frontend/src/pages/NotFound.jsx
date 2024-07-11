import { Button } from "@/components/ui/button";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-900">404</h1>
      <p className="mt-4 text-xl text-gray-700">Page Not Found</p>
      <Button className="mt-8" onClick={() => (window.location.href = "/")}>
        Go Home
      </Button>
    </div>
  );
};

export default NotFound;

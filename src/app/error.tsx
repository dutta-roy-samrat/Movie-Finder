"use client";

import Button from "@/components/ui/button";

const Error = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Something went wrong !</h1>
      <p className="text-sm text-gray-500 mb-4">
        Please try refreshing the page or contact the support for help, if issue
        persists.
      </p>
      <Button onClick={() => window.location.reload()} variant="danger">
        Try again
      </Button>
    </div>
  );
};

export default Error;

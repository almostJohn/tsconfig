"use client";

import * as React from "react";

export default function NotFound() {
  return (
    <div className="mx-auto h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center space-y-12">
        <h1 className="text-3xl font-bold md:text-6xl">404</h1>
      </div>
      <p className="text-2xl/relaxed text-slate-500 font-medium">Page not Found.</p>
    </div>
  );
}
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Toolbar from "../components/Overview/Toolbar";
import DynamicContent from "../components/Overview/DynamicContent";

export default function OverviewPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentView, setCurrentView] = useState(
    searchParams.get("view") || "grid"
  );

  // ---------------------
  // ✅ Change
  // ---------------------
  useEffect(() => {
    setSearchParams({ view: currentView });
  }, [currentView, setSearchParams]);

  // ---------------------
  // ✅ Render
  // ---------------------
  return (
    <main className="w-full flex justify-center text-white min-h-screen bg-transparent">

      <div className="w-[95%] xl:w-[90%] 2xl:w-[71%] pt-10">
        {/* 🛠️ Toolbar Section */}
        <Toolbar currentView={currentView} setCurrentView={setCurrentView} />

        {/* 📑 Dynamic Content Area */}
        <DynamicContent currentView={currentView} />
      </div>
    </main>
  );
}

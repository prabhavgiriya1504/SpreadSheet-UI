import React from "react";
import { Link2, RefreshCcw, Brain, Sparkles, Download, Plus } from 'lucide-react';

const data = [
  {
    jobRequest: "Launch social media campaign for pro...",
    submitted: "15-11-2024",
    status: "In-process",
    submitter: "Aisha Patel",
    url: "www.aishapatel...",
    assigned: "Sophie Choudhury",
    priority: "Medium",
    dueDate: "20-11-2024",
    estValue: "6,200,000 ₹",
  },
  {
    jobRequest: "Update press kit for company redesign",
    submitted: "28-10-2024",
    status: "Need to start",
    submitter: "Irfan Khan",
    url: "www.irfankhanp...",
    assigned: "Tejas Pandey",
    priority: "High",
    dueDate: "30-10-2024",
    estValue: "3,500,000 ₹",
  },
  {
    jobRequest: "Finalize user testing feedback for app...",
    submitted: "05-12-2024",
    status: "In-process",
    submitter: "Mark Johnson",
    url: "www.markjohns...",
    assigned: "Rachel Lee",
    priority: "Medium",
    dueDate: "10-12-2024",
    estValue: "4,750,000 ₹",
  },
  {
    jobRequest: "Design new features for the website",
    submitted: "10-01-2025",
    status: "Complete",
    submitter: "Emily Green",
    url: "www.emilygreen...",
    assigned: "Tom Wright",
    priority: "Low",
    dueDate: "15-01-2025",
    estValue: "5,900,000 ₹",
  },
  {
    jobRequest: "Prepare financial report for Q4",
    submitted: "25-01-2025",
    status: "Blocked",
    submitter: "Jessica Brown",
    url: "www.jessicabro...",
    assigned: "Kevin Smith",
    priority: "Low",
    dueDate: "30-01-2025",
    estValue: "2,800,000 ₹",
  },
];

const statusColors = {
  "In-process": "bg-yellow-100 text-yellow-600",
  "Need to start": "bg-blue-100 text-blue-600",
  Complete: "bg-green-100 text-green-600",
  Blocked: "bg-red-100 text-red-600",
};

const priorityColors = {
  Medium: "text-yellow-600 font-semibold",
  High: "text-red-600 font-semibold",
  Low: "text-blue-600 font-semibold",
};

export default function JobRequestTable() {
  return (
   <div className="flex w-full text-sm font-medium text-gray-700">
      {/* Start Spacing */}
      <div className="px-2 py-1 border border-[#eeeeee]" style={{ width: "30px" }}></div>

      {/* Q3 Financial Overview */}
      <div
        className="flex px-2 py-1 truncate gap-2 items-center bg-[#e2e2e2] border border-[#eeeeee]"
        style={{ width: "695px" }}
      >
        <Link2 size={14} className="text-blue-600" />
        <span className="truncate">Q3 Financial Overview</span>
        <RefreshCcw size={14} className=" text-orange-500" />
      </div>

      {/* Spaceing before ABC */}
      <div className="border border-[#eeeeee]" style={{ width: "143px" }}></div>

      {/* ABC */}
      <div
        className="flex items-center justify-center gap-1 px-2 py-1 bg-[#d2e0d4] border border-[#eeeeee] cursor-pointer"
        style={{ width: "140px" }}
      >
        <Brain size={14} className="text-gray-600" />
        <span>ABC</span>
      </div>

      {/* Answer a question */}
      <div
        className="flex items-center justify-center gap-1 px-2 py-1 bg-[#DCCFFC] border border-[#eeeeee] cursor-pointer"
        style={{ width: "280px" }}
      >
        <Sparkles size={14} className="text-gray-600" />
        <span>Answer a question</span>
      </div>

      {/* Extract */}
      <div
        className="flex items-center justify-center gap-1 px-2 py-1 bg-[#fac2af] border border-[#eeeeee] cursor-pointer"
        style={{ width: "140px" }}
      >
        <Download size={14} className="text-gray-600" />
        <span>Extract</span>
      </div>

      {/* + Button */}
      <div
        className="flex items-center justify-center px-2 py-1 bg-[#eeeeee] border border-[#eeeeee] cursor-pointer"
        style={{ width: "140px" }}
      >
        <Plus size={16} className="text-gray-700" />
      </div>
    </div>

  );
}






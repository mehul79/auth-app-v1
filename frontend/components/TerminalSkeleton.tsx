import {
  Terminal,
} from "@/components/magicui/terminal";

export function TerminalSkeleton() {
  return (
    <Terminal className="animate-pulse">
      {/* Command Line Placeholder */}
      <div className="grid gap-4">
      <div className="h-3.5 bg-gray-700 rounded w-3/4"></div>
      {/* Loading Lines */}
      <div className="h-3 bg-gray-700 rounded w-5/6"></div>
      <div className="h-3 bg-gray-700 rounded w-4/6"></div>
      <div className="h-3 bg-gray-700 rounded w-2/3"></div>
      <div className="h-3 bg-gray-700 rounded w-5/6"></div>
      <div className="h-3 bg-gray-700 rounded w-3/4"></div>
      <div className="h-3 bg-gray-700 rounded w-4/6"></div>

      {/* File Update Placeholder */}
      <div className="h-3 bg-gray-700 rounded w-1/2"></div>
      <div className="h-3 bg-gray-700 rounded w-1/3"></div>

      {/* Success Message Placeholder */}
      <div className="h-3 bg-gray-600 rounded w-1/4"></div>
      </div>
    </Terminal>
  );
}

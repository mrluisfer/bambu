import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

export function InfoItem({
  Icon,
  title,
  children,
  subtitle,
}: {
  Icon: LucideIcon;
  title: string;
  children: ReactNode;
  subtitle?: string;
}) {
  return (
    <div className="flex flex-col items-start space-y-4">
      <div
        className={cn(
          "flex space-x-4",
          subtitle ? "items-start" : "items-center"
        )}
      >
        <div className="w-12 h-12 bg-brand-100 rounded-2xl flex items-center justify-center flex-shrink-0">
          <Icon className="w-6 h-6 text-brand-600" />
        </div>
        <div className="flex flex-col">
          <h4 className="font-semibold text-slate-800">{title}</h4>
          {subtitle && <p className="text-sm text-slate-500">{subtitle}</p>}
        </div>
      </div>
      <div className="text-slate-500 text-sm hover:text-slate-700 transition">
        {children}
      </div>
    </div>
  );
}

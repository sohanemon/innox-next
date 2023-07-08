import { cn } from '@/lib/utils';
import { HtmlHTMLAttributes } from 'react';

interface CompType {}

export default function BlurryDiv({
  className,
  ...props
}: HtmlHTMLAttributes<HTMLDivElement> & CompType) {
  return (
    <div
      {...props}
      className={cn(
        'bg-primary w-56 h-56  absolute -z-50 rounded-full blur-[14rem] animate-rocket',
        {},
        className
      )}
    />
  );
}

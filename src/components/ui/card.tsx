import { cn } from '@/lib/utils/cn';

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

interface CardHeaderProps {
  className?: string;
  children: React.ReactNode;
}

interface CardTitleProps {
  className?: string;
  children: React.ReactNode;
}

interface CardContentProps {
  className?: string;
  children: React.ReactNode;
}

interface CardFooterProps {
  className?: string;
  children: React.ReactNode;
}

export function CardHeader({ className, children }: CardHeaderProps) {
  return (
    <div className={cn('flex flex-col gap-1 px-6 pt-6 pb-4', className)}>
      {children}
    </div>
  );
}

export function CardTitle({ className, children }: CardTitleProps) {
  return (
    <h3 className={cn('text-base font-semibold text-[#0E1B2A]', className)}>
      {children}
    </h3>
  );
}

export function CardContent({ className, children }: CardContentProps) {
  return (
    <div className={cn('px-6 pb-6', className)}>
      {children}
    </div>
  );
}

export function CardFooter({ className, children }: CardFooterProps) {
  return (
    <div className={cn('flex items-center px-6 pb-6 pt-0', className)}>
      {children}
    </div>
  );
}

export default function Card({ className, children }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-xl border border-[#E3EDF7] bg-white shadow-sm',
        className
      )}
    >
      {children}
    </div>
  );
}

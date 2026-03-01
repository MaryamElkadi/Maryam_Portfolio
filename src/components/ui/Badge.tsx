import { HTMLAttributes } from 'react';
import { cn } from './Button';

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'accent' | 'secondary';
}

export function Badge({ className, variant = 'default', ...props }: BadgeProps) {
    return (
        <div
            className={cn(
                'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary',
                {
                    'border-primary/50 bg-primary/10 text-primary': variant === 'default',
                    'border-accent/50 bg-accent/10 text-accent': variant === 'accent',
                    'border-secondary/50 bg-secondary/10 text-secondary': variant === 'secondary',
                },
                className
            )}
            {...props}
        />
    );
}

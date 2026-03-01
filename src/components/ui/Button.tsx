import { ButtonHTMLAttributes, forwardRef } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50',
                    {
                        'bg-primary text-white hover:bg-primary/90 shadow-[0_0_15px_#7C6CFF40] hover:shadow-[0_0_20px_#7C6CFF60]': variant === 'primary',
                        'bg-secondary text-white hover:bg-secondary/90 shadow-[0_0_15px_#FF6FAE40] hover:shadow-[0_0_20px_#FF6FAE60]': variant === 'secondary',
                        'border border-white/20 bg-transparent hover:bg-white/10 text-white': variant === 'outline',
                        'hover:bg-white/10 text-white': variant === 'ghost',
                        'h-9 px-4 text-sm': size === 'sm',
                        'h-11 px-6 text-base': size === 'md',
                        'h-14 px-8 text-lg': size === 'lg',
                    },
                    className
                )}
                {...props}
            />
        );
    }
);
Button.displayName = 'Button';

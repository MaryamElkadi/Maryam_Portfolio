import { HTMLAttributes, forwardRef } from 'react';
import { cn } from './Button';
import { motion, HTMLMotionProps } from 'framer-motion';

export const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            className={cn(
                'rounded-xl border border-white/10 bg-white/5 backdrop-blur-md text-white shadow-sm overflow-hidden',
                className
            )}
            {...props}
        />
    )
);
Card.displayName = 'Card';

export const MotionCard = motion(Card);

export function CardHeader({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
    return <div className={cn('flex flex-col space-y-1.5 p-6', className)} {...props} />;
}

export function CardTitle({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
    return <h3 className={cn('font-semibold leading-none tracking-tight text-xl', className)} {...props} />;
}

export function CardContent({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
    return <div className={cn('p-6 pt-0', className)} {...props} />;
}

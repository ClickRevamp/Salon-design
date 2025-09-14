'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface BookingProgressProps {
  currentStep: 1 | 2 | 3;
  totalSteps?: number;
  onStepSelect?: (step: number) => void;
  className?: string;
}

const steps = [
  { id: 1, label: 'Pakalpojums' },
  { id: 2, label: 'Meistars' },
  { id: 3, label: 'Laiks' }
];

export default function BookingProgress({
  currentStep,
  totalSteps = 3,
  onStepSelect,
  className
}: BookingProgressProps) {
  // Calculate progress percentage
  const progressPercentage = ((currentStep - 1) / (totalSteps - 1)) * 100;

  const handleStepClick = (stepNumber: number) => {
    // Only allow clicking on completed or current steps
    if (stepNumber <= currentStep && onStepSelect) {
      onStepSelect(stepNumber);
    }
  };

  return (
    <div className={cn("max-w-3xl md:max-w-4xl mx-auto px-4 md:px-6 mt-6 md:mt-8 mb-6", className)}>
      {/* Progress Bar Container */}
      <div className="relative">
        {/* Track */}
        <div 
          className="w-full h-2 rounded-full bg-[var(--blush)]/60 shadow-inner overflow-hidden"
          role="progressbar"
          aria-valuenow={progressPercentage}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`Booking progress: Step ${currentStep} of ${totalSteps}`}
        >
          {/* Animated Indicator */}
          <motion.div
            className="h-full rounded-full bg-[var(--accent)] shadow-[0_1px_10px_rgba(213,176,140,0.3)]"
            initial={{ width: '0%' }}
            animate={{ width: `${progressPercentage}%` }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              duration: 0.4
            }}
          />
        </div>

        {/* Visually Hidden Progress Text for Screen Readers */}
        <span className="sr-only">
          Step {currentStep} of {totalSteps}: {steps[currentStep - 1]?.label}
        </span>
      </div>

      {/* Step Legend */}
      <div className="grid grid-cols-3 gap-4 mt-4 md:mt-6">
        {steps.map((step) => {
          const isCompleted = step.id < currentStep;
          const isCurrent = step.id === currentStep;
          const isUpcoming = step.id > currentStep;
          const isClickable = step.id <= currentStep && onStepSelect;

          return (
            <div
              key={step.id}
              className={cn(
                "flex flex-col items-center text-center transition-colors duration-200",
                {
                  "cursor-pointer hover:text-foreground/80": isClickable,
                  "cursor-default": !isClickable
                }
              )}
              onClick={() => handleStepClick(step.id)}
            >
              {/* Step Marker */}
              <div
                className={cn(
                  "w-3 h-3 rounded-full mb-2 transition-all duration-200",
                  {
                    "bg-[var(--accent)] shadow-sm": isCompleted || isCurrent,
                    "bg-transparent border-2 border-[var(--blush)]": isUpcoming,
                  }
                )}
              />
              
              {/* Step Label */}
              <div
                className={cn(
                  "font-medium transition-colors duration-200",
                  {
                    "text-[var(--ink)]": isCompleted || isCurrent,
                    "text-[var(--subtle)]": isUpcoming,
                  }
                )}
                style={{ fontSize: 'clamp(13px, 1.4vw, 14px)' }}
              >
                <span className="font-medium">{step.id}</span>
                <span className="mx-1 opacity-50">·</span>
                <span>{step.label}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

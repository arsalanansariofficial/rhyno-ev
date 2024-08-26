'use client';

import { Dispatch, SetStateAction } from 'react';

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport
} from '@/_components/ui/toast';
import { useToast } from '@/_components/ui/use-toast';

export function Toaster({
  open = false,
  onOpenChange
}: {
  open?: boolean;
  onOpenChange?: Dispatch<SetStateAction<boolean>>;
}) {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props} open={open} onOpenChange={onOpenChange}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}

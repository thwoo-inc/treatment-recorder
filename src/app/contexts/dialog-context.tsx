'use client';

import React, { createContext, useState, useContext } from 'react';

import { useToast } from '@/components/ui/use-toast';

interface DialogContextProps {
  isShow: boolean;
  open: () => void;
  cancel: () => void;
  close: (succeeded: boolean, title: string) => void;
}

const DialogContext = createContext<DialogContextProps | undefined>(undefined);

export const DialogProvider = ({ children }: { children: React.ReactNode }) => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const { toast } = useToast();

  const open = () => {
    setIsShow(true);
  };

  const cancel = () => {
    setIsShow(false);
  };

  const close = (succeeded: boolean, title: string) => {
    if (succeeded) {
      toast({
        title,
      });
    } else {
      toast({
        variant: 'destructive',
        title,
      });
    }
    setIsShow(false);
  };

  return (
    <DialogContext.Provider value={{ isShow, open, cancel, close }}>
      {children}
    </DialogContext.Provider>
  );
};

export const useDialog = () => {
  const context = useContext(DialogContext);
  if (context === undefined) {
    throw new Error('useDialog must be used within an DialogProvider');
  }
  return context;
};

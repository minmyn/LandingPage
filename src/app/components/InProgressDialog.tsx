import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Construction, Loader2 } from "lucide-react";

interface InProgressDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function InProgressDialog({
  open,
  onOpenChange,
}: InProgressDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center justify-center mb-4">
            <div className="relative">
              <Construction className="size-16 text-blue-600" />
              <Loader2 className="size-6 text-blue-600 animate-spin absolute -bottom-2 -right-2" />
            </div>
          </div>
          <DialogTitle className="text-center text-2xl">
            En Progreso
          </DialogTitle>
          <DialogDescription className="text-center text-base space-y-3 pt-2">
            <p>
              ¡Estamos trabajando arduamente para lanzar Lectura Métrica!
            </p>
            <p className="text-sm">
              La aplicación estará disponible muy pronto. Mientras tanto,
              puedes registrarte para recibir acceso temprano 
              o saber que contamos con tu apoyo.
            </p>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

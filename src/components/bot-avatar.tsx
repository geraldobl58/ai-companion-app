import { Avatar, AvatarImage } from "@/components/ui/avatar";

interface BoAvatarProps {
  src: string;
}

export const BoAvatar = ({ src }: BoAvatarProps) => {
  return (
    <Avatar className="h-12 w-12">
      <AvatarImage src={src} />
    </Avatar>
  );
};

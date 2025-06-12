"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";

export default function LoggedInUser() {
  const { data: session } = useSession();
  console.log("Session:", session);

  if (!session?.user) return null;

  const { name, image } = session.user;

  return (
    <div className="flex items-center gap-3 p-3">
      <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 border">
        {image ? (
          <Image
            src={image}
            alt="User Avatar"
            width={40}
            height={40}
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-400" />
        )}
      </div>
      <span className="text-sm font-medium">{name ?? "Anonymous"}</span>
    </div>
  );
}

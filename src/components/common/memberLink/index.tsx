import { Link } from "@tanstack/react-router";
import { ClassValue } from "clsx";
import cn from "src/utils/cn";

import { useMember } from "../memberWrapper";

interface MemberLinkProps {
  className?: ClassValue;
}

const MemberLink = ({ className }: MemberLinkProps) => {
  const member = useMember();

  return (
    <Link to="." className={cn(className)} viewTransition>
      {member.name}
    </Link>
  );
};

export default MemberLink;

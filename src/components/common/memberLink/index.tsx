import { ClassValue } from "clsx";
import { Link } from "react-router-dom";
import cn from "src/utils/cn";

import { useMember } from "../memberWrapper";

interface MemberLinkProps {
  className?: ClassValue;
}

const MemberLink = ({ className }: MemberLinkProps) => {
  const member = useMember();

  return (
    <Link to="" className={cn(className)}>
      {member.name}
    </Link>
  );
};

export default MemberLink;

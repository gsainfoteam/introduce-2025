import { H4, ShortHr } from "src/components/common/headers";
import members, { Member } from "../store/members";
import { useTranslation } from "react-i18next";

const Members = () => {
  return (
    <>
      <section className="w-full flex justify-center">
        <div className="content flex flex-col items-center">
          <ShortHr />
          <div className="h-12" />
          <H4>멤버</H4>
        </div>
      </section>

      <div className="h-10" />

      <section className="w-full flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {members.map((member: Member) => (
            <div
              key={member.id}
              className="w-[240px] h-[400px] bg-white shadow-md rounded-lg flex flex-col items-center p-4"
            >
              <img
                src={member.profileImage}
                alt={member.name.ko}
                className="w-[50px] h-[50px] rounded-full mb-4"
              />
              <h2 className="text-lg font-bold">{member.name.ko}</h2>
              <p className="text-sm text-gray-600 mt-2 text-center">
                {member.introduction.ko}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Members;

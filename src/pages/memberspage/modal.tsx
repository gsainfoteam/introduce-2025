import ReactDOM from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  member: {
    name: { ko: string };
    githubID: string;
    introduction?: { ko: string };
    profileImage: string;
  };
}

const Modal = ({ isOpen, onClose, member }: ModalProps) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-[600px] h-[400px] relative border border-border shadow-lg">
        <button
          className="absolute top-2 right-2 bg-red-500 text-white px-4 py-2 rounded-full"
          onClick={onClose}
        >
          X
        </button>
        <div className="flex">
          <img
            src={member.profileImage}
            alt={member.name.ko}
            className="w-[150px] h-[150px] object-cover mb-4"
          />
          <div className="flex flex-col ml-4 justify-center">
            <h2 className="text-xl font-bold">{member.name.ko}</h2>
            {member.githubID && (
              <p>
                gitHub ID :{" "}
                <a
                  href={`https://github.com/${member.githubID}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  @{member.githubID}
                </a>
              </p>
            )}
          </div>
        </div>
        <p className="mt-4">{member.introduction?.ko || "소개 없음"}</p>
      </div>
    </div>,
    document.body,
  );
};

export default Modal;

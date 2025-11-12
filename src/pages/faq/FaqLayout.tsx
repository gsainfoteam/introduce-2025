import { useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Outlet, useNavigate, useSearchParams } from "react-router-dom";
import Navbar from "src/components/common/navbar";
import cn from "src/utils/cn";

const Category = ({
  type,
  label,
  selectedCategory,
  setSelectedCategory,
}: {
  type: "recruitment" | "service";
  label: string;
  selectedCategory: "recruitment" | "service";
  setSelectedCategory: (type: "recruitment" | "service") => void;
}) => {
  return (
    <li
      className={cn(
        "cursor-pointer text-xl rounded-lg hover:bg-primary-light px-4 py-3 hover:text-primary",
        selectedCategory === type && "text-primary",
      )}
      onClick={() => setSelectedCategory(type)}
    >
      {label}
    </li>
  );
};

export const FaqLayout = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get("type") as
    | "recruitment"
    | "service";
  const setSelectedCategory = useCallback(
    (type: "recruitment" | "service") => {
      navigate(`/faq?type=${type}`);
    },
    [navigate],
  );
  useEffect(() => {
    if (!selectedCategory) {
      setSelectedCategory("recruitment");
    }
  }, [selectedCategory, setSelectedCategory]);
  const { t } = useTranslation();

  return (
    <div className="flex-grow context">
      <div className="sticky top-0 left-0 w-full z-10 content-wrapper">
        <Navbar mode="light" hasBackground={true} />
      </div>
      <div className="content py-[54px]">
        <h1 className="text-4xl font-bold text-left text-gray-800">
          {t("faq.title")}
        </h1>
        <div className="h-[1px] bg-border mt-8 mb-9" />
        <div className="flex gap-3">
          <div className="w-[200px] flex-shrink-0">
            <ul className="flex flex-col gap-6">
              <Category
                type="recruitment"
                label={t("faq.categories.recruitment")}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
              {/* <Category
                type="service"
                label={t("faq.categories.service")}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              /> */}
            </ul>
          </div>

          <Outlet />
        </div>
      </div>
    </div>
  );
};

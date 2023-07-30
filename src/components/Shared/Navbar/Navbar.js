import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import Dropdown from "../../UI/Dropdown";

import { NavbarCategories, NavbarDropdown } from "@/constants/constants";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";

function Navbar() {
  const router = useRouter();
  const [dropDown, setDropDown] = useState(false);
  const [categoriesDropDown, setCategoriesDropDown] = useState(false);
  const { data: session, status } = useSession();
  const userImage = session?.user?.image || "/img/profile_pic.svg";

  return (
    <header className="sticky top-0 inset-x-0 z-30 bg-white text-gray-900 glassmorphism px-6 md:block hidden">
      <div className="flex items-center w-full max-w-screen-xl py-2 xl:space-x-16 lg:space-x-12  space-x-7  mx-auto">
        <div className="flex items-center font-extrabold">
          <Link href="/">Logo</Link>
        </div>
        <div className="flex-grow">
        </div>
        <div className="flex items-center xl:space-x-12 lg:space-x-10 space-x-7 font-semibold lg:text-base text-sm">
          {status === "loading" ? (
            <Skeleton circle={true} width={40} height={40} />
          ) : !session?.user ? (
            <span className="link" onClick={() => signIn()}>
              Login
            </span>
          ) : (
            <span
              className="relative"
              onClick={() => setDropDown((value) => !value)}
            >
              <span className="flex items-center cursor-pointer">
                <Image
                  src={userImage}
                  loading="lazy"
                  alt=""
                  width="24"
                  height="24"
                  className="object-contain w-10 h-10 rounded-full mr-1 hover:shadow-md"
                />
                <ChevronDownIcon className="lg:w-6 w-4" />
              </span>
              {dropDown && (
                <div className="absolute top-14 right-1">
                  <Dropdown
                    DropdownItem={NavbarDropdown}
                    hideDropDown={() => setDropDown(false)}
                  />
                </div>
              )}
            </span>
          )}
          <span
            className="relative"
            onClick={() => setCategoriesDropDown((value) => !value)}
          >
            <span className="flex items-center cursor-pointer">
              Categories
              <ChevronDownIcon className="lg:w-6 w-4" />
            </span>
            {categoriesDropDown && (
              <div className="absolute top-14 right-1">
                <Dropdown
                  hideDropDown={() => setCategoriesDropDown(false)}
                  DropdownItem={NavbarCategories}
                />
              </div>
            )}
          </span>
          <span className="link" onClick={() => router.push("/pc-builder")}>
            PC Builder
          </span>
        </div>
        {/* <div
          className="relative cursor-pointer"
          onClick={() => router.push("/cart")}
        >
          <ShoppingCartIcon className="xl:w-10 lg:w-9 w-8 link" />
          <div className="absolute -top-2 -right-1 rounded-full text-white bg-blue-light p-1 flex items-center justify-center text-xs font-extrabold">
            6
          </div>
        </div> */}
      </div>
    </header>
  );
}

export default Navbar;

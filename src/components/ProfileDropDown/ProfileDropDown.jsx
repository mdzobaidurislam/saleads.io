import React, { useEffect, useRef, useState } from "react";

export default function ProfileDropDown() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef(null);
  const dropdown = useRef(null);

  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div class="relative">
      <div>
        <button
          ref={trigger}
          onClick={() => {
            setDropdownOpen(!dropdownOpen);
          }}
          class="block relative w-8 h-8 rounded-full overflow-hidden border focus:outline-none"
        >
          <img
            src="https://lh3.googleusercontent.com/a/ACg8ocLCzKIEh73h1Tilo0aWgHJixcXvGC7BO_tsZ7J_UVg4eLrl2GI=s96-c"
            alt=""
          />
        </button>

        <div
          ref={dropdown}
          onFocus={() => setDropdownOpen(true)}
          onBlur={() => setDropdownOpen(false)}
          id="user-profile-menu"
          class={`absolute right-0 w-48 bg-white border border-gray-200 rounded-lg mt-2 -mr-2 py-2 shadow-xl overflow-hidden z-50 divide-y divide-gray-100 ${
            dropdownOpen === true ? "block" : "hidden"
          }`}
          tabIndex="-1"
        >
          <div class="px-4 py-3" role="none">
            <p class="text-sm" role="none">
              Accesso effettuato come
            </p>
            <p class="text-sm font-medium text-gray-600 truncate" role="none">
              system.develop{" "}
            </p>
          </div>

          <select class="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
            <option value="">Accedi come</option>

            <option value="https://cliente.one-step.it/settings/agenti/login_as/255">
              backoffice backoffice
            </option>

            <option value="https://cliente.one-step.it/settings/agenti/login_as/241">
              broker broker
            </option>

            <option value="https://cliente.one-step.it/settings/agenti/login_as/262">
              service service
            </option>

            <option value="https://cliente.one-step.it/settings/agenti/login_as/257">
              test test
            </option>

            <option value="https://cliente.one-step.it/settings/agenti/login_as/270">
              test{" "}
            </option>

            <option value="https://cliente.one-step.it/settings/agenti/login_as/261">
              WL WL
            </option>
          </select>

          <div class="hidden md:flex md:ml-4  md:items-center ">
            <button
              id="business_id"
              class="hidden font-bold leading-7 md:block relative w-full h-8 overflow-hidden z-50 focus:outline-none"
            >
              Develop
            </button>
            <select
              class="hidden px-3 py-2 text-sm text-gray-700"
              id="b_id_ch"
              onChange={(e) => console.log(e.target.value)}
            >
              <option
                selected="selected"
                value="https://cliente.one-step.it/settings/business/set_business/0"
              >
                Develop
              </option>

              <option value="https://cliente.one-step.it/settings/business/set_business/1">
                2business
              </option>
            </select>
          </div>

          <div class="py-1" role="none">
            <a
              href="https://cliente.one-step.it/profilo"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Impostazioni Account
            </a>
          </div>

          <div class="py-1" role="none">
            <a
              href="https://cliente.one-step.it/base/guide"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Guide &amp; Tools
            </a>
            <a
              href="https://cliente.one-step.it/help"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Supporto
            </a>
          </div>

          <div class="py-1" role="none">
            <a
              href="https://cliente.one-step.it/login/logout"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Disconnetti
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

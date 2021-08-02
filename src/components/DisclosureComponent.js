import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

function DisclosureComponent({ question, answer, className }) {
  return (
    <div className={className}>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-white rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
              <span>{question}</span>
              <ChevronUpIcon
                className={`${
                  open ? "" : "transform rotate-180"
                } w-8 h-8 text-purple-500`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-purple-900 bg-white rounded-lg">
              {answer}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}

export default DisclosureComponent;

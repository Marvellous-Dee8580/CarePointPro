import * as React from 'react';

export default function ChatInterface() {
  return (
    <div className="mt-5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        {/* Sidebar Section */}
        <aside className="flex flex-col w-[36%] max-md:ml-0 max-md:w-full">
          <div className="flex overflow-hidden flex-col px-3.5 pt-7 mx-auto w-full bg-white rounded-lg pb-[557px] max-md:pb-24 max-md:mt-1.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe80d9dbd4ebcf61d4f08eeb10305266b41c249724edcc7bbb912b6d5b7b4e8d"
              alt="Support Image"
              className="object-contain w-full aspect-[333.33]"
            />
            <ChatMessage
              avatar="https://cdn.builder.io/api/v1/image/assets/TEMP/19f979c0a01586da48aa03a405175eaa0c8adcaef616e738b575e5cb0575609c"
              name="Support"
              email="support@example.com"
              isOnline={true}
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe80d9dbd4ebcf61d4f08eeb10305266b41c249724edcc7bbb912b6d5b7b4e8d"
              alt="Support Image 2"
              className="object-contain mt-3 w-full aspect-[333.33]"
            />
          </div>
        </aside>

        {/* Main Chat Section */}
        <section className="flex flex-col ml-5 w-[64%] max-md:ml-0 max-md:w-full">
          <div className="flex overflow-hidden flex-col pt-3 pb-5 pl-3.5 mx-auto w-full bg-white max-md:mt-1.5 max-md:max-w-full">
            <ChatMessage
              avatar="https://cdn.builder.io/api/v1/image/assets/TEMP/0ee55e994a6ac13ce240acf67956bfdd6f2ca0763b2744c68f415584fdf7f21d"
              name="Customer Support"
              email="support@company.com"
              isOnline={true}
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/450f616dec7fdc23f26a0a79dc03ea11ab63619c04ba518457b20632f703a05e"
              alt="Chat Image"
              className="object-contain mt-2 w-full aspect-[500] max-md:max-w-full"
            />
            <div className="self-center mt-64 text-xs font-medium tracking-tighter text-stone-900 text-opacity-20 max-md:mt-10">
              No Chat
            </div>
            <div className="mr-5 ml-3 max-md:mr-2.5 max-md:max-w-full">
              <ChatInput />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

// ChatInput Component
export function ChatInput() {
  return (
    <form className="flex overflow-hidden flex-wrap gap-5 justify-between px-5 py-3.5 text-xs tracking-tighter border border-solid border-zinc-200 rounded-[30px] text-zinc-400">
      <label htmlFor="chatInput" className="sr-only">Type your message</label>
      <input
        type="text"
        id="chatInput"
        className="gap-3.5 self-stretch my-auto bg-transparent border-none outline-none"
        placeholder="Start typing"
      />
      <button type="submit" aria-label="Send message">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c7211a4611efb0e4dafae1230eb115203ceefee46a9b75d828b6c39b8538739d"
          alt="Send Icon"
          className="object-contain shrink-0 w-6 aspect-square"
        />
      </button>
    </form>
  );
}

// ChatMessage Component
export function ChatMessage({ avatar, name, email, isOnline }) {
  return (
    <div className="flex gap-3 items-center">
      <img
        loading="lazy"
        src={avatar}
        alt={`${name}'s avatar`}
        className="object-contain shrink-0 self-stretch my-auto rounded-full aspect-square w-[60px]"
      />
      <div className="flex flex-col self-stretch my-auto min-w-[240px]">
        <div className="flex gap-2.5 items-center w-full text-base font-semibold tracking-tight leading-9 whitespace-nowrap text-neutral-900">
          <div className="self-stretch my-auto">{name}</div>
          {isOnline && (
            <div className="flex shrink-0 self-stretch my-auto w-2.5 h-2.5 bg-teal-600 rounded-full" />
          )}
        </div>
        <div className="text-xs tracking-tighter text-black">{email}</div>
      </div>
    </div>
  );
}
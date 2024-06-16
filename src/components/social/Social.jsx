import React from "react";

const Social = () => {
  return (
    <div>
      <a
        class="connect-link"
        href="https://www.linkedin.com/in/lucky-singh-64b474155/"
        target="blank"
      >
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-linkedin"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect width="4" height="12" x="2" y="9"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
        
      </a>
      <a class="connect-link" href="mailto:ls170693@gmail.com" target="blank">
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-mails"
        >
          <rect width="16" height="13" x="6" y="4" rx="2"></rect>
          <path d="m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7"></path>
          <path d="M2 8v11c0 1.1.9 2 2 2h14"></path>
        </svg>
        
      </a>
    </div>
  );
};

export default Social;

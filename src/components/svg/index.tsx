function Svg({ name }: { name: string }) {
  if (name === "css") {
    return (
      <svg
        width='80'
        height='80'
        viewBox='0 0 80 80'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M5 0H75L68.6333 71.8767L39.9233 80L11.3733 71.8733L5 0ZM61.9667 14.71L18.0333 14.7L18.7433 23.44L52.4933 23.4467L51.6433 32.5H29.51L30.31 41.0767H50.9167L49.6967 52.82L39.9967 55.5L30.1433 52.8L29.5167 45.7667H20.8167L21.7833 58.6167L40 64.2933L57.91 59.1933L61.9667 14.7133V14.71Z'
          fill='black'
        />
      </svg>
    );
  }
  if (name === "javaScript") {
    return (
      <svg
        width='80'
        height='80'
        viewBox='0 0 80 80'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <g clipPath='url(#clip0_14_6)'>
          <path
            d='M0 0H80V80H0V0ZM73.4467 60.92C72.8633 57.27 70.4867 54.2033 63.4367 51.3433C60.9833 50.1933 58.2567 49.3933 57.4467 47.5433C57.1433 46.4433 57.0967 45.8433 57.2933 45.1933C57.7933 43.04 60.3433 42.3933 62.3433 42.9933C63.6433 43.3933 64.8433 44.3933 65.5967 45.9933C69.0433 43.74 69.0433 43.74 71.4467 42.2433C70.5467 40.8433 70.1 40.24 69.4933 39.6433C67.3933 37.2933 64.5967 36.0933 60.0467 36.1967L57.6967 36.4933C55.4433 37.0433 53.2967 38.2433 51.9967 39.8433C48.1967 44.1467 49.2933 51.6467 53.8933 54.7467C58.4433 58.1467 65.0967 58.8933 65.9467 62.0967C66.7467 65.9967 63.0467 67.2467 59.3933 66.7967C56.69 66.1967 55.1933 64.8433 53.5433 62.3433L47.4433 65.8467C48.1433 67.4467 48.9433 68.1433 50.1433 69.5433C55.9433 75.3967 70.4433 75.0967 73.0467 66.1967C73.1433 65.8967 73.8467 63.8467 73.2933 60.6967L73.4467 60.92ZM43.5033 36.77H36.01C36.01 43.23 35.98 49.65 35.98 56.12C35.98 60.2267 36.19 63.9967 35.52 65.1567C34.42 67.4533 31.5867 67.16 30.3 66.7567C28.98 66.1033 28.31 65.2033 27.5333 63.9067C27.3233 63.5567 27.1667 63.2533 27.11 63.2533L21.0267 67.0033C22.0433 69.1033 23.5267 70.91 25.44 72.06C28.29 73.76 32.12 74.31 36.13 73.41C38.74 72.6567 40.99 71.1067 42.1667 68.7067C43.8667 65.6067 43.5067 61.8067 43.49 57.5533C43.53 50.7067 43.49 43.8567 43.49 36.9567L43.5033 36.77Z'
            fill='black'
          />
        </g>
        <defs>
          <clipPath id='clip0_14_6'>
            <rect width='80' height='80' fill='white' />
          </clipPath>
        </defs>
      </svg>
    );
  }
  if (name === "typeScript") {
    return (
      <svg
        width='80'
        height='80'
        viewBox='0 0 80 80'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <g clipPath='url(#clip0_14_8)'>
          <path
            d='M3.75 0C1.67333 0 0 1.67333 0 3.75V76.25C0 78.3267 1.67333 80 3.75 80H76.25C78.3267 80 80 78.3267 80 76.25V3.75C80 1.67333 78.3267 0 76.25 0H3.75ZM61.6267 32.5C63.6667 32.5 65.4733 32.6233 67.05 32.87C68.5371 33.0928 69.9964 33.4727 71.4033 34.0033V42.1967C70.728 41.7296 70.0104 41.3267 69.26 40.9933C68.4861 40.6451 67.6872 40.3554 66.87 40.1267C65.322 39.6953 63.7236 39.4711 62.1167 39.46C61.1167 39.46 60.2067 39.5533 59.3867 39.7467C58.6558 39.903 57.9547 40.1753 57.31 40.5533C56.7433 40.9 56.31 41.3167 56 41.8C55.6882 42.2872 55.526 42.855 55.5333 43.4333C55.5333 44.0867 55.71 44.6767 56.0533 45.1967C56.4 45.7167 56.8933 46.21 57.53 46.6767C58.1667 47.1433 58.94 47.5967 59.85 48.0433C60.76 48.4933 61.79 48.9567 62.9367 49.43C64.5033 50.0867 65.91 50.7867 67.1567 51.5233C68.4033 52.2633 69.4733 53.1 70.3667 54.0333C71.26 54.9633 71.94 56.0267 72.4133 57.2233C72.8867 58.42 73.1267 59.81 73.1267 61.4C73.1267 63.59 72.71 65.4333 71.8833 66.92C71.0756 68.3862 69.9165 69.629 68.51 70.5367C66.994 71.498 65.3136 72.1715 63.5533 72.5233C61.6667 72.9233 59.6767 73.1233 57.5867 73.1233C55.5297 73.1324 53.4763 72.9493 51.4533 72.5767C49.7031 72.2739 48.0056 71.7205 46.4133 70.9333V62.1667C49.4259 64.7304 53.2476 66.1471 57.2033 66.1667C58.3133 66.1667 59.2833 66.0667 60.11 65.8667C60.94 65.6667 61.63 65.3867 62.1867 65.0333C62.74 64.6733 63.1533 64.2533 63.43 63.7667C63.7358 63.2 63.8749 62.5584 63.8312 61.916C63.7876 61.2736 63.563 60.6567 63.1833 60.1367C62.6881 59.4813 62.0823 58.9173 61.3933 58.47C60.5388 57.9036 59.6391 57.4086 58.7033 56.99C57.5941 56.4835 56.475 55.9989 55.3467 55.5367C52.2867 54.26 50.0067 52.6967 48.5033 50.8533C47.0033 49.01 46.25 46.78 46.25 44.17C46.25 42.1233 46.66 40.3667 47.48 38.8967C48.3 37.4267 49.4133 36.2167 50.8267 35.2667C52.3215 34.2805 53.9811 33.5704 55.7267 33.17C57.6599 32.7142 59.6404 32.4893 61.6267 32.5ZM11.25 33.1267H43.1267V40.3467H31.6867V72.5H22.63V40.3467H11.25V33.1267Z'
            fill='black'
          />
        </g>
        <defs>
          <clipPath id='clip0_14_8'>
            <rect width='80' height='80' fill='white' />
          </clipPath>
        </defs>
      </svg>
    );
  }
  if (name === "react") {
    return (
      <svg
        width='80'
        height='80'
        viewBox='0 0 80 80'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M47.4333 40.0133C47.4333 41.9895 46.6485 43.8848 45.2515 45.2825C43.8544 46.6801 41.9595 47.4658 39.9833 47.4667C38.0066 47.4667 36.1108 46.6814 34.713 45.2836C33.3153 43.8859 32.53 41.9901 32.53 40.0133C32.53 38.0372 33.3148 36.1419 34.7119 34.7442C36.1089 33.3465 38.0038 32.5609 39.98 32.56C41.9567 32.56 43.8525 33.3453 45.2503 34.743C46.6481 36.1408 47.4333 38.0366 47.4333 40.0133ZM56.26 4.38C51.7733 4.38 45.9033 7.58001 39.9667 13.12C34.0333 7.61001 28.16 4.44667 23.6767 4.44667C22.31 4.44667 21.0667 4.75667 19.99 5.37334C15.4067 8.01667 14.38 16.2533 16.7467 26.59C6.6 29.7233 0 34.7333 0 40.0133C0 45.3133 6.63333 50.3367 16.81 53.4467C14.4633 63.8233 15.51 72.0733 20.1033 74.7133C21.17 75.3367 22.4033 75.63 23.7767 75.63C28.26 75.63 34.1333 72.43 40.07 66.8833C46.0033 72.3967 51.8767 75.56 56.36 75.56C57.7267 75.56 58.97 75.26 60.0467 74.6433C64.6267 72.0033 65.6567 63.7667 63.29 53.4267C73.4 50.32 80 45.3 80 40.0133C80 34.7133 73.3667 29.69 63.19 26.5733C65.5367 16.2067 64.49 7.95 59.8967 5.30667C58.8367 4.69334 57.6033 4.38334 56.2567 4.38H56.26ZM56.2433 8.01334V8.03334C56.9933 8.03334 57.5967 8.18 58.1033 8.45667C60.3233 9.73 61.2867 14.5733 60.5367 20.8033C60.3567 22.3367 60.0633 23.9533 59.7033 25.6033C56.5033 24.8167 53.0167 24.2133 49.3467 23.8233C47.1467 20.8067 44.8633 18.0667 42.5633 15.6667C47.87 10.7333 52.8533 8.02667 56.2467 8.01667L56.2433 8.01334ZM23.6767 8.08C27.05 8.08 32.0567 10.7733 37.3767 15.68C35.09 18.08 32.81 20.8033 30.6433 23.82C26.9533 24.21 23.4633 24.8133 20.2667 25.6133C19.8933 23.98 19.6167 22.4 19.42 20.88C18.6533 14.6533 19.6 9.81334 21.8 8.52334C22.4333 8.22334 23.1333 8.1 23.6767 8.08334V8.08ZM39.95 18.2467C41.4667 19.8067 42.9833 21.5533 44.4833 23.46C43.0167 23.3933 41.5167 23.3467 40 23.3467C38.4667 23.3467 36.95 23.38 35.4667 23.46C36.9333 21.5533 38.45 19.8067 39.95 18.2433V18.2467ZM40 27C42.4667 27 44.9233 27.1133 47.34 27.31C48.6933 29.25 50.0133 31.32 51.2833 33.51C52.5233 35.6433 53.65 37.81 54.6767 39.9967C53.65 42.18 52.5233 44.3633 51.3 46.4967C50.0333 48.6967 48.7233 50.79 47.3667 52.73C44.94 52.94 42.48 53.0567 40 53.0567C37.5333 53.0567 35.0767 52.94 32.66 52.7467C31.3067 50.8067 29.9867 48.7333 28.7167 46.5467C27.4767 44.4133 26.35 42.2467 25.3233 40.06C26.3333 37.87 27.4767 35.6833 28.7 33.5467C29.9667 31.3467 31.2767 29.26 32.6333 27.32C35.06 27.1067 37.52 26.9933 40 26.9933V27ZM27.8833 27.8467C27.0833 29.1033 26.2833 30.39 25.5367 31.7133C24.7867 33.0133 24.0867 34.32 23.42 35.6267C22.5367 33.44 21.7867 31.26 21.1667 29.1367C23.3 28.6367 25.55 28.1933 27.8833 27.85V27.8467ZM52.0833 27.8467C54.4 28.19 56.6333 28.6133 58.77 29.1367C58.17 31.2433 57.42 33.41 56.57 35.58C55.9033 34.28 55.2033 32.97 54.4367 31.6667C53.6867 30.36 52.8867 29.0867 52.0867 27.8467H52.0833ZM62.2933 30.0967C63.9067 30.5967 65.44 31.1533 66.8767 31.7567C72.65 34.2233 76.3833 37.45 76.3833 40.01C76.3667 42.57 72.6333 45.81 66.86 48.26C65.46 48.86 63.9267 49.4 62.3433 49.9033C61.41 46.71 60.19 43.3833 58.6767 39.97C60.1767 36.58 61.3767 33.27 62.2933 30.09V30.0967ZM17.6433 30.11C18.57 33.31 19.7933 36.6333 21.31 40.0433C19.81 43.4333 18.6033 46.7433 17.69 49.9233C16.0767 49.4233 14.5433 48.8633 13.1233 48.2567C7.35 45.8 3.61667 42.57 3.61667 40.01C3.61667 37.45 7.35 34.2033 13.1233 31.7567C14.5233 31.1567 16.0567 30.6167 17.6433 30.11ZM56.57 44.3767C57.4533 46.5667 58.2033 48.75 58.8233 50.87C56.69 51.3933 54.4367 51.8367 52.1033 52.17C52.9033 50.92 53.7033 49.63 54.4533 48.31C55.2033 47.01 55.9033 45.6833 56.5733 44.3767H56.57ZM23.42 44.4433C24.0867 45.75 24.7867 47.0533 25.5533 48.36C26.32 49.66 27.1033 50.9333 27.9033 52.17C25.5867 51.83 23.3533 51.4033 21.2167 50.8833C21.8167 48.7833 22.57 46.61 23.4167 44.44L23.42 44.4433ZM59.7333 54.4C60.1067 56.0433 60.4 57.6267 60.58 59.1433C61.3467 65.37 60.4 70.21 58.2 71.5033C57.71 71.8033 57.0733 71.93 56.3233 71.93C52.95 71.93 47.9433 69.24 42.6233 64.33C44.91 61.93 47.19 59.21 49.3567 56.1967C53.0467 55.8033 56.5367 55.1967 59.7333 54.3967V54.4ZM20.3 54.4333C23.5 55.2133 26.9867 55.8167 30.6567 56.2067C32.8567 59.2233 35.14 61.9633 37.44 64.36C32.1233 69.3033 27.1333 72.01 23.74 72.01C23.0067 71.9933 22.3867 71.8433 21.8967 71.57C19.6767 70.3033 18.7133 65.4567 19.4633 59.2267C19.6433 57.6933 19.9367 56.08 20.2967 54.4333H20.3ZM35.5 56.5667C36.9667 56.6333 38.4667 56.68 39.9833 56.68C41.5167 56.68 43.0333 56.6467 44.5167 56.5667C43.05 58.4733 41.5333 60.2167 40.0333 61.7833C38.5167 60.2167 37 58.4733 35.5 56.5667Z'
          fill='black'
        />
      </svg>
    );
  }
  if (name === "reduxToolkit") {
    return (
      <svg
        width='80'
        height='80'
        viewBox='0 0 80 80'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <g clipPath='url(#clip0_14_14)'>
          <path
            d='M55.4466 55.0133C58.3466 54.7633 60.59 52.2133 60.4466 49.1666C60.29 46.12 57.7933 43.6733 54.75 43.6733H54.5466C53.0363 43.7272 51.6093 44.3786 50.5792 45.4843C49.549 46.5901 49.0002 48.0597 49.0533 49.57C49.1533 51.1666 49.8066 52.4667 50.7 53.4133C47.2066 60.2066 41.9633 65.2 34.0166 69.3966C28.6733 72.19 23.03 73.2433 17.5366 72.4967C12.9433 71.8466 9.34995 69.7966 7.14995 66.5C3.85662 61.5033 3.55662 56.1133 6.29995 50.72C8.29995 46.82 11.2966 43.9767 13.2966 42.5766C12.6929 40.9025 12.2247 39.1825 11.8966 37.4333C-2.89338 48.0266 -1.38671 62.5066 3.10662 69.35C6.45329 74.3433 13.2966 77.5366 20.7866 77.5366C22.7866 77.5366 24.8866 77.39 26.93 76.89C39.92 74.3933 49.7566 66.6033 55.4 55.1166L55.4466 55.0133ZM73.2733 42.5266C65.54 33.4333 54.1466 28.44 41.16 28.44H39.46C38.6166 26.5933 36.67 25.4433 34.4666 25.4433H34.3166C31.1733 25.4433 28.7233 28.1433 28.8266 31.2866C28.9266 34.28 31.4733 36.78 34.52 36.78H34.7666C35.8473 36.7382 36.893 36.3863 37.7791 35.7663C38.6651 35.1462 39.3539 34.2843 39.7633 33.2833H41.6133C49.31 33.2833 56.5966 35.53 63.24 39.9233C68.33 43.2733 71.98 47.6666 74.03 52.9133C75.8233 57.2066 75.7266 61.4033 73.88 64.9033C71.03 70.3933 66.2333 73.2933 59.8933 73.2933C55.8966 73.2933 52.0033 72.0433 50.0033 71.1466C48.8033 72.14 46.8033 73.79 45.3566 74.79C49.75 76.7833 54.1966 77.9333 58.49 77.9333C68.23 77.9333 75.47 72.4433 78.22 67.1466C81.2133 61.1533 80.9666 51.0667 73.32 42.4266L73.2733 42.5266ZM21.6333 56.8066C21.7333 59.8033 24.2766 62.3 27.3266 62.3H27.5266C28.2772 62.283 29.0168 62.1161 29.7019 61.8089C30.387 61.5017 31.0036 61.0605 31.5156 60.5113C32.0275 59.9621 32.4243 59.316 32.6827 58.611C32.9411 57.9061 33.0557 57.1566 33.02 56.4067C33.02 53.4067 30.4233 50.9166 27.3766 50.9166H27.1766C26.9766 50.9166 26.6766 50.9166 26.4233 51.0133C22.28 44.02 20.53 36.5233 21.1833 28.44C21.5833 22.3466 23.5833 17.05 27.1733 12.6567C30.1733 8.90998 35.8166 7.05665 39.6633 6.96332C50.45 6.75998 54.9466 20.2 55.2933 25.5433L60.2866 27.0433C59.1366 10.6567 48.9533 2.06665 39.2133 2.06665C30.0666 2.06665 21.6333 8.70998 18.2333 18.45C13.59 31.4333 16.6366 43.9233 22.3333 53.9133C21.8333 54.5633 21.5333 55.71 21.6333 56.8066Z'
            fill='black'
          />
        </g>
        <defs>
          <clipPath id='clip0_14_14'>
            <rect width='80' height='80' fill='white' />
          </clipPath>
        </defs>
      </svg>
    );
  }
  if (name === "reactQuery") {
    return (
      <svg
        width='80'
        height='80'
        viewBox='0 0 80 80'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M23.0988 45.6251C23.6454 45.3124 24.3488 45.5077 24.6611 46.0677L24.8694 46.4194C26.4711 49.2577 28.1378 51.9531 29.8694 54.5054C31.9138 57.5131 34.2184 60.5601 36.7838 63.6457C36.979 63.8778 37.0749 64.1775 37.0505 64.4798C37.0261 64.7822 36.8834 65.0626 36.6534 65.2604L36.4061 65.4817C27.9294 72.8907 22.4348 74.3617 19.8954 69.9217C17.4088 65.573 18.3071 57.6824 22.5908 46.2241C22.6842 45.9708 22.8641 45.7586 23.0988 45.6251ZM59.1664 54.3361C59.7784 54.2317 60.3644 54.6227 60.4814 55.2344L60.5468 55.5731C62.6431 66.5234 61.1717 72.0054 56.1324 72.0054C51.1978 72.0054 44.9347 67.3307 37.3044 57.9947C37.133 57.7865 37.0449 57.5221 37.0571 57.2527C37.0571 56.6277 37.5778 56.1197 38.2028 56.1197H38.6064C41.7303 56.1443 44.8538 56.0358 47.9684 55.7944C51.5361 55.5077 55.2731 55.0261 59.1664 54.3361ZM62.0698 31.0807C62.1765 30.7929 62.3915 30.5582 62.6689 30.4268C62.9463 30.2954 63.2641 30.2777 63.5544 30.3774L63.8931 30.4947C74.7654 34.1927 78.9061 38.2681 76.2887 42.7084C73.7367 47.0574 66.3148 50.2217 54.0101 52.2007C53.7368 52.2397 53.4501 52.1874 53.2158 52.0441C52.6558 51.7187 52.4608 51.0157 52.7991 50.4557L53.0074 50.1044C54.6874 47.2917 56.1974 44.4924 57.5648 41.6927C59.1534 38.3984 60.6637 34.8567 62.0701 31.0807H62.0698ZM25.9898 27.7994C26.2631 27.7604 26.5498 27.8127 26.7841 27.9561C27.3441 28.2814 27.5391 28.9844 27.2008 29.5444L26.9924 29.8957C25.3559 32.6344 23.8354 35.4408 22.4351 38.3074C20.8464 41.6017 19.3361 45.1434 17.9298 48.9194C17.823 49.2071 17.608 49.4417 17.3307 49.5731C17.0534 49.7045 16.7357 49.7223 16.4454 49.6227L16.1068 49.5054C5.23442 45.8074 1.09375 41.7321 3.71109 37.2917C6.26309 32.9427 13.6851 29.7784 25.9898 27.7994ZM43.5938 14.5184C52.0704 7.10939 57.5651 5.63839 60.1044 10.0784C62.5911 14.4271 61.6927 22.3177 57.4091 33.7761C57.3156 34.0294 57.1357 34.2415 56.9011 34.3751C56.3544 34.6877 55.6511 34.4924 55.3387 33.9324L55.1304 33.5807C53.5288 30.7424 51.8621 28.0471 50.1304 25.4947C48.0861 22.4871 45.7814 19.4401 43.2161 16.3544C43.0208 16.1223 42.925 15.8226 42.9494 15.5203C42.9738 15.218 43.1165 14.9375 43.3464 14.7397L43.5938 14.5184ZM24.2838 7.57839C29.2188 7.57839 35.4948 12.2527 43.1121 21.5884C43.2797 21.7946 43.3715 22.052 43.3724 22.3177C43.3594 22.9557 42.8517 23.4637 42.2137 23.4637L41.8231 23.4504C38.6991 23.4364 35.5759 23.5494 32.4611 23.7891C28.8804 24.0757 25.1434 24.5574 21.2501 25.2474C20.9553 25.2977 20.6525 25.2304 20.4066 25.06C20.1608 24.8897 19.9915 24.6298 19.9351 24.3361L19.8698 24.0104C17.7731 13.0601 19.2444 7.57805 24.2838 7.57805V7.57839ZM33.8541 26.9531H46.1457C46.5172 26.9532 46.8822 27.0506 47.2043 27.2357C47.5265 27.4207 47.7945 27.6869 47.9818 28.0077L54.1408 38.7371C54.32 39.0573 54.4142 39.4182 54.4142 39.7852C54.4142 40.1522 54.32 40.5131 54.1408 40.8334L47.9818 51.5757C47.7945 51.8965 47.5265 52.1627 47.2045 52.3477C46.8824 52.5327 46.5175 52.6302 46.1461 52.6304H33.8544C33.0991 52.6304 32.3961 52.2267 32.0311 51.5757L25.8594 40.8334C25.6801 40.5131 25.5859 40.1521 25.5859 39.7851C25.5859 39.418 25.6801 39.057 25.8594 38.7367L32.0314 28.0077C32.3958 27.3567 33.0991 26.9531 33.8541 26.9531ZM44.6224 29.5964C44.9939 29.5965 45.3589 29.6939 45.681 29.879C46.0031 30.064 46.2712 30.3302 46.4584 30.6511L51.0938 38.7371C51.273 39.0573 51.3672 39.4182 51.3672 39.7852C51.3672 40.1522 51.273 40.5131 51.0938 40.8334L46.4584 48.9324C46.2712 49.2532 46.0031 49.5194 45.681 49.7045C45.3589 49.8895 44.9939 49.9869 44.6224 49.9871H35.3778C34.6224 49.9871 33.9194 49.5834 33.5547 48.9324L28.9064 40.8334C28.7271 40.5131 28.6329 40.1521 28.6329 39.7851C28.6329 39.418 28.7271 39.057 28.9064 38.7367L33.5547 30.6511C33.9194 30.0001 34.6224 29.5964 35.3778 29.5964H44.6224ZM42.9818 32.4871H37.0184C36.2631 32.4871 35.5731 32.8777 35.1951 33.5417L32.2008 38.7371C32.0215 39.0573 31.9273 39.4182 31.9273 39.7852C31.9273 40.1522 32.0215 40.5131 32.2008 40.8334L35.1954 46.0417C35.3799 46.3621 35.6456 46.6282 35.9656 46.8133C36.2856 46.9985 36.6487 47.0961 37.0184 47.0964H42.9818C43.3515 47.0962 43.7147 46.9986 44.0348 46.8134C44.3548 46.6283 44.6205 46.3621 44.8051 46.0417L47.7994 40.8334C47.9788 40.5131 48.073 40.1521 48.073 39.7851C48.073 39.418 47.9788 39.057 47.7994 38.7367L44.8047 33.5417C44.4271 32.8777 43.7371 32.4871 42.9818 32.4871ZM41.3934 35.2474C42.1484 35.2474 42.8517 35.6511 43.2161 36.3021L44.6227 38.7371C45.0001 39.3881 45.0001 40.1954 44.6227 40.8334L43.2161 43.2814C42.8517 43.9324 42.1484 44.3361 41.3934 44.3361H38.6068C38.2371 44.3357 37.8741 44.2381 37.5541 44.0529C37.2342 43.8678 36.9686 43.6017 36.7841 43.2814L35.3774 40.8334C35.0001 40.1954 35.0001 39.3881 35.3774 38.7367L36.7841 36.3021C36.9686 35.9817 37.2342 35.7156 37.5541 35.5305C37.8741 35.3454 38.2371 35.2477 38.6068 35.2474H41.3934ZM40.0001 37.9687C39.6807 37.9697 39.3671 38.0543 39.0906 38.2143C38.8141 38.3743 38.5844 38.6039 38.4244 38.8804C38.0991 39.4404 38.0991 40.1304 38.4244 40.7031C38.5851 40.9779 38.8153 41.2056 39.0919 41.3634C39.3685 41.5211 39.6817 41.6033 40.0001 41.6017C40.3185 41.6033 40.6317 41.5211 40.9083 41.3634C41.1848 41.2056 41.415 40.9779 41.5758 40.7031C41.9011 40.1304 41.9011 39.4401 41.5758 38.8804C41.4157 38.6039 41.186 38.3742 40.9094 38.2142C40.6329 38.0542 40.3192 37.9696 39.9998 37.9687H40.0001ZM25.2604 39.7917H28.5287H25.2604ZM63.2681 25.8334C64.5701 19.5184 64.8564 14.6874 64.0101 11.1721C63.5154 9.07539 62.6041 7.38272 61.2108 6.14605C59.7394 4.84372 57.8774 4.20605 55.7941 4.20605C52.3434 4.20605 48.7238 5.78139 44.8564 8.76305C43.2811 9.97405 41.6404 11.4454 39.9478 13.1511C39.8044 12.9817 39.6611 12.8127 39.4921 12.6694C34.6741 8.38539 30.6248 5.72939 27.1611 4.70072C25.1041 4.08872 23.1768 4.03639 21.4191 4.62239C19.5571 5.24739 18.0724 6.53639 17.0311 8.34639C15.3124 11.3281 14.8564 15.2604 15.4944 20.1044C15.7551 22.0704 16.2108 24.2187 16.8358 26.5494C16.5924 26.5779 16.3525 26.6304 16.1194 26.7061C10.0264 28.7367 5.70309 30.8981 3.08575 33.3851C1.53609 34.8564 0.520752 36.5101 0.143085 38.3201C-0.234581 40.2471 0.143086 42.1741 1.18475 43.9841C2.90342 46.9657 6.06742 49.3097 10.5728 51.1717C12.3828 51.9137 14.4268 52.5907 16.7184 53.2027C16.6113 53.4446 16.5326 53.698 16.4841 53.9581C15.1821 60.2601 14.8958 65.104 15.7421 68.6064C16.2368 70.703 17.1611 72.4087 18.5414 73.6324C20.0128 74.9347 21.8748 75.5724 23.9581 75.5724C27.4088 75.5724 31.0281 73.9971 34.8957 71.0284C36.4841 69.7914 38.1377 68.3071 39.8564 66.5751C40.0411 66.853 40.2598 67.1067 40.5074 67.3304C45.3254 71.6144 49.3747 74.2704 52.8384 75.299C54.8957 75.9111 56.8228 75.9634 58.5804 75.3774C60.4424 74.7524 61.9271 73.4634 62.9684 71.6534C64.6874 68.6717 65.1431 64.7394 64.5051 59.8957C64.2318 57.8514 63.7628 55.6247 63.0858 53.1897C63.355 53.1642 63.6211 53.1119 63.8801 53.0337C69.9734 51.0024 74.2968 48.8411 76.9137 46.3537C78.4634 44.8827 79.4791 43.2291 79.8564 41.4191C80.2341 39.4921 79.8564 37.5647 78.8148 35.7551C77.0961 32.7731 73.9321 30.4294 69.4268 28.5674C67.5648 27.7994 65.4424 27.0961 63.0728 26.4841C63.1633 26.2755 63.2289 26.057 63.2681 25.8331V25.8334Z'
          fill='black'
        />
      </svg>
    );
  }
  if (name === "styledComponents") {
    return (
      <svg
        width='80'
        height='80'
        viewBox='0 0 80 80'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M54.0467 22.54L53.7967 23.8434C53.41 26.3134 53.55 27.02 54.61 27.9367L55.6333 28.7834L54.5733 33.51C53.94 36.33 53.1633 38.6934 52.67 39.47C52.2467 40.14 51.7533 41.1267 51.6467 41.6567C51.47 42.29 50.87 42.9267 49.9533 43.49C49.1433 43.95 47.5533 45.1834 46.4267 46.1734C45.5267 46.9834 44.9067 47.48 44.57 47.6934L43.47 48.5634C43.1167 49.13 42.9167 49.5867 42.84 49.9334C42.7633 50.29 42.8067 50.5267 42.92 50.7C43.03 50.8667 43.22 50.9834 43.48 51.0567C43.7878 51.1288 44.1046 51.1547 44.42 51.1334C45.1336 51.0846 45.8398 50.9595 46.5267 50.76C46.76 50.6967 46.9433 50.6367 47.1033 50.5834C47.35 50.28 47.92 49.7067 48.93 48.71C51.61 46.0667 52.6333 44.62 51.5767 45.01C51.1867 45.15 51.3633 44.7967 52.0333 44.09C53.4467 42.7134 54.2567 40.6334 55.95 34.11C57.29 28.96 57.29 28.8867 58.2767 28.8867C58.74 28.8867 60.05 28.9667 60.05 28.9667V22.54H57.0433H54.0467ZM66.8433 33.09C66.63 33.09 66.2767 33.41 66.0667 33.7634C65.68 34.3967 66.1367 34.7834 71.9567 38.4167C75.4133 40.6067 78.2 42.4734 78.13 42.6167C78.06 42.72 75.2367 44.5567 71.8533 46.6734C65.7133 50.48 65.68 50.5167 66.2433 51.2934C66.95 52.21 66.2433 52.5267 74.2133 47.5534L80 43.85V41.0634L73.5433 37.0767C70.0533 34.89 67.02 33.1267 66.8433 33.09ZM13.2267 33.48C13.05 33.48 10.0167 35.28 6.52667 37.43L0 41.4167V44.2034L6.49 48.26C10.09 50.48 13.1233 52.3167 13.2633 52.3167C13.4033 52.3167 13.6867 51.9967 13.97 51.61C14.3933 50.94 14.0367 50.6567 8.07667 46.8834C2.4 43.32 1.8 42.8267 2.36667 42.44C2.72 42.1934 5.4 40.5334 8.29333 38.7367C14.89 34.68 14.5367 34.96 14.0067 34.1134C13.7967 33.7634 13.44 33.4467 13.23 33.48H13.2267ZM42.1733 33.5567C41.2 33.55 39.1067 35.0334 32.84 40.15C32.57 40.7934 32.5467 41.2367 32.67 41.5234C32.75 41.72 32.8967 41.8567 33.1 41.9567C33.3 42.0567 33.56 42.1167 33.8467 42.14C34.4167 42.19 35.09 42.1 35.6333 41.9934L36 41.91C36.1255 41.7417 36.2903 41.6067 36.48 41.5167C36.8667 41.3034 38.49 39.8234 40.1133 38.2367C42.97 35.3434 43.64 34.0367 42.4767 33.6134C42.3812 33.5754 42.2794 33.5562 42.1767 33.5567H42.1733ZM49.4933 35.5667C48.6367 35.59 47.0933 36.5834 44.45 38.6934C43.1233 39.77 42.2833 40.35 41.8333 40.47L40.0867 41.85C39.43 43.05 39.3333 43.7934 39.5067 44.2034C39.55 44.3045 39.613 44.3961 39.692 44.4727C39.7709 44.5494 39.8643 44.6096 39.9667 44.65C40.2213 44.7506 40.4929 44.8015 40.7667 44.8C41.4209 44.7931 42.0713 44.6978 42.7 44.5167C43.0277 44.4288 43.3513 44.3265 43.67 44.21L43.7667 44.17L43.9433 44.0767C44.2767 43.6467 45.0433 42.8367 46.0033 41.9034C49.0367 38.9767 50.5867 36.8967 50.27 36.12C50.1267 35.7434 49.88 35.5534 49.4933 35.5667ZM41.4133 39.1667C41.1667 39.1934 40.6133 39.62 39.6167 40.4934C38.1767 41.7667 36.6067 42.5 36.0633 42.1734C35.9371 42.2019 35.8104 42.2286 35.6833 42.2534C35.13 42.3634 34.44 42.4534 33.8233 42.4034C33.5328 42.3858 33.248 42.3146 32.9833 42.1934C32.7337 42.0792 32.5345 41.8777 32.4233 41.6267C32.3 41.3267 32.3 40.9534 32.44 40.4767L30.2733 42.2567L25.37 46.3134V52.89L41.4367 40.2334C41.4335 40.0948 41.4515 39.9565 41.49 39.8234C41.6133 39.3767 41.6067 39.15 41.4133 39.17V39.1667ZM48.3267 41.2967C48.0833 41.2967 47.6767 41.64 47.0267 42.33C46.1433 43.2734 44.7533 44.1867 44.0167 44.3734L43.9033 44.4334C43.7824 44.4833 43.6601 44.53 43.5367 44.5734C43.3367 44.64 43.0767 44.72 42.7767 44.8C42.1767 44.9634 41.43 45.1134 40.7633 45.0967C40.449 45.0963 40.1378 45.0352 39.8467 44.9167C39.5723 44.8036 39.3524 44.5885 39.2333 44.3167C39.04 43.8534 39.1167 43.2034 39.54 42.28L25.3667 53.4434V57.46H31.5933L44.8 47.0867C45.1433 46.7067 45.66 46.1867 46.3567 45.5367C48.2233 43.8067 48.6467 43.21 48.6467 42.3267C48.6467 41.64 48.57 41.2934 48.3267 41.2934V41.2967ZM51.47 47.7967L50.34 48.9234C49.7067 49.5234 48.5767 50.2634 47.8033 50.58L47.65 50.6467L47.64 50.6634L47.6067 50.6967C47.5767 50.72 47.5633 50.7234 47.54 50.7334C47.2313 50.8502 46.9177 50.9536 46.6 51.0434C45.8937 51.249 45.1673 51.3775 44.4333 51.4267C44.0863 51.449 43.7379 51.4186 43.4 51.3367C43.1067 51.2721 42.8478 51.1011 42.6733 50.8567C42.5133 50.61 42.4667 50.28 42.5567 49.8734C42.6283 49.5838 42.7346 49.304 42.8733 49.04L32.2167 57.46H46.39L48.0833 55.52C50.41 52.8067 51.47 50.8667 51.47 49.2067V47.7967Z'
          fill='black'
        />
      </svg>
    );
  }
  if (name === "git") {
    return (
      <svg
        width='80'
        height='80'
        viewBox='0 0 80 80'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <g clipPath='url(#clip0_14_18)'>
          <path
            d='M78.4867 36.4334L43.5567 1.50677C41.5433 -0.503232 38.2833 -0.503232 36.2633 1.50677L29.0267 8.75677L38.2267 17.9568C40.3767 17.2401 42.8233 17.7234 44.5233 19.4268C46.2433 21.1434 46.7167 23.6201 45.9833 25.7601L54.8433 34.6268C56.9933 33.8834 59.4667 34.3668 61.1767 36.0768C63.58 38.4768 63.58 42.3568 61.1767 44.7568C58.78 47.1534 54.9067 47.1534 52.51 44.7568C50.7133 42.9534 50.2633 40.3001 51.1633 38.1034L42.8667 29.8501V51.6001C43.4533 51.8868 44.0067 52.2768 44.4933 52.7601C46.87 55.1634 46.87 59.0368 44.4933 61.4268C42.0967 63.8301 38.1967 63.8301 35.7967 61.4268C33.4 59.0301 33.4 55.1634 35.7967 52.7668C36.4033 52.1668 37.0867 51.7134 37.8133 51.4134V29.4501C37.09 29.1468 36.4 28.7101 35.8133 28.1134C33.9967 26.2968 33.56 23.6401 34.4933 21.4168L25.4533 12.3334L1.5 36.2701C-0.5 38.2868 -0.5 41.5501 1.5 43.5668L36.4333 78.4901C38.4467 80.5034 41.7067 80.5034 43.72 78.4901L78.4867 43.7234C80.5033 41.7134 80.5033 38.4501 78.4867 36.4334Z'
            fill='black'
          />
        </g>
        <defs>
          <clipPath id='clip0_14_18'>
            <rect width='80' height='80' fill='white' />
          </clipPath>
        </defs>
      </svg>
    );
  }

  return (
    <svg
      width='80'
      height='80'
      viewBox='0 0 80 80'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M5 0H75L68.6333 71.8767L39.9233 80L11.3767 71.8733L5 0ZM28.4367 32.5L27.6633 23.44L61.1933 23.45L61.96 14.71L18.04 14.7L20.3667 41.4H50.7867L49.7 52.82L40 55.5L30.15 52.8L29.5233 45.7667H20.8267L21.9267 59.67L40 64.5033L57.93 59.6933L60.41 32.5033H28.4367V32.5Z'
        fill='black'
      />
    </svg>
  );
}

export default Svg;

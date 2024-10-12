'use client';

import Image from "next/image";
import Link from "next/link";

const Profile = () => {
    return (
        <>
            <div className="mx-auto max-w-242.5">
                <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                    <div className="relative z-20 h-35 md:h-65">
                        <Image
                            src={"https://raw.githubusercontent.com/letdummy/dump/refs/heads/master/header/header.png"}
                            alt="profile cover"
                            className="h-full w-full rounded-tl-sm rounded-tr-sm object-cover object-center"
                            width={970}
                            height={260}
                        />
                    </div>
                    <div className="px-4 pb-6 text-center lg:pb-8 xl:pb-11.5">
                        <div className="relative z-30 mx-auto -mt-22 h-30 w-full max-w-30 rounded-full bg-white/20 p-1 backdrop-blur sm:h-44 sm:max-w-44 sm:p-3">
                            <div className="relative drop-shadow-2">
                                <Image
                                    src={"https://avatars.githubusercontent.com/u/71609913?v=4"}
                                    width={160}
                                    height={160}
                                    style={{
                                        borderRadius: "50%",
                                    }}
                                    alt="profile"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <h3 className="mb-1.5 text-2xl font-semibold text-black dark:text-white">
                                Agus Ardiansyah
                            </h3>
                            <p className="font-medium">Designer Translator</p>

                            <div className="mx-auto max-w-180 mt-5">
                                <h4 className="font-semibold text-black dark:text-white">
                                    About Me
                                </h4>
                                <p className="mt-4.5">
                                Junior designer translator (Frontend Engineer). Understand how things work, not just as black-box magic. 
                                Seeking opportunities to apply software engineering skills to solve real-world problems. 
                                In my Software Engineering journey, I have competed in over 5 competitions for fun and built numerous projects. 
                                Also, letdummy is my alias name in the tech industry.
                                </p>
                            </div>

                            <div className="mt-6.5">
                                <h4 className="mb-3.5 font-medium text-black dark:text-white">
                                    Let&apos;s Connect
                                </h4>
                                <div className="flex items-center justify-center gap-3.5">
                                    <Link
                                        href="https://dub.sh/linkedin-ags"
                                        target="_blank"
                                        className="hover:text-primary"
                                        aria-label="social-icon"
                                    >
                                        <svg
                                            className="fill-current"
                                            width="23"
                                            height="22"
                                            viewBox="0 0 23 22"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clipPath="url(#clip0_30_974)">
                                                <path
                                                    d="M6.69548 4.58327C6.69523 5.0695 6.50185 5.53572 6.15786 5.87937C5.81387 6.22301 5.34746 6.41593 4.86123 6.41569C4.375 6.41545 3.90878 6.22206 3.56513 5.87807C3.22149 5.53408 3.02857 5.06767 3.02881 4.58144C3.02905 4.09521 3.22244 3.62899 3.56643 3.28535C3.91042 2.9417 4.37683 2.74878 4.86306 2.74902C5.34929 2.74927 5.81551 2.94265 6.15915 3.28664C6.5028 3.63063 6.69572 4.09704 6.69548 4.58327ZM6.75048 7.77327H3.08381V19.2499H6.75048V7.77327ZM12.5438 7.77327H8.89548V19.2499H12.5071V13.2274C12.5071 9.87244 16.8796 9.56077 16.8796 13.2274V19.2499H20.5005V11.9808C20.5005 6.32494 14.0288 6.53577 12.5071 9.31327L12.5438 7.77327Z"
                                                    fill=""
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_30_974">
                                                    <rect
                                                        width="22"
                                                        height="22"
                                                        fill="white"
                                                        transform="translate(0.333862)"
                                                    />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </Link>
                                    <Link
                                        href="https://letdummy.vercel.app/"
                                        target="_blank"
                                        className="hover:text-primary"
                                        aria-label="social-icon"
                                    >
                                        <svg
                                            className="fill-current"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clipPath="url(#clip0_30_978)">
                                            <path 
                                            d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z" 
                                            fill=""
                                            >
                                            </path>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_30_978">
                                                    <rect width="22" height="22" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </Link>
                                    <Link
                                        href="https://dub.sh/github-ags"
                                        target="_blank"
                                        className="hover:text-primary"
                                        aria-label="social-icon"
                                    >
                                        <svg
                                            className="fill-current"
                                            width="23"
                                            height="22"
                                            viewBox="0 0 23 22"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clipPath="url(#clip0_30_982)">
                                                <path
                                                    d="M11.6662 1.83337C6.6016 1.83337 2.49951 5.93546 2.49951 11C2.49847 12.9244 3.10343 14.8002 4.22854 16.3613C5.35366 17.9225 6.94181 19.0897 8.76768 19.6974C9.22602 19.7771 9.39743 19.5021 9.39743 19.261C9.39743 19.0438 9.38552 18.3224 9.38552 17.5542C7.08285 17.9786 6.48701 16.9932 6.30368 16.4771C6.2001 16.2131 5.75368 15.4 5.3641 15.1819C5.04326 15.0105 4.58493 14.586 5.35218 14.575C6.07451 14.5631 6.58968 15.2396 6.76201 15.5146C7.58701 16.9006 8.90518 16.511 9.43135 16.2709C9.51202 15.675 9.75218 15.2745 10.0162 15.0453C7.9766 14.8161 5.84535 14.025 5.84535 10.5188C5.84535 9.52146 6.2001 8.69737 6.78493 8.05479C6.69326 7.82562 6.37243 6.88604 6.8766 5.62562C6.8766 5.62562 7.64385 5.38546 9.39743 6.56612C10.1437 6.35901 10.9147 6.25477 11.6891 6.25629C12.4683 6.25629 13.2474 6.35896 13.9808 6.56521C15.7334 5.37354 16.5016 5.62654 16.5016 5.62654C17.0058 6.88696 16.6849 7.82654 16.5933 8.05571C17.1772 8.69737 17.5329 9.51046 17.5329 10.5188C17.5329 14.037 15.3906 14.8161 13.351 15.0453C13.6829 15.3313 13.9698 15.8813 13.9698 16.7411C13.9698 17.9667 13.9579 18.9521 13.9579 19.262C13.9579 19.5021 14.1302 19.7881 14.5885 19.6965C16.4081 19.0821 17.9893 17.9126 19.1094 16.3526C20.2296 14.7926 20.8323 12.9206 20.8329 11C20.8329 5.93546 16.7308 1.83337 11.6662 1.83337Z"
                                                    fill=""
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_30_982">
                                                    <rect
                                                        width="22"
                                                        height="22"
                                                        fill="white"
                                                        transform="translate(0.666138)"
                                                    />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;

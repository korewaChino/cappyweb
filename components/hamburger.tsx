import Link from "next/link";
import { useState } from "react";

import { PageMapItem, Folder } from "nextra";
export default function HamburgerMenu({ pageMap }: { pageMap: PageMapItem[] }) {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
    <div 
      style={
        {
            opacity: showMenu ? "1" : "0",
        }
      }
      className="fixed pointer-events-none transition-opacity backdrop-blur bg-black/40 w-[100dvw] h-[100dvh] left-0 top-0">

    </div>
    
    <button 
        onClick={() => {setShowMenu(!showMenu)}}
        className="flex gap-2 shadow-xl z-20 fixed right-12 bottom-12 lg:bottom-auto lg:top-12 items-center px-3 py-3 bg-slate-200 rounded-lg"
        ><ListIcon></ListIcon>
        </button>
      <div 
      style={
        {
            transform: showMenu ? "translateX(3rem)" : "translateX(calc(100% + 6rem))",
        }
      }
      className="p-4 right-24 fixed rounded-xl shadow-xl z-10 bg-white gap-1 w-3/4 lg:w-[36rem] top-12 lg:top-32 transition-transform ease-ease duration-250">
        
        <div
       className="flex flex-col max-h-[36rem] overflow-auto">
            
            {pageMap.sort((a, b) => SortArticles(a, b)).map((item) => {
            return ParseIntoFolder(item);
            })}
        </div>
      </div>
    </>
  );
}

function ParseIntoFolder(item: PageMapItem, showDate: boolean = false) {
  if (item.kind === "MdxPage") {
    return (
      <Link className="mb-2 no-underline" key={item.route} href={item.route}>
        <span className="flex">
            <RChevron></RChevron>
            {showDate ? <>{item.frontMatter.date} - </> : null}
            {item.frontMatter.title}
        </span>
      </Link>
    );
  }
  if (item.kind === "Folder") {
    return (
      <>
        <span className="font-display text-xl">{routeToTitle(item.route)}</span>

        <div className="flex flex-col gap-1 pl-4 leading-6">
          {item.children
            .sort((a, b) => SortArticles(a, b))
            .map((child) => {
              return ParseIntoFolder(child, true);
            })}
        </div>
      </>
    );
  }
  return null;
}

function routeToTitle(route: string) {
  switch (route) {
    case "/blog":
      return "Blog Posts";
    case "/tidbids":
      return "Tidbids";
    case "/misc":
      return "Miscellaneous";
    default:
      return "";
  }
}

function ListIcon(){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
        </svg>

    )
}

function RChevron(){
    return (<div className="w-6">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
        </div>
    )
}

function SortArticles(a, b) {
    if (a.kind === "Folder" && b.kind !== "Folder") return -1;
    if (b.kind === "Folder" && a.kind !== "Folder") return 1;
    if (a.kind === "Folder" && b.kind === "Folder") return 0;
    if (a.kind === "MdxPage" && b.kind === "MdxPage") {
      if (new Date(a.frontMatter.date) < new Date(b.frontMatter.date))
        return 1;
      if (new Date(a.frontMatter.date) > new Date(b.frontMatter.date))
        return -1;
      return 0;
    }
  }
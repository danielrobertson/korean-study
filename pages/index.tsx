import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import classname from "classnames";
import ChevronUp from "components/chevron-up.svg";
import ChevronDown from "components/chevron-down.svg";

type ContentItem = {
  base: string;
  definition: string;
  conjugations?: string[];
};

const Section: React.FC<{ title: string; contentList: ContentItem[] }> = ({
  title,
  contentList,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleHeaderClick = () => setIsCollapsed(!isCollapsed);

  return (
    <div>
      <h2
        className="flex items-center text-xl text-center py-1 bg-slate-100"
        onClick={handleHeaderClick}
      >
        {isCollapsed ? (
          <ChevronDown className="h-5 w-5 ml-3" />
        ) : (
          <ChevronUp className="h-5 w-5 ml-3" />
        )}
        <div className="mx-auto -pl-5 flex items-center gap-1">
          <span>{title}</span>{" "}
          <span className="text-slate-400 text-base">
            ({contentList.length})
          </span>
        </div>
      </h2>
      <ul className={classname({ hidden: isCollapsed })}>
        {contentList.map((contentItem) => (
          <li
            className="flex flex-col p-2 m-2 border-b"
            key={contentItem.definition}
          >
            <div className="flex justify-between">
              <h3 className="font-bold ">{contentItem.base}</h3>
              <div className="">{contentItem.definition}</div>
            </div>
            {contentItem.conjugations && (
              <div className="flex text-slate-500 gap-0.5 text-xs">
                {contentItem.conjugations.join(", ")}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Home: NextPage = () => {
  const [verbs, setVerbs] = useState([
    { base: "가다", definition: "Go", conjugations: ["가요", "갔어요"] },
    {
      base: "있다",
      definition: "Have/exist",
      conjugations: ["있어요", "있었어요"],
    },
    { base: "없다", definition: "Not have/exist", conjugations: [] },
  ]);

  const [adjectives, setAdjectives] = useState([
    { base: "크다", definition: "Big", conjugations: ["커요", "컸어요"] },
  ]);

  const [nouns, setNouns] = useState([
    { base: "약국", definition: "Pharmacy" },
    { base: "기숙사", definition: "Dorm" },
    { base: "학교", definition: "School" },
    { base: "코끼리 ", definition: "Elephant" },
    { base: "편지 ", definition: "Letter" },
    { base: "지갑 ", definition: "Wallet" },
    { base: "안경 ", definition: "Glasses" },
  ]);

  const [particles, setParticles] = useState([
    { base: "~이/가", definition: "Subject marker" },
    { base: "~은/는", definition: "Emphasized subject marker" },
    { base: "~을/를", definition: "Object marker of transitive verb" },
  ]);

  const [grammar, setGrammar] = useState([
    { base: "~이에요/예요", definition: "person/object is" },
  ]);

  const [searchValue, setSearchValue] = useState();

  return (
    <div className="min-h-screen">
      <Head>
        <title>🇰🇷📚</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className="flex w-full flex-col sm:mx-auto sm:w-96">
        <form className="m-2">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
          >
            Search
          </label>
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="p-2 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300"
              placeholder="Search..."
              required
              onChange={(e) => console.log(e.target.value)}
              value={searchValue}
            />
          </div>
        </form>

        <div className="flex flex-col gap-1">
          <Section title="Verbs 🏃‍♀️" contentList={verbs} />
          <Section title="Nouns 🚙" contentList={nouns} />
          <Section title="Adjectives 🎨" contentList={adjectives} />
          <Section title="Particles" contentList={particles} />
          <Section title="Grammar 👩‍🏫" contentList={grammar} />
          <Section title="Sentence builder" contentList={[]} />
        </div>
      </main>
    </div>
  );
};

export default Home;

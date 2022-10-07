import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import classname from "classnames";

const Home: NextPage = () => {
  const [verbs, setVerbs] = useState([
    { base: "가다", definition: "Go", conjugations: ["가요", "갔어요"] },
    { base: "크다", definition: "Big", conjugations: ["커요", "컸어요"] },
    { base: "있다", definition: "Have/exist", conjugations: ["", ""] },
    { base: "없다", definition: "Not have/exist", conjugations: ["", ""] },
  ]);

  const [nounds, setNouns] = useState([
    { base: "약국", definition: "Pharmacy" },
    { base: "기숙사", definition: "Dorm" },
    { base: "학교", definition: "School" },
  ]);

  const [isVerbsCollapsed, setIsVerbsCollapsed] = useState(false);
  const [isNounsCollapsed, setIsNounsCollapsed] = useState(false);
  const [isGrammarCollapsed, setIsGrammarCollapsed] = useState(false);
  const [isSentenceBuilderCollapsed, setIsSentenceBuilderCollapsed] =
    useState(false);

  const [searchValue, setSearchValue] = useState();

  const handleVerbsSectionClick = () => setIsVerbsCollapsed(!isVerbsCollapsed);
  const handleNounsSectionClick = () => setIsNounsCollapsed(!isNounsCollapsed);
  const handleGrammarSectionClick = () =>
    setIsGrammarCollapsed(!isGrammarCollapsed);
  const handleSentenceBuilderSectionClick = () =>
    setIsSentenceBuilderCollapsed(!isSentenceBuilderCollapsed);

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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
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

        <div className="flex flex-col">
          <h2
            className="text-xl text-center py-1 bg-slate-100"
            onClick={handleVerbsSectionClick}
          >
            Verbs
          </h2>
          <ul className={classname({ hidden: isVerbsCollapsed })}>
            {verbs.map((verb) => (
              <li
                className="flex flex-col p-2 m-2 border-b"
                key={verb.definition}
              >
                <div className="flex justify-between">
                  <h3 className="font-bold ">{verb.base}</h3>
                  <div className="">{verb.definition}</div>
                </div>
                <div className="flex text-slate-500 gap-0.5 text-xs">
                  {verb.conjugations.map((conjugation) => (
                    <div className="">{conjugation}</div>
                  ))}
                </div>
              </li>
            ))}
          </ul>

          <h2
            className="text-xl text-center py-1 bg-slate-100"
            onClick={handleNounsSectionClick}
          >
            Nouns
          </h2>

          <h2
            className="text-xl text-center py-1 bg-slate-100"
            onClick={handleGrammarSectionClick}
          >
            Grammar
          </h2>

          <h2
            className="text-xl text-center py-1 bg-slate-100"
            onClick={handleSentenceBuilderSectionClick}
          >
            Sentence builder
          </h2>
        </div>
      </main>
    </div>
  );
};

export default Home;

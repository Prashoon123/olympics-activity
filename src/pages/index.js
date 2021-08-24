import Head from "next/head";
import Image from "next/image";
import DisclosureComponent from "../components/DisclosureComponent";

export default function Home() {
  const members = [
    "Monish",
    "Dhruv",
    "Shreeya",
    "Ishika",
    "Ayaan",
    "Nishtha",
    "Latif",
    "Anushka",
    "Rudra",
    "Jayasvi",
    "Drishti",
    "Avanish",
  ];

  const shuffledMembers = members.sort(() => Math.random() - 0.5);

  console.log(shuffledMembers.length);

  return (
    <div className="flex justify-center flex-col h-auto">
      <Head>
        <title>National Sports Day Activity</title>
        <meta
          name="description"
          content="This website will give you some information about Olympics!"
        />
        <link rel="icon" href="/running.png" />
      </Head>

      <header className="flex flex-col items-center w-52 self-center mt-5 rounded-lg justify-center box">
        <h1 className="text-xl self-center text-gray-900 font-semibold mb-3 pt-2">
          National Sports Day
        </h1>

        <div className="pt-4 animate-bounce">
          <Image
            loading="lazy"
            src="/running.png"
            height="70"
            width="70"
            objectFit="contain"
          />
        </div>
      </header>

      <main className="mt-8 sm:w-3/4 md:w-1/2 lg:w-1/3 self-center p-10 rounded-lg mx-2 box shadow-lg">
        <DisclosureComponent
          question="What is the importance of sports?"
          answer="Playing sport, interacting with others, and being part of a team enables people to develop numerous skills. These skills are essential skills that are important throughout our lives. Sport teaches us development. It helps us learn things such as resilience, discipline, leadership, accountability, respect and patience."
          qClassName="text-base"
        />

        <DisclosureComponent
          qClassName="text-base"
          className="mt-6"
          question="Importance of sporting infrastructure in India?"
          answer="Sporting infrastructure helps promote sports and gives aspiring athletes a place to improve their skills. Sporting infrastructure will also be essential for India when we want to host a big sporting tournament."
        />
      </main>

      <footer className="box rounded-lg p-6 w-52 self-center mt-8 mb-5">
        <p className="text-gray-900 font-bold">Made by:</p>
        <p className="text-base font-semibold text-gray-900">★ Prashoon</p>
        {shuffledMembers.map((name) => (
          <p key={name} className="text-base font-semibold text-gray-900">
            ★ {name}
          </p>
        ))}
      </footer>
    </div>
  );
}

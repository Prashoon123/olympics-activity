import Head from "next/head";
import Image from "next/image";
import DisclosureComponent from "../components/DisclosureComponent";

export default function Home() {
  return (
    <div className="flex justify-center flex-col h-auto">
      <Head>
        <title>Olympics Activity</title>
        <meta
          name="description"
          content="This website will give you some information about Olympics!"
        />
        <link rel="icon" href="/olympics-logo.png" />
      </Head>

      <header className="bg-gray-200 flex flex-col items-center w-52 self-center mt-5 rounded-lg justify-center">
        <h1 className="text-xl self-center text-purple-900 font-semibold">
          Olympics
        </h1>

        <Image
          loading="lazy"
          src="/olympics-logo.png"
          height="100"
          width="100"
          objectFit="contain"
        />
      </header>

      <main className="mt-8 sm:w-3/4 md:w-1/2 lg:w-1/3 self-center bg-gray-200 p-10 rounded-lg mx-2">
        <DisclosureComponent
          question="How many times has the Olympics been cancelled or postponed? ❌"
          answer="Since the opening of the first modern Olympic Games in 1896, the international sports competition has only been canceled three times: once during World War I (1916) and twice during World War II (1940, 1944). Until the 2020 COVID-19 outbreak, which postponed the Summer Olympic games for a year, the Olympics weathered politically charged boycotts and two separate terrorist attacks without being cancelled or postponed during peacetime."
        />

        <DisclosureComponent
          className="mt-6"
          question="Which sports are affected the most when Olympics gets cancelled or postponed?"
          answer="No sports are affected particularly when the Olympics are cancelled or postponed. But the athletes suffer because they have to wait for more time, but for some athletes it is a blessing in disguise as they get extra time to train."
        />
      </main>

      <footer className="bg-gray-200 rounded-lg p-6 w-52 self-center mt-8 mb-5">
        <p className="text-purple-900 font-bold">Made by:</p>
        {["Prashoon (C)", "Monish", "Hussain", "Nirav", "Kanika"].map(
          (name) => (
            <p key={name} className="text-base font-semibold text-purple-900">
              ★ {name}
            </p>
          )
        )}
      </footer>
    </div>
  );
}

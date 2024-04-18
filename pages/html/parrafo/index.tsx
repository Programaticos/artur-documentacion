import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function HtmlParrafo() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Параграф</h1>
        <p>
          {" "}
          Для разметки параграфов предназначен тег &lt;p&gt; (от английского
          «paragraph»). По умолчанию абзацы начинаются с новой строки и
          отделяются от остального контента отступами сверху и снизу. Так что,
          если нужно отделить один блок текста от другого, верным решением будет
          заключить их в теги &lt;/p&gt;
        </p>
        <div>
          <a href="./">Назад</a>
        </div>
      </main>
    </>
  );
}
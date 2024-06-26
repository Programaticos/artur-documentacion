import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function HtmlA() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Ссылки</h1>
        <p>
          Ссылки нужны для того, чтобы связывать между собой веб-страницы в сети
          интернет. Ссылки бывают внутренние, ведущие на другие разделы внутри
          сайта, внешние, ведущие на другие сайты в сети интернет. Бывают
          ссылки-закладки или якоря, ведущие к определенному месту на
          веб-странице. Рассмотрим все варианты на примерах.
        </p>
        <p>
          &lt;a href="http://google.com"&gt;Ссылка ведущая на сайт
          google.com&lt;/a&gt;
        </p>
        <div>
          <a href="./">Назад</a>
        </div>
      </main>
    </>
  );
}

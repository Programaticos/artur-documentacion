import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function HtmlEncabezado() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Заголовки</h1>
        <p>
          В языке HTML для выделения заголовков предусмотрено целое семейство
          тегов: от &lt;h1&gt; до &lt;h6&gt; . Тег &lt;h1&gt; обозначает самый
          важный заголовок (заголовок верхнего уровня), а тег &lt;h6&gt;
          обозначает подзаголовок самого нижнего уровня.
        </p>

        <h1>Заголовок h1</h1>
        <h2>Заголовок h2</h2>
        <h3>Заголовок h3</h3>
        <h4>Заголовок h4</h4>
        <h5>Заголовок h5</h5>
        <h6>Заголовок h6</h6>
        <div>
          <a href="./">Назад</a>
        </div>
      </main>
    </>
  );
}

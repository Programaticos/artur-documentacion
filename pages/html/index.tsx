import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function HtmlHtml() {
  return (
    <>
      <Head>
        <title>html/index.tsx</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>My profesional document</h1>
        <div>
          <a href="/html/encabezado">Encabezado</a>
        </div>
        <div>
          <a href="/html/parrafo">Parrafo</a>
        </div>
        <div>
          <a href="/html/listas">Listas</a>
        </div>
        <div>
          <a href="/html/img">Изображения</a>
        </div>
        <div>
          <a href="/html/a" title="комментарий ссылки">
            {" "}
            Ссылки
          </a>
        </div>
        <div>
          <a href="/html/button">Кнопки</a>
        </div>
        <div>
          <a href="/html/table">Таблицы</a>
        </div>
        <div>
          <a href="/html/form">Формы</a>
        </div>
        <div>
          <a href="./">Назад</a>
        </div>
      </main>
    </>
  );
}

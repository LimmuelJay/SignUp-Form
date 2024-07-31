import Head from "next/head";
import Main from "@/pages/main/main"
import IndexStyled from "@/pages/index.styled"
import GlobalStyles from "@/styles/global";

export default function Home() {
  return (
    <IndexStyled>
      <GlobalStyles />
      <Head>
        <title>Frontend Mentor | Intro component with signup form</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/images/favicon-32x32.png" />
      </Head>
      <Main />
    </IndexStyled>
  );
}

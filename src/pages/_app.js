import "@/styles/globals.css";
import { useEffect } from "react";
import AOS from "aos";
import Navbar from "../../components/navbar";
import BackToTop from "../../components/backToTop";
import Action from "../../components/action";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const use = async () => {
      (await import("tw-elements")).default;
    };
    use();
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <Navbar />
      <BackToTop />
      <Action />
      <Component {...pageProps} />
    </>
  );
}

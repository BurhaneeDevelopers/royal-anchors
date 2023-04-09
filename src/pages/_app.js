import "@/styles/globals.css";
import { useEffect } from "react";
import AOS from "aos";
import Navbar from "../../Components/navbar";
import BackToTop from "../../Components/backToTop";
import Action from "../../Components/action";

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

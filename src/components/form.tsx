import { useEffect } from "react";

const TypeformEmbed = () => {
  useEffect(() => {
    // Load Typeform embed script only on the client side
    const script = document.createElement("script");
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <a href="https://forms.gle/31VNU81kGjyihDvK9">Click here to join the commnity.</a>
  );
};

export default TypeformEmbed;

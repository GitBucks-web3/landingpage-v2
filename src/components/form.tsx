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
  <iframe  src="https://docs.google.com/forms/d/e/1FAIpQLSeS48pxhY2NQVwG06bMR2unVhd-Xlr9evlmE0ktpML257f_5w/viewform?embedded=true" width="400" height="600" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
  );
};

export default TypeformEmbed;

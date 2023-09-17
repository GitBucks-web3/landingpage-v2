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
    <div
      data-tf-widget="rcOqCfOo"
      data-tf-opacity="100"
      data-tf-iframe-props="title=Onboarding Tree"
      data-tf-transitive-search-params
      data-tf-medium="snippet"
      style={{ width: "100%", height: "500px" }}
    ></div>
  );
};

export default TypeformEmbed;

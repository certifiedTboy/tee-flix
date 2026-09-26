import { useEffect } from "react";

type PageMetadataProps = {
  title: string;
  description: string;
};

const metaTags = [
  {
    selector: 'meta[name="description"]',
    attribute: "name",
    value: "description",
  },
  {
    selector: 'meta[property="og:title"]',
    attribute: "property",
    value: "og:title",
  },
  {
    selector: 'meta[property="og:description"]',
    attribute: "property",
    value: "og:description",
  },
  {
    selector: 'meta[name="twitter:title"]',
    attribute: "name",
    value: "twitter:title",
  },
  {
    selector: 'meta[name="twitter:description"]',
    attribute: "name",
    value: "twitter:description",
  },
] as const;

function PageMetadata({ title, description }: PageMetadataProps) {
  useEffect(() => {
    document.title = title;

    for (const { selector, attribute, value } of metaTags) {
      let meta = document.head.querySelector<HTMLMetaElement>(selector);

      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attribute, value);
        document.head.appendChild(meta);
      }

      meta.content =
        attribute === "name" && value === "description"
          ? description
          : value.endsWith("title")
            ? title
            : description;
    }
  }, [description, title]);

  return null;
}

export default PageMetadata;

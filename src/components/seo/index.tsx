import React from "react";

type Props = {
  description: string;
  title: string;
  children?: React.ReactNode;
};

export const Seo = ({ description, title, children }: Props) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content="<http://www.my-website.com/>" />
      <meta property="og:image" content="<http://my-website.com/image.jpg>" />
      <meta property="og:description" content="WebSite Description" />
      <meta property="og:site_name" content="Site Name, i.e. Moz" />

      <meta property="fb:app_id" content="Application ID" />
      <meta property="fb:admins" content="Facebook numeric ID" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@publisher_handle" />
      <meta name="twitter:title" content="Page Title" />
      <meta name="twitter:description" content="Page description less than 200 characters" />
      <meta name="twitter:creator" content="@author_handle" />
      <meta name="twitter:image" content="<http://www.example.com/image.jpg>" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
      {children}
    </>
  );
};

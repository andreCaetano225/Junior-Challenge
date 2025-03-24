import ContentLoader from "react-content-loader";

export const CustomContentLoader = () => {
  return (
     <ContentLoader
      speed={1}
      width={1000} 
      height={400} 
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
        <rect x="0" y="0" rx="10" ry="10" width="300" height="500" />

    </ContentLoader>
  );
};

